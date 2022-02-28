import React, {useState} from "react";
import "./Address.css";
import DisplayAdress from "./DisplayAdress";

const Address = () => {
	const [address, setAddress] = useState([]);
	const [userAddress, setuserAddress] = useState({
		id: 0,
		name: "",
		address: "",
		phoneNumber: "",
		country: "",
	});
	const btnHandler = () => {
		const addressObject = {
			id: userAddress.id,
			name: userAddress.name,
			address: userAddress.address,
			phoneNumber: userAddress.phoneNumber,
			country: userAddress.country,
		};
		setAddress([...address, addressObject]);
		setuserAddress({
			id: userAddress.id + 1,
			name: "",
			address: "",
			phoneNumber: "",
			country: "",
		});
	};
	const onRemove = (item) => {
		const filterAddress =
			address && address.filter((itemAddress) => itemAddress.id != item.id);
		setAddress(filterAddress);
	};
	return (
		<div>
			<div className='address'>
				<input
					type='text'
					value={userAddress.name}
					name='name'
					placeholder='Enter Name'
					onChange={(e) =>
						setuserAddress((prev) => ({...prev, name: e.target.value}))
					}
				/>
				<input
					type='text'
					value={userAddress.address}
					name='address'
					placeholder='Enter address'
					onChange={(e) =>
						setuserAddress((prev) => ({...prev, address: e.target.value}))
					}
				/>
				<input
					type='text'
					value={userAddress.phoneNumber}
					name='phoneNumber'
					placeholder='Enter Phone Number'
					onChange={(e) =>
						setuserAddress((prev) => ({...prev, phoneNumber: e.target.value}))
					}
				/>
				<input
					type='text'
					value={userAddress.country}
					name='country'
					placeholder='Enter country'
					onChange={(e) =>
						setuserAddress((prev) => ({...prev, country: e.target.value}))
					}
				/>
			</div>
			<button onClick={btnHandler}>Submit</button>
			<DisplayAdress address={address} onRemove={onRemove} />
		</div>
	);
};

export default Address;
