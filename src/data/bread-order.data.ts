import { BreadOrder } from '../models/bread-order.model';

export const breadOrders: BreadOrder[] = [
  {
    id: 'BO-001',
    customerName: 'Alice Johnson',
    breadType: 'Sourdough',
    quantity: 2,
    weight: 800,
    price: 12.5,
    orderDate: new Date('2026-06-25'),
    status: 'completed',
  },
  {
    id: 'BO-002',
    customerName: 'Bob Smith',
    breadType: 'Baguette',
    quantity: 3,
    weight: 900,
    price: 15,
    orderDate: new Date('2026-06-26'),
    status: 'pending',
  },
];
