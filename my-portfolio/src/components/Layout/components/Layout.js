import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
const Layout = ({ title, children }) => {
	const location = useLocation();
	return (
		<div>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content="Yalda Karimi's portfolio"></meta>
			</Helmet>
			<main >
				{children}
			</main>
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
