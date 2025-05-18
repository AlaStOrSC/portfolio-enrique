import { useSelector } from 'react-redux';
import { 
  DiJavascript1, 
  DiReact, 
  DiHtml5, 
  DiCss3, 
  DiNodejsSmall, 
  DiGit, 
  DiPython, 
  DiMysql 
} from 'react-icons/di';

const SkillsSection = () => {
  const lang = useSelector((state) => state.language.lang);

  const skills = [
    { icon: <DiJavascript1 />, name: lang === 'es' ? 'Javascript' : 'Javascript' },
    { icon: <DiReact />, name: lang === 'es' ? 'React' : 'React' },
    { icon: <DiHtml5 />, name: lang === 'es' ? 'HTML' : 'HTML' },
    { icon: <DiCss3 />, name: lang === 'es' ? 'CSS' : 'CSS' },
    { icon: <DiNodejsSmall />, name: lang === 'es' ? 'Node.js' : 'Node.js' },
    { icon: <DiGit />, name: lang === 'es' ? 'Git' : 'Git' },
    { icon: <DiPython />, name: lang === 'es' ? 'Python' : 'Python' },
    { icon: <DiMysql />, name: lang === 'es' ? 'MySQL' : 'MySQL' },
  ];

  return (
    <section className="py-12 bg-background-light dark:bg-background-dark transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark text-center mb-8">
          {lang === 'es' ? 'Habilidades' : 'Skills'}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-center w-16 h-16 md:w-20 md:h-20"
            >
              <div className="text-4xl md:text-5xl text-primary dark:text-accent transition-transform group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;