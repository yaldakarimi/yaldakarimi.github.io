import { Layout, Navbar } from "components";

const Home = () => {
	return (
		<Layout title="Home">
			<div className="min-h-screen flex flex-col bg-slate-800">
				<div className="mb-4">
					<Navbar />
				</div>
				<div className="flex-grow p-4 flex flex-col justify-center items-center">
					<img
						src="yalda.png"
						className="mb-8 w-64 rounded-full shadow-lg border-white border-2 bg-slate-300 md:w-96 md:max-w-3xl"
						alt="profile"
					/>
					<h1 className="text-2xl text-center text-slate-200">
						My name is Yalda and I am a Frontend Developer.
					</h1>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
