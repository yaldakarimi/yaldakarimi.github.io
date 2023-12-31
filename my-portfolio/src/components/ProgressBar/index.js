import { Line } from "rc-progress";

import React, { Fragment } from "react";

const ProgressBar = ({ label, percent }) => {
	return (
		<div className="mb-2">
			<span className="inline-block mb-2 text-sm text-slate-50">{label}</span>
			<Line
				className="w-40 md:48"
				percent={percent}
				strokeWidth={4}
				strokeColor="#5eead4"
				trailWidth={4}
			/>
		</div>
	);
};

export default ProgressBar;
