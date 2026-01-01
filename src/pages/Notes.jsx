import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Notes.module.css';
import notesData from '../data/notes.json';

const Notes = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.label}>JOURNAL & THOUGHTS</span>
        <h2 className={styles.title}>日常札記</h2>
      </header>

      <div className={styles.blogList}>
        {notesData.map((note) => (
          <Link 
            key={note.id} 
            to={`/notes/${note.markdownId}`} 
            className={styles.postCard}
          >
            <div className={styles.imageWrapper}>
              {/* 如果沒有圖片會顯示灰色區塊 */}
              <img src={note.image} alt={note.title} className={styles.image} />
              <div className={styles.overlay}>
                <span>READ POST</span>
              </div>
            </div>
            
            <div className={styles.postInfo}>
              <span className={styles.date}>{note.date}</span>
              <h3 className={styles.postTitle}>{note.title}</h3>
              <p className={styles.previewText}>{note.preview}</p>
              <span className={styles.more}>CONTINUE READING —</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Notes;