// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.heroHeader}>
          <span className={styles.label}>EMPATHY, LOGIC & GROWTH</span>
          <h1 className={styles.mainTitle}>
            Alumi Lu 
            <span className={styles.subtitle}>To be Competent, <br/>yet Kind.</span>
          </h1>
        </header>

        {/* 核心分欄區塊 */}
        <div className={styles.contentGrid}>
          
          {/* 左側 60%：軟性敘事 */}
          <div className={styles.leftCol}>
            <blockquote className={styles.quote}>
              「用邏輯梳理世界，<br/>用善良溫暖人心。」
            </blockquote>
            
            <div className={styles.visionBox}>
              <p className={styles.text}>
                在電機工程的嚴謹訓練下，我學會如何解決複雜的問題；
                在與人連結的過程裡，我學會如何傾聽那些未曾被訴說的需求。
              </p>
              <p className={styles.text}>
                我追求卓越，是為了擁有更強大的力量去保護與回饋他人。
                我期許自己不只是一個優秀的專業者，更是一個能為社會帶來微光的善良存在。
              </p>
            </div>

            <div className={styles.actions}>
              <Link to="/experience" className={styles.primaryBtn}>JOURNEY OF GROWTH</Link>
              <Link to="/resume" className={styles.secondaryBtn}>TUTORING MISSION</Link>
            </div>
          </div>

          {/* 右側 40%：硬性背景 */}
          <div className={styles.rightCol}>
            <div className={styles.statsCard}>
              <h3 className={styles.cardTitle}>PROFESSIONAL PILLARS</h3>
              
              <div className={styles.statItem}>
                <span className={styles.statLabel}>EDUCATION</span>
                <p className={styles.statValue}>國立陽明交通大學 電機工程學系</p>
                <p className={styles.statSub}>北一女中數理資優班 / 局長獎畢業</p>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statLabel}>ACADEMIC & COMPETITION</span>
                <p className={styles.statValue}>分科測驗數甲滿級分</p>
                <p className={styles.statSub}>全國數學建模競賽 金牌</p>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statLabel}>LEADERSHIP</span>
                <p className={styles.statValue}>清交北一校友會 創會會長</p>
                <p className={styles.statSub}>NYCU OpenHouse 企劃副召</p>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statLabel}>CROSS-DISCIPLINARY</span>
                <p className={styles.statValue}>NYCU 抓馬盃 冠軍 & 最佳女主角</p>
                <p className={styles.statSub}>極短時間掌握表演精髓的學習爆發力</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;