import { IconSchool } from "@tabler/icons-react";
import { useLanguage } from "../../context/LanguageContext";
import { journey } from "../../data/journey";

export const JourneyTimeline = () => {
	const { lang } = useLanguage();

	return (
		<div className="w-full rounded-xl border border-border bg-surface-2 sm:max-w-[80%]">
			<div className="flex items-center gap-2 border-b border-border px-3 py-2 text-[12px] text-text-secondary">
				<IconSchool
					className="size-4"
					stroke={1.5}
				/>
				{lang === "pt" ? "Minha jornada na 42" : "My path through 42"}
			</div>

			<ol className="px-3 py-3">
				{journey.map((step, i) => {
					const last = i === journey.length - 1;
					const milestone = !step.projects || step.current;
					return (
						<li
							key={step.id}
							className="relative flex gap-3 pb-4 last:pb-0">
							{!last && <span className="absolute left-[5px] top-3 bottom-0 w-px bg-border-strong" />}
							<span className="relative mt-1 flex size-[11px] shrink-0 items-center justify-center">
								{step.current && (
									<span className="absolute inline-flex size-full animate-ping rounded-full bg-fill-warning opacity-60" />
								)}
								<span
									className={`relative size-[11px] rounded-full border-2 ${
										step.current
											? "border-fill-warning bg-fill-warning"
											: milestone
												? "border-text-primary bg-text-primary"
												: "border-border-strong bg-surface-2"
									}`}
								/>
							</span>

							<div className="flex min-w-0 flex-1 flex-col gap-1.5">
								<div className="flex items-baseline gap-2">
									<span
										className={`text-[13px] ${milestone ? "font-medium text-text-primary" : "text-text-secondary"}`}>
										{step.label[lang]}
									</span>
									{step.date && <span className="text-[11px] text-text-muted">{step.date[lang]}</span>}
								</div>
								{step.projects && (
									<div className="flex flex-wrap gap-1.5">
										{step.projects.map((p) => (
											<a
												key={p.name}
												href={p.url}
												target="_blank"
												rel="noopener noreferrer"
												className="rounded-md border border-border bg-surface-1 px-2 py-0.5 text-[12px] text-text-primary transition hover:border-border-strong hover:bg-surface-2">
												{p.name}
											</a>
										))}
									</div>
								)}
							</div>
						</li>
					);
				})}
			</ol>
		</div>
	);
};
