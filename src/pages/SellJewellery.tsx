
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Camera, CheckCircle, MessageCircle, Star, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SellJewellery = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    itemType: "",
    description: "",
    estimatedValue: "",
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Evaluation Request Submitted!",
      description: "We'll contact you within 24 hours with our assessment.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      itemType: "",
      description: "",
      estimatedValue: "",
    });
    setSelectedFiles([]);
  };

  const steps = [
    {
      icon: Camera,
      title: "Upload Photos",
      description: "Take clear photos of your jewellery from multiple angles"
    },
    {
      icon: Star,
      title: "Expert Evaluation",
      description: "Our certified experts assess your items professionally"
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "Receive competitive market-based valuation"
    },
    {
      icon: CheckCircle,
      title: "Quick Payment",
      description: "Get paid securely upon agreement"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-jet-black via-gray-900 to-jet-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              <span className="bg-luxury-gradient bg-clip-text text-transparent">
                Sell Your Jewellery
              </span>
            </h1>
            <p className="text-xl text-muted-grey max-w-3xl mx-auto">
              Transform your valuable jewellery into cash with Dubai's most trusted evaluation experts. 
              Fair prices, secure transactions, immediate payment.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-jet-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              <span className="bg-luxury-gradient bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-muted-grey">Simple, transparent, and secure process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="luxury-card p-6 mb-4 golden-hover">
                  <step.icon className="h-12 w-12 text-luxury-gold-bright mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-semibold text-luxury-gold-bright mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-grey text-sm">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-luxury-gold-bright"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Form */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-jet-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="luxury-card">
            <CardHeader>
              <CardTitle className="text-3xl font-playfair font-bold text-center">
                <span className="bg-luxury-gradient bg-clip-text text-transparent">
                  Get Your Free Evaluation
                </span>
              </CardTitle>
              <p className="text-center text-muted-grey">
                Fill out the form below and upload photos of your jewellery for a professional assessment
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
                    <Label htmlFor="phone" className="text-luxury-gold-bright">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-900 border-gray-700 text-white focus:border-luxury-gold-bright"
                    />
                  </div>
                  <div>
                    <Label htmlFor="itemType" className="text-luxury-gold-bright">Item Type</Label>
                    <Input
                      id="itemType"
                      name="itemType"
                      placeholder="e.g., Gold necklace, Diamond ring"
                      value={formData.itemType}
                      onChange={handleInputChange}
                      className="bg-gray-900 border-gray-700 text-white focus:border-luxury-gold-bright"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="text-luxury-gold-bright">Item Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe your jewellery: material, weight, age, any certificates or appraisals..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-gray-900 border-gray-700 text-white focus:border-luxury-gold-bright"
                  />
                </div>

                <div>
                  <Label htmlFor="estimatedValue" className="text-luxury-gold-bright">Estimated Value (Optional)</Label>
                  <Input
                    id="estimatedValue"
                    name="estimatedValue"
                    placeholder="Your estimated value in AED"
                    value={formData.estimatedValue}
                    onChange={handleInputChange}
                    className="bg-gray-900 border-gray-700 text-white focus:border-luxury-gold-bright"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <Label className="text-luxury-gold-bright mb-2 block">Upload Photos *</Label>
                  <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center hover:border-luxury-gold-bright transition-colors">
                    <Upload className="h-12 w-12 text-muted-grey mx-auto mb-4" />
                    <Label htmlFor="file-upload" className="cursor-pointer">
                      <span className="text-luxury-gold-bright hover:text-luxury-gold-base">
                        Click to upload photos
                      </span>
                      <span className="text-muted-grey"> or drag and drop</span>
                    </Label>
                    <Input
                      id="file-upload"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <p className="text-sm text-muted-grey mt-2">
                      Upload multiple clear photos from different angles (JPG, PNG)
                    </p>
                  </div>
                  {selectedFiles.length > 0 && (
                    <div className="mt-4">
                      <p className="text-luxury-gold-bright mb-2">Selected files:</p>
                      <ul className="space-y-1">
                        {selectedFiles.map((file, index) => (
                          <li key={index} className="text-muted-grey text-sm">
                            {file.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    className="luxury-button text-jet-black font-semibold flex-1"
                  >
                    Send for Evaluation
                  </Button>
                  <a
                    href="https://wa.me/971521933360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors font-semibold"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Chat
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-jet-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6">
              <span className="bg-luxury-gradient bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="luxury-card p-8 text-center golden-hover">
              <CheckCircle className="h-12 w-12 text-luxury-gold-bright mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-luxury-gold-bright">Licensed & Trusted</h3>
              <p className="text-muted-grey">
                Fully licensed trading company (License No: 1476612) with years of experience in Dubai's jewellery market.
              </p>
            </div>

            <div className="luxury-card p-8 text-center golden-hover">
              <Star className="h-12 w-12 text-luxury-gold-bright mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-luxury-gold-bright">Expert Evaluation</h3>
              <p className="text-muted-grey">
                Certified gemologists and precious metal experts provide accurate, market-based valuations.
              </p>
            </div>

            <div className="luxury-card p-8 text-center golden-hover">
              <DollarSign className="h-12 w-12 text-luxury-gold-bright mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-luxury-gold-bright">Best Prices</h3>
              <p className="text-muted-grey">
                Competitive pricing based on current market rates with transparent evaluation process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellJewellery;
