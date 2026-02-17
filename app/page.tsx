import { Hero } from "@/components/Hero"
import { TourCard } from "@/components/TourCard"
import { FeatureCard } from "@/components/FeatureCard"
import { TestimonialCard } from "@/components/TestimonialCard"
import { ContactForm } from "@/components/ContactForm"
import { GalleryGrid } from "@/components/GalleryGrid"

const tours = [
  {
    title: "Sahara Desert Adventure",
    description: "Experience the magic of the Sahara with camel treks, desert camps, and stunning sunsets over the dunes.",
    duration: "3-4 Days",
    price: "From €350",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021",
  },
  {
    title: "Imperial Cities Tour",
    description: "Discover Morocco's four imperial cities: Marrakech, Fes, Meknes, and Rabat with their rich history.",
    duration: "7 Days",
    price: "From €650",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2074",
  },
  {
    title: "Marrakech & Atlas Mountains",
    description: "Explore vibrant Marrakech and trek through the beautiful Atlas Mountains with Berber villages.",
    duration: "5 Days",
    price: "From €450",
    image: "https://images.unsplash.com/photo-1548986490-cd7a60f50f1d?q=80&w=2074",
  },
  {
    title: "Chefchaouen Blue City",
    description: "Visit the stunning blue city of Chefchaouen nestled in the Rif Mountains.",
    duration: "2 Days",
    price: "From €250",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
  },
  {
    title: "Coastal Tour: Essaouira & Agadir",
    description: "Relax on Morocco's beautiful Atlantic coast with beach towns, seafood, and ocean views.",
    duration: "4 Days",
    price: "From €400",
    image: "https://images.unsplash.com/photo-1545158535-c3e2585c8f6e?q=80&w=2070",
  },
  {
    title: "Grand Morocco Tour",
    description: "The ultimate Morocco experience covering all major cities, desert, mountains, and coast.",
    duration: "10-12 Days",
    price: "From €1200",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2070",
  },
]

const features = [
  {
    iconName: "Users",
    title: "Expert Local Guides",
    description: "Our experienced guides share authentic insights and hidden gems of Morocco.",
  },
  {
    iconName: "Award",
    title: "Authentic Experiences",
    description: "Immerse yourself in genuine Moroccan culture, cuisine, and traditions.",
  },
  {
    iconName: "HomeIcon",
    title: "Comfortable Accommodations",
    description: "Stay in carefully selected riads, hotels, and desert camps for your comfort.",
  },
  {
    iconName: "Calendar",
    title: "Flexible Itineraries",
    description: "Customize your tour to match your interests, pace, and travel style.",
  },
  {
    iconName: "HeadphonesIcon",
    title: "24/7 Support",
    description: "Our team is always available to assist you during your journey.",
  },
  {
    iconName: "BadgeCheck",
    title: "Best Price Guarantee",
    description: "Quality tours at competitive prices with transparent, all-inclusive packages.",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "United States",
    rating: 5,
    review: "An incredible journey through Morocco! Our guide was knowledgeable and the desert camp experience was unforgettable. Highly recommend Travel Morocco!",
  },
  {
    name: "Marco Rossi",
    country: "Italy",
    rating: 5,
    review: "The Imperial Cities tour exceeded all expectations. The accommodations were excellent and we learned so much about Moroccan culture and history.",
  },
  {
    name: "Emma Williams",
    country: "United Kingdom",
    rating: 5,
    review: "Absolutely amazing experience! From the bustling souks of Marrakech to the serene Sahara, every moment was magical. Thank you for the memories!",
  },
  {
    name: "David Chen",
    country: "Australia",
    rating: 5,
    review: "Professional, organized, and truly authentic. The Atlas Mountains trek was breathtaking. This is the best way to experience Morocco!",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Popular Tours Section */}
      <section id="tours" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
              Popular Tours
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our carefully crafted tours designed to showcase the best of Morocco
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <TourCard key={index} {...tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-[#FEF3C7] to-[#FEFCE8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service and unforgettable experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="destinations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get inspired by the beauty and diversity of Morocco
            </p>
          </div>
          <GalleryGrid />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#0C4A6E]/10 to-[#1E40AF]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read reviews from travelers who experienced Morocco with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
              Book Your Adventure
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to explore Morocco? Fill out the form and we&apos;ll get back to you within 24 hours
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
