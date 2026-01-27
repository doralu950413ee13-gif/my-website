import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'NOTES', path: '/notes' },
    { /*name: 'RESUME', path: '/resume' */},
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* 左側 Logo / Name */}
        <Link to="/" className={styles.logo}>
          ALUMI'S PORTFOLIO
        </Link>

        {/* 右側選單 */}
        <div className={styles.menu}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${
                location.pathname === item.path ? styles.active : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;