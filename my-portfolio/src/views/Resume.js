import {
	Layout,
	DownloadButton,
	Accordion,
	Card,
	ProgressBar,
	Navbar,
} from "components";

const Resume = () => {
	const experiences = [
		{
			title: "Frontend Developer, Taledo Gmbh, January 2022 - Present",
			summary:
				"<ul><li>Writing efficient code to implement features and functionalities based on project requirements.</li><li>Collaboration with cross-functional teams for timely project delivery.</li><li>Ensure smooth integration of UI/UX designs into the application</li><li>Conducting code reviews and providing constructive feedback to ensure code quality.</li><li>Maintaining and updating the E2E test suite, ensuring reliability as well as writing new tests.</li><li>Implementation of A/B testing, including tracking, segmentation, and treatment assignment.</li><li>Documenting technical specifications, architectural decisions, and project-related information for future reference and knowledge sharing</li><li>Presenting project updates and feature demos to both technical and non-technical stakeholders.</li><li>Conducting soft skills workshops to improve communication and collaboration within the IT team.</li></ul>",
			tags: ["JavaScript", "React", "styled-components", "Cypress", "Tailwind"],
		},

		{
			title: "Frontend Developer, Namayandeyab Co., April 2019 - December 2021",
			summary:
				"<ul><li>Implementation and development of the company's new web application</li><li>Enhancing the application performance and speed by migrating to Next.js</li><li>Maintenance of the existing web application.</li><li>Building reusable components and libraries for future utilization.</li><li>Ensure proper implementation of the UI/UX designs and functionalities.</li><li>Collaborate closely with team members to write code and resolve problems.</li></ul>",
			tags: [
				"Typescript",
				"Next.js",
				"Redux toolkit",
				"React testing library",
				"Bootstrap",
			],
		},

		{
			title:
				"Junior Frontend Developer, Namayandeyab Co., December 2018 - April 2019",
			summary:
				"<ul><li>Collaboration with team members to write code and maintain the existing web application.</li><li>Implementation of the new features of the company's product.</li><li>Collaboration with back-end developers and designers to improve usability.</li></ul>",
			tags: ["JavaScript", "jQuery", "Css", "Bootstrap"],
		},
	];
	return (
		<Layout title="My resume">
			<div className="min-h-screen flex flex-col bg-slate-800">
				<div className="mb-4">
					<Navbar />
				</div>
				<div>
					<div className="p-4">
						<Card customClasses="flex justify-between items-center gap-2 ">
							<h1 className="text-sm md:text-base">Click to download my CV</h1>
							<DownloadButton />
						</Card>
					</div>
					<div className="p-4">
						<div className="mb-8">
							<h1 className="text-lg font-semibold mb-4 text-slate-50">
								Relevant Work Experiences:
							</h1>
							{experiences.map(({ title, summary, tags }) => (
								<Accordion
									key={title}
									title={title}
									content={summary}
									tags={tags}
								/>
							))}
						</div>
						<div className="mb-8">
							<h1 className="text-lg font-semibold mb-4 text-slate-50">
								Education:
							</h1>
							<Card>
								<p className="font-semibold">
									Bachelor of Science: Materials Engineering
								</p>
								<h1 className="text-sm">
									Imam Khomeini International University (IKIU), Qazvin Iran,
									September 2007 - April 2012
								</h1>
							</Card>
						</div>
						<div>
							<h1 className="text-lg font-semibold mb-4 text-slate-50">
								Main Technical Skills:
							</h1>
							<div className="grid grid-cols-2 md:grid-cols-3">
								<ProgressBar percent="90" label="JavaScript" />
								<ProgressBar percent="80" label="TypeScript" />
								<ProgressBar percent="90" label="React" />
								<ProgressBar percent="95" label="CSS" />
								<ProgressBar percent="90" label="styled-components" />
								<ProgressBar percent="70" label="Next.js" />
								<ProgressBar percent="80" label="React testing library" />
								<ProgressBar percent="70" label="Redux toolkit" />
								<ProgressBar percent="75" label="Git" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Resume;
