import { getCart } from "@/lib/db/carts"
import CartEntry from "./CartEntry"

export const metadata =  {
    title: "Your Cart - Flowmazon"
}

export default async function CartPage() {
    const cart = await getCart()
             
    return (
        <div>
            <h1>
                <h1 className="mb-6 text-3xl font-bold"> Shopping Cart </h1>
                {cart?.items.map(cartItem => (
                     <CartEntry
                     cartItem={cartItem}
                     key={cartItem.id}
                   />
                ))}

              
            </h1>
        </div>
    )
}