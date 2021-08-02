import api from './api';
import { OrderFormData } from '../dtos/OrderFormData';

interface OrderResponseData {
    order: {
        id: number;
    }
}

export function CreateOrderService(order) {
    return api.post<OrderResponseData>('/front/v1/orders', { "order": order });
}
 

export function UpdateOrderStatusService(orderId, status) {
    return api.patch<OrderResponseData>(`/front/v1/orders/${orderId}/status/${status}`);
}
