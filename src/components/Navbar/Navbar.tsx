"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex justify-center border-b border-gray-200/70 bg-white/70 backdrop-blur-md">
      <nav className="flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-bold tracking-tight text-gray-900">
          Portfolio
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8 text-sm font-semibold text-gray-600">
            {links.map(({ href, label }) => (
              <li key={href}>
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    `group relative py-1 transition-colors ${
                      isActive ? "text-gray-900" : "hover:text-gray-900"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-gray-900 transition-transform duration-300 ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <NavLink
            to="/contact"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Get in touch
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-gray-900 transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-gray-900 transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-gray-900 transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="absolute top-full left-0 flex w-full flex-col gap-1 border-b border-gray-200/70 bg-white/95 px-6 py-4 backdrop-blur-md md:hidden">
          {links.map(({ href, label }) => (
            <li key={href}>
              <NavLink
                to={href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white"
            >
              Get in touch
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};