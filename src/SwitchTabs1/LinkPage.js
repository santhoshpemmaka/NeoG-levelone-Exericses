import React from "react";

const LinkPage = ({href, children}) => {
	const onClick = (event) => {
		event.preventDefault();
	};
	return (
		<a href={href} onClick={onClick}>
			{children}
		</a>
	);
};

export default LinkPage;
