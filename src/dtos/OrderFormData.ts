
export type OrderFormData = {
    id?: number;
    employee_id?: number;
    status?: string;
    name: string;
    table_number: string;
    order_items: OrderItemData[];
}

export type OrderItemData = {
    id?: number;
    product_id: string;
    product_name: string;
    quantity: number;
    price: number;
    comment: string;
}