import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';

const Profile = () => {
  return (
    <section className="py-12 bg-background-light dark:bg-background-dark transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <AboutMe />
          </div>
          <div>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;