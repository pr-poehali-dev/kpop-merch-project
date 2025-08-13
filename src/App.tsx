import React from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import Index from '@/pages/Index';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Index />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;