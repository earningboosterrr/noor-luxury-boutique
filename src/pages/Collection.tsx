
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Search } from "lucide-react";

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Gold", "Diamond", "Pearls", "Silver", "Pre-owned", "Precious Metals"];

  const products = [
    {
      id: 1,
      name: "Elegant Diamond Necklace",
      category: "Diamond",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=600&auto=format&fit=crop",
      priceOnRequest: true,
      description: "Exquisite diamond necklace with premium setting"
    },
    {
      id: 2,
      name: "Classic Gold Bracelet",
      category: "Gold",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=600&auto=format&fit=crop",
      priceOnRequest: true,
      description: "Handcrafted 22K gold bracelet with intricate design"
    },
    {
      id: 3,
      name: "Pearl Earring Set",
      category: "Pearls",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=600&auto=format&fit=crop",
      priceOnRequest: true,
      description: "Natural pearls with gold accents"
    },
    {
      id: 4,
      name: "Vintage Diamond Ring",
      category: "Pre-owned",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
      priceOnRequest: true,
      description: "Rare vintage piece with historical significance"
    },
    {
      id: 5,
      name: "Silver Chain Collection",
      category: "Silver",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600&auto=format&fit=crop",
      priceOnRequest: true,
      description: "Sterling silver chains in various designs"
    },
    {
      id: 6,
      name: "Platinum Wedding Band",
      category: "Precious Metals",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
      priceOnRequest: true,
      description: "Pure platinum band with lifetime warranty"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-jet-black via-gray-900 to-jet-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              <span className="bg-luxury-gradient bg-clip-text text-transparent">
                Our Collection
              </span>
            </h1>
            <p className="text-xl text-muted-grey max-w-3xl mx-auto">
              Discover our curated selection of luxury jewellery, from timeless classics to contemporary masterpieces
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-jet-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-grey h-5 w-5" />
              <input
                type="text"
                placeholder="Search jewellery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-muted-grey focus:border-luxury-gold-bright focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <Filter className="h-5 w-5 text-luxury-gold-bright mt-1 mr-2" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? "bg-luxury-gradient text-jet-black"
                      : "border-gray-600 text-muted-grey hover:border-luxury-gold-bright hover:text-luxury-gold-bright"
                  } transition-all duration-300`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-jet-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="luxury-card group overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-luxury-gradient text-jet-black font-semibold">
                    {product.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-2 text-luxury-gold-bright">
                    {product.name}
                  </h3>
                  <p className="text-muted-grey mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    {product.priceOnRequest && (
                      <span className="text-luxury-gold-bright font-semibold">Price on Request</span>
                    )}
                    <Button
                      size="sm"
                      className="luxury-button text-jet-black font-semibold ml-auto"
                    >
                      Inquire Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-2xl text-muted-grey font-playfair">
                No items found matching your criteria
              </p>
              <p className="text-muted-grey mt-2">
                Try adjusting your search or category filters
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-gold-dark via-luxury-gold-base to-luxury-gold-bright">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-jet-black mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-jet-black/80 mb-8">
            We have access to exclusive pieces and can source specific items based on your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-jet-black text-luxury-gold-bright hover:bg-gray-900 px-8 py-3 text-lg rounded-md transition-all duration-300 font-semibold">
              Contact Our Experts
            </a>
            <a href="https://wa.me/971521933360" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 text-lg rounded-md transition-all duration-300 font-semibold">
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
