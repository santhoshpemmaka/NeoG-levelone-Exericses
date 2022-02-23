import {useEffect, useState} from "react";
import uuid from "react-uuid";

const LocalStorage = () => {
	const [wishText, setWishText] = useState("");
	const [wishList, setWishList] = useState(
		JSON.parse(localStorage.getItem("wishList")) ?? []
	);

	useEffect(() => {
		localStorage.setItem("wishList", JSON.stringify(wishList));
		console.log("WishList", wishList);
	}, [wishList]);

	const handleWishAdd = () => {
		setWishList((list) => [...list, {id: uuid(), wish: wishText}]);
		setWishText("");
	};

	const handleWishInput = (event) => setWishText(event.target.value);

	return (
		<div>
			<input
				onChange={handleWishInput}
				value={wishText}
				placeholder={"I wish..."}
			/>
			<button onClick={handleWishAdd}>Add </button>
			<ul>
				{wishList.map(({id, wish}) => (
					<li key={id}> {wish} </li>
				))}
			</ul>
		</div>
	);
};

export default LocalStorage;
