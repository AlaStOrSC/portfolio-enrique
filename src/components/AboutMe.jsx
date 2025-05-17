import { useSelector } from 'react-redux';
import profileImage from '../assets/profile3.jpg';

const AboutMe = () => {
  const lang = useSelector((state) => state.language.lang);

  const content = {
    es: {
      title: 'Sobre mí',
      description: 'Soy un desarrollador full stack, con especialidad en el pack "MERN", pero siempre estoy actualizándome y aprendiendo nuevas tecnologías poniéndolas en práctica en proyectos personales. Actualmente estoy centrado en llevar a cabo las tareas relacionadas con IT en mi empresa personal, un negocio de hostelería situado en Chiclana, he creado aplicaciones de gestión de tareas y empleados, donde he puesto en práctica todos mis conocimientos sobre el backend, además de tener en desarrollo la web oficial, donde estoy centrado en el diseño y en la optimización del frontend.',
    },
    en: {
      title: 'About Me',
      description: "I'm a Full-Stack developer with a specialization in the MERN stack, though I'm always keeping up with the latest technologies and applying them in personal projects to expand my skills. Currently, I'm focused on handling IT-related tasks for my own business—a hospitality company based in Chiclana. I've developed task and employee management applications, putting my backend expertise to work, while also working on the official website, where I'm concentrating on design and frontend optimization.",
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
      <p className="text-lg md:text-xl text-text-light dark:text-text-dark leading-relaxed">
        {texts.description}
      </p>
    </div>
  );
};

export default AboutMe;