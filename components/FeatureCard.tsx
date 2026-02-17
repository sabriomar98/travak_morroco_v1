"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  Users, 
  Award, 
  Home as HomeIcon, 
  Calendar, 
  HeadphonesIcon, 
  BadgeCheck 
} from "lucide-react"

interface FeatureCardProps {
  iconName: string
  title: string
  description: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Award,
  HomeIcon,
  Calendar,
  HeadphonesIcon,
  BadgeCheck,
}

export function FeatureCard({ iconName, title, description }: FeatureCardProps) {
  const Icon = iconMap[iconName]

  if (!Icon) {
    return null
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="text-center p-6 h-full hover:shadow-xl transition-shadow border-none shadow-md">
        <CardContent className="pt-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#EA580C] to-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-[#1E293B]">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
