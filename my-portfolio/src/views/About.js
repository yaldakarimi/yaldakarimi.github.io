import { Layout, Card } from "components";

const About = () => {
	return (
		<div>
			<Layout title={"About me"}>
				<div className="p-4">
					<Card className="shadow-md border border-slate-50 p-4 rounded-md bg-slate-100">
						<h1 className="font-bold text-lg mb-4">My background:</h1>
						<p className="mb-4 text-sm md:text-base">
							I'm Yalda Karimi and I am an enthusiastic self-taught frontend
							developer.
						</p>
						<p className="mb-4 text-sm md:text-base">
							I started my journey in materials engineering, but I soon realized
							my true passion was programming. For the past four years, I've
							been working as a frontend developer, specializing in creating
							user-friendly web interfaces.
						</p>
						<p className="mb-4 text-sm md:text-base">
							My engineering background has given me a unique perspective in
							problem-solving. It has allowed me to approach programming
							challenges with a blend of scientific principles and creativity,
							resulting in innovative solutions.
						</p>
						<p>
							I'm enthusiastic about continuously learning and staying updated
							in the ever-evolving tech field. My experience as a frontend
							developer has been marked by a commitment to excellence and a
							passion for crafting impactful digital experiences. I'm excited to
							keep pushing boundaries and creating meaningful solutions in this
							dynamic industry.
						</p>
					</Card>
				</div>
			</Layout>
		</div>
	);
};

export default About;
