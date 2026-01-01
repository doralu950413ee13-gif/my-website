import React from 'react';
import styles from './Experience.module.css';
import expData from '../data/experience.json';

const Experience = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.label}>MY JOURNEY</span>
        <h2 className={styles.title}>經歷與軌跡</h2>
      </header>

      <div className={styles.timeline}>
        {expData.map((item) => (
          <div key={item.id} className={styles.timelineItem}>
            <div className={styles.timeSection}>
              <span className={styles.period}>{item.period}</span>
              <span className={styles.location}>{item.location}</span>
            </div>
            
            <div className={styles.contentSection}>
              <div className={styles.dot}></div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;