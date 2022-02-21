import React from "react";
import "./LikeList.css";
const demoData = [
	{
		name: "Emily Richard",
		region: "Zuid Hooland",
	},
	{
		name: "Emily Richard1",
		region: "Zuid Hooland1",
	},
	{
		name: "Emily Richard12",
		region: "Zuid Hooland12",
	},
	{
		name: "Emily Richard123",
		region: "Zuid Hooland123",
	},
	{
		name: "Emily Richard1234",
		region: "Zuid Hooland1234",
	},
];

const LikeList = () => {
	return (
		<div>
			<h1>Demo Data</h1>
			{demoData &&
				demoData.length &&
				demoData.map((item) => {
					return (
						<div className='listingList'>
							<span>{item.name}</span>
							<span>{item.region}</span>
							<i className='fas fa-thumbs-up like-icon'></i>
						</div>
					);
				})}
		</div>
	);
};

export default LikeList;
