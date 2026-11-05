import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin, IconDownload, IconMail } from "@tabler/icons-react";
import { ConversationPage, Message } from "../components";
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../i18n/texts";
import qa from "../data/qa.json";

export default function Contact() {
	const { lang } = useLanguage();
	const links = [
		{
			icon: IconMail,
			name: "Email",
			detail: "arthur.hugo962@gmail.com",
			href: "mailto:arthur.hugo962@gmail.com",
		},
		{
			icon: IconBrandLinkedin,
			name: "LinkedIn",
			detail: "linkedin.com/in/hbourlot",
			href: "https://www.linkedin.com/in/hbourlot",
		},
		{
			icon: IconBrandGithub,
			name: "GitHub",
			detail: "github.com/hbourlot",
			href: "https://github.com/hbourlot",
		},
		{
			icon: IconDownload,
			name: lang === "pt" ? "Currículo" : "CV",
			detail: "PDF",
			href: `${import.meta.env.BASE_URL}Curriculum_Bourlot.pdf`,
			download: "Hugo_Bourlot_CV.pdf",
		},
	];

	return (
		<ConversationPage title={texts[lang].contact}>
			<Message role="user">{qa.contact.question[lang]}</Message>
			<Message role="hugo">
				<div className="whitespace-pre-line">{qa.contact.answer[lang]}</div>
			</Message>
			<div className="flex w-full flex-col gap-2 sm:max-w-[80%]">
				{links.map(({ icon: Icon, name, detail, href, download }) => (
					<a
						key={name}
						href={href}
						download={download}
						target={href.startsWith("http") ? "_blank" : undefined}
						rel="noopener noreferrer"
						className="group flex items-center gap-3 rounded-xl border border-border bg-surface-2 p-2 pr-3 transition hover:border-border-strong hover:bg-surface-1">
						<div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-1 text-text-secondary transition group-hover:bg-surface-2">
							<Icon
								className="size-4.5"
								stroke={1.5}
							/>
						</div>
						<div className="min-w-0 flex-1">
							<div className="text-[13px] font-medium text-text-primary">{name}</div>
							<div className="truncate text-[12px] text-text-muted">{detail}</div>
						</div>
						<IconArrowUpRight
							className="size-4 shrink-0 text-text-muted transition group-hover:text-text-primary"
							stroke={1.5}
						/>
					</a>
				))}
			</div>
		</ConversationPage>
	);
}
