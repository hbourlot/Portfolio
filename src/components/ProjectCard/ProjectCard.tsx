import stackColors from "../../data/stackColors";
import type { ProjectType } from "../../types/Project";



export const ProjectCard = ({ project, index }: { project: ProjectType; index: number }) => {
	return (
		<a
			href={project.href}
			target="_blank"
			rel="noopener noreferrer"
			className="group relative flex flex-col justify-between overflow-hidden border rounded-md 
			border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-gray-300 hover:shadow-md">
			{/* Index tab */}
			<span
				className="absolute right-0 top-0 border-b border-l border-gray-200 
			bg-gray-50 px-2.5 py-1 font-mono text-[11px] text-gray-400">
				{String(index + 1).padStart(2, "0")}
			</span>

			<div>
				<h3 className="pr-8 text-lg font-semibold text-gray-900">{project.title}</h3>
				<p className="mt-2 text-sm leading-relaxed text-gray-600">{project.description}</p>
			</div>

			<div className="mt-6 flex items-center justify-between">
				<div className="flex flex-wrap gap-2">
					{project.stack.map((tech) => (
						<span
							key={tech}
							className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${
								stackColors[tech] ?? "border-gray-300 bg-gray-50 text-gray-500"
							}`}>
							{tech}
						</span>
					))}
				</div>
				<span
					className="shrink-0 text-sm font-semibold text-gray-400 transition-transform 
				group-hover:translate-x-1 group-hover:text-gray-900">
					→
				</span>
			</div>
		</a>
	);
};
