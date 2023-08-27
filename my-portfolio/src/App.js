import About from "./views/About";
import Resume from "views/Resume";
import Home from "views/Home";
import { Navbar } from "components";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/resume" element={<Resume />} />
			</Routes>
		</div>
	);
}

export default App;
