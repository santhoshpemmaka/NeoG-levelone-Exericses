import React, {useEffect, useState} from "react";
import axios from "axios";
import "./styles.css";
import {image} from "faker";

export default function App() {
	const [displayStatus, setdisplayStatus] = useState(false);
	const [displayProducts, setdisplayProducts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				setdisplayStatus(true);
				const response = await axios.get("/api/products");
				setdisplayProducts((prev) => response.data.products);
				setdisplayStatus(false);
			} catch (err) {
				console.log("error", err);
			}
		})();
	}, []);
	console.log("products", displayProducts);
	return (
		<div className='App'>
			<h1> Showcase Products </h1>
			<h2>Data {displayStatus && <span>loading...</span>}</h2>
			{displayProducts &&
				displayProducts.length > 1 &&
				displayProducts.map((item) => {
					return (
						<div key={item.id}>
							<h4>{item.name}</h4>
							<img src={item.image} alt='product-image' />
						</div>
					);
				})}
		</div>
	);
}
