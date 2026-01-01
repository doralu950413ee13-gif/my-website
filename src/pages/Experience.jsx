import React from 'react';
import styles from './Experience.module.css';
import expData from '../data/experience.json';

const Experience = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.label}>LEADERSHIP & ACHIEVEMENTS</span>
        <h2 className={styles.title}>經歷與軌跡</h2>
      </header>

      <div className={styles.timeline}>
        {expData.map((item) => (
          <div key={item.id} className={styles.timelineItem}>
            {/* 左側年份 */}
            <div className={styles.timeSide}>
              <span className={styles.year}>{item.period}</span>
              <span className={styles.city}>{item.location}</span>
            </div>
            
            {/* 右側內容 */}
            <div className={styles.contentSide}>
              <div className={styles.lineIndicator}>
                <div className={styles.dot}></div>
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}

        {/* 底部補充小項 */}
        <div className={styles.extraSection}>
          <h4 className={styles.extraLabel}>ADDITIONAL ROLES</h4>
          <div className={styles.extraGrid}>
            <span>NYCU OpenHouse 企劃部員</span>
            <span>交大電機系學術部部員</span>
            <span>北一女中數苗營隊輔</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;