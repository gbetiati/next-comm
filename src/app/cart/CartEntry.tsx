"use client"

import Image from 'next/image';
import Link from 'next/link';

import { CartItemWithProduct } from "@/lib/db/carts";
import { formatPrice } from '@/lib/format';

interface CartEntryProps {
    cartItem: CartItemWithProduct,
}

export default function CartEntry({
   cartItem: {product, quantity}
}: CartEntryProps) {
   
    const quantityOptions: JSX.Element[] = []
    for(let i=1; i <= 99; i++) {
        quantityOptions.push(
            <option value={i} key={i}>
                {i}
            </option>
        )
    }

   return(
        <div>
            <div className="flex flex-wrap items-center gap-3">
                <Image 
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-lg"
                />
            <div>
                <Link href={"/products/" + product.id} className='font-bold'>
                    {product.name}
                </Link>
                <div>Price: {formatPrice(product.price)}</div>
                <div className="my-1 flex items-center gap-2">
                    Quantity: 
                    <select
                    className="select select-bordered w-full max-w-"
                    >

                    </select>
                </div>
                <div className="flex items-center gap-3">
                    Total: {formatPrice(product.price * quantity)}
                </div>
            </div>
        </div>
        <div className="divider"/>
        </div>
    )

    
}