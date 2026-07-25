import { NavLink } from "react-router-dom";


const socials = [
  { label: "GitHub", href: "https://github.com/hbourlot" },
  { label: "LinkedIn", href: "https://linkedin.com/in/hbourlot" },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200/70 bg-white/70">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-row gap-5 w-full sm:w-auto">
          <span className="text-lg font-bold tracking-tight text-gray-900">
            Portfolio 
          </span>
          <p className="mt-1 text-sm text-gray-500">
            Built by Hugo Bourlot — {new Date().getFullYear()}
          </p>
        </div>

 

        <div className="flex flex-wrap gap-6 text-sm font-semibold text-gray-500">
          {socials.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-900"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};