"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const activateAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach((element) => {
          element.dataset.revealed = "true";
        });
    };

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      activateAll();
      return;
    }

    const observed = new WeakSet<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target instanceof HTMLElement) {
              entry.target.dataset.revealed = "true";
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const observeRevealElements = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => {
        if (observed.has(element)) {
          return;
        }

        observed.add(element);
        observer.observe(element);
      });
    };

    observeRevealElements();

    const mutationObserver = new MutationObserver(() => {
      observeRevealElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
