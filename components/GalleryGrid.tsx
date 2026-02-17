"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2070",
    alt: "Sahara Desert",
    category: "Landscapes",
  },
  {
    src: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2074",
    alt: "Marrakech Souks",
    category: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
    alt: "Chefchaouen Blue City",
    category: "Landscapes",
  },
  {
    src: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=2070",
    alt: "Moroccan Cuisine",
    category: "Food",
  },
  {
    src: "https://images.unsplash.com/photo-1548986490-cd7a60f50f1d?q=80&w=2074",
    alt: "Atlas Mountains",
    category: "Landscapes",
  },
  {
    src: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?q=80&w=2070",
    alt: "Traditional Moroccan Tea",
    category: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1577016567250-ac5cca5d5aba?q=80&w=2070",
    alt: "Camel Trek",
    category: "Activities",
  },
  {
    src: "https://images.unsplash.com/photo-1575551656974-03e4288ae6ea?q=80&w=2069",
    alt: "Hassan II Mosque",
    category: "Culture",
  },
]

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:brightness-75 transition-all"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
