import React from "react";

const DownloadButton = () => {
	return (
		<div className="bg-pink-700 w-fit text-white px-4 py-2 rounded-full text-sm md:text-base">
			<a href="cv-2023.pdf" download="cv-2023.pdf" alt="cv">
				Download
			</a>
		</div>
	);
};

export default DownloadButton;
