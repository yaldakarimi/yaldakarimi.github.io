import { useState, useRef } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { useDidUpdateEffect } from "hooks";

const Accordion = ({ title, content, initialHeight = "0px", tags }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [height, setHeight] = useState("0");
	const [chevronClass, setChevronClass] = useState("");

	let accordionContent = useRef(null);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	useDidUpdateEffect(() => {
		if (!!accordionContent.current) {
			setHeight(
				!isOpen
					? `${initialHeight}`
					: `${accordionContent.current.scrollHeight}px`
			);
		}
		setChevronClass(isOpen ? "rotate-180" : "");
	}, [isOpen]);
	return (
		<div className="bg-slate-100 p-4 mb-4 rounded-md shadow-md">
			<button
				className="w-full transition-height ease-out"
				onClick={toggleAccordion}
			>
				<div className="flex flex-col  ">
					<div className="flex justify-between mb-2 font-semibold">
						<span>{title}</span>
						<FaChevronCircleDown
							className={`text-slate-500 text-xl ${chevronClass}`}
						/>
					</div>
					<div className="flex gap-1 flex-wrap">
						{tags?.map((tag) => (
							<span className="bg-teal-700 w-fit rounded-full text-xs text-white px-2 py-1 ">
								{tag}
							</span>
						))}
					</div>
				</div>
				<div
					ref={accordionContent}
					style={{ maxHeight: `${height}` }}
					className=" overflow-hidden transition-all duration-200 ease-in-out	text-left"
				>
					<div
						className="text-sm leading-7 ml-3 mt-6"
						dangerouslySetInnerHTML={{ __html: content }}
					></div>
				</div>
			</button>
		</div>
	);
};

export default Accordion;
