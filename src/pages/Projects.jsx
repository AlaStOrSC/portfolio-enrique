import { useSelector } from 'react-redux';
import ProjectCard from '../components/ProjectCard';
import padelSocialImage from '../assets/PSNJS.jpg';
import magicShopImage from '../assets/TiendaHTMLCSS.jpg';
import portfolioImage from '../assets/Portfolio.png';

const Projects = () => {
  const lang = useSelector((state) => state.language.lang);

  const content = {
    es: {
      title: 'Mis Proyectos',
      projects: [
        {
          img: padelSocialImage,
          title: 'Red social padel (PSN)',
          description: 'Mi proyecto más ambicioso, una red social de padel, donde también podrás competir en un ranking haciendo amigos de tu nivel!',
          detailedDescription: 'Este proyecto fue un gran reto debido a la necesidad de implementar autenticación segura con JWT y sincronización en tiempo real usando WebSocket. Además, integré Nodemailer para enviar correos de notificación y Multer para la gestión de imágenes de perfil. Uno de los mayores desafíos fue optimizar la base de datos con MongoDB y Mongoose para manejar un ranking dinámico de jugadores, asegurando un rendimiento eficiente incluso con muchos usuarios.',
          technologies: ['Javascript', 'Node.js', 'MongoDB', 'Express', 'Mongoose', 'JWT', 'Multer', 'WebSocket', 'Nodemailer', 'Bcrypt', 'HTML', 'CSS'],
          linkB: 'https://padel-social-frontend.onrender.com/',
          linkTextB: 'Icono representando una web',
          linkF: 'https://github.com/AlaStOrSC/padel-social-network-backend',
          linkTextF: 'Icono Github Back',
          linkG: 'https://github.com/AlaStOrSC/padel-social-frontend',
          linkTextG: 'Icono Github Front',
        },
        {
          img: magicShopImage,
          title: 'Magic Shop',
          description: 'Uno de mis primeros proyectos, utilizando exclusivamente CSS y HTML a nivel avanzado.',
          detailedDescription: 'Magic Shop fue un ejercicio de maquetación avanzada donde me enfoqué en crear animaciones fluidas y un diseño visualmente atractivo solo con HTML y CSS. El reto principal fue asegurar que el diseño fuera responsive y que las animaciones funcionaran bien en todos los navegadores, lo que me obligó a profundizar en las técnicas de CSS como flexbox y grid.',
          technologies: ['HTML', 'CSS'],
          linkB: 'https://mirrorofkalandrafinal.netlify.app/home',
          linkTextB: 'icono representando una web',
          linkG: 'https://github.com/AlaStOrSC/Ejercicio-final-maquetacion',
          linkTextG: 'icono github Front',
        },
        {
          img: portfolioImage,
          title: 'Portfolio Personal',
          description: 'Mi portfolio personal, diseñado con un enfoque moderno y responsive.',
          detailedDescription: 'Mi portfolio personal fue un proyecto donde puse en práctica mis habilidades en React y TailwindCSS. Uno de los retos fue implementar un sistema de internacionalización (i18n) para cambiar entre español e inglés, además de crear un diseño responsive y moderno con gradientes personalizados.',
          technologies: ['React', 'Vite', 'TailwindCSS', 'Redux'],
          linkB: '#',
          linkTextB: 'Estás aquí',
        },
      ],
    },
    en: {
      title: 'My Projects',
      projects: [
        {
          img: padelSocialImage,
          title: 'Padel Social Network (PSN)',
          description: 'My most ambitious project, a padel social network where you can also compete in a ranking and make friends at your level!',
          detailedDescription: 'This project was a major challenge due to the need for secure authentication with JWT and real-time synchronization using WebSocket. I also integrated Nodemailer for sending notification emails and Multer for handling profile image uploads. One of the biggest challenges was optimizing the database with MongoDB and Mongoose to manage a dynamic player ranking, ensuring efficient performance even with a large number of users.',
          technologies: ['Javascript', 'Node.js', 'MongoDB', 'Express', 'Mongoose', 'JWT', 'Multer', 'WebSocket', 'Nodemailer', 'Bcrypt', 'HTML', 'CSS'],
          linkB: 'https://padel-social-frontend.onrender.com/',
          linkTextB: 'Website Icon',
          linkF: 'https://github.com/AlaStOrSC/padel-social-network-backend',
          linkTextF: 'GitHub Backend Icon',
          linkG: 'https://github.com/AlaStOrSC/padel-social-frontend',
          linkTextG: 'GitHub Frontend Icon',
        },
        {
          img: magicShopImage,
          title: 'Magic Shop',
          description: 'One of my first projects, using advanced CSS and HTML exclusively.',
          detailedDescription: 'Magic Shop was an advanced layout exercise where I focused on creating smooth animations and a visually appealing design using only HTML and CSS. The main challenge was ensuring the design was responsive and that the animations worked well across all browsers, which required diving deep into CSS techniques like flexbox and grid.',
          technologies: ['HTML', 'CSS'],
          linkB: 'https://mirrorofkalandrafinal.netlify.app/home',
          linkTextB: 'Website Icon',
          linkG: 'https://github.com/AlaStOrSC/Ejercicio-final-maquetacion',
          linkTextG: 'GitHub Frontend Icon',
        },
        {
          img: portfolioImage,
          title: 'Personal Portfolio',
          description: 'My personal portfolio, designed with a modern and responsive approach.',
          detailedDescription: 'My personal portfolio was a project where I applied my skills in React and TailwindCSS. One of the challenges was implementing an internationalization (i18n) system to switch between Spanish and English, as well as creating a responsive and modern design with custom gradients.',
          technologies: ['React', 'Vite', 'TailwindCSS', 'Redux'],
          linkB: '#',
          linkTextB: 'You’re Here',
        },
      ],
    },
  };

  const texts = content[lang] || content.en;

  return (
    <section className="py-12 bg-background-light dark:bg-background-dark transition-colors">
      <div className="container mx-auto px-4">
        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark text-center mb-12 animate-fadeIn">
          {texts.title}
        </h1>
        {/* Cuadrícula de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Array.isArray(texts.projects) && texts.projects.length > 0 ? (
            texts.projects.map((project, index) => (
              <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
                <ProjectCard
                  img={project.img}
                  title={project.title}
                  description={project.description}
                  detailedDescription={project.detailedDescription}
                  technologies={project.technologies}
                  linkB={project.linkB}
                  linkTextB={project.linkTextB}
                  linkF={project.linkF}
                  linkTextF={project.linkTextF}
                  linkG={project.linkG}
                  linkTextG={project.linkTextG}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-text-light dark:text-text-dark">
              No projects available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;