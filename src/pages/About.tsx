import { ConversationPage, Message } from "../components/index";
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../i18n/texts";
import qa from "../data/qa.json";

export default function About() {
	const { lang } = useLanguage();
	return (
		<>
			<ConversationPage title={texts[lang].aboutMe}>
				<Message role="user">{qa.intro.question[lang]}</Message>
				<Message role="hugo">
					<div className="whitespace-pre-line">{qa.intro.answer[lang]}</div>
				</Message>
			</ConversationPage>
		</>
	);
}
