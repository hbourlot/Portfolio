export type Project = {
	id: string;
	name: string;
	description: { en: string; pt: string };
	details: { en: string; pt: string };
	stack: string[];
	url?: string;
};

export const projects: Project[] = [
	{
		id: "transcendence",
		name: "Transcendence",
		description: { en: "Multiplayer chess platform", pt: "Plataforma de xadrez multiplayer" },
		details: {
			en: "My final 42 project, built as a team: a multiplayer chess platform. I worked on authentication, real-time games over WebSockets, matchmaking and user profiles.",
			pt: "Meu projeto final na 42, feito em equipe: uma plataforma de xadrez multiplayer. Trabalhei em autenticação, partidas em tempo real com WebSockets, matchmaking e perfis de usuário.",
		},
		stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "WebSocket"],
		url: "https://github.com/hbourlot/Transcendence",
	},
	{
		id: "data-pipeline",
		name: "Data Pipeline",
		description: { en: "2 GB of CSV data loaded into PostgreSQL", pt: "2 GB de dados CSV carregados no PostgreSQL" },
		details: {
			en: "Part of my AI, Data and Algorithms specialization. A Dockerized PostgreSQL and pgAdmin setup, with Python scripts using SQLAlchemy to load about 2 GB of CSV data. I designed typed table schemas and merged monthly tables into one dataset with SQL.",
			pt: "Parte da minha especialização em IA, Dados e Algoritmos. Um PostgreSQL com pgAdmin em Docker, com scripts Python usando SQLAlchemy para carregar cerca de 2 GB de dados CSV. Defini os esquemas das tabelas e juntei tabelas mensais num único dataset com SQL.",
		},
		stack: ["Python", "PostgreSQL", "SQLAlchemy", "Docker"],
		url: "https://github.com/hbourlot/42-PythonForDataScience",
	},
	{
		id: "webserv",
		name: "Webserv",
		description: { en: "HTTP/1.1 server from scratch", pt: "Servidor HTTP/1.1 do zero" },
		details: {
			en: "An HTTP/1.1 server we wrote from scratch in C++98, as a team of three. It parses requests, handles routing, runs CGI scripts and serves many clients at once without blocking, using poll(). It's configured through a .conf file, a bit like Nginx.",
			pt: "Um servidor HTTP/1.1 que escrevemos do zero em C++98, numa equipe de três. Ele interpreta requisições, faz o roteamento, executa scripts CGI e atende vários clientes ao mesmo tempo sem bloquear, usando poll(). A configuração é feita por um arquivo .conf, parecido com o Nginx.",
		},
		stack: ["C++"],
		url: "https://github.com/hbourlot/42-WebServer",
	},
	{
		id: "inception",
		name: "Inception",
		description: { en: "Multi-container web stack", pt: "Stack web com vários containers" },
		details: {
			en: "A full web stack with Docker Compose: Nginx, WordPress and MariaDB, each in its own container, built from my own Dockerfiles.",
			pt: "Uma stack web completa com Docker Compose: Nginx, WordPress e MariaDB, cada um no seu container, a partir dos meus próprios Dockerfiles.",
		},
		stack: ["Docker", "Nginx", "WordPress", "MariaDB"],
		url: "https://github.com/hbourlot/42-Inception",
	},
	{
		id: "minishell",
		name: "Minishell",
		description: { en: "A small version of bash", pt: "Uma versão pequena do bash" },
		details: {
			en: "A small version of bash written in C. It runs commands, handles pipes, redirections and environment variables, and deals with signals like Ctrl+C. It's where I really learned how processes and file descriptors work.",
			pt: "Uma versão pequena do bash escrita em C. Ele executa comandos, trata pipes, redirecionamentos e variáveis de ambiente, e lida com sinais como Ctrl+C. Foi onde eu realmente aprendi como funcionam processos e file descriptors.",
		},
		stack: ["C"],
		url: "https://github.com/hbourlot/42-Minishell",
	},
	{
		id: "cub3d",
		name: "Cub3D",
		description: { en: "Raycasting 3D engine", pt: "Motor 3D com raycasting" },
		details: {
			en: "A 3D maze game in C, inspired by Wolfenstein 3D. It uses raycasting to draw a 3D view from a 2D map, with the MiniLibX graphics library.",
			pt: "Um jogo de labirinto 3D em C, inspirado no Wolfenstein 3D. Ele usa raycasting para desenhar uma visão 3D a partir de um mapa 2D, com a biblioteca gráfica MiniLibX.",
		},
		stack: ["C", "MiniLibX"],
		url: "https://github.com/hbourlot/42-Cub3d",
	},
	{
		id: "philosophers",
		name: "Philosophers",
		description: { en: "Dining philosophers with threads", pt: "Jantar dos filósofos com threads" },
		details: {
			en: "The classic concurrency problem: philosophers sit around a table and need two forks to eat. Each philosopher is a thread and each fork a mutex, and the program has to avoid deadlocks and make sure nobody starves.",
			pt: "O clássico problema de concorrência: filósofos sentados numa mesa precisam de dois garfos para comer. Cada filósofo é uma thread e cada garfo um mutex, e o programa precisa evitar deadlocks e garantir que ninguém morra de fome.",
		},
		stack: ["C", "Pthreads"],
		url: "https://github.com/hbourlot/42-Philosophers",
	},
	{
		id: "so-long",
		name: "So Long",
		description: { en: "2D Pac-Man style game", pt: "Jogo 2D estilo Pac-Man" },
		details: {
			en: "A small 2D game made with MiniLibX: collect every item on the map and reach the exit. The map is read from a file and validated, including checking that the exit can actually be reached.",
			pt: "Um pequeno jogo 2D feito com MiniLibX: colete todos os itens do mapa e chegue à saída. O mapa é lido de um arquivo e validado, incluindo verificar se a saída pode mesmo ser alcançada.",
		},
		stack: ["C", "MiniLibX"],
		url: "https://github.com/hbourlot/42-So_long",
	},
	{
		id: "flappy-bird",
		name: "Flappy Bird",
		description: { en: "Flappy Bird clone", pt: "Clone do Flappy Bird" },
		details: {
			en: "A clone of Flappy Bird written in Python with Pygame: flap through the gaps between the pipes and try to beat your best score.",
			pt: "Um clone do Flappy Bird escrito em Python com Pygame: passe pelos espaços entre os canos e tente bater seu recorde.",
		},
		stack: ["Python", "Pygame"],
		url: "https://github.com/hbourlot/Flappy_Bird",
	},
];
