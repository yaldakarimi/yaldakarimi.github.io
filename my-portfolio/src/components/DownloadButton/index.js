import React from "react";

const DownloadButton = () => {
	return (
		<div className="bg-pink-700 w-fit text-white px-4 py-2 rounded-full text-sm md:text-base">
			<a href="CV.pdf" download="CV.pdf" alt="cv">
				Download
			</a>
		</div>
	);
};

export default DownloadButton;
