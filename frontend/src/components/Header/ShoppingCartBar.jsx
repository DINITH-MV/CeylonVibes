import React from "react";
import "./shoppingCartBar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GlobalproductsInCart } from "@/pages/ShopInside";
import { GlobalonQuantityChange } from "@/pages/ShopInside";
import { GlobalonProductRemove } from "@/pages/ShopInside";

function ShoppingCartBar({
	visibilty,
	onClose,
})
 {
	
	return (
		<div
			className="modal"
			style={{
				display: visibilty
					? "block"
					: "none",
			}}>
			<div className="shoppingCart">
				<div className="header">
					<h2>Shopping cart</h2>
					<button
						className="btn close-btn"
						onClick={onClose}>
						<AiFillCloseCircle
							size={30}
						/>
					</button>
				</div>
				<div className="cart-products">
					{GlobalproductsInCart && GlobalproductsInCart.length === 0 && (
						<span className="empty-text">
							Your basket is
							currently empty
						</span>
					)}
					{Array.isArray(GlobalproductsInCart) && GlobalproductsInCart.map((product) => (
						<div
							className="cart-product"
							key={product.id}>
							<img
								src={'http://localhost:5012/' + product.imageFolder + '/' +
									product.image
								}
								alt={product.name}
							/>
							<div className="product-info">
								<h3>
									{product.name}
								</h3>
								<span className="product-price">
									{product.price *
										product.count}
									$
								</span>
							</div>
							<select
								className="count"
								value={
									product.count
								}
								onChange={(
									event
								) => {
									GlobalonQuantityChange(
										product.id,
										event
											.target
											.value
									);
								}}>
								{[	...Array(10	).keys(),].map(
									(number) => {
										const num =
											number +1;
										return (
											<option
												value={num}
												key={num}>	{num}</option>
										);
									}
								)}
							</select>
							<button
								className="btn remove-btn"
								onClick={() =>
									GlobalonProductRemove(
										product
									)
								}>
								<RiDeleteBin6Line
									size={20}
								/>
							</button>
						</div>
					))}
					{GlobalproductsInCart && GlobalproductsInCart.length > 0 && (
						<button className="p-[5px] text-center mx-auto rounded-[7px] mt-[12px] bg-[#b3f18e]">
							Proceed to checkout
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default ShoppingCartBar;

