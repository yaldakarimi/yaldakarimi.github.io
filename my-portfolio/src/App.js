import About from "./views/About";
import Resume from "views/Resume";
import Home from "views/Home";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
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
