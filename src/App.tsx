import React from 'react';
import { CartProvider } from '@/context/CartContext';
import Index from '@/pages/Index';

const App = () => {
  return (
    <CartProvider>
      <Index />
    </CartProvider>
  );
};

export default App;