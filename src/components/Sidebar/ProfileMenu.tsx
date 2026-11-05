import { useEffect, useRef, useState } from "react";
import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconMail, IconMoon, IconSelector, IconSun } from "@tabler/icons-react";
import avatar from "../../assets/avatar.jpeg";
import { useLanguage } from "../../context/LanguageContext";
import { texts } from "../../i18n/texts";

export const ProfileMenu = () => {
	const { lang } = useLanguage();
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	// index.html sets data-theme before React loads; read it as the starting value.
	const [dark, setDark] = useState(document.documentElement.dataset.theme === "dark");

	const toggleTheme = () => {
		const theme = dark ? "light" : "dark";
		document.documentElement.dataset.theme = theme;
		try {
			localStorage.setItem("theme", theme);
		} catch {
			// storage blocked: theme still switches, just isn't remembered
		}
		setDark(!dark);
	};

	// Close when clicking outside the menu or pressing Escape.
	useEffect(() => {
		if (!open) return;
		const onClick = (e: MouseEvent) => {
			if (!ref.current?.contains(e.target as Node)) setOpen(false);
		};
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
		document.addEventListener("mousedown", onClick);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onClick);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);

	const items = [
		{
			icon: IconDownload,
			label: texts[lang].downloadCv,
			href: `${import.meta.env.BASE_URL}Curriculum_Bourlot.pdf`,
			download: "Hugo_Bourlot_CV.pdf",
		},
		{ icon: IconBrandGithub, label: "GitHub", href: "https://github.com/hbourlot" },
		{ icon: IconBrandLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hbourlot" },
		{ icon: IconMail, label: "Email", href: "mailto:arthur.hugo962@gmail.com" },
	];

	return (
		<div
			ref={ref}
			className="relative p-2 border-t border-border">
			{open && (
				<div
					role="menu"
					className="absolute bottom-full left-2 right-2 mb-1 p-1 rounded-xl border border-border-strong bg-surface-2 shadow-sm">
					{items.map(({ icon: Icon, label, href, download }) => (
						<a
							key={label}
							role="menuitem"
							href={href}
							download={download}
							target={href.startsWith("http") ? "_blank" : undefined}
							rel="noopener noreferrer"
							onClick={() => setOpen(false)}
							className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[12px] text-text-primary hover:bg-fill-ghost-selected transition">
							<Icon
								className="w-3.5 h-3.5"
								stroke={1.5}
							/>
							{label}
						</a>
					))}
					<div className="my-1 border-t border-border" />
					<button
						role="menuitem"
						onClick={toggleTheme}
						className="flex items-center gap-2 w-full px-2 py-1.5 rounded-lg text-[12px] text-text-primary hover:bg-fill-ghost-selected transition">
						{dark ? (
							<IconSun
								className="w-3.5 h-3.5"
								stroke={1.5}
							/>
						) : (
							<IconMoon
								className="w-3.5 h-3.5"
								stroke={1.5}
							/>
						)}
						{dark ? texts[lang].lightMode : texts[lang].darkMode}
					</button>
				</div>
			)}
			<button
				aria-haspopup="menu"
				aria-expanded={open}
				onClick={() => setOpen(!open)}
				className="flex items-center gap-2 w-full p-1.5 rounded-lg text-left hover:bg-fill-ghost-selected transition">
				<img
					src={avatar}
					alt=""
					className="w-7 h-7 rounded-full"
				/>
				<div className="flex-1 min-w-0">
					<div className="text-[12px] font-medium text-text-primary truncate">Hugo Bourlot</div>
					<div className="text-[11px] text-text-success">{texts[lang].openToWork}</div>
				</div>
				<IconSelector
					className="w-3.5 h-3.5 text-text-muted"
					stroke={1.5}
				/>
			</button>
		</div>
	);
};
