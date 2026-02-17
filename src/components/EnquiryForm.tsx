"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitEnquiryForm } from "@/lib/actions";
import { getDictionary, Locale } from "@/lib/i18n";

interface EnquiryFormProps {
  locale: Locale;
}

export function EnquiryForm({ locale }: EnquiryFormProps) {
  const dict = getDictionary(locale);
  const searchParams = useSearchParams();
  const tourSlug = searchParams?.get("tour") || "";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const result = await submitEnquiryForm(formData);

    setIsSubmitting(false);
    setSubmitStatus(result.success ? "success" : "error");

    if (result.success) {
      const form = document.getElementById("enquiry-form") as HTMLFormElement;
      form?.reset();

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  }

  return (
    <form id="enquiry-form" action={handleSubmit} className="space-y-6">
      <input type="hidden" name="tourSlug" value={tourSlug} />

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
        <label htmlFor="numberOfPeople" className="block text-sm font-medium mb-2">
          {locale === "fr" ? "Nombre de personnes" : "Number of people"}
        </label>
        <Input
          id="numberOfPeople"
          name="numberOfPeople"
          type="number"
          min="1"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
          {locale === "fr" ? "Date préférée" : "Preferred date"}
        </label>
        <Input
          id="preferredDate"
          name="preferredDate"
          type="date"
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
          placeholder={
            locale === "fr"
              ? "Décrivez votre demande..."
              : "Describe your request..."
          }
        />
      </div>

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
          {locale === "fr"
            ? "Demande envoyée avec succès ! Nous vous contacterons bientôt."
            : "Request sent successfully! We will contact you soon."}
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800" role="alert">
          {dict.contact.error}
        </div>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting
          ? locale === "fr"
            ? "Envoi..."
            : "Sending..."
          : locale === "fr"
          ? "Envoyer la demande"
          : "Send request"}
      </Button>
    </form>
  );
}
