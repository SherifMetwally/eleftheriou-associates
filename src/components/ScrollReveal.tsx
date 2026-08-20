"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = "[data-reveal], [data-stagger]";

function inViewport(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return r.bottom > 0 && r.top < vh;
}

/**
 * Adds `is-in` to marked blocks as they scroll into view. The matching hidden
 * state lives in globals.css behind `.js-anim`. Watches the DOM so client
 * updates (filters, carousels) are not left at opacity 0.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const seen = new WeakSet<Element>();

    function show(el: HTMLElement) {
      el.classList.add("is-in");
    }

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    function watch(el: HTMLElement) {
      if (seen.has(el) || el.classList.contains("is-in")) return;
      seen.add(el);
      if (inViewport(el)) {
        show(el);
        return;
      }
      observer.observe(el);
    }

    function scan() {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach(watch);
    }

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
