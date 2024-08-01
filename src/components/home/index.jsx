import TerminalIcon from "@mui/icons-material/Terminal";

export default function Home() {
  return (
    <div
      id="home"
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat bg-fixed aspect-auto"
      style={{
        backgroundImage:
          "url(https://ithemes.com/wp-content/uploads/2019/08/What-is-Your-Website-Design-Process-Blog-Post-Feature-Image-36119-01-1536x805.png)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white z-10 px-4 md:px-8">
        <h1 className="text-6xl md:text-7xl font-merriweather mb-2">
          Hi, I'm Marvin
        </h1>
        <h2 className="text-4xl md:text-5xl font-manrope">
          a Web Developer <TerminalIcon fontSize="large" />{" "}
          <span className="font-semibold animate-blink">|</span>{" "}
        </h2>
      </div>
    </div>
  );
}
