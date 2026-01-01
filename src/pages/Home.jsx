import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <span className={styles.greeting}>WELCOME TO MY SPACE</span>
        <h1 className={styles.mainTitle}>
          Alumi Lu <br /> 
          <span className={styles.italicText}>& Her Creative Journey</span>
        </h1>
        <div className={styles.description}>
          <p>電機工程背景的程式開發者，熱衷於將複雜的邏輯轉化為優雅的使用者體驗。</p>
          <p>在這裡，我分享技術專案、教學心得與日常札記。</p>
        </div>
        
        <div className={styles.ctaArea}>
          <Link to="/projects" className={styles.primaryBtn}>VIEW PROJECTS</Link>
          <Link to="/resume" className={styles.secondaryBtn}>TUTORING RESUME</Link>
        </div>
      </section>
      
      <div className={styles.decorativeLine}></div>
    </div>
  );
};

export default Home;