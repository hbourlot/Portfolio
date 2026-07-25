import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />, // shared layout (e.g. Navbar) wraps all pages
		children: [
			{ index: true, element: <Home /> },
			{ path: "/projects", element: <Projects /> },
			{ path: "/about", element: <About /> },
			{ path: "*", element: <NotFound /> }, // catch-all route for 404 pages
			{ path: "/contact", element: <Contact /> },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
