import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styles from './PostDetail.module.css';

const PostDetail = () => {
  const { postId } = useParams(); // 取得網址上的文章 ID
  const navigate = useNavigate();
  const [content, setContent] = useState('Loading...');

  useEffect(() => {
    // 根據目前的 postId 去 public/posts/ 抓取對應的 .md 檔案
    fetch(`/posts/${postId}.md`)
      .then((res) => {
        if (!res.ok) throw new Error('Post not found');
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((err) => {
        console.error(err);
        setContent('# 404 \n 抱歉，找不到該篇文章內容。');
      });
  }, [postId]);

  // 將 postId (例如 light-dance-project) 轉換為閱讀友善的標題格式
  const displayTitle = postId.replace(/-/g, ' ').toUpperCase();

  return (
    <article className={styles.articleContainer}>
      {/* 返回按鈕 */}
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        ← BACK TO LIST
      </button>

      <header className={styles.header}>
        <h1 className={styles.title}>{displayTitle}</h1>
        <div className={styles.divider}></div>
      </header>

      {/* Markdown 渲染區塊 */}
      <section className={styles.content}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </section>
    </article>
  );
};

export default PostDetail;