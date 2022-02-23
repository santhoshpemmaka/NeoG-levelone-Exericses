import React, {useEffect, useState} from "react";
import axios from "axios";

const PostRequest1 = () => {
	const [userText, setuserText] = useState("");
	const [usersList, setusersList] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get(
					"https://jsonplaceholder.typicode.com/users"
				);
				setusersList((prev) => res.data);
			} catch (err) {
				console.log("error occured", err);
			}
		})();
	}, []);

	const btnHandler = async () => {
		const response = await axios.post(
			"https://jsonplaceholder.typicode.com/users",
			{["name"]: userText}
		);
		setusersList((prev) => [...prev, response.data]);
	};
	return (
		<div>
			<h1>Post Request</h1>
			<input
				style={{width: "30%"}}
				type='text'
				value={userText}
				onChange={(e) => setuserText(e.target.value)}
				placeholder='Enter name of the customer'
			/>
			<button onClick={btnHandler}>Add</button>
			{usersList &&
				usersList.length > 1 &&
				usersList.map((item) => {
					return (
						<div key={item.id} style={{marginLeft: "3rem"}}>
							<h4>{item.name}</h4>
						</div>
					);
				})}
		</div>
	);
};

export default PostRequest1;
