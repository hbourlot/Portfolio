import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center px-6 py-24">
      <div className="flex max-w-md flex-col items-center text-center">
        <span className="font-mono text-xs text-gray-400">/ 404</span>

        <h1 className="mt-3 text-7xl font-bold leading-none tracking-tight text-gray-900 sm:text-8xl">
          <span className="relative inline-block">
            Lost
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

        <p className="mt-6 text-gray-600">
          This page doesn&apos;t exist, or it moved somewhere I forgot to
          update. Let&apos;s get you back on track.
        </p>

        <Link
          to="/"
          className="group mt-8 flex items-center gap-2 border-b-2 border-gray-900 pb-1 text-sm font-semibold text-gray-900"
        >
          Back to home
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}