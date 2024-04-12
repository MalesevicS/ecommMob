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