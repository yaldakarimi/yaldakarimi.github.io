import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ activeClasses, inactiveClasses, linkName, href }) => {
	return (
		<NavLink
			to={href}
			className={({ isActive }) => (isActive ? activeClasses : inactiveClasses)}
		>
			{linkName}
		</NavLink>
	);
};

export default CustomNavLink;
