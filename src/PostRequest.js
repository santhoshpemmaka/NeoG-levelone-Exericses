import React, {useEffect, useState} from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
	const [addresses, setAddresses] = useState([]);
	const [newAddress, setNewAddress] = useState("");
	const [dataStatus, setdataStatus] = useState("");

	useEffect(() => {
		(async function () {
			try {
				const {data} = await axios.get("/api/addresses");
				setAddresses(data.addresses);
				// setAddresses((currentAddress) =>
				//   currentAddress.concat({ city: "Tanay" })
				// );
			} catch (err) {
				console.log("error", err);
			}
		})();
	}, []);

	const btnHandler = async () => {
		try {
			setdataStatus((prev) => "Saving to server...");
			const response = await axios.post("/api/addresses", "santhosh");
			console.log(response);
		} catch (err) {
			setdataStatus("Couldn't save data.");
			console.log("error occured", err);
		} finally {
			setNewAddress("");
			setTimeout(() => {
				setdataStatus("");
			}, 6000);
		}
	};

	return (
		<div className='App'>
			<h1> address book </h1>
			<input
				type='text'
				value={newAddress}
				placeholder='enter city'
				onChange={(event) => {
					const {value} = event.target;
					setNewAddress(value);
				}}
			/>
			<button onClick={btnHandler}> Save Address </button>
			<br />
			{dataStatus}
			<ul>
				{addresses.map((address) => (
					<li key={address.id}>{address.city}</li>
				))}
			</ul>
		</div>
	);
}
