import React from "react";
import NavBar from "./components/NavBar";
import Test from "./components/Test";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 left-0 h-full w-full"></div>
      <div className="fixed top-0 left-0 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative container mx-auto px-8">
        <NavBar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
      </div>
    </div>
  );
};

export default App;
