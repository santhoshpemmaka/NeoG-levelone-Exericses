import React, {useState} from "react";
import axios from "axios";

const GetData = () => {
	const [displayText, setdisplayText] = useState("Data");
	const [dataList, setdataList] = useState([]);

	const btnHandler = async () => {
		try {
			setdisplayText((prev) => "Data loading...");
			const reponse = await axios.get("/api/users");
			setdataList(reponse.data.users);
			setdisplayText("Data");
			console.log("reached first");
		} catch (err) {
			console.log("error occured", err);
			setdisplayText("Error occured");
		}
	};
	return (
		<div style={{textAlign: "center", fontSize: "1.6rem"}}>
			<h1>{displayText}</h1>
			<button onClick={btnHandler}>Click to load from server</button>
			<ul>
				{dataList &&
					dataList.length > 1 &&
					dataList.map((item) => {
						return <li key={item.id}>{item.name}</li>;
					})}
			</ul>
		</div>
	);
};

export default GetData;
