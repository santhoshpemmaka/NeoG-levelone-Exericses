import React, {useState} from "react";

const DisplayAdress = (props) => {
	const {address, onRemove} = props;
	const [editOption, seteditOption] = useState(false);
	return (
		<div>
			{address &&
				address.length > 0 &&
				address.map((itemAddress) => {
					return (
						<div className='displayAddress' key={itemAddress.id}>
							<div className='display-item'>
								<label>Name:</label>
								<label>{itemAddress.name}</label>
							</div>
							<div className='display-item'>
								<label>Address:</label>
								<label>{itemAddress.address}</label>
							</div>
							<div className='display-item'>
								<label>phoneNumber:</label>
								<label>{itemAddress.phoneNumber}</label>
							</div>
							<div className='display-item'>
								<label>Country:</label>
								<label>{itemAddress.country}</label>
							</div>
							<div>
								<button>Edit</button>
								<button onClick={() => onRemove(itemAddress)}>Remove</button>
								<button>Save</button>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default DisplayAdress;
