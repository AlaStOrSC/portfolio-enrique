import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ img, title, description, technologies, linkB, linkTextB, linkF, linkTextF, linkG, linkTextG, detailedDescription }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="bg-primary text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col min-h-[600px]">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-semibold mb-3">{title}</h3>
          <p className="text-sm mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white text-primary rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mb-4">
            {linkB && (
              <a href={linkB} target="_blank" rel="noopener noreferrer" className="text-white hover:text-matching-gradient transition-colors">
                <FiExternalLink size={20} />
              </a>
            )}
            {linkF && (
              <a href={linkF} target="_blank" rel="noopener noreferrer" className="text-white hover:text-matching-gradient transition-colors">
                <FaGithub size={20} /> <span className="text-xs ml-1">Backend</span>
              </a>
            )}
            {linkG && (
              <a href={linkG} target="_blank" rel="noopener noreferrer" className="text-white hover:text-matching-gradient transition-colors">
                <FaGithub size={20} /> <span className="text-xs ml-1">Frontend</span>
              </a>
            )}
          </div>
          <button
            onClick={openModal}
            className="px-4 py-2 bg-matching-gradient text-white rounded-lg hover:scale-105 transition-transform mt-auto"
          >
            Descripción
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md w-full max-h-[80vh] flex flex-col relative shadow-2xl border-2 border-matching-gradient">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{title}</h2>
            <div className="flex-grow overflow-y-auto max-h-96 pr-2">
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{detailedDescription}</p>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-800 dark:text-white hover:text-matching-gradient dark:hover:text-matching-gradient transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-matching-gradient text-white rounded-lg hover:scale-105 transition-transform"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;