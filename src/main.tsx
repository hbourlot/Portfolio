import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";


const router = createHashRouter([
	{
		path: "/",
		element: <App />, 
		children: [
			{ index: true, element: <Home /> },
			{ path: "/projects", element: <Projects /> },
			{ path: "/about", element: <About /> },
			{ path: "/contact", element: <Contact /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);