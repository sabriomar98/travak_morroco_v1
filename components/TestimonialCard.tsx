"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  country: string
  rating: number
  review: string
}

export function TestimonialCard({ name, country, rating, review }: TestimonialCardProps) {
  return (
    <Card className="h-full hover:shadow-xl transition-shadow border-none shadow-md">
      <CardContent className="p-6">
        {/* Rating */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "fill-[#F59E0B] text-[#F59E0B]" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Review */}
        <p className="text-gray-700 mb-4 italic">&quot;{review}&quot;</p>

        {/* Author */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-[#EA580C] to-[#F59E0B] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-[#1E293B]">{name}</p>
            <p className="text-sm text-gray-600">{country}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
