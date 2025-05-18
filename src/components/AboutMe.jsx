import { useSelector } from 'react-redux';
import profileImage from '../assets/profile3.jpg';

const AboutMe = () => {
  const lang = useSelector((state) => state.language.lang);

  const content = {
    es: {
      title: 'Sobre mí',
      description: '\nSoy un desarrollador full stack especializado en el stack MERN, siempre aprendiendo nuevas tecnologías y aplicándolas en proyectos personales. Actualmente, gestiono tareas de IT en mi empresa de hostelería en Chiclana, donde he desarrollado aplicaciones para la gestión de tareas y empleados, enfocándome en el backend. También estoy creando la web oficial, priorizando el diseño y la optimización del frontend.',
    },
    en: {
      title: 'About Me',
      description: "\nI am a full stack developer specialized in the MERN stack, always learning new technologies and applying them in personal projects. Currently, I manage IT tasks for my hospitality business in Chiclana, where I have developed applications for task and employee management, focusing on the backend. I am also creating the official website, prioritizing frontend design and optimization.",
    },
  };

  const texts = content[lang];

  return (
    <div className="text-center animate-fadeIn">
      <img
        src={profileImage}
        alt="Enrique Macias Profile"
        className="w-32 h-32 rounded-full object-cover shadow-lg mx-auto mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-6">
        {texts.title}
      </h1>
      <p className="text-lg md:text-xl text-text-light dark:text-text-dark leading-relaxed whitespace-pre-line">
        {texts.description}
      </p>
    </div>
  );
};

export default AboutMe;