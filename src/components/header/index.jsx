export default function Header() {
  return (
    <nav className="gradient-bg flex justify-center items-center animate-gradient fixed top-0 left-0 z-20 w-full shadow-md py-4 h-14">
      <ul className="flex space-x-4 p-4 md:space-x-6 lg:space-x-8">
        <li className="text-white transition duration-200 ease-in-out hover:text-gray-800 text-lg font-manrope">
          <a href="#home">Home</a>
        </li>
        <li className="text-white transition duration-200 ease-in-out hover:text-gray-800 text-lg font-manrope">
          <a href="#about">About</a>
        </li>
        <li className="text-white transition duration-200 ease-in-out hover:text-gray-800 text-lg font-manrope">
          <a href="#projects">Projects</a>
        </li>
        <li className="text-white transition duration-200 ease-in-out hover:text-gray-800 text-lg font-manrope">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
