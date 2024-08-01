import pfp from "../../assets/images/pfp.jpg";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import CoffeeIcon from "@mui/icons-material/Coffee";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export default function About() {
  return (
    <div id="about" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center md:justify-evenly">
            <img
              src={pfp}
              alt="profile-picture"
              className="rounded-full shadow-lg md:w-3/4 lg:w-3/5 p-1 gradient-bg  "
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-merriweather mb-2 text-4xl md:text-5xl text-gray-900">
              Hello there!
            </h3>
            <p className="font-manrope my-3 text-gray-900 text-lg md:text-xl font-normal">
              My name's Marvin Dominguez. I'm a teacher by trade, but a
              programmer at heart. One day I chose to turn my life around and
              decided to study{" "}
              <span className="animate-gradient gradient-text font-manrope font-semibold">
                Web Development
              </span>{" "}
              . I've loved every second of it. I'm a hardworking individual, and
              I'm always willing to learn new things. I constantly intend to
              hone my skills to do better while coding, and be the best version
              of me!
            </p>
            <p className="font-manrope my-3 text-gray-900 text-lg md:text-xl font-normal">
              I love coffee, food, manga, anime and videogames. I really enjoy a
              nice walk, and also riding my bike around the city. I'm a master
              of the arts and crafts, and I cosplay from time to time.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-8">
          <SportsEsportsIcon fontSize="large" className="text-gray-900" />
          <CoffeeIcon fontSize="large" className="text-gray-900" />
          <PedalBikeIcon fontSize="large" className="text-gray-900" />
        </div>
      </div>
    </div>
  );
}
