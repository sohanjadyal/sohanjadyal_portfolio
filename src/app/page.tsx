import Hero from "./components/Hero";
import CoreSkills from "./components/CoreSkills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import FloatingCharacter from "./components/FloatingCharacter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Hero />
        <CoreSkills />
        <Projects />
      </main>
      <FloatingCharacter />
    </>
  );
}
