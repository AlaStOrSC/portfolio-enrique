import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import router from './routes';
import { toggleTheme } from './store/themeSlice';

console.log('App.jsx - VITE_EMAILJS_USER_ID:', import.meta.env.VITE_EMAILJS_USER_ID);

function App() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return <RouterProvider router={router} />;
}

export default App;