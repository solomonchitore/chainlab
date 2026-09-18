"use client";

import {
  ReactNode,
  useEffect,
  useState,
} from "react";

import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({
  children,
}: PageTransitionProps) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");

      if (!link) {
        return;
      }

      const href = link.getAttribute("href");

      if (!href) {
        return;
      }

      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        link.target === "_blank" ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (!href.startsWith("/")) {
        return;
      }

      setLoading(true);
    };

    document.addEventListener(
      "click",
      handleLinkClick
    );

    return () => {
      document.removeEventListener(
        "click",
        handleLinkClick
      );
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [pathname, loading]);

  return (
    <>
      <div
        className={`page-transition ${
          loading
            ? "page-transition-active"
            : ""
        }`}
        aria-hidden={!loading}
      >
        <div className="page-transition-content">
          <div className="page-transition-brand">
            [CHAINLAB]
          </div>

          <div className="page-transition-line">
            <span />
          </div>

          <div className="page-transition-label">
            LOADING EXPERIENCE
          </div>
        </div>
      </div>

      {children}
    </>
  );
}