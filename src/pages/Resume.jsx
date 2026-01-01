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
        {/* 左側：核心介紹與聯絡資訊 */}
        <aside className={styles.sidebar}>
          <div className={styles.profileBox}>
            <h3 className={styles.name}>呂向荷</h3>
            <p className={styles.university}>國立陽明交通大學 | 電機工程學系 <br/> 電資國際組</p>
            <div className={styles.contact}>
              <p>📍 臺北市 / 新竹市 / 線上</p>
              <p>🆔 LINE: 950413doralu</p>
            </div>
          </div>
          
          <div className={styles.expertise}>
            <h4>經歷</h4>
            <ul>
              <li><strong>北一女中數理資優班局長獎畢業</strong></li>
              <li>北一女中前五學期成績平均校排 27</li>
              <li>113分科錄取國立陽明交通大學電機工程學系電資國際組(可上台大資工)</li>
              <li>113分科測驗<strong>數甲滿級分</strong></li>
              <li>113分科測驗物理56級分</li>
              <li>113分科測驗化學55級分</li>
              <li>113學測：國英數A數B自社全頂標</li>
              <li>113學測英文滿級分</li>
              <li>多益 955 金色證書</li>
              
            </ul>
          </div>

        </aside>

        {/* 右側：詳細經歷與理念 */}
        <main className={styles.mainContent}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>教學理念</h3>
            <p className={styles.text}>
              目前從事家教已有兩年經驗。由於家中也有小學生與高中生，我對年紀較小的學生具備極佳耐心，能精確捕捉學生的理解盲點。我致力於根據每位學生的需求提供客製化的教學模式、讀書計畫，給予學生學業與心態上的引導。
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>教學經歷</h3>
            <div className={styles.expGrid}>
              <div className={styles.expItem}>
                <span className={styles.tag}>國中/高中</span>
                <h4>數理強化與會考/分科衝刺</h4>
                <ul>
                  <li>東興國中國九數學理化/會考衝刺</li>
                  <li>金華國中國八數學理化</li>
                  <li>陽明交大附中高二數學</li>
                  <li>建功高中高一高二數學 / 竹林高中高一高二數學</li>
                </ul>
              </div>
              <div className={styles.expItem}>
                <span className={styles.tag}>國小</span>
                <h4>數學輔導與全科伴讀</h4>
                <ul>
                  <li>仁愛國小小六數學伴讀</li>
                  <li>埔墘國小四年級短期伴讀</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>詳細學術資歷表</h3>
            <div className={styles.featureGrid}>
              <div className={styles.feature}>
                <strong>分科測驗優勢</strong>
                <p>數甲滿級分，物理與化學皆為全國頂尖（56/55級）。能帶領高中生克服最難的分科題目。</p>
              </div>
              <div className={styles.feature}>
                <strong>學測全科頂標</strong>
                <p>國、英、數A/B、自、社皆頂標。英文學測滿級分，具備指導跨領域全科的能力。</p>
              </div>
              <div className={styles.feature}>
                <strong>北一女資優背景</strong>
                <p>數理資優班局長獎畢業（班排第三），校排穩定維持在前 30 名。深知頂尖高中的學習節奏與解題技巧。</p>
              </div>
              <div className={styles.feature}>
                <strong>電機工程專業</strong>
                <p>陽明交大電機系電資國際組。具備嚴謹的邏輯思維，能將抽象理科觀念具象化。</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;