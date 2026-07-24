"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const destinations = [
  { label: "Inventory", href: "/vehicles" },
  { label: "Sourcing", href: "/sourcing" },
  { label: "Sell Your Car", href: "/sell-your-car" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const menu = document.getElementById(menuId);
      const focusableElements = menu?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [isOpen, menuId]);

  return (
    <>
      <button
        className="site-menu-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen(true)}
      >
        MENU
      </button>

      {isOpen && (
        <div
          className="site-menu-overlay"
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="site-menu-top">
            <button
              ref={closeButtonRef}
              className="site-menu-close"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              CLOSE
            </button>
          </div>

          <nav className="site-menu-navigation" aria-label="Primary navigation">
            {destinations.map((destination) => (
              <Link
                href={destination.href}
                key={destination.href}
                onClick={() => setIsOpen(false)}
              >
                {destination.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
