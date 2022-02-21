import React from "react";

const Fruit = ({fruit}) => {
	return (
		<div className='fruit' style={{margin: "1rem"}}>
			<h2 style={{margin: "0", paddingLeft: "6rem"}}>Fruit</h2>
			<ul
				style={{
					listStyle: "none",
				}}>
				{fruit &&
					fruit.map((item) => {
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

export default Fruit;
