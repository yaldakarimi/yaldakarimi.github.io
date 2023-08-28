import React from "react";

const Card = ({ children, customClasses }) => {
	return (
		<div
			className={`p-4 border border-slate-50 shadow-md bg-slate-50 rounded-lg ${
				customClasses && customClasses
			}`}
		>
			{children}
		</div>
	);
};

export default Card;
