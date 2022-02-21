import React from "react";

const RoutePage = ({pathName, children}) => {
	return window.location.pathname === pathName ? children : null;
};

export default RoutePage;
