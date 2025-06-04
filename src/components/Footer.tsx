
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-jet-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-playfair font-bold bg-luxury-gradient bg-clip-text text-transparent mb-4">
              NOOR ALBAHJAH JEWELLERY TRADING L.L.C
            </div>
            <p className="text-muted-grey mb-4 leading-relaxed">
              Premium jewellery trading company specializing in gold, silver, diamonds, pearls, and precious metals. Licensed and trusted in Dubai since establishment.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-luxury-gold-bright font-semibold">License No:</span>
              <span className="text-muted-grey">1476612</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-semibold text-luxury-gold-bright mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-grey hover:text-luxury-gold-bright transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-grey hover:text-luxury-gold-bright transition-colors">About Us</Link></li>
              <li><Link to="/collection" className="text-muted-grey hover:text-luxury-gold-bright transition-colors">Collection</Link></li>
              <li><Link to="/sell" className="text-muted-grey hover:text-luxury-gold-bright transition-colors">Sell Your Jewellery</Link></li>
              <li><Link to="/contact" className="text-muted-grey hover:text-luxury-gold-bright transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-playfair font-semibold text-luxury-gold-bright mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-luxury-gold-bright mt-0.5 flex-shrink-0" />
                <span className="text-muted-grey text-sm">
                  Office B-126, Al Quoz 3,<br />
                  Bur Dubai, UAE
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-luxury-gold-bright flex-shrink-0" />
                <a href="tel:+971521933360" className="text-muted-grey hover:text-luxury-gold-bright transition-colors">
                  +971 52 1933360
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-luxury-gold-bright flex-shrink-0" />
                <span className="text-muted-grey">info@noorjewellery.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <a 
                  href="https://wa.me/971521933360" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 transition-colors"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-muted-grey text-sm">
            © {new Date().getFullYear()} NOOR ALBAHJAH JEWELLERY TRADING L.L.C. All rights reserved. 
            Licensed Company No: 1476612 | Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  );
};
