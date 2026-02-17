"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

interface TourCardProps {
  title: string
  description: string
  duration: string
  price: string
  image: string
}

export function TourCard({ title, description, duration, price, image }: TourCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className="overflow-hidden group h-full border-none shadow-lg hover:shadow-2xl transition-all"
        role="article"
        aria-label={`${title} tour package`}
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-[#1E293B]">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-700">
              <Clock className="h-4 w-4 mr-1 text-[#EA580C]" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center font-semibold text-[#EA580C]">
              <DollarSign className="h-4 w-4" />
              <span>{price}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
