"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const STATS = [
  { value: 300, label: "Clients Served" },
  { value: 10000, label: "Projects Completed" },
  { value: 500, label: "Store Rollouts Delivered" },
];

const DURATION = 1000;

function formatNumber(value: number) {
  return value.toLocaleString("en-US");
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [values, setValues] = useState<number[]>(() => STATS.map(() => 0));

  // Start counting once the section scrolls into view.
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    let frame = 0;

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / DURATION, 1);
      setValues(STATS.map((stat) => Math.floor(progress * stat.value)));

      if (progress < 1) {
        frame = requestAnimationFrame(update);
      }
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <section className="section">
      <div className="container">
        <div className="section__inner">
          <div className="heading-block">
            <div className="heading-block__inner">
              <h2 className="h2">Numbers that speak for themselves</h2>
              <p className="body-lg">
                Trusted by retailers, brands, and businesses across the
                Philippines.
              </p>
            </div>
          </div>

          <div className="stats" ref={ref}>
            {STATS.map((stat, index) => (
              <div key={stat.label} className="stat">
                <div className="stat__value">
                  <span className="stat__number">
                    {formatNumber(values[index])}
                  </span>
                  <span>+</span>
                </div>
                <h3 className="stat__label">{stat.label}</h3>
              </div>
            ))}
          </div>

          <div className="btn-group btn-group--center mt-20">
            <Link href="/projects" className="btn btn--outline">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
