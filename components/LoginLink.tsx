"use client";

import type { ReactNode, MouseEvent } from "react";

type LoginLinkProps = {
  children: ReactNode;
  className?: string;
};

export default function LoginLink({
  children,
  className,
}: LoginLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    window.location.href = "/login";
  }

  return (
    <a
      href="/login"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
