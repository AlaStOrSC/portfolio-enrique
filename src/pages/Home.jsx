import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  const lang = useSelector((state) => state.language.lang);

  const content = {
    es: {
      greeting: 'Hola, me llamo Enrique Macias.',
      title: 'Construyo proyectos Full-Stack.',
      description: 'Soy un desarrollador web especializado en JS y React. Actualmente estoy centrado tanto en la creación/gestión de proyectos para mi empresa como en otro tipo de proyectos personales.',
      mobileDescription: 'Desarrollador web especializado en JS y React. Actualmente trabajando en creación y gestión de proyectos para mi empresa.',
      button: '¡Mira mis proyectos!',
    },
    en: {
      greeting: 'Hello, my name is Enrique Macias.',
      title: 'I build Full-Stack projects.',
      description: "I'm a web developer specializing in React and JS. Currently, I'm focused on creating and managing projects for my business, as well as other personal projects.",
      mobileDescription: 'Web developer specializing in JS and React. Currently working on creating and managing projects for my business.',
      button: 'Check out my projects!',
    },
  };

  const texts = content[lang];

  return (
    <section className="flex items-center justify-center h-full bg-background-light dark:bg-background-dark transition-colors">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 animate-fadeIn">
        <div className="text-center md:text-left space-y-6 max-w-lg order-2 md:order-1 pb-12 md:pb-0">
          <h1 className="text-custom-mobile-greeting md:text-6xl font-bold text-text-light dark:text-text-dark leading-tight md:leading-tight">
            {texts.greeting}
          </h1>
          <h2 className="hidden md:block text-4xl md:text-5xl font-semibold text-text-light dark:text-text-dark">
            {texts.title}
          </h2>
          <p className="block md:hidden text-lg md:text-xl text-text-light dark:text-text-dark">
            {texts.mobileDescription}
          </p>
          <p className="hidden md:block text-lg md:text-xl text-text-light dark:text-text-dark">
            {texts.description}
          </p>
          <Link to="/projects">
            <button className="mt-6 px-6 py-3 text-xl font-medium bg-matching-gradient text-white rounded-lg hover:scale-105 transition-transform">
              {texts.button}
            </button>
          </Link>
        </div>
        <div className="flex-shrink-0 order-1 md:order-2">
          <img
            src={profileImage}
            alt="Enrique Macias Profile"
            className="w-32 h-32 md:w-64 md:h-64 rounded-full object-cover shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;