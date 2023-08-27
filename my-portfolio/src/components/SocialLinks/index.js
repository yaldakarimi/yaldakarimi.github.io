import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLinks = ({ color = "text-slate-300" }) => {
	const linkedinUrl = "https://www.linkedin.com/in/yalda-karimi/";
	const githubUrl = "https://github.com/yaldakarimi";
	const emailAddress = "yalda.karimi88@gmail.com";

	const classes = `text-2xl ${color}`;
	return (
		<div className="flex gap-4 ">
			<a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
				<FaLinkedin className={classes} />
			</a>

			<a href={githubUrl} target="_blank" rel="noopener noreferrer">
				<FaGithub className={classes} />
			</a>

			<a href={`mailto:${emailAddress}`}>
				<FaEnvelope className={classes} />
			</a>
		</div>
	);
};

export default SocialLinks;
