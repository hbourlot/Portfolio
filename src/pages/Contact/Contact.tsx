import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
	return (
		<section className="flex min-h-screen w-full items-center px-6 py-24">
			<div className="mx-auto flex w-full max-w-4xl flex-col items-start">
				<span className="font-mono text-xs text-gray-400">/ 01</span>

				<h1 className="mt-3 max-w-lg text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">
					Got something to build?{" "}
					<span className="relative inline-block">
						Let&apos;s talk.
						<svg
							className="absolute -bottom-2 left-0 w-full"
							height="12"
							viewBox="0 0 260 12"
							preserveAspectRatio="none">
							<path
								d="M2 8C50 2 100 2 130 6C170 10 220 10 258 4"
								stroke="#d4a017"
								strokeWidth="3"
								strokeLinecap="round"
								fill="none"
							/>
						</svg>
					</span>
				</h1>

				<p className="mt-6 max-w-md text-lg leading-relaxed text-gray-600">
					Open to freelance work, collaborations, or just a conversation about a project you&apos;re thinking
					through. I usually reply within a day or two.
				</p>

				<a
					href="mailto:your@email.com"
					className="group mt-10 flex items-center gap-2 border-b-2 border-gray-900 pb-1 text-xl font-semibold text-gray-900">
					arthur.hugo962@gmail.com
					<span className="transition-transform group-hover:translate-x-1">→</span>
				</a>

				{/* Socials */}
				<div className="mt-16 w-full border-t border-gray-300 pt-8">
					<span className="font-mono text-xs text-gray-400">/ 02</span>
					<div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
						<a
							href="https://github.com/hbourlot"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
							GitHub <FaGithub className="inline-block h-4 w-4" />
							<span className="transition-transform group-hover:translate-x-1">→</span>
						</a>
						<a
							href="https://linkedin.com/in/yourname"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
							LinkedIn <FaLinkedin className="inline-block h-4 w-4" />
							<span className="transition-transform group-hover:translate-x-1">→</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
