import React from 'react';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.label}>TUTORING PROFILE</span>
        <h2 className={styles.title}>家教履歷</h2>
      </header>

      <div className={styles.container}>
        {/* 左側：核心介紹 */}
        <aside className={styles.sidebar}>
          <div className={styles.profileBox}>
            <h3 className={styles.name}>Dora Lu</h3>
            <p className={styles.university}>國立臺灣大學 | 電機工程學系</p>
            <div className={styles.contact}>
              <p>📍 臺北市 / 線上教學</p>
              <p>📧 doralu@email.com</p>
            </div>
          </div>
          
          <div className={styles.expertise}>
            <h4>核心學科</h4>
            <ul>
              <li>高中數學 / 物理 / 化學</li>
              <li>國中全科培訓</li>
              <li>程式設計入門 (Python/C++)</li>
            </ul>
          </div>
        </aside>

        {/* 右側：詳細經歷 */}
        <main className={styles.mainContent}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>教學理念</h3>
            <p className={styles.text}>
              我不只是教導公式，更重視引導學生建立「邏輯框架」。
              透過電機系的邏輯訓練，我擅長將抽象的物理現象具象化，
              讓學生在理解原理後自然記住內容，而非死背。
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>教學經歷</h3>
            <div className={styles.experienceItem}>
              <span className={styles.year}>2023 - Present</span>
              <div className={styles.expDetail}>
                <h4>建國中學 / 高二物理與數學</h4>
                <p>針對段考進度加強，提升學生邏輯思維，期末成績顯著進步 20 分。</p>
              </div>
            </div>
            <div className={styles.experienceItem}>
              <span className={styles.year}>2022 - 2023</span>
              <div className={styles.expDetail}>
                <h4>北一女中 / 高三學測衝刺</h4>
                <p>複習各章節重點，陪同練習歷屆試題，學生成功錄取目標科系。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>教學特色</h3>
            <div className={styles.featureGrid}>
              <div className={styles.feature}>
                <strong>客製化講義</strong>
                <p>根據學生學校進度與理解能力，製作個人化的重點筆記。</p>
              </div>
              <div className={styles.feature}>
                <strong>課後答疑</strong>
                <p>提供線上訊息問問題服務，確保學生在練習時不卡關。</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;