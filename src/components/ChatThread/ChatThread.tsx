import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { texts } from "../../i18n/texts";
import qa from "../../data/qa.json";

type ChatThreadProps = {
	className?: string;
	onSend: (text: string) => void;
};

export const ChatThread = ({ className = "", onSend }: ChatThreadProps) => {
	const [text, setText] = useState("");
	const [highlighted, setHighlighted] = useState(0);
	const hasText = text.trim() !== "";
	const { lang } = useLanguage();

	// Typing "/" opens a menu of every question I have an answer for, filtered by what follows it.
	const menuOpen = text.startsWith("/");
	const filter = text.slice(1).trim().toLowerCase();
	const options = menuOpen
		? qa.qa.map((item) => item.questions[lang][0]).filter((q) => q.toLowerCase().includes(filter))
		: [];

	const sendText = (value: string) => {
		onSend(value);
		setText("");
		setHighlighted(0);
	};

	const send = () => {
		if (menuOpen) {
			if (options[highlighted]) sendText(options[highlighted]);
			return;
		}
		if (hasText) sendText(text.trim());
	};

	return (
		<>
			<div
				className={`relative flex flex-col gap-2 p-2 border w-full min-h-20 max-h-25 rounded-2xl border-border-strong ${className}`}>
				{menuOpen && options.length > 0 && (
					<ul
						role="listbox"
						className="absolute bottom-full left-0 right-0 mb-2 max-h-60 overflow-y-auto p-1 rounded-xl border border-border-strong bg-surface-1 shadow-sm z-10">
						{options.map((q, i) => (
							<li
								key={q}
								role="option"
								aria-selected={i === highlighted}
								onMouseEnter={() => setHighlighted(i)}
								onMouseDown={(e) => {
									e.preventDefault(); // keep focus in the textarea
									sendText(q);
								}}
								className={`px-2 py-1.5 rounded-lg text-[12px] text-text-primary cursor-pointer ${
									i === highlighted ? "bg-fill-ghost-selected" : ""
								}`}>
								{q}
							</li>
						))}
					</ul>
				)}
				<textarea
					value={text}
					onChange={(e) => {
						setText(e.target.value);
						setHighlighted(0);
					}}
					onKeyDown={(e) => {
						if (menuOpen && options.length > 0 && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
							e.preventDefault();
							const step = e.key === "ArrowDown" ? 1 : -1;
							setHighlighted((highlighted + step + options.length) % options.length);
						} else if (menuOpen && e.key === "Escape") {
							setText("");
						} else if (e.key === "Enter" && !e.shiftKey) {
							e.preventDefault();
							send();
						}
					}}
					className="resize-none outline-none bg-transparent text-text-muted text-[13px] placeholder:text-text-muted"
					placeholder={texts[lang].ask}></textarea>
				<div className="flex justify-between items-center">
					<span className="text-text-muted text-[12px]">{texts[lang].answersNote}</span>
					<button
						disabled={!hasText}
						onClick={send}
						className={`size-7 rounded-lg text-on-warning flex items-center justify-center ${
							hasText ? "bg-fill-warning hover:brightness-110 transition" : "bg-[rgb(183,108,95)]"
						}`}>
						↑
					</button>
				</div>
			</div>
		</>
	);
};
