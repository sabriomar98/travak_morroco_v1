import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-[#F59E0B] mb-4">
              Travel Morocco
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Discover the magic of Morocco with authentic travel experiences,
              expert local guides, and unforgettable adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#tours" className="text-gray-300 hover:text-[#F59E0B] transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="text-gray-300 hover:text-[#F59E0B] transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-[#F59E0B] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-[#F59E0B] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@travelmorocco.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+212 123 456 789</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Marrakech, Morocco</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#334155] p-2 rounded-full hover:bg-[#F59E0B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#334155] p-2 rounded-full hover:bg-[#F59E0B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Travel Morocco. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
