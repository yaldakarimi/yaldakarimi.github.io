import { SocialLinks, CustomNavLink } from "components";

const Navbar = ({ navLinkColor, color }) => {
	const navLinkActiveClasses =
		"active text-pink-700 border-b-2 border-pink-700 pb-2 font-bold";
	const navLinkInactiveClasses = `text-slate-200 hover:text-slate-400 ${
		!!navLinkColor && navLinkColor
	}`;

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "About me", href: "/about" },
		{ name: "Resume", href: "/resume" },
	];
	return (
		<nav
			className={"flex justify-between items-center px-6 py-4 md:px-10 md:py-8"}
		>
			<ul className="flex gap-3">
				{navLinks.map(({ name, href }) => (
					<li className="text-sm" key={name}>
						<CustomNavLink
							href={href}
							linkName={name}
							activeClasses={navLinkActiveClasses}
							inactiveClasses={navLinkInactiveClasses}
						/>
					</li>
				))}
			</ul>
			<div>
				<SocialLinks color={color} />
			</div>
		</nav>
	);
};

export default Navbar;
