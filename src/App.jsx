import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Projects";
import Certificate from "./components/Certificate";
import Contact from"./Components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Certificate />
      <Contact/>
    </>
  );
}

export default App;