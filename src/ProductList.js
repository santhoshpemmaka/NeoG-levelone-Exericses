import React from "react";
import {useCard} from "./CardContext";
import {useTheme} from "./ThemeContext";

const ProductList = () => {
	const listItemnumber = ["1", "2", "3", "4", "5"];
	const {countHandler} = useCard();
	const {theme} = useTheme();
	return (
		<div>
			<h4 style={{color: theme == "light" ? "black" : "white"}}>
				Product lists
			</h4>
			{listItemnumber &&
				listItemnumber.map((item) => (
					<div key={item}>
						<h3 style={{color: theme == "light" ? "black" : "white"}}>
							Product {item}
						</h3>
						<button onClick={countHandler}>Add to Cart</button>
					</div>
				))}
		</div>
	);
};

export default ProductList;
