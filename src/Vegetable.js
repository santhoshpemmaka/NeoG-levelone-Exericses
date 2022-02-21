import React from "react";

const Vegetable = ({vegetable}) => {
	return (
		<div className='Vegetables' style={{margin: "1rem"}}>
			<h2 style={{margin: "0", paddingLeft: "6rem"}}>Vegetable</h2>
			<ul
				style={{
					listStyle: "none",
				}}>
				{vegetable &&
					vegetable.map((item) => {
						return (
							<div
								key={item.name}
								style={{
									width: "120px",
									display: "flex",
									justifyContent: "space-between",
								}}>
								<li>{item.name}</li>
								<li>{item.price}</li>
							</div>
						);
					})}
			</ul>
		</div>
	);
};

export default Vegetable;
