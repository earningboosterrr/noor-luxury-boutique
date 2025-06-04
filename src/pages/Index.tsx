
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Gem, Crown, Star, Shield, Award, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1920&auto=format&fit=crop')",
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in-up">
            <span className="bg-luxury-gradient bg-clip-text text-transparent">
              Luxury Redefined
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-grey mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Gold, Diamonds, and Rare Treasures
          </p>
          <p className="text-lg text-muted-grey mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Dubai's premier destination for luxury jewellery trading. Discover exquisite collections or transform your treasures into value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/collection">
              <Button className="luxury-button text-jet-black font-semibold px-8 py-3 text-lg w-full sm:w-auto">
                View Collection
              </Button>
            </Link>
            <Link to="/sell">
              <Button variant="outline" className="border-luxury-gold-bright text-luxury-gold-bright hover:bg-luxury-gold-bright hover:text-jet-black px-8 py-3 text-lg w-full sm:w-auto transition-all duration-300">
                Sell Your Jewellery
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-jet-black px-8 py-3 text-lg w-full sm:w-auto transition-all duration-300">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-jet-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              <span className="bg-luxury-gradient bg-clip-text text-transparent">
                Why Choose NOOR ALBAHJAH
              </span>
            </h2>
            <p className="text-xl text-muted-grey max-w-3xl mx-auto">
              Excellence in every facet, trust in every transaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="luxury-card p-8 text-center golden-hover">
              <Crown className="h-12 w-12 text-luxury-gold-bright mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-luxury-gold-bright">Premium Quality</h3>
              <p className="text-muted-grey">
                Curated selection of the finest gold, diamonds, pearls, and precious metals from trusted sources worldwide.
              </p>
            </div>

            <div className="luxury-card p-8 text-center golden-hover">
              <Shield className="h-12 w-12 text-luxury-gold-bright mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-luxury-gold-bright">Licensed & Trusted</h3>
              <p className="text-muted-grey">
                Fully licensed trading company (License No: 1476612) operating with complete transparency and integrity in Dubai.
              </p>
            </div>

            <div className="luxury-card p-8 text-center golden-hover">
              <Award className="h-12 w-12 text-luxury-gold-bright mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-luxury-gold-bright">Expert Evaluation</h3>
              <p className="text-muted-grey">
                Professional assessment and fair pricing for your valuable jewellery with decades of market expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-jet-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                <span className="bg-luxury-gradient bg-clip-text text-transparent">
                  Our Services
                </span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Gem className="h-6 w-6 text-luxury-gold-bright mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-playfair font-semibold mb-2">Premium Collections</h3>
                    <p className="text-muted-grey">Exclusive gold, diamond, pearl, and precious metal collections for discerning clients.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-6 w-6 text-luxury-gold-bright mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-playfair font-semibold mb-2">Jewellery Trading</h3>
                    <p className="text-muted-grey">Buy and sell luxury jewellery with confidence, backed by professional expertise.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="h-6 w-6 text-luxury-gold-bright mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-playfair font-semibold mb-2">Expert Consultation</h3>
                    <p className="text-muted-grey">Personalized guidance for investments, valuations, and jewellery selection.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800&auto=format&fit=crop" 
                alt="Luxury jewellery consultation"
                className="rounded-lg shadow-2xl golden-hover"
              />
              <div className="absolute inset-0 bg-luxury-gradient opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-gold-dark via-luxury-gold-base to-luxury-gold-bright">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-jet-black mb-6">
            Ready to Discover Your Perfect Treasure?
          </h2>
          <p className="text-xl text-jet-black/80 mb-8">
            Visit our showroom in Dubai or get in touch for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-jet-black text-luxury-gold-bright hover:bg-gray-900 px-8 py-3 text-lg w-full sm:w-auto transition-all duration-300">
                Visit Our Showroom
              </Button>
            </Link>
            <a href="https://wa.me/971521933360" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 text-lg w-full sm:w-auto transition-all duration-300">
                WhatsApp Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
