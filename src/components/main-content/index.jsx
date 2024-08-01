import About from "../about";
import Contact from "../contact";
import Home from "../home";
import Projects from "../projects";

export default function MainContent() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-pattern bg-fixed bg-center bg-cover opacity-20 z-0 aspect-auto"></div>
      <div className="relative z-10">
        <Home />
        <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-8 dark:bg-gray-600"></hr>
        <About />
        <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-8 dark:bg-gray-600"></hr>
        <Projects />
        <hr className="w-48 h-1 mx-auto my-4 border-0 rounded md:my-8 dark:bg-gray-600"></hr>
        <Contact />
      </div>
    </div>
  );
}
