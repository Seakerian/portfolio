import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-bg animate-gradient w-full flex flex-col md:flex-row justify-between items-center h-auto md:h-24 px-6 py-8 md:py-0 gap-4 shadow-md">
      <div className="text-white">
        <span className="font-manrope">Marvin Dominguez © {currentYear}</span>
      </div>
      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com/in/marvin-dominguez-camacho-39ba95203/"
          className="text-white transition duration-200 ease-in-out hover:text-gray-800"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/Seakerian"
          className="text-white transition duration-200 ease-in-out hover:text-gray-800"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          href="https://www.instagram.com/midgetbillet/"
          className="text-white transition duration-200 ease-in-out hover:text-gray-800"
        >
          <InstagramIcon fontSize="large" />
        </a>
      </div>
    </footer>
  );
}
