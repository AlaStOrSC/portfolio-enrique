import { useSelector } from 'react-redux';
import skillsImg from '../assets/skills2.jpg';
import { 
  DiJavascript1, 
  DiReact, 
  DiBootstrap, 
  DiHtml5, 
  DiCss3, 
  DiNodejsSmall, 
  DiMongodb, 
  DiMysql, 
  DiPostgresql, 
  DiVisualstudio, 
  DiGit, 
  DiGithubBadge, 
  DiTerminal 
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
  SiNetlify 
} from 'react-icons/si';

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
    { icon: <DiJavascript1 />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <DiReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: '#38B2AC' },
    { icon: <SiVite />, name: 'Vite', color: '#646CFF' },
    { icon: <DiBootstrap />, name: 'Bootstrap', color: '#7952B3' },
    { icon: <DiHtml5 />, name: 'HTML', color: '#E34F26' },
    { icon: <DiCss3 />, name: 'CSS', color: '#1572B6' },
    { icon: <DiNodejsSmall />, name: 'Node', color: '#339933' },
    { icon: <SiExpress />, name: 'Express', color: '#000000' },
    { icon: <DiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <SiMongodb />, name: 'Mongoose', color: '#880000' },
    { icon: <DiMysql />, name: 'SQL', color: '#4479A1' },
    { icon: <DiPostgresql />, name: 'PostgresSQL', color: '#336791' },
    { icon: <SiAuth0 />, name: 'OAuth', color: '#EB5424' },
    { icon: <SiJsonwebtokens />, name: 'JWT', color: '#D63AFF' },
    { icon: <DiVisualstudio />, name: 'Visual Code', color: '#007ACC' },
    { icon: <DiGit />, name: 'Git', color: '#F05032' },
    { icon: <DiGithubBadge />, name: 'GitHub', color: '#181717' },
    { icon: <DiTerminal />, name: 'UnixComandLine', color: '#000000' },
    { icon: <SiPostman />, name: 'Postman', color: '#FF6C37' },
    { icon: <SiPostman />, name: 'Thunder', color: '#FF6C37' },
    { icon: <SiRender />, name: 'Render', color: '#46E3B7' },
    { icon: <SiVercel />, name: 'Vercel', color: '#000000' },
    { icon: <SiNetlify />, name: 'Netlify', color: '#00C7B7' },
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
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative group flex items-center justify-center w-16 h-16"
          >
            <div className="text-4xl transition-transform group-hover:scale-110" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;