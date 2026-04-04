"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-triggered reveal animations for a section.
 *
 * - The section itself fades in and slides up
 * - Elements with class `.reveal` animate in with stagger
 * - Elements with class `.reveal-card` get a slightly different treatment (scale + fade)
 *
 * Returns a ref to attach to the section container.
 */
export function useScrollReveal(opts?: {
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      // Section header elements (.reveal) — fade-in-up with stagger
      const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
      if (reveals.length > 0) {
        gsap.from(reveals, {
          y: opts?.y ?? 40,
          opacity: 0,
          duration: opts?.duration ?? 0.8,
          ease: "power3.out",
          stagger: opts?.stagger ?? 0.1,
          scrollTrigger: {
            trigger: ref.current,
            start: opts?.start ?? "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // Cards (.reveal-card) — scale up + fade with stagger
      const cards = gsap.utils.toArray<HTMLElement>(".reveal-card");
      if (cards.length > 0) {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          scale: 0.97,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [opts?.y, opts?.duration, opts?.stagger, opts?.start]);

  return ref;
}

/**
 * Batch reveal — for long lists of items that should animate
 * individually as they enter the viewport.
 */
export function useScrollBatch(selector: string) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.set(selector, { opacity: 0, y: 30 });

      ScrollTrigger.batch(selector, {
        interval: 0.1,
        start: "top 90%",
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.08,
            overwrite: true,
          });
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [selector]);

  return ref;
}
