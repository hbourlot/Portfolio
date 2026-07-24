const projects = [
  {
    title: "42 Transcendence",
    description: "A Chess game built with React and TypeScript, featuring real-time multiplayer functionality and a sleek user interface.",
    stack: ["React", "TypeScript", "Next.js", "Nextjs"],
    href: "https://github.com/yourname/project-one",
  },
  {
    title: "42 Minishell",
    description: "A custom shell implementation in C, designed to mimic the behavior of a Unix shell, complete with command parsing and execution.",
    stack: ["C"],
    href: "https://github.com/yourname/project-two",
  },
  {
    title: "42 ",
    description: "Short one-line description of what this project does and the problem it solves.",
    stack: ["C++"],
    href: "https://github.com/yourname/project-three",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-screen w-full items-center justify-center px-6 py-24">
        <div className="flex w-full max-w-4xl flex-col items-center gap-16 sm:flex-row sm:items-start sm:justify-between">
          {/* Left: text content */}
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
                  preserveAspectRatio="none"
                >
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
              I build interfaces that feel simple, even when the problem
              underneath isn&apos;t. Based on the web, working mostly in React
              and TypeScript.
            </p>

            <div className="mt-10 flex items-center gap-6 border-t border-gray-300 pt-6">
              
              <a
                href="#projects"
                className="group flex items-center gap-2 text-sm font-semibold text-gray-900"
              >
                <span className="font-mono text-xs text-gray-400">01</span>
                View my work
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              
              <a
                href="#contact"
                className="group flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900"
              >
                <span className="font-mono text-xs text-gray-400">02</span>
                Get in touch
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right: photo + pinned status tag */}
          <div className="relative shrink-0">
            <img
              src="/your-photo.jpg"
              alt="Hugo Bourlot"
              className="h-56 w-56 -rotate-2 border-4 border-white object-cover shadow-lg sm:h-64 sm:w-64"
            />

            <div className="absolute -bottom-8 -left-10 rotate-3 border border-gray-300 bg-white px-4 py-2 font-mono text-xs text-gray-500 shadow-sm">
              <div className="mb-1 border-b border-gray-200 pb-1 font-semibold text-gray-700">
                STATUS
              </div>
              <div>
                <span className="font-mono font-bold text-xs text-gray-900">
                  role —
                </span>{" "}
                Web developer / backend
              </div>
              <div className="max-w-[30ch]">
                <span className="whitespace-nowrap font-mono font-bold text-xs text-gray-900">
                  stack —
                </span>{" "}
                react / ts / next / C/C++ / Python
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
      <section id="projects" className="w-full px-6 py-24">
        <div className="mx-auto flex w-full max-w-4xl flex-col">
          <div className="mb-12 flex items-baseline gap-3 border-b border-gray-300 pb-4">
            <span className="font-mono text-xs text-gray-400">/ 01</span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Selected work
            </h2>
          </div>

          <div className="flex flex-col">
            {projects.map((project, i) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 border-b border-gray-200 py-8 first:pt-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex gap-4">
                  <span className="font-mono text-sm text-gray-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-gray-600">
                      {project.title}
                    </h3>
                    <p className="mt-1 max-w-md text-sm text-gray-600">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-gray-300 px-2.5 py-0.5 font-mono text-[11px] text-gray-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="ml-9 shrink-0 text-sm font-semibold text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-gray-900 sm:ml-0">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="w-full border-t border-gray-300 px-6 py-24"
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col items-start">
          <span className="font-mono text-xs text-gray-400">/ 02</span>
          <h2 className="mt-3 max-w-lg text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Got something to build? Let&apos;s talk.
          </h2>
          <p className="mt-4 max-w-md text-gray-600">
            Open to freelance work, collaborations, or just a conversation
            about a project you&apos;re thinking through.
          </p>

          <a
            href="mailto:your@email.com"
            className="group mt-8 flex items-center gap-2 border-b-2 border-gray-900 pb-1 text-lg font-semibold text-gray-900"
          >
            your@email.com
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <div className="mt-10 flex gap-6 text-sm font-semibold text-gray-500">
            <a href="https://github.com/yourname" className="hover:text-gray-900">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourname" className="hover:text-gray-900">
              LinkedIn
            </a>
            <a href="https://x.com/yourname" className="hover:text-gray-900">
              X / Twitter
            </a>
          </div>
        </div>
      </section>
    </>
  );
}