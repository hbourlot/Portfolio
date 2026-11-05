import { createContext, useContext } from "react";

export type ChatMessage = { role: "user" | "hugo"; text: string };
export type Conversation = { id: string; messages: ChatMessage[] };

type ConversationValue = {
	conversations: Conversation[];
	startConversation: (text: string) => string; // returns the new id
	addMessage: (id: string, message: ChatMessage) => void;
};

export const ConversationContext = createContext<ConversationValue | null>(null);

export function useConversations() {
	const context = useContext(ConversationContext);
	if (!context) throw new Error("useConversations must be used inside ConversationContext");
	return context;
}
