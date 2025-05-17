import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { setLanguage } from '../store/languageSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const lang = useSelector((state) => state.language.lang);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleThemeToggle = () => dispatch(toggleTheme());
  const handleLanguageChange = (newLang) => dispatch(setLanguage(newLang));

  return (
    <nav className="bg-generic-gradient text-text-dark p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">
          Portfolio
        </NavLink>

        <div className="hidden md:flex space-x-4 items-center">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-white font-semibold' : 'hover:bg-matching-gradient hover:text-white rounded-md px-2 py-1')}>
            Home
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'text-white font-semibold' : 'hover:bg-matching-gradient hover:text-white rounded-md px-2 py-1')}>
            Profile
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'text-white font-semibold' : 'hover:bg-matching-gradient hover:text-white rounded-md px-2 py-1')}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-white font-semibold' : 'hover:bg-matching-gradient hover:text-white rounded-md px-2 py-1')}>
            Contact
          </NavLink>
          <button onClick={handleThemeToggle} className="ml-4 p-2 rounded-full bg-secondary hover:bg-matching-gradient transition-colors">
            {isDark ? '🌞' : '🌙'}
          </button>
          <div className="ml-4">
            <button
              onClick={() => handleLanguageChange('es')}
              className={`px-2 py-1 ${lang === 'es' ? 'bg-matching-gradient' : 'bg-secondary'} rounded-l-md transition-colors`}
            >
              ES
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-2 py-1 ${lang === 'en' ? 'bg-matching-gradient' : 'bg-secondary'} rounded-r-md transition-colors`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <NavLink to="/" className="block px-4 py-2 hover:bg-matching-gradient hover:text-white rounded-md" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/profile" className="block px-4 py-2 hover:bg-matching-gradient hover:text-white rounded-md" onClick={toggleMenu}>
            Profile
          </NavLink>
          <NavLink to="/projects" className="block px-4 py-2 hover:bg-matching-gradient hover:text-white rounded-md" onClick={toggleMenu}>
            Projects
          </NavLink>
          <NavLink to="/contact" className="block px-4 py-2 hover:bg-matching-gradient hover:text-white rounded-md" onClick={toggleMenu}>
            Contact
          </NavLink>
          <div className="flex space-x-2 px-4 py-2">
            <button onClick={handleThemeToggle} className="p-2 rounded-full bg-secondary hover:bg-matching-gradient transition-colors">
              {isDark ? '🌞' : '🌙'}
            </button>
            <button
              onClick={() => handleLanguageChange('es')}
              className={`px-2 py-1 ${lang === 'es' ? 'bg-matching-gradient' : 'bg-secondary'} transition-colors rounded-md`}
            >
              ES
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-2 py-1 ${lang === 'en' ? 'bg-matching-gradient' : 'bg-secondary'} transition-colors rounded-md`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;