import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { 
  DiJavascript1, 
  DiReact, 
  DiHtml5, 
  DiCss3, 
  DiNodejsSmall, 
  DiMongodb 
} from 'react-icons/di';
import { 
  SiTailwindcss, 
  SiVite, 
  SiExpress, 
  SiMongodb, 
  SiAuth0, 
  SiJsonwebtokens, 
  SiPostman, 
  SiRender, 
  SiVercel, 
  SiRedux 
} from 'react-icons/si';

const ProjectCard = ({ img, title, description, technologies, linkB, linkTextB, linkF, linkTextF, linkG, linkTextG, detailedDescription }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lang = useSelector((state) => state.language.lang);

  const content = {
    es: {
      button: 'Ver descripción',
      skillsLabel: 'Tecnologias empleadas',
    },
    en: {
      button: 'More Details',
      skillsLabel: 'Technologies Used',
    },
  };

  const texts = content[lang];

  const techIcons = {
    Javascript: { icon: <DiJavascript1 />, color: '#F7DF1E' },
    React: { icon: <DiReact />, color: '#61DAFB' },
    TailwindCSS: { icon: <SiTailwindcss />, color: '#38B2AC' },
    Vite: { icon: <SiVite />, color: '#646CFF' },
    HTML: { icon: <DiHtml5 />, color: '#E34F26' },
    CSS: { icon: <DiCss3 />, color: '#1572B6' },
    'Node.js': { icon: <DiNodejsSmall />, color: 'red' },
    Express: { icon: <SiExpress />, color: '#000000' },
    MongoDB: { icon: <DiMongodb />, color: '#47A248' },
    Mongoose: { icon: <SiMongodb />, color: '#880000' },
    JWT: { icon: <SiJsonwebtokens />, color: '#D63AFF' },
    Redux: { icon: <SiRedux />, color: '#764ABC' },
  };

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
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">{texts.skillsLabel}</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => {
                const techData = techIcons[tech] || { icon: null, color: '#FFFFFF' };
                return (
                  <div
                    key={index}
                    className="relative group flex items-center justify-center w-9 h-9"
                  >
                    {techData.icon ? (
                      <div className="text-2xl transition-transform group-hover:scale-110" style={{ color: techData.color, fontSize: '26.4px' }}>
                        {techData.icon}
                      </div>
                    ) : (
                      <span
                        className="px-3 py-1 bg-white text-primary rounded-full text-xs font-medium"
                        style={{ color: techData.color }}
                      >
                        {tech}
                      </span>
                    )}
                    <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {tech}
                    </span>
                  </div>
                );
              })}
            </div>
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
            {texts.button}
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