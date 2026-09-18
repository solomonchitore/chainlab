"use client";

import { useEffect, useState } from "react";

type DeviceMode = "current" | "mobile" | "tablet";

export default function DevicePreview() {
  const [mode, setMode] = useState<DeviceMode>("current");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem(
      "chainlab-device-mode"
    ) as DeviceMode | null;

    if (
      savedMode === "current" ||
      savedMode === "mobile" ||
      savedMode === "tablet"
    ) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-device-preview",
      mode
    );

    localStorage.setItem(
      "chainlab-device-mode",
      mode
    );
  }, [mode]);

  function changeDevice(newMode: DeviceMode) {
    setMode(newMode);
    setOpen(false);
  }

  return (
    <div className="device-preview-control">
      <button
        type="button"
        className={`device-preview-button ${
          open ? "device-preview-button-open" : ""
        }`}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span className="device-preview-icon">
          ▣
        </span>

        <span>DEVICE</span>

        <span className="device-preview-chevron">
          {open ? "▲" : "▼"}
        </span>
      </button>

      {open && (
        <div
          className="device-preview-menu"
          role="menu"
        >
          <button
            type="button"
            className={`device-preview-option ${
              mode === "current"
                ? "device-preview-option-active"
                : ""
            }`}
            onClick={() =>
              changeDevice("current")
            }
            role="menuitem"
          >
            <span className="device-option-icon">
              ▣
            </span>

            <span>Current screen size</span>
          </button>

          <button
            type="button"
            className={`device-preview-option ${
              mode === "mobile"
                ? "device-preview-option-active"
                : ""
            }`}
            onClick={() =>
              changeDevice("mobile")
            }
            role="menuitem"
          >
            <span className="device-option-icon">
              ▯
            </span>

            <span>Mobile</span>
          </button>

          <button
            type="button"
            className={`device-preview-option ${
              mode === "tablet"
                ? "device-preview-option-active"
                : ""
            }`}
            onClick={() =>
              changeDevice("tablet")
            }
            role="menuitem"
          >
            <span className="device-option-icon">
              ▭
            </span>

            <span>Tablet</span>
          </button>
        </div>
      )}
    </div>
  );
}