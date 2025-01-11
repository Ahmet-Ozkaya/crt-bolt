import { Link } from 'react-router-dom';
    import { FiSun, FiMoon } from 'react-icons/fi';

    interface NavbarProps {
      toggleTheme: () => void;
      darkMode: boolean;
    }

    export default function Navbar({ toggleTheme, darkMode }: NavbarProps) {
      return (
        <nav className="navbar">
          <div className="container">
            <Link to="/" className="logo">StaffHire</Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/calendar">Calendar</Link>
              <Link to="/history">History</Link>
              <Link to="/account">Account</Link>
              <button onClick={toggleTheme}>
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>
            </div>
          </div>
        </nav>
      );
    }
