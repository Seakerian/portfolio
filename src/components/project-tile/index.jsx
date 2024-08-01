export default function ProjectTile({ project }) {
  return (
    <div className="flex flex-col flex-grow bg-white shadow-lg rounded-lg overflow-hidden max-w-xs w-full md:w-1/3 lg:w-1/4 transform transition-transform duration-300 hover:scale-105 ease-in-out">
      <img
        src={project.imageURL}
        alt={project.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow justify-between">
        <h3 className="font-merriweather mb-3 text-2xl text-gray-900">
          {project.title}
        </h3>
        <p className="text-gray-800 font-manrope mb-2">{project.description}</p>
        <div className="flex justify-center mt-2">
          <a
            href={project.url}
            className="inline-block px-4 py-2 gradient-bg animate-gradient text-white font-merriweather rounded-lg transform transition-transform duration-200 hover:scale-105 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
          </a>
        </div>
      </div>
    </div>
  );
}
