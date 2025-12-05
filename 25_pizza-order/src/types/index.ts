export interface Pizza {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

export interface CartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: CartItem[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
  status: string;
}

export interface CreateOrderData {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  cart: CartItem[];
}

export interface ApiResponse<T> {
  status: string;
  data: T;
}

export interface GeocodingResult {
  latitude: number;
  longitude: number;
  locality: string;
  city: string;
  countryName: string;
}

export interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export interface FormErrors {
  errors?: {
    phone?: string;
    general?: string;
  };
}

export interface UserState {
  username: string;
  status: 'idle' | 'loading' | 'error';
  position: {
    latitude: number;
    longitude: number;
  } | null;
  address: string;
  error: string;
}

export interface CartState {
  cart: CartItem[];
}

export interface RootState {
  user: UserState;
  cart: CartState;
}