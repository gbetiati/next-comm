import { Product } from "@prisma/client"
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({product}: ProductCardProps) {
    const isNew =
         Date.now() - new Date(product.createdAt).getTime() <
         1000 * 60 * 60 * 24 * 7

    return (
        <Link
            href={"/products/" + product.id}
            className="card flex p-1.5 w-full bg-base-100 hover:shadow-xl transition-shadow"
        >
            <figure>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={800}
                    height={400}
                    className="h-48 object-cover"

                /> 
            </figure>

            <div className="card-body font-extralight"> 
                <h2 className="card-title font-semibold"> {product.name} </h2>
                  {isNew && <div className="badge badge-secondary"> NEW </div>}
                <p> {product.description} </p>
                <PriceTag price={product.price} />
            </div>

        </Link>
    )
}
