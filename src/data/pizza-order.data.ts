import { PizzaOrder } from '../models/pizza-order.model';

export const pizzaOrders: PizzaOrder[] = Array.from({ length: 58 }, (_, index) => ({
  id: `PO-${String(index + 1).padStart(3, '0')}`,
  customerName: `Customer ${index + 1}`,
  pizzaType: index % 4 === 0 ? 'Margherita' : index % 4 === 1 ? 'Pepperoni' : index % 4 === 2 ? 'Vegetarian' : 'Hawaiian',
  quantity: (index % 3) + 1,
  price: Number((8 + index * 0.5).toFixed(2)),
  orderDate: new Date(2026, 5, 20 + (index % 10)),
  status: index % 2 === 0 ? 'completed' : 'pending',
}));
