export default function Header() {
  const scrollToSection = (id, event) => {
    const element = document.getElementById(id);
    event.preventDefault();
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="gradient-bg flex justify-center items-center animate-gradient fixed top-0 left-0 z-20 w-full shadow-md py-4 h-14">
      <ul className="flex space-x-4 p-4 md:space-x-6 lg:space-x-8">
        <li className="text-white transition duration-200 ease-in-out hover:text-gray-800 text-lg font-manrope">
          <a href="#home" onClick={(event) => scrollToSection("home", event)}>
            Home
          </a>
        </li>
        <li className="text-white transition duration-200 ease-in-out hover:text-gray-800 text-lg font-manrope">
          <a href="#about" onClick={(event) => scrollToSection("about", event)}>
            About
          </a>
        </li>
        <li className="text-white transition duration-200 ease-in-out hover:text-gray-800 text-lg font-manrope">
          <a
            href="#projects"
            onClick={(event) => scrollToSection("projects", event)}
          >
            Projects
          </a>
        </li>
        <li className="text-white transition duration-200 ease-in-out hover:text-gray-800 text-lg font-manrope">
          <a
            href="#contact"
            onClick={(event) => scrollToSection("contact", event)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
