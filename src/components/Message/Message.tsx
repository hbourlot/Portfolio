import { IconCopy, IconCheck } from "@tabler/icons-react";
import { useRef, useState } from "react";

type MessageProps = {
	role: "user" | "hugo";
	children: React.ReactNode;
};

export const Message = ({ role, children }: MessageProps) => {
	const style = role == "user" ? "bg-surface-1 p-2 rounded-md" : "font-voice";

	const [copied, setCopied] = useState(false);
	const textRef = useRef<HTMLDivElement>(null);

	const handleCopy = async () => {
		const text = textRef.current?.innerText;
		if (!text) return;
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {}
	};
	return (
		<>
			<div className={`group flex flex-col gap-1 max-w-[80%] ${role === "user" ? "self-end items-end" : ""}`}>
				<div
					ref={textRef}
					className={`text-[13px] text-text-primary ${style}`}>
					{children}
				</div>
				<button
					aria-label="Copy message"
					onClick={handleCopy}
					className="relative group/copy size-6 flex items-center justify-center rounded-md text-text-secondary opacity-0 group-hover:opacity-100 focus-visible:opacity-100 hover:bg-fill-ghost-selected transition">
					{copied ? (
						<IconCheck
							className="w-3.5 h-3.5"
							stroke={1.5}
						/>
					) : (
						<IconCopy
							className="w-3.5 h-3.5"
							stroke={1.5}
						/>
					)}
					<span className="absolute top-full mt-1 whitespace-nowrap rounded-md bg-text-primary text-surface-2 text-[11px] px-1.5 py-0.5 opacity-0 group-hover/copy:opacity-100 pointer-events-none transition">
						Copy
					</span>
				</button>
			</div>
		</>
	);
};
