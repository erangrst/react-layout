export interface BreadOrder {
  id: string;
  customerName: string;
  breadType: string;
  quantity: number;
  weight: number; // in grams
  price: number; // in USD
  orderDate: Date;
  status: 'pending' | 'in progress' | 'completed' | 'cancelled';
}
