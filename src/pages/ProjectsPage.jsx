import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A brief description of Project 1',
    imageUrl: '/path/to/project1-image.jpg',
    details: 'Detailed information about Project 1...',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A brief description of Project 2',
    imageUrl: '/path/to/project2-image.jpg',
    details: 'Detailed information about Project 2...',
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Projects
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-600">{project.description}</p>
                  {expandedProject === project.id && (
                    <p className="mt-4">{project.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;