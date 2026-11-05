import { IconWorld, IconMessage2Plus, IconUser, IconFolder, IconRoute, IconMail } from "@tabler/icons-react";
import { useLanguage } from "../../context/LanguageContext";
import { NavLink } from "react-router";
import { texts } from "../../i18n/texts";
import { SidebarLink } from "./SidebarLink";
import { useSidebar } from "../../context/SidebarContext";
import { useConversations } from "../../context/ConversationContext";
import { ProfileMenu } from "./ProfileMenu";

export const Sidebar = () => {
	const { lang, setLanguage } = useLanguage();
	const { isMobile, setOpen } = useSidebar();
	const { conversations } = useConversations();
	return (
		<>
			<div className="flex flex-col h-full border-r border-r-border bg-surface-1 overflow-hidden">
				<div className="flex items-center gap-0.5 pt-2 text-[20px] font-medium pl-10 pr-1.5 pb-2.5 font-voice">
					<span>hugo.ai</span>
					<button
						aria-label="Change language"
						className="ml-auto size-7 flex items-center justify-center rounded-md text-text-secondary hover:bg-fill-ghost-selected transition"
						onClick={() => (lang === "pt" ? setLanguage("en") : setLanguage("pt"))}>
						<IconWorld
							className="w-4 h-4"
							stroke={1.5}
							title="Translate EN - PT"
						/>
					</button>
				</div>
				<div className="flex w-full px-2 ">
					<NavLink
						to="/"
						onClick={() => isMobile && setOpen(false)}
						className="flex items-center gap-2 w-full px-2 py-1.75 border border-border-strong rounded-lg text-[13px] text-text-primary hover:bg-fill-ghost-selected transition">
						<IconMessage2Plus
							className="w-3 h-3"
							stroke={2}
						/>
						{texts[lang].newChat}
					</NavLink>
				</div>
				<div className="text-text-muted text-[12px] px-4 py-1.75">{texts[lang].pages}</div>
				<SidebarLink
					to="/about"
					icon={IconUser}
					label={texts[lang].aboutMe}
				/>
				<SidebarLink
					to="/projects"
					icon={IconFolder}
					label={texts[lang].projects}
				/>
				<SidebarLink
					to="/journey"
					icon={IconRoute}
					label={texts[lang].journey}
				/>
				<SidebarLink
					to="/contact"
					icon={IconMail}
					label={texts[lang].contact}
				/>
				<div className="text-text-muted text-[12px] px-4 py-1.75 mt-2">{texts[lang].recents}</div>
				<div className="flex-1 overflow-y-auto">
					{conversations.map((c) => (
						<SidebarLink
							key={c.id}
							to={`/chat/${c.id}`}
							label={c.messages[0].text}
						/>
					))}
				</div>
				<ProfileMenu />
			</div>
		</>
	);
};
