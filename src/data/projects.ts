import type { ProjectType } from "../types/Project";

const projects: ProjectType[] = [
	{
		title: "42 Transcendence",
		description: "A chess game built with React and TypeScript, featuring real-time multiplayer and a sleek UI.",
		stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "WebSocket"],
		href: "https://github.com/mistery5677/Trascendence",
	},
	{
		title: "42 Minishell",
		description: "A simple shell implementation in C, supporting basic commands, piping, and redirection.",
		stack: ["C"],
		href: "https://github.com/hbourlot/42-Minishell",
	},
	{
		title: "42 Cub3D",
		description:
			" A 3D game engine built in C, using raycasting techniques to render a 3D environment from a 2D map.",
		stack: ["C", "MiniLibX"],
		href: "https://github.com/hbourlot/42-Cub3d",
	},
	{
		title: "Inception",
		description:
			"A Docker-based project that sets up a full web stack, including Nginx, MySQL, WordPress, and phpMyAdmin, all orchestrated with Docker Compose.",
		stack: ["Docker", "Nginx", "MySQL", "WordPress", "phpMyAdmin"],
		href: "https://github.com/hbourlot/42-Inception",
	},
	{
		title: "So Long - PacMan Game",
		description:
			"A 42 project that implements a simple 2D game using the MiniLibX library.",
		stack: ["C", "MiniLibX"],
		href: "https://github.com/hbourlot/42-So_long",
	},
	{
		title: "Philosophers",
		description:
			"A 42 project that implements the dining philosophers problem using C and pthreads.",
		stack: ["C", "Pthreads"],
		href: "https://github.com/hbourlot/42-Philosophers",
	},
	{
		title: "Flappy Bird",
		description:
			"A simple clone of the Flappy Bird game, implemented in Python using the Pygame library.",
		stack: ["Python"],
		href: "https://github.com/hbourlot/Flappy_Bird",
	},
];

export default projects;