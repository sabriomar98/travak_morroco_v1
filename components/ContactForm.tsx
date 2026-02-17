"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

interface ContactFormData {
  name: string
  email: string
  phone?: string
  tour: string
  travelers: string
  date: string
  message: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Form data:", data)
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <Card className="max-w-3xl mx-auto border-none shadow-xl">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone (Optional)
              </label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="+212 123 456 789"
              />
            </div>

            {/* Tour Interest */}
            <div>
              <label htmlFor="tour" className="block text-sm font-medium text-gray-700 mb-2">
                Tour Interest *
              </label>
              <select
                id="tour"
                {...register("tour", { required: "Please select a tour" })}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
              >
                <option value="">Select a tour...</option>
                <option value="sahara-desert">Sahara Desert Adventure</option>
                <option value="imperial-cities">Imperial Cities Tour</option>
                <option value="marrakech-atlas">Marrakech & Atlas Mountains</option>
                <option value="chefchaouen">Chefchaouen Blue City</option>
                <option value="coastal">Coastal Tour</option>
                <option value="grand-morocco">Grand Morocco Tour</option>
              </select>
              {errors.tour && (
                <p className="text-red-500 text-sm mt-1">{errors.tour.message}</p>
              )}
            </div>

            {/* Number of Travelers */}
            <div>
              <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Travelers *
              </label>
              <Input
                id="travelers"
                type="number"
                min="1"
                {...register("travelers", {
                  required: "Number of travelers is required",
                  min: { value: 1, message: "At least 1 traveler required" },
                })}
                placeholder="2"
              />
              {errors.travelers && (
                <p className="text-red-500 text-sm mt-1">{errors.travelers.message}</p>
              )}
            </div>

            {/* Preferred Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date *
              </label>
              <Input
                id="date"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                {...register("date", { required: "Date is required" })}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message / Special Requests
            </label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Tell us about any special requirements or questions..."
              rows={4}
            />
          </div>

          {/* Success Message */}
          {isSuccess && (
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              Thank you! Your booking request has been submitted successfully. We&apos;ll contact you soon.
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Booking Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
