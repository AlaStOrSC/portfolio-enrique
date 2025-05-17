import { useSelector } from 'react-redux';
import skillsImg from '../assets/skills2.jpg';

const Skills = () => {
  const lang = useSelector((state) => state.language.lang);

  const content = {
    es: {
      skillsTitle: 'Habilidades',
    },
    en: {
      skillsTitle: 'Skills',
    },
  };

  const texts = content[lang];


  const skills = [
  'JavaScript',
  'React',
  'Tailwind',
  'Vite',
  'Bootstrap',
  'HTML',
  'CSS',
  'Node',
  'Express',
  'MongoDB',
  'Mongoose',
  'SQL',
  'PostgresSQL',
  'OAuth',
  'JWT',
  'Visual Code',
  'Git',
  'GitHub',
  'UnixComandLine',
  'Postman',
  'Thunder',
  'Render',
  'Vercel',
  'Netlify'
];

  return (
    <div className="text-center animate-fadeIn">
      <img
        src={skillsImg}
        alt="Skills"
        className="w-32 h-32 rounded-full object-cover shadow-lg mx-auto mb-6"
      />
      <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-6">
        {texts.skillsTitle}
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;