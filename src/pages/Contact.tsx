
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-jet-black via-gray-900 to-jet-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              <span className="bg-luxury-gradient bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-muted-grey max-w-3xl mx-auto">
              Visit our showroom in Dubai or get in touch for expert consultation on luxury jewellery
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-jet-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-8">
                <span className="bg-luxury-gradient bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              
              <div className="space-y-6">
                <div className="luxury-card p-6 golden-hover">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-luxury-gold-bright mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-luxury-gold-bright mb-2">Visit Our Showroom</h3>
                      <p className="text-muted-grey">
                        Office B-126, Al Quoz 3<br />
                        Bur Dubai, UAE
                      </p>
                    </div>
                  </div>
                </div>

                <div className="luxury-card p-6 golden-hover">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-luxury-gold-bright mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-luxury-gold-bright mb-2">Call Us</h3>
                      <a href="tel:+971521933360" className="text-muted-grey hover:text-luxury-gold-bright transition-colors">
                        +971 52 1933360
                      </a>
                    </div>
                  </div>
                </div>

                <div className="luxury-card p-6 golden-hover">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-luxury-gold-bright mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-luxury-gold-bright mb-2">Email Us</h3>
                      <a href="mailto:info@noorjewellery.com" className="text-muted-grey hover:text-luxury-gold-bright transition-colors">
                        info@noorjewellery.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="luxury-card p-6 golden-hover">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-luxury-gold-bright mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-luxury-gold-bright mb-2">Business Hours</h3>
                      <div className="text-muted-grey space-y-1">
                        <p>Saturday - Thursday: 9:00 AM - 8:00 PM</p>
                        <p>Friday: 2:00 PM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="luxury-card p-6 golden-hover">
                  <div className="flex items-start space-x-4">
                    <MessageCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-green-500 mb-2">WhatsApp</h3>
                      <a 
                        href="https://wa.me/971521933360" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Chat with us instantly</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-3xl font-playfair font-bold">
                    <span className="bg-luxury-gradient bg-clip-text text-transparent">
                      Send us a Message
                    </span>
                  </CardTitle>
                  <p className="text-muted-grey">
                    Have questions about our collection or services? We'd love to hear from you.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-luxury-gold-bright">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-900 border-gray-700 text-white focus:border-luxury-gold-bright"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-luxury-gold-bright">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-900 border-gray-700 text-white focus:border-luxury-gold-bright"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-luxury-gold-bright">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-gray-900 border-gray-700 text-white focus:border-luxury-gold-bright"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-luxury-gold-bright">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="e.g., Jewelry Inquiry, Consultation"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-gray-900 border-gray-700 text-white focus:border-luxury-gold-bright"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-luxury-gold-bright">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="bg-gray-900 border-gray-700 text-white focus:border-luxury-gold-bright"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="luxury-button text-jet-black font-semibold w-full flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-jet-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              <span className="bg-luxury-gradient bg-clip-text text-transparent">
                Find Us in Dubai
              </span>
            </h2>
            <p className="text-xl text-muted-grey">
              Located in the heart of Bur Dubai's commercial district
            </p>
          </div>

          <div className="luxury-card p-4 overflow-hidden">
            <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-luxury-gold-bright mx-auto mb-4" />
                <h3 className="text-2xl font-playfair font-bold text-luxury-gold-bright mb-2">
                  NOOR ALBAHJAH JEWELLERY TRADING L.L.C
                </h3>
                <p className="text-muted-grey mb-4">
                  Office B-126, Al Quoz 3, Bur Dubai, UAE
                </p>
                <Button className="luxury-button text-jet-black font-semibold">
                  <a href="https://maps.google.com/?q=Al+Quoz+3+Bur+Dubai+UAE" target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License Information */}
      <section className="py-12 bg-jet-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-grey">
            <span className="text-luxury-gold-bright font-semibold">Licensed Trading Company</span> • 
            License No: 1476612 • Dubai, UAE
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
