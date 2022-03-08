import React from "react";
import "./App.css";
import DemoData from "./FakerData";
import {useCard} from "./CardContext";

export default function App() {
	const [data] = DemoData();
	const {state, dispatch} = useCard();
	const getSortData = (productList, sortBy) => {
		if (sortBy && sortBy === "PRICE_HIGH_LOW") {
			return productList.sort((a, b) => b["price"] - a["price"]);
		}
		if (sortBy && sortBy === "PRICE_LOW_HIGH") {
			return productList.sort((a, b) => a["price"] - b["price"]);
		}
		return productList;
	};
	const getFilterData = (
		productList,
		showInventoryAll,
		showFastDeliveryOnly,
		itemCost
	) => {
		return productList
			.filter(({fastDelivery}) => (showFastDeliveryOnly ? fastDelivery : true))
			.filter(({inStock}) => (showInventoryAll ? true : inStock))
			.filter(({price}) =>
				Number(itemCost) === 0 ? price : price <= itemCost
			);
	};
	const sortedData = getSortData(data, state.sortBy);
	const filterData = getFilterData(
		sortedData,
		state.showInventoryAll,
		state.showFastDeliveryOnly,
		state.price
	);

	return (
		<div className='container'>
			<div className='contianer-body-nav'>
				<div className='category-labels'>
					<label className='category-heading'>Category</label>
					<label
						className='category-heading1'
						onClick={() => dispatch({type: "RESET"})}>
						CLEAR ALL
					</label>
				</div>
				<div className='nav-category'>
					<div className='nav-options'>
						<input
							type='checkbox'
							className='category-checkbox'
							onChange={() => dispatch({type: "TOGGLE_INVENTORY"})}
							checked={state.showInventoryAll}
						/>
						<label className='category-text'>Include Out of Stock</label>
					</div>
					<div className='nav-options'>
						<input
							type='checkbox'
							className='category-checkbox'
							onChange={() => dispatch({type: "TOGGLE_DELIVERY"})}
							checked={state.showFastDeliveryOnly}
						/>
						<label className='category-text'>Fast Delivery Only</label>
					</div>
				</div>
				<div className='nav-category'>
					<label className='category-heading'>Sort by</label>
					<div className='nav-options'>
						<input
							type='radio'
							className='category-checkbox'
							onChange={() =>
								dispatch({type: "SORT", payload: "PRICE_LOW_HIGH"})
							}
							checked={state.sortBy && state.sortBy === "PRICE_LOW_HIGH"}
						/>
						<label className='category-text'>Price - Low to High</label>
					</div>
					<div className='nav-options'>
						<input
							type='radio'
							className='category-checkbox'
							onChange={() =>
								dispatch({type: "SORT", payload: "PRICE_HIGH_LOW"})
							}
							checked={state.sortBy && state.sortBy === "PRICE_HIGH_LOW"}
						/>
						<label className='category-text'>Price - High to Low</label>
					</div>
					<div className='nav-slider'>
						<label>Price </label>
						<div className='slider-price'>
							0{" "}
							<input
								type='range'
								max={1000}
								min={0}
								value={state.price}
								onChange={(e) =>
									dispatch({type: "PRICE", payload: e.target.value})
								}
							/>{" "}
							1000
						</div>
					</div>
				</div>
			</div>
			<div className='nav-main'>
				{filterData &&
					filterData.length > 1 &&
					filterData.map(
						({id, name, image, price, inStock, level, fastDelivery}) => (
							<div key={id} className='container-item'>
								<img src={image} alt={name} />
								<h3>{name}</h3>
								<div className='item-price'>Rs. {price}</div>
								{inStock && <div className='item-stock'>In Stock</div>}
								{!inStock && <div className='item-out-stock'>Out of Stock</div>}
								<div className='level'>{level}</div>
								{fastDelivery ? (
									<div className='fast-delivery'> Fast Delivery</div>
								) : (
									<div className='dealy-delivery'> 3 days minimum</div>
								)}
								<button
									className='button-card'
									onClick={() =>
										dispatch({
											type: "CARD",
											payload: [
												name,
												id,
												image,
												price,
												inStock,
												level,
												fastDelivery,
											],
										})
									}>
									Add to Cart
								</button>
							</div>
						)
					)}
			</div>
		</div>
	);
}
