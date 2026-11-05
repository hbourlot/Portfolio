import { useEffect, useRef } from "react";
import { Navigate, useParams } from "react-router";
import { useConversations } from "../context/ConversationContext";
import { ConversationPage, Message } from "../components";
import { useLanguage } from "../context/LanguageContext";
import { findAnswer } from "../chat/findAnswer";

export default function Chat() {
	const { lang } = useLanguage();
	const { id } = useParams();
	const { conversations, addMessage } = useConversations();
	const conversation = conversations.find((c) => c.id === id);

	const bottomRef = useRef<HTMLDivElement>(null);
	const count = conversation?.messages.length;

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [count]);

	if (!conversation)
		return (
			<Navigate
				to="/"
				replace
			/>
		);

	return (
		<ConversationPage
			title={conversation.messages[0].text.slice(0, 40)}
			onSend={(text) => {
				addMessage(conversation.id, { role: "user", text });
				addMessage(conversation.id, { role: "hugo", text: findAnswer(text, lang) });
			}}>
			{conversation.messages.map((m, i) => (
				<Message
					key={i}
					role={m.role}>
					{m.text}
				</Message>
			))}
			<div ref={bottomRef} />
		</ConversationPage>
	);
}
