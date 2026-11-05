import { ConversationPage, JourneyTimeline, Message } from "../components";
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../i18n/texts";
import qa from "../data/qa.json";

export default function Journey() {
	const { lang } = useLanguage();
	return (
		<>
			<ConversationPage title={texts[lang].journey}>
				<Message role="user">{qa.journey.question[lang]}</Message>
				<Message role="hugo">
					<div className="whitespace-pre-line">{qa.journey.answer[lang]}</div>
				</Message>
				<JourneyTimeline />
			</ConversationPage>
		</>
	);
}
