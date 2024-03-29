import React, { useState } from "react"
import ShoppingCartBar from "./ShoppingCartBar";
export default function ShoppingCart({ productsInCart, onQuantityChange, onProductRemove, fetchCart }) {

    const [cartsVisibilty, setCartVisible] =
        useState(false);     

        
        
    console.log(fetchCart)
    return (
        <div>
            <ShoppingCartBar visibilty={cartsVisibilty} products={fetchCart}
                onClose={() => setCartVisible(false)}
                onQuantityChange={onQuantityChange} onProductRemove={onProductRemove} />
            <div className="navbar1">
                <div className="text-4xl float-right mt-[34px] mr-[104px]">
                    <button

                        onClick={() =>
                            setCartVisible(true)
                        }>


                        <i class="fa-sharp fa-light fa-bag-shopping fa-shake " style={{ color: "#d89f5a" }}></i>

                        {fetchCart && fetchCart.length >
                            0 && (
                                <span className="text-[10px] rounded-[20px] border ml-[0px] top-[20px] pl-[2pt] pr-[3pt] pt-[2px] pb-[3px] *:h-[30px] bg-midnight text-[#fff]">
                                    {
                                        fetchCart.length
                                    }
                                </span>
                            )}
                    </button>
                </div>
            </div>
        </div>
    )
}