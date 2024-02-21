import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo0.png"
import { redirect } from "next/navigation"
import { getCart } from "@/lib/db/carts"
import ShoppingCartButton from "./ShoppingCartButton"


async function searchProducts(formData: FormData) {
    "use server";

    const searchQuery = formData.get("searchQuery")?.toString()
    
    if(searchQuery) {
      redirect("/search?query=" + searchQuery)
    }

}

export default async function Navbar() {
    const cart = await getCart()

    return(

    
        <div className="bg-blue-900">
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-0"> 
                <div className="flex-1 p-1.5">
                    <Link href='/' className="btn btn-ghost text-xl normal-case">
                        <Image src={logo} height={135} width={135} alt="Otica Ritter" />    
                    </Link>
                </div>
                <div className="flex-none gap-2 mx-1">
                    <form action={searchProducts}>
                        <div className="form-control">
                            <input 
                                name="searchQuery"
                                placeholder="Search"
                                className="input w-full border-none h-10 min-w[100px]"
                            />
                        </div>
                    </form>
                    <ShoppingCartButton cart={cart} />
                </div>
            </div>
        </div>
    )
}