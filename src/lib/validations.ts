import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message too short"),
  honeypot: z.string().max(0), // Anti-spam
});

export const enquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  tourSlug: z.string().optional(),
  numberOfPeople: z.string().optional(),
  preferredDate: z.string().optional(),
  message: z.string().min(10, "Message too short"),
  honeypot: z.string().max(0), // Anti-spam
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type EnquiryFormData = z.infer<typeof enquirySchema>;
