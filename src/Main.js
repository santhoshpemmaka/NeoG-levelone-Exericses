import React, {useEffect, useState} from "react";
import Fruit from "./Fruit";
import Vegetable from "./Vegetable";
import Demodata from "./data";

const Main = () => {
	const [fruitData, setfruitData] = useState([]);
	const [vegetableData, setvegetableData] = useState([]);
	const [typeText, settypeText] = useState("");
	useEffect(() => {
		const filterFruit =
			Demodata && Demodata.filter((item) => item.category == "Fruits");
		const fitlerVegetable =
			Demodata && Demodata.filter((item) => item.category == "Vegetables");
		setfruitData(filterFruit);
		setvegetableData(fitlerVegetable);
	}, []);
	const inputHandler = (e) => {
		const inputText = e.target.value;
		const filterFruit =
			Demodata &&
			Demodata.filter(
				(item) =>
					item.name.toLowerCase().indexOf(inputText.toLowerCase()) != -1 &&
					item.category == "Fruits"
			);
		const fitlerVegetable =
			Demodata &&
			Demodata.filter(
				(item) =>
					item.name.toLowerCase().indexOf(inputText.toLowerCase()) != -1 &&
					item.category == "Vegetables"
			);
		setfruitData(filterFruit);
		setvegetableData(fitlerVegetable);
		settypeText(inputText);
	};
	const checkboxHandler = (e) => {
		const filterFruit =
			Demodata &&
			Demodata.filter((item) => item.stocked && item.category == "Fruits");
		const fitlerVegetable =
			Demodata &&
			Demodata.filter((item) => item.stocked && item.category == "Vegetables");
		setfruitData(filterFruit);
		setvegetableData(fitlerVegetable);
	};
	return (
		<div>
			<input
				type='text'
				value={typeText}
				placeholder='Search'
				onChange={(e) => inputHandler(e)}
			/>
			<br />
			<input type='checkbox' onChange={(e) => checkboxHandler(e)} /> Only show
			products in stock
			<div style={{display: "flex"}}>
				<h4 style={{marginLeft: "3rem"}}>Name</h4>{" "}
				<h4 style={{marginLeft: "3rem"}}>Price</h4>
			</div>
			<Fruit fruit={fruitData} />
			<Vegetable vegetable={vegetableData} />
			<input type='range' />
		</div>
	);
};

export default Main;
