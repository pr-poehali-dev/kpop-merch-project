export interface Product {
  id: string;
  name: string;
  artist: string;
  price: number;
  image: string;
  category: 'album' | 'photocard' | 'lightstick' | 'merchandise';
  description: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface VipMember {
  id: string;
  name: string;
  email: string;
  points: number;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  joinDate: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    zipCode: string;
  };
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}