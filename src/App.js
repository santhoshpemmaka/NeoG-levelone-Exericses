import React, {useReducer, useState} from "react";
import "./App.css";
import faker from "faker";

faker.seed(123);

const data = [...Array(50)].map((item) => ({
	id: faker.random.uuid(),
	name: faker.commerce.productName(),
	image: faker.random.image(),
	price: faker.commerce.price(),
	material: faker.commerce.productMaterial(),
	brand: faker.lorem.word(),
	inStock: faker.random.boolean(),
	fastDelivery: faker.random.boolean(),
	ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
	offer: faker.random.arrayElement([
		"Save 50",
		"70% bonanza",
		"Republic Day Sale",
	]),
	idealFor: faker.random.arrayElement([
		"Men",
		"Women",
		"Girl",
		"Boy",
		"Senior",
	]),
	level: faker.random.arrayElement([
		"beginner",
		"amateur",
		"intermediate",
		"advanced",
		"professional",
	]),
	color: faker.commerce.color(),
}));

export default function App() {
	const useReducerFun = (state, action) => {
		switch (action.type) {
			case "SORT":
				return {
					...state,
					sortBy: action.payload,
				};
			case "TOGGLE_INVENTORY":
				return {
					...state,
					showInventoryAll: !state.showInventoryAll,
				};
			case "TOGGLE_DELIVERY": {
				return {
					...state,
					showFastDeliveryOnly: !state.showFastDeliveryOnly,
				};
			}
			case "PRICE": {
				return {
					...state,
					price: action.payload,
				};
			}
			case "RESET": {
				return {
					...state,
					sortBy: null,
					showInventoryAll: true,
					showFastDeliveryOnly: false,
					price: 0,
				};
			}
			case "CARD": {
				return {
					...state,
					carditems: [...state.carditems, action.payload],
				};
			}
			default: {
				return state;
			}
		}
	};
	const [state, dispatch] = useReducer(useReducerFun, {
		sortBy: null,
		showInventoryAll: true,
		showFastDeliveryOnly: false,
		carditems: [],
		price: 0,
	});
	const getSortData = (productList, sortBy) => {
		if (sortBy && sortBy === "PRICE_HIGH_LOW") {
			return productList.sort((a, b) => b["price"] - a["price"]);
		}
		if (sortBy && sortBy == "PRICE_LOW_HIGH") {
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
	console.log(state);

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
