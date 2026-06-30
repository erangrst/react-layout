export interface PizzaOrder {
  id: string;
  customerName: string;
  pizzaType: string;
  quantity: number;
  price: number;
  orderDate: Date;
  status: 'pending' | 'in progress' | 'completed' | 'cancelled';
}
