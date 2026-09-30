"use client";

import { useEffect, useState } from "react";

type DeviceMode = "current" | "mobile" | "tablet";

const DEVICE_MODES: {
  value: DeviceMode;
  label: string;
}[] = [
  {
    value: "current",
    label: "Current screen size",
  },
  {
    value: "mobile",
    label: "Mobile",
  },
  {
    value: "tablet",
    label: "Tablet",
  },
];

export default function DevicePreview() {
  const [deviceMode, setDeviceMode] =
    useState<DeviceMode>("current");

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {
    const savedMode =
      localStorage.getItem(
        "chainlab-device-mode"
      ) as DeviceMode | null;

    const validModes: DeviceMode[] = [
      "current",
      "mobile",
      "tablet",
    ];

    const initialMode: DeviceMode =
      savedMode &&
      validModes.includes(savedMode)
        ? savedMode
        : "current";

    setDeviceMode(initialMode);

    document.documentElement.dataset.devicePreview =
      initialMode;
  }, []);

  function changeDeviceMode(mode: DeviceMode) {
    setDeviceMode(mode);

    document.documentElement.dataset.devicePreview =
      mode;

    localStorage.setItem(
      "chainlab-device-mode",
      mode
    );

    setMenuOpen(false);
  }

  return (
    <div className="device-preview-control">

      <button
        type="button"
        className="device-preview-button"
        onClick={() =>
          setMenuOpen(
            (previous) => !previous
          )
        }
        aria-label="Select device preview"
        aria-expanded={menuOpen}
        aria-haspopup="true"
      >

        {/* DEVICE ICON */}

        <svg
          className="device-preview-icon"
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="5"
            y="2.5"
            width="14"
            height="19"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M9 18.5H15"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>


        <span className="device-preview-button-text">
          Device
        </span>


        <span
          className="device-preview-chevron"
          aria-hidden="true"
        >
          {menuOpen ? "⌃" : "⌄"}
        </span>

      </button>


      {menuOpen && (
        <div
          className="device-preview-menu"
          role="menu"
          aria-label="Device preview options"
        >

          {DEVICE_MODES.map((mode) => (
            <button
              key={mode.value}
              type="button"
              role="menuitemradio"
              aria-checked={
                deviceMode === mode.value
              }
              className={`device-preview-option ${
                deviceMode === mode.value
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                changeDeviceMode(mode.value)
              }
            >

              <span>
                {mode.label}
              </span>

              {deviceMode === mode.value && (
                <span
                  className="device-preview-check"
                  aria-hidden="true"
                >
                  ✓
                </span>
              )}

            </button>
          ))}

        </div>
      )}

    </div>
  );
}