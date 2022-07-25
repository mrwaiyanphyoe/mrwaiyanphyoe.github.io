import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<div className="div-container">
			<Navbar />
			<section className="test">
				<div className="welcome">Hello, I'm Wai Yan Phyoe.</div>
				<About />
				<Project />
				<Contact />
			</section>
		</div>
	);
}

export default App;
