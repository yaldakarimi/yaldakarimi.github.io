import { Helmet } from "react-helmet";
import Footer from "./Footer";
const Layout = ({ title, children }) => {
	return (
		<div>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content="Yalda Karimi's portfolio"></meta>
			</Helmet>
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
