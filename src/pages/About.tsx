
import { Shield, MapPin, Award, Users, Clock, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-jet-black via-gray-900 to-jet-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              <span className="bg-luxury-gradient bg-clip-text text-transparent">
                About NOOR ALBAHJAH
              </span>
            </h1>
            <p className="text-xl text-muted-grey max-w-3xl mx-auto leading-relaxed">
              A legacy of trust, excellence, and unparalleled expertise in luxury jewellery trading, 
              established in the heart of Dubai's prestigious trading district.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-jet-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold mb-6 text-luxury-gold-bright">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-grey leading-relaxed">
                <p>
                  NOOR ALBAHJAH JEWELLERY TRADING L.L.C stands as a beacon of excellence in Dubai's 
                  prestigious jewellery trading landscape. Founded with a vision to bridge the gap 
                  between luxury and accessibility, we have built our reputation on trust, transparency, 
                  and uncompromising quality.
                </p>
                <p>
                  Our journey began with a simple belief: every piece of jewellery tells a story, 
                  and every client deserves exceptional service. Today, we are proud to be a fully 
                  licensed trading company (License No: 1476612) operating from the heart of Dubai's 
                  commercial district.
                </p>
                <p>
                  Specializing in gold, silver, diamonds, pearls, and precious metals, including 
                  luxury second-hand jewellery, we have cultivated relationships with discerning 
                  clients who value authenticity, craftsmanship, and fair dealing.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
                alt="Luxury jewellery craftsmanship"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-luxury-gradient opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-jet-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              <span className="bg-luxury-gradient bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-muted-grey max-w-3xl mx-auto">
              The principles that guide every interaction and transaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="luxury-card p-8 text-center golden-hover">
              <Shield className="h-12 w-12 text-luxury-gold-bright mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-luxury-gold-bright">Trust & Integrity</h3>
              <p className="text-muted-grey">
                Every transaction is built on transparency, honesty, and ethical business practices.
              </p>
            </div>

            <div className="luxury-card p-8 text-center golden-hover">
              <Award className="h-12 w-12 text-luxury-gold-bright mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-luxury-gold-bright">Excellence</h3>
              <p className="text-muted-grey">
                We maintain the highest standards in quality, service, and professional expertise.
              </p>
            </div>

            <div className="luxury-card p-8 text-center golden-hover">
              <Users className="h-12 w-12 text-luxury-gold-bright mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-luxury-gold-bright">Client-Centric</h3>
              <p className="text-muted-grey">
                Your satisfaction and trust are our primary goals in every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & License Section */}
      <section className="py-20 bg-jet-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold mb-6 text-luxury-gold-bright">
                Licensed & Located
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-luxury-gold-bright mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-playfair font-semibold mb-2">Fully Licensed</h3>
                    <p className="text-muted-grey">
                      Operating under License No: 1476612, ensuring complete legal compliance and customer protection.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-luxury-gold-bright mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-playfair font-semibold mb-2">Prime Location</h3>
                    <p className="text-muted-grey">
                      Strategically located at Office B-126, Al Quoz 3, Bur Dubai - in the heart of Dubai's commercial district.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-luxury-gold-bright mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-playfair font-semibold mb-2">Global Trade Experience</h3>
                    <p className="text-muted-grey">
                      Years of experience in international jewellery trading, with deep knowledge of global markets and trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="luxury-card p-8">
              <h3 className="text-2xl font-playfair font-bold text-luxury-gold-bright mb-6">Company Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-luxury-gold-bright font-semibold">Company Name:</span>
                  <p className="text-muted-grey">NOOR ALBAHJAH JEWELLERY TRADING L.L.C</p>
                </div>
                <div>
                  <span className="text-luxury-gold-bright font-semibold">License Number:</span>
                  <p className="text-muted-grey">1476612</p>
                </div>
                <div>
                  <span className="text-luxury-gold-bright font-semibold">Address:</span>
                  <p className="text-muted-grey">Office B-126, Al Quoz 3, Bur Dubai, UAE</p>
                </div>
                <div>
                  <span className="text-luxury-gold-bright font-semibold">Specialization:</span>
                  <p className="text-muted-grey">Gold, Silver, Diamonds, Pearls, Precious Metals, Second-hand Luxury Jewellery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-gold-dark via-luxury-gold-base to-luxury-gold-bright">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-jet-black mb-6">
            Experience the NOOR ALBAHJAH Difference
          </h2>
          <p className="text-xl text-jet-black/80 mb-8">
            Visit our showroom or contact us for a personalized consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-jet-black text-luxury-gold-bright hover:bg-gray-900 px-8 py-3 text-lg rounded-md transition-all duration-300 font-semibold">
              Contact Us Today
            </a>
            <a href="https://wa.me/971521933360" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 text-lg rounded-md transition-all duration-300 font-semibold">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
