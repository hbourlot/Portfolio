import "./styles/global.css";
// import "./styles/theme.css"
import { Outlet } from "react-router-dom";
import { Navbar } from "./components";
import { Footer } from "./components/Footer/Footer";

function App() {
	return (
		<>
			<section
				style={{
					backgroundColor: "#fafaf8",
					backgroundImage:
						"linear-gradient(#e5e5e0 1px, transparent 1px), linear-gradient(90deg, #e5e5e0 1px, transparent 1px)",
					backgroundSize: "32px 32px",
				}}>
				<Navbar />
				<Outlet />
				<Footer />
			</section>
		</>
	);
}

export default App;
