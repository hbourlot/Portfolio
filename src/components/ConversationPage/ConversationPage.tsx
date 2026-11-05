import { useState } from "react";
import { ChatThread } from "../ChatThread/ChatThread";
import { PageHeader } from "../PageHeader/PageHeader";
import { Message } from "../Message/Message";

type ConversationPageProps = {
	title: string;
	children: React.ReactNode;
	onSend?: (text: string) => void;
};

type ChatMessage = {
	role: "user" | "hugo";
	text: string;
};

export const ConversationPage = ({ title, children, onSend }: ConversationPageProps) => {
	const [messages, setMessages] = useState<ChatMessage[]>([]);

	return (
		<>
			<div className="flex flex-col h-full">
				<PageHeader title={title} />
				<div className="flex-1 overflow-y-auto py-4 px-4">
					{/* Conversation History */}
					<div className="max-w-3xl mx-auto px-5 flex flex-col gap-3">
						{children}
						{messages.map((m, i) => (
							<Message
								key={i}
								role={m.role}>
								{m.text}
							</Message>
						))}
					</div>
				</div>
				<div className="px-4 pb-3.5">
					<ChatThread
						onSend={onSend ?? ((text) => setMessages([...messages, { role: "user", text }]))}
						className="max-w-3xl mx-auto"
					/>
				</div>
			</div>
		</>
	);
};
