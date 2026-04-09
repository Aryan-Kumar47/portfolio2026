"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { useTransitionRouter } from "../hooks/useTransitionRouter";
import { useCursor } from "../hooks/useCustomCursor";
import { useCursorContext } from "../context/CursorContext";
import { usePathname } from "next/navigation";

type Props = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
    customText?: string;
    ref?: (el: HTMLAnchorElement | null) => void;
  };

export default function TransitionLink({
  href,
  customText,
  children,
  onClick,
  ref,
  ...rest
}: Props) {
  const { pushWithTransition } = useTransitionRouter();
  const { enter, leave } = useCursorContext();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow ctrl/cmd click (open in new tab)
    if (rest.target === "_blank") return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    e.preventDefault();

    if (pathname === href) return;

    if (onClick) {
      onClick(e);
    }

    pushWithTransition(href.toString());
  };

  return (
    <Link
      href={href}
      {...rest}
      onClick={handleClick}
      onMouseEnter={() => enter(customText)}
      onMouseLeave={leave}
      ref={ref}
    >
      {children}
    </Link>
  );
}
