import { useState } from 'react';
    import { Outlet } from 'react-router-dom';
    import Navbar from './Navbar';
    import Footer from './Footer';

    export default function Layout() {
      const [darkMode, setDarkMode] = useState(false);

      const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
      };

      return (
        <div className="app">
          <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      );
    }
