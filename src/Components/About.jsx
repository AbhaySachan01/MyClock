import React from 'react';
import styles from '../Styles/About.module.css';

function About() {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutBox}>
        <h1>About This App</h1>
        <p>
          This Clock Application includes a Stopwatch, Digital Clock, and Timer, built with React.
          It demonstrates real-time updates, interval management, and responsive design using modular components.
        </p>
      </div>
      <div className={styles.credit}>Made with ❤️ by Abhay Sachan</div>
    </div>
  );
}

export default About;
