"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/lib/actions";
import { getDictionary, Locale } from "@/lib/i18n";

interface ContactFormProps {
  locale: Locale;
}

export function ContactForm({ locale }: ContactFormProps) {
  const dict = getDictionary(locale);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const result = await submitContactForm(formData);

    setIsSubmitting(false);
    setSubmitStatus(result.success ? "success" : "error");

    if (result.success) {
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form?.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  }

  return (
    <form id="contact-form" action={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {dict.contact.name} <span className="text-red-500">*</span>
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          disabled={isSubmitting}
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {dict.contact.email} <span className="text-red-500">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          disabled={isSubmitting}
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          {dict.contact.phone}
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {dict.contact.message} <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={6}
          disabled={isSubmitting}
          aria-required="true"
        />
      </div>

      {/* Honeypot field */}
      <input
        type="text"
        name="honeypot"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800" role="alert">
          {dict.contact.success}
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800" role="alert">
          {dict.contact.error}
        </div>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (locale === "fr" ? "Envoi..." : "Sending...") : dict.contact.submit}
      </Button>
    </form>
  );
}
