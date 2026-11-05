import { HashRouter, Routes, Route, Outlet } from "react-router";
import { Sidebar } from "./components";
import { Home, Projects, About, Journey, Contact, Chat } from "./pages/index";
import { useEffect, useState } from "react";
import { IconLayoutSidebar } from "@tabler/icons-react";
import { LanguageContext, type Language } from "./context/LanguageContext";
import { SidebarContext, useIsMobile } from "./context/SidebarContext";
import { ConversationContext, type ChatMessage, type Conversation } from "./context/ConversationContext";
import { findAnswer } from "./chat/findAnswer";

function Layout() {
	const isMobile = useIsMobile();
	const [open, setOpen] = useState(!isMobile);
	const [wasMobile, setWasMobile] = useState(isMobile);
	const [conversations, setConversations] = useState<Conversation[]>(() => {
		try {
			return JSON.parse(localStorage.getItem("conversations") ?? "[]");
		} catch {
			return [];
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem("conversations", JSON.stringify(conversations));
		} catch {}
	}, [conversations]);

	const startConversation = (text: string) => {
		const id = crypto.randomUUID();

		const answer: ChatMessage = { role: "hugo", text: findAnswer(text, lang) };
		setConversations((prev) => [{ id, messages: [{ role: "user", text }, answer] }, ...prev]);

		return id;
	};
	const addMessage = (id: string, message: ChatMessage) => {
		setConversations((prev) => prev.map((c) => (c.id === id ? { ...c, messages: [...c.messages, message] } : c)));
	};
	if (wasMobile !== isMobile) {
		setWasMobile(isMobile);
		setOpen(!isMobile);
	}
	const [lang, setLanguage] = useState<Language>("en");

	return (
		<ConversationContext value={{ conversations, startConversation, addMessage }}>
			<SidebarContext value={{ open, setOpen, isMobile }}>
				<LanguageContext value={{ lang, setLanguage }}>
					<div
						className={`relative grid h-screen transition-all duration-300 ${
							isMobile ? "grid-cols-[1fr]" : open ? "grid-cols-[200px_1fr]" : "grid-cols-[0px_1fr]"
						}`}>
						<button
							onClick={() => setOpen(!open)}
							aria-label={open ? "Close sidebar" : "Open sidebar"}
							className="fixed top-2 left-2 z-40 size-7 flex items-center justify-center rounded-md hover:bg-fill-ghost-selected hover:shadow-sm transition">
							<IconLayoutSidebar
								className="w-4 h-4 relative top-0.5"
								stroke={1.5}
							/>
						</button>
						<div
							className={
								isMobile
									? `fixed inset-0 z-30 transition-transform duration-300 ${open ? "" : "-translate-x-full"}`
									: "overflow-hidden"
							}>
							<Sidebar />
						</div>
						<main className="overflow-y-auto">
							<Outlet />
						</main>
					</div>
				</LanguageContext>
			</SidebarContext>
		</ConversationContext>
	);
}

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/projects"
						element={<Projects />}
					/>
					<Route
						path="/journey"
						element={<Journey />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					<Route
						path="/chat/:id"
						element={<Chat />}
					/>
				</Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
