type Text = { en: string; pt: string };

export type JourneyStep = {
	id: string;
	label: Text;
	date?: Text;
	projects?: { name: string; url: string }[];
	current?: boolean;
};

const gh = (repo: string) => `https://github.com/hbourlot/${repo}`;

export const journey: JourneyStep[] = [
	{
		id: "start",
		label: { en: "Joined 42 Lisboa", pt: "Entrei na 42 Lisboa" },
		date: { en: "Apr 2024", pt: "abr 2024" },
	},
	{
		id: "circle-0",
		label: { en: "Circle 0", pt: "Círculo 0" },
		projects: [{ name: "Libft", url: gh("42-Libft") }],
	},
	{
		id: "circle-1",
		label: { en: "Circle 1", pt: "Círculo 1" },
		projects: [
			{ name: "ft_printf", url: gh("42-Ft_printf") },
			{ name: "get_next_line", url: gh("42-Get_next_line") },
			{ name: "Born2beRoot", url: gh("42-BorntToBeRoot") },
		],
	},
	{
		id: "circle-2",
		label: { en: "Circle 2", pt: "Círculo 2" },
		projects: [
			{ name: "push_swap", url: gh("42-Push_swap") },
			{ name: "pipex", url: gh("42-Pipex") },
			{ name: "so_long", url: gh("42-So_long") },
		],
	},
	{
		id: "circle-3",
		label: { en: "Circle 3", pt: "Círculo 3" },
		projects: [
			{ name: "Philosophers", url: gh("42-Philosophers") },
			{ name: "Minishell", url: gh("42-Minishell") },
		],
	},
	{
		id: "circle-4",
		label: { en: "Circle 4", pt: "Círculo 4" },
		projects: [
			{ name: "NetPractice", url: gh("42-NetPractice") },
			{ name: "Cub3D", url: gh("42-Cub3d") },
			{ name: "CPP 00–04", url: gh("42-CPP") },
		],
	},
	{
		id: "circle-5",
		label: { en: "Circle 5", pt: "Círculo 5" },
		projects: [
			{ name: "Webserv", url: gh("42-WebServer") },
			{ name: "Inception", url: gh("42-Inception") },
			{ name: "CPP 05–09", url: gh("42-CPP") },
		],
	},
	{
		id: "circle-6",
		label: { en: "Circle 6", pt: "Círculo 6" },
		projects: [{ name: "Transcendence", url: "https://github.com/hbourlot/Transcendence" }],
	},
	{
		id: "graduated",
		label: { en: "Graduated", pt: "Formado" },
		date: { en: "Aug 2026", pt: "ago 2026" },
	},
	{
		id: "specialization",
		label: { en: "AI, Data & Algorithms", pt: "IA, Dados e Algoritmos" },
		date: { en: "Now", pt: "Agora" },
		projects: [{ name: "Python for Data Science", url: gh("42-PythonForDataScience") }],
		current: true,
	},
];
