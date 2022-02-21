import React, {useState} from "react";
import "./AddCart.css";

export default function AddCart() {
	const [countNumber, setcountNumber] = useState(0);

	return (
		<div>
			<div className='addcartIcon'>
				<i class='fas fa-shopping-cart shop-icon'></i>
				{countNumber >= 0 && (
					<span className='addcart-display'>{countNumber}</span>
				)}
			</div>
			<button onClick={() => setcountNumber((prev_value) => prev_value + 1)}>
				AddCart
			</button>
		</div>
	);
}
