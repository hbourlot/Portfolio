import { ConversationPage, Message, ProjectCard } from "../components";
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../i18n/texts";
import qa from "../data/qa.json";
import { projects } from "../data/projects";

export default function Projects() {
	const { lang } = useLanguage();
	return (
		<ConversationPage title={texts[lang].projects}>
			<Message role="user">{qa.projects.question[lang]}</Message>
			<Message role="hugo">{qa.projects.answer[lang]}</Message>
			<div className="flex w-full flex-col gap-2 sm:max-w-[80%]">
				{projects.map((p) => (
					<ProjectCard
						key={p.id}
						project={p}
					/>
				))}
			</div>
		</ConversationPage>
	);
}
