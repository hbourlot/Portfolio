import {
	IconArrowUpRight,
	IconBrandGithub,
	IconBrandDocker,
	IconChess,
	IconCode,
	IconCube,
	IconDatabase,
	IconDeviceGamepad2,
	IconFeather,
	IconServer2,
	IconTerminal2,
	IconToolsKitchen2,
} from "@tabler/icons-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import type { Project } from "../../data/projects";

const projectIcons: Record<string, typeof IconCode> = {
	transcendence: IconChess,
	"data-pipeline": IconDatabase,
	webserv: IconServer2,
	inception: IconBrandDocker,
	minishell: IconTerminal2,
	cub3d: IconCube,
	philosophers: IconToolsKitchen2,
	"so-long": IconDeviceGamepad2,
	"flappy-bird": IconFeather,
};

type ProjectCardProps = {
	project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const { lang } = useLanguage();
	const [open, setOpen] = useState(false);
	const Icon = projectIcons[project.id] ?? IconCode;

	return (
		<div
			className={`rounded-xl border bg-surface-2 transition ${
				open ? "border-border-strong" : "border-border hover:border-border-strong"
			}`}>
			<button
				type="button"
				onClick={() => setOpen(!open)}
				aria-expanded={open}
				className="group flex w-full items-center gap-3 rounded-xl p-2 pr-3 text-left transition hover:bg-surface-1">
				<div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-1 text-text-secondary transition group-hover:bg-surface-2">
					<Icon
						className="size-4.5"
						stroke={1.5}
					/>
				</div>
				<div className="min-w-0 flex-1">
					<div className="text-[13px] font-medium text-text-primary">{project.name}</div>
					<div className={`text-[12px] text-text-muted ${open ? "" : "truncate"}`}>
						{project.description[lang]} · {project.stack.join(", ")}
					</div>
				</div>
				<IconArrowUpRight
					className={`size-4 shrink-0 text-text-muted transition duration-300 group-hover:text-text-primary ${
						open ? "rotate-180" : ""
					}`}
					stroke={1.5}
				/>
			</button>

			<div
				className={`grid transition-[grid-template-rows] duration-300 ease-out ${
					open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
				}`}>
				<div className="overflow-hidden">
					<div className="flex flex-col gap-3 px-3 pb-3 pt-1 sm:pl-15">
						<p className="font-voice text-[13px] leading-relaxed text-text-primary">
							{project.details[lang]}
						</p>
						{project.url && (
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								tabIndex={open ? 0 : -1}
								className="flex w-fit items-center gap-1.5 rounded-md border border-border px-2 py-1 text-[12px] text-text-secondary transition hover:border-border-strong hover:bg-surface-1 hover:text-text-primary">
								<IconBrandGithub
									className="size-3.5"
									stroke={1.5}
								/>
								{lang === "pt" ? "Ver no GitHub" : "View on GitHub"}
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
