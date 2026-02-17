"use server";

import { contactSchema, enquirySchema } from "./validations";

export async function submitContactForm(formData: FormData) {
  try {
    const data = contactSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || undefined,
      message: formData.get("message"),
      honeypot: formData.get("honeypot"),
    });

    // In a real app, you would send an email or save to database here
    // For now, we'll just simulate success
    console.log("Contact form submitted:", data);

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "Invalid form data" };
  }
}

export async function submitEnquiryForm(formData: FormData) {
  try {
    const data = enquirySchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || undefined,
      tourSlug: formData.get("tourSlug") || undefined,
      numberOfPeople: formData.get("numberOfPeople") || undefined,
      preferredDate: formData.get("preferredDate") || undefined,
      message: formData.get("message"),
      honeypot: formData.get("honeypot"),
    });

    // In a real app, you would send an email or save to database here
    console.log("Enquiry form submitted:", data);

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Enquiry form error:", error);
    return { success: false, error: "Invalid form data" };
  }
}
