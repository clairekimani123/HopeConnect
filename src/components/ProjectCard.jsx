import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }){
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-102 hover:shadow-2xl cursor-pointer border-2">
      <img
        src={project.image}
        alt={project.name}
        className="h-56 w-full object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.type}</h3>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Starting: {project.date}</h3>
        <p className="text-gray-600 flex-grow mb-4">{project.description}</p>
        <Link
            to="/donate"
            className="hover:bg-gradient-to-tl hover:from-purple-700  hover:to-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-1000 bg-blue-700
            self-center "
        >
          Support This Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
