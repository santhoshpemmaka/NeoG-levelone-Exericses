import React from "react";

const Link = ({href, children}) => {
	const clickHandler = (e) => {
		e.preventDefault();
	};
	return (
		<a href={href} onClick={() => clickHandler()}>
			{" "}
			{children}
		</a>
	);
};

export default Link;
