import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/NavBar.module.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>My Clock</div>
      <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/digitalclock" onClick={toggleMenu}>DigitalClock</Link>
        <Link to="/stopwatch" onClick={toggleMenu}>Stopwatch</Link>
        <Link to="/timer" onClick={toggleMenu}>Timer</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
      </div>
      <div className={styles.navToggle} onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default NavBar;
