import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import SearchAndFilters from '@/components/SearchAndFilters';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import Checkout from '@/components/Checkout';
import VipProgram from '@/components/VipProgram';
import AuthModal from '@/components/AuthModal';
import UserProfile from '@/components/UserProfile';
import { products } from '@/data/products';
import { Product, Order } from '@/types';
import { Star, Award, Truck, Crown } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArtist, setSelectedArtist] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isVipOpen, setIsVipOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on search and filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.artist.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesArtist = selectedArtist === 'all' || product.artist === selectedArtist;
      const matchesRegion = selectedRegion === 'all' || 
                           (selectedRegion === 'russian' && (product as any).region === 'Russian Artists') ||
                           (selectedRegion === 'korean' && !(product as any).region);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesArtist && matchesRegion && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedArtist, selectedRegion, priceRange]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleOrderComplete = (order: Order) => {
    console.log('Order completed:', order);
    // Here you would typically send the order to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onCartClick={() => setIsCartOpen(true)}
        onVipClick={() => setIsVipOpen(true)}
        onAuthClick={() => setIsAuthOpen(true)}
        onProfileClick={() => setIsProfileOpen(true)}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            EXPERIMENTE.STORE
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Official EXPERIMENT ENTERTAINMENT Store
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
            Discover exclusive merchandise from Korean and Russian artists: TEDDIBEAR, ROYAL CRUSH, 2COOL, NO1CE, Jonhie, and REAALQUEENZ
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Truck className="w-4 h-4 mr-2" />
              Free Worldwide Shipping
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              100% Authentic
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Crown className="w-4 h-4 mr-2" />
              VIP Rewards
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <SearchAndFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedArtist={selectedArtist}
        onArtistChange={setSelectedArtist}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
      />

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Official Merchandise
              </h2>
              <p className="text-gray-600 mt-2">
                {filteredProducts.length} products available
              </p>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Star className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={handleProductClick}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Artists</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the talented artists from EXPERIMENT ENTERTAINMENT and our Russian partners
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Korean Artists */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Korean Artists</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {['TEDDIBEAR', 'ROYAL CRUSH', 'RONIE', 'LUNNAH', 'AERIN', 'NO1CE', 'Jonhie'].map((artist) => (
                  <div key={artist} className="text-center group cursor-pointer">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">
                        {artist.charAt(0)}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {artist}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Russian Artists */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Russian Artists</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {['REAALQUEENZ'].map((artist) => (
                  <div key={artist} className="text-center group cursor-pointer">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">
                        {artist.charAt(0)}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                      {artist}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EXPERIMENTE.STORE</h3>
              <p className="text-gray-400">
                Official merchandise store for EXPERIMENT ENTERTAINMENT artists and partners.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Contact Us</li>
                <li>Shipping Info</li>
                <li>Returns</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Korean Artists</h4>
              <ul className="space-y-2 text-gray-400">
                <li>TEDDIBEAR</li>
                <li>ROYAL CRUSH</li>
                <li>2COOL</li>
                <li>NO1CE</li>
                <li>Jonhie</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Russian Artists</h4>
              <ul className="space-y-2 text-gray-400">
                <li>REAALQUEENZ</li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>YouTube</li>
                  <li>TikTok</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EXPERIMENT ENTERTAINMENT. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onOrderComplete={handleOrderComplete}
      />

      <VipProgram
        isOpen={isVipOpen}
        onClose={() => setIsVipOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      <UserProfile
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setSelectedProduct(null)} />
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                    <p className="text-purple-600 font-medium">{selectedProduct.artist}</p>
                    {(selectedProduct as any).region && (
                      <p className="text-sm text-red-600 font-medium">{(selectedProduct as any).region}</p>
                    )}
                  </div>
                  <p className="text-gray-600">{selectedProduct.description}</p>
                  <div className="text-2xl font-bold text-purple-600">${selectedProduct.price}</div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;