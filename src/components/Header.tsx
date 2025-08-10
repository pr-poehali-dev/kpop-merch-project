import React from 'react';
import { ShoppingCart, User, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  onVipClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, onVipClick }) => {
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow-lg border-b-2 border-purple-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              EXPERIMENTE.STORE
            </h1>
            <span className="text-sm text-gray-600 hidden md:block">
              Official EXPERIMENT ENTERTAINMENT Store
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Artists
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              New Releases
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Sale
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onVipClick}
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <User className="w-6 h-6" />
              <span className="hidden md:block">VIP</span>
            </button>
            
            <button className="text-gray-700 hover:text-purple-600 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            
            <button
              onClick={onCartClick}
              className="relative flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:block">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;