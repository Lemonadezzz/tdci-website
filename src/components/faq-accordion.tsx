// src/components/faq-accordion.tsx
"use client";

import { useState } from "react";

import type { FaqItem } from "@/lib/aboutData";

function PlusIcon() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="about-faq-list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="about-faq-item" data-open={isOpen}>
            <button
              type="button"
              className="about-faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="about-faq-question-text">{item.question}</span>
              <span className="about-faq-icon">
                <PlusIcon />
              </span>
            </button>
            <div className="about-faq-answer">
              <div className="about-faq-answer-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
