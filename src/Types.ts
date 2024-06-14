export type Product = {
    id:number,
    image:string | null,
    name:string,
    price:number
}

export type ShoeSizes = `42` | `44` | `46` | `48`;

export type CartItem = {
    id:string,
    product:Product,
    product_id:number,
    size:ShoeSizes,
    quantity:number
}

export type OrderItem = {
    id: number,
    order_id: number,
    size: ShoeSizes,
    quantity: number,
    product_id: number,
    products: Product
}


export type Order = {
    id: number,
    created_at: string,
    status: string,
    user_id: string,
    order_items: OrderItem[]
}

export const OrderListStatus : OrderStatus[] = [
    `Manufacturing`,
    `Delivering`,
    'Delivered'
]

export type OrderStatus = `Manufacturing` | `Delivering` | 'Delivered'