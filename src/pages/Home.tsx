import avatar from "../assets/avatar.jpeg";
import { ChatThread } from "../components";
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../i18n/texts";
import { useNavigate } from "react-router";
import { useConversations } from "../context/ConversationContext";
import qa from "../data/qa.json";
import { IconSchool, IconBriefcase, IconBrain, IconFolder } from "@tabler/icons-react";

const suggestionItems = [
	{ id: "projects", Icon: IconFolder },
	{ id: "what-is-42", Icon: IconSchool },
	{ id: "open-to-work", Icon: IconBriefcase },
	{ id: "specialization", Icon: IconBrain },
];

export default function Home() {
	const { lang } = useLanguage();

	const navigate = useNavigate();
	const { startConversation } = useConversations();
	const handleSend = (text: string) => navigate(`/chat/${startConversation(text)}`);

	const suggestions = suggestionItems.flatMap(({ id, Icon }) => {
		const text = qa.qa.find((item) => item.id === id)?.questions[lang][0];
		return text ? [{ text, Icon }] : [];
	});

	return (
		<>
			<div className="flex justify-center min-h-full items-center">
				<div className="flex flex-col items-center gap-3.5 w-full px-7">
					<div className="flex items-center gap-3">
						<img
							src={avatar}
							className="w-11 h-11 rounded-full"
							alt="Hugo Bourlot"
						/>
						<h1 className="text-[28px] text-text-primary font-voice">{texts[lang].greeting}</h1>
					</div>
					<p className="text-text-secondary text-center text-[13px]">{texts[lang].tagline}</p>
					<ChatThread
						onSend={handleSend}
						className="max-w-115"
					/>
					<div className="flex flex-wrap justify-center gap-2 max-w-115">
						{suggestions.map(({ text, Icon }) => (
							<button
								key={text}
								onClick={() => handleSend(text)}
								className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border-strong text-[12px] text-text-primary hover:bg-fill-ghost-selected transition">
								<Icon
									className="w-3.5 h-3.5"
									stroke={1.5}
								/>
								{text}
							</button>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
