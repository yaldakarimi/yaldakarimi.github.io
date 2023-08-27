import About from "./views/About";
import Resume from "views/Resume";
import Home from "views/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "components";

function App() {
	const location = useLocation();

	return (
		<div>
			{location.pathname !== "/" && (
				<Navbar navLinkColor="text-slate-800" color="text-slate-800" />
			)}
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/resume" element={<Resume />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
