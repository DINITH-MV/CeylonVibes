import React, { useState } from "react"
import ShoppingCartBar from "./ShoppingCartBar";
import { GlobalproductsInCart } from "@/pages/ShopInside";
import Cookies from "js-cookie";

export default function ShoppingCart({ fetchCart, Cart }) {

    const [cartsVisibilty, setCartVisible] =
        useState(false);

    // const cartFromCookie = Cookies.get('shopping-cart');
    // let [productsInCart, setProductsInCart] = useState(
    //     cartFromCookie && cartFromCookie !== 'undefined' ? JSON.parse(cartFromCookie) : []
    // );
    // setProductsInCart = GlobalproductsInCart
    return (
        <div>
            <ShoppingCartBar visibilty={cartsVisibilty} fetchCart={fetchCart} Cart={Cart}
                onClose={() => setCartVisible(false)}
            />
            <div className="navbar1">
                <div className="text-4xl float-right mt-[34px] mr-[104px]">
                    <button

                        onClick={() =>
                            setCartVisible(true)
                        }>


                        <i class="fa-sharp fa-light fa-bag-shopping fa-shake " style={{ color: "#d89f5a" }}></i>

                        {GlobalproductsInCart && GlobalproductsInCart.length >
                            0 && (
                                <span className="text-[10px] rounded-[20px] border ml-[0px] top-[20px] pl-[2pt] pr-[3pt] pt-[2px] pb-[3px] *:h-[30px] bg-midnight text-[#fff]">
                                    {
                                        GlobalproductsInCart.length
                                    }
                                </span>
                            )}
                    </button>
                </div>
            </div>
        </div>
    )
}