import "./styles/global.css"
// import "./styles/theme.css"
import Home from './pages/Home/Home'
import { Navbar } from "./components"

function App() {

  return (
    <>
    <section style={{
          backgroundColor: "#fafaf8",
          backgroundImage:
            "linear-gradient(#e5e5e0 1px, transparent 1px), linear-gradient(90deg, #e5e5e0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}>
	  <Navbar />

      <Home/>

    </section>
    </>
  )
}

export default App
