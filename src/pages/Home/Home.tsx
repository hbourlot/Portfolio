import profileImage from "../../assets/profile.jpeg";
import { ProjectCard } from "../../components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import projects from "../../data/projects";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			{/* Hero */}
			<section className="flex min-h-screen w-full items-center justify-center px-6 py-24">
				<div className="flex w-full max-w-4xl flex-col items-center gap-16 sm:flex-row sm:items-start sm:justify-between">
					<div className="flex w-full max-w-md flex-col">
						<h1 className="text-6xl font-bold leading-[0.95] tracking-tight text-gray-900 sm:text-7xl">
							Hugo
							<br />
							<span className="relative inline-block">
								Bourlot
								<svg
									className="absolute -bottom-2 left-0 w-full sm:-bottom-3"
									height="14"
									viewBox="0 0 200 14"
									preserveAspectRatio="none">
									<path
										d="M2 9C40 3 80 3 100 7C130 12 160 12 198 5"
										stroke="#d4a017"
										strokeWidth="4"
										strokeLinecap="round"
										fill="none"
									/>
								</svg>
							</span>
						</h1>

						<p className="mt-8 text-lg leading-relaxed text-gray-600">
							I’m a 42 School developer who enjoys turning complex ideas into reliable, useful software.
						</p>

						<div className="mt-10 flex items-center gap-6 border-t border-gray-300 pt-6">
							<a
								href="#projects"
								className="group flex items-center gap-2 text-sm font-semibold text-gray-900">
								<span className="font-mono text-xs text-gray-400">01</span>
								View my work
								<span className="transition-transform group-hover:translate-x-1">→</span>
							</a>

							<a
								href="#contact"
								className="group flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900">
								<span className="font-mono text-xs text-gray-400">02</span>
								Get in touch
								<span className="transition-transform group-hover:translate-x-1">→</span>
							</a>
						</div>
					</div>

					<div className="relative shrink-0">
						<img
							src={profileImage}
							alt="Hugo Bourlot"
							className="h-56 w-56 -rotate-2 border-4 border-white object-cover shadow-lg sm:h-64 sm:w-64"
						/>

						<div className="absolute -bottom-8 -left-10 rotate-3 border border-gray-300 bg-white px-4 py-2 font-mono text-xs text-gray-500 shadow-sm">
							<div className="mb-1 border-b border-gray-200 pb-1 font-semibold text-gray-700">STATUS</div>
							<div>
								<span className="font-mono font-bold text-xs text-gray-900">role —</span> Web developer
								/ backend
							</div>
							<div className="max-w-[30ch]">
								<span className="whitespace-nowrap font-mono font-bold text-xs text-gray-900">
									stack —
								</span>{" "}
								react / ts / nestjs / C/C++ / Python
							</div>
							<div className="flex items-center gap-1.5">
								<span className="whitespace-nowrap font-mono font-bold text-xs text-gray-900">
									status —
								</span>
								<span className="relative flex h-1.5 w-1.5">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
									<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
								</span>
								open to work
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Projects */}
			<section
				id="projects"
				className="w-full px-6 py-24">
				<div className="mx-auto flex w-full max-w-4xl flex-col">
					<div className="mb-12 flex items-baseline gap-3 border-b border-gray-300 pb-4">
						<span className="font-mono text-xs text-gray-400">/ 01</span>
						<h2 className="text-2xl font-bold tracking-tight text-gray-900">Selected work</h2>
					</div>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						{projects
							.map((project, i) => (
								<ProjectCard
									key={project.title}
									project={project}
									index={i}
								/>
							))
							.splice(0, 3)} {/* Display only the first 3 projects */}
              {projects.length > 3 && (
                <Link
                  to="/projects"
                  className="group flex items-center gap-2 text-sm font-semibold text-gray-900 mt-4"
                >
                  View more projects
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              )}
			  
					</div>
				</div>
			</section>

			{/* Contact */}
			<section
				id="contact"
				className="w-full border-t border-gray-300 px-6 py-24">
				<div className="mx-auto flex w-full max-w-4xl flex-col items-start">
					<span className="font-mono text-xs text-gray-400">/ 02</span>
					<h2 className="mt-3 max-w-lg text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
						Got something to build? Let&apos;s talk.
					</h2>
					<p className="mt-4 max-w-md text-gray-600">
						Open to freelance work, collaborations, or just a conversation about a project you&apos;re
						thinking through.
					</p>

					<a
						href="mailto:arthur.hugo962@gmail.com"
						className="group mt-8 flex items-center gap-2 border-b-2 border-gray-900 pb-1 text-lg font-semibold text-gray-900">
						arthur.hugo962@gmail.com
						<span className="transition-transform group-hover:translate-x-1">→</span>
					</a>

					<div className="mt-10 flex gap-6 text-sm font-semibold text-gray-500">
						<a
							href="https://github.com/hbourlot"
							className="hover:text-gray-900">
							GitHub <FaGithub className="inline-block h-4 w-4" />
						</a>
						<a
							href="https://linkedin.com/in/hbourlot"
							className="hover:text-gray-900">
							LinkedIn <FaLinkedin className="inline-block h-4 w-4" />
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
