"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PhoneInput, {
  COUNTRIES,
  Country,
  validatePhoneNumber,
} from "./phone-input";

const TOPICS = [
  "Shelving",
  "Racking",
  "Store Equipment",
  "Fresh Concepts & Beverages Displays",
  "Pop Ups & Kiosks",
  "Cabinets & Counters",
  "Product Display & Signages",
] as const;

const TIMELINES = ["ASAP", "1-2 months", "3 months"] as const;

function getInitialTopics(topicParam: string | null): string[] {
  if (!topicParam) return [];
  const clean = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const target = clean(topicParam);
  const match = TOPICS.find((t) => {
    const c = clean(t);
    return c === target || (target.length > 4 && (c.includes(target) || target.includes(c)));
  });
  return match ? [match] : [];
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const currentTopicParam = searchParams.get("topic");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState<Country>(COUNTRIES[0]);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [company, setCompany] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>(() =>
    getInitialTopics(currentTopicParam),
  );
  const [prevTopicParam, setPrevTopicParam] = useState(currentTopicParam);

  if (prevTopicParam !== currentTopicParam) {
    setPrevTopicParam(currentTopicParam);
    const newTopics = getInitialTopics(currentTopicParam);
    if (newTopics.length > 0) {
      setSelectedTopics((prev) => Array.from(new Set([...prev, ...newTopics])));
    }
  }

  const [timeline, setTimeline] = useState("");
  const [details, setDetails] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handlePhoneChange(newPhone: string) {
    setPhone(newPhone);
    if (phoneError) {
      const validation = validatePhoneNumber(newPhone, country);
      setPhoneError(validation.error);
    }
  }

  function handleCountryChange(newCountry: Country) {
    setCountry(newCountry);
    if (phone.trim()) {
      const validation = validatePhoneNumber(phone, newCountry);
      setPhoneError(validation.error);
    }
  }

  function handlePhoneBlur() {
    if (phone.trim()) {
      const validation = validatePhoneNumber(phone, country);
      setPhoneError(validation.error);
    }
  }

  function toggleTopic(topic: string) {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validate phone number
    const phoneValidation = validatePhoneNumber(phone, country);
    if (!phoneValidation.isValid) {
      setPhoneError(phoneValidation.error);
      setErrorMessage(phoneValidation.error || "Please enter a valid phone number.");
      setStatus("error");
      return;
    }

    if (!agreed) {
      setErrorMessage("Please agree to the privacy policy consent to proceed.");
      setStatus("error");
      return;
    }

    if (selectedTopics.length === 0) {
      setErrorMessage("Please select at least one topic under 'What can we help you with?'.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later or email us directly.");
    }
  }

  return (
    <div className="contact2_form-container">
      {status === "success" ? (
        <div className="form_message-success-wrapper is-alternate" role="alert">
          <div className="form_message-success-2 is-alternate">
            <div className="success-text">Message received. We&apos;ll be in touch soon.</div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact2_form" noValidate={false}>
          {status === "error" && errorMessage && (
            <div className="form_message-error-wrapper is-alternate" role="alert">
              <div className="form_message-error-2 is-alternate">
                <div className="error-text">{errorMessage}</div>
              </div>
            </div>
          )}

          {/* First & Last Name */}
          <div className="form_field-2col is-alternate">
            <div className="form_field-wrapper is-alternate">
              <label htmlFor="First-Name" className="form_field-label is-alternate">
                First name *
              </label>
              <input
                id="First-Name"
                name="First-Name"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder=""
                className="form_input is-alternate w-input"
              />
            </div>

            <div className="form_field-wrapper is-alternate">
              <label htmlFor="Last-Name" className="form_field-label is-alternate">
                Last name *
              </label>
              <input
                id="Last-Name"
                name="Last-Name"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder=""
                className="form_input is-alternate w-input"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="form_field-2col is-alternate">
            <div className="form_field-wrapper is-alternate">
              <label htmlFor="Email" className="form_field-label is-alternate">
                Email *
              </label>
              <input
                id="Email"
                name="Email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="form_input is-alternate w-input"
              />
            </div>

            <div className="form_field-wrapper is-alternate">
              <label htmlFor="Phone-No" className="form_field-label is-alternate">
                Phone number *
              </label>
              <PhoneInput
                id="Phone-No"
                name="Phone-No"
                value={phone}
                onChange={handlePhoneChange}
                country={country}
                onSelectCountry={handleCountryChange}
                error={phoneError}
                onBlur={handlePhoneBlur}
                required
              />
            </div>
          </div>

          {/* Company */}
          <div className="form_field-wrapper is-alternate">
            <label htmlFor="Company" className="form_field-label is-alternate">
              Your Company/Brand Name *
            </label>
            <input
              id="Company"
              name="Company"
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder=""
              className="form_input is-alternate w-input"
            />
          </div>

          {/* What can we help you with? */}
          <div className="form_field-wrapper is-alternate">
            <span className="form_field-label is-alternate">
              What can we help you with? *
            </span>
            <div className="topic_chips-wrapper" role="group" aria-label="Product categories">
              {TOPICS.map((topic) => {
                const isSelected = selectedTopics.includes(topic);
                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => toggleTopic(topic)}
                    className={`topic_chip-button ${isSelected ? "is-selected" : ""}`}
                    aria-pressed={isSelected}
                  >
                    <span className="topic_chip-indicator">{isSelected ? "✓" : "+"}</span>
                    <span>{topic}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Timeline */}
          <div className="form_field-wrapper is-alternate">
            <label htmlFor="Project-Timeline" className="form_field-label is-alternate">
              Project Timeline? *
            </label>
            <select
              id="Project-Timeline"
              name="Project-Timeline"
              required
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="form_input is-select-input is-alternate w-select"
            >
              <option value="" disabled>
                Select timeline...
              </option>
              {TIMELINES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Additional Info */}
          <div className="form_field-wrapper is-alternate">
            <label htmlFor="Additional-Info" className="form_field-label is-alternate">
              Please tell us about your Project *
            </label>
            <textarea
              id="Additional-Info"
              name="Additional-Info"
              required
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Tell us what you need..."
              className="form_input is-text-area is-alternate w-input"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="form_checkbox-wrapper is-alternate">
            <label className="w-checkbox form_checkbox is-alternate">
              <input
                type="checkbox"
                name="Agreed-to-Terms"
                id="Agreed-to-Terms"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="form_checkbox-input"
              />
              <span className="form_checkbox-label text-size-small is-alternate">
                By submitting this form, you consent to Target Display Co., Inc. collecting your contact details solely to respond to your project inquiry in accordance to our{" "}
                <Link href="/privacy-policy" target="_blank" className="text-style-link">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="button w-button is-fullwidth"
          >
            {status === "submitting" ? "Please wait..." : "Send"}
          </button>
        </form>
      )}
    </div>
  );
}
