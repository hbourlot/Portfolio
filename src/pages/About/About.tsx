import profileImage from "../../assets/profile.jpeg";
import stackColors from "../../data/stackColors";

const timeline = [
	{
		year: "2023",
		title: "42 School",
		description:
			"Peer-to-peer software engineering program. Built projects from a Unix shell to a 3D raycasting engine, entirely in C.",
	},
	{
		year: "2024",
		title: "Full-stack projects",
		description:
			"Started building with React, TypeScript, and Next.js — shifted focus toward web development and interfaces.",
	},
	{
		year: "2025",
		title: "Systems & infra",
		description:
			"Explored Docker-based deployments and multi-service stacks (Nginx, MySQL, WordPress) with Inception.",
	},
];

const skills = [
	{ category: "Languages", items: ["TypeScript", "JavaScript", "C", "C++", "Python"] },
	{ category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
	{ category: "Backend", items: ["Node.js", "NestJS"] },
	{ category: "Infra", items: ["Docker", "Nginx", "MySQL"] },
];

export default function About() {
	return (
		<section className="w-full px-6 py-24">
			<div className="mx-auto flex w-full max-w-4xl flex-col">
				{/* Header */}
				<div className="flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<span className="font-mono text-xs text-gray-400">/ 01</span>
						<h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
							About{" "}
							<span className="relative inline-block">
								me
								<svg
									className="absolute -bottom-1 left-0 w-full"
									height="10"
									viewBox="0 0 60 10"
									preserveAspectRatio="none">
									<path
										d="M1 6C10 2 20 2 30 4C40 6 50 6 59 3"
										stroke="#d4a017"
										strokeWidth="3"
										strokeLinecap="round"
										fill="none"
									/>
								</svg>
							</span>
						</h1>
						<p className="mt-6 max-w-md text-gray-600">
							I&apos;m Hugo. I like solving hard problems, whether it&apos;s low-level work in C or building modern apps with React and TypeScript. 
							My goal is always the same: make things robust and simple to use.
						</p>
					</div>

					<img
						src={profileImage}
						alt="Hugo Bourlot"
						className="h-40 w-40 -rotate-2 shrink-0 border-4 border-white object-cover shadow-lg"
					/>
				</div>

				{/* Timeline */}
				<div className="mt-20">
					<div className="mb-10 flex items-baseline gap-3 border-b border-gray-300 pb-4">
						<span className="font-mono text-xs text-gray-400">/ 02</span>
						<h2 className="text-2xl font-bold tracking-tight text-gray-900">Journey</h2>
					</div>

					<div className="flex flex-col">
						{timeline.map((item, i) => (
							<div
								key={item.title}
								className="flex gap-6 border-b border-gray-200 py-6 first:pt-0 last:border-none">
								<span className="font-mono text-sm text-gray-400">{item.year}</span>
								<div>
									<h3 className="font-semibold text-gray-900">{item.title}</h3>
									<p className="mt-1 max-w-lg text-sm leading-relaxed text-gray-600">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Skills */}
				<div className="mt-20">
					<div className="mb-10 flex items-baseline gap-3 border-b border-gray-300 pb-4">
						<span className="font-mono text-xs text-gray-400">/ 03</span>
						<h2 className="text-2xl font-bold tracking-tight text-gray-900">Toolbox</h2>
					</div>

					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
						{skills.map((group) => (
							<div key={group.category}>
								<h3 className="font-mono text-xs font-bold text-gray-900">{group.category}</h3>
								<div className="mt-3 flex flex-wrap gap-2">
									{group.items.map((item) => (
										<span
											key={item}
											className={`rounded-full border px-3 py-1 text-sm ${
												stackColors[item] ?? "border-gray-300 bg-white text-gray-600"
											}`}>
											{item}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
