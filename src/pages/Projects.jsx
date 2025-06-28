import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {
  
 const {projects} = useOutletContext()
  console.log(projects)
  return (
    <div className="pt-20">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Our Impact in Action
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            See how your contributions are creating tangible change. Here are our current projects and upcoming events.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full">Loading projects...</p>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
