
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/collection", label: "Collection" },
    { path: "/sell", label: "Sell Your Jewellery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-jet-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-playfair font-bold bg-luxury-gradient bg-clip-text text-transparent">
              NOOR ALBAHJAH
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-300 hover:text-luxury-gold-bright ${
                  isActive(link.path) ? "text-luxury-gold-bright" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+971521933360"
              className="flex items-center space-x-2 text-luxury-gold-bright hover:text-luxury-gold-base transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">+971 52 1933360</span>
            </a>
            <a
              href="https://wa.me/971521933360"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-luxury-gold-bright"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-jet-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-luxury-gold-bright ${
                    isActive(link.path) ? "text-luxury-gold-bright" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href="tel:+971521933360"
                  className="flex items-center space-x-2 text-luxury-gold-bright"
                >
                  <Phone className="h-4 w-4" />
                  <span>+971 52 1933360</span>
                </a>
                <a
                  href="https://wa.me/971521933360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
