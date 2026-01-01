import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styles from './PostDetail.module.css';

const PostDetail = () => {
  const { postId } = useParams(); // 取得網址上的文章 ID
  const navigate = useNavigate();
  const [content, setContent] = useState('Loading...');

  // src/pages/PostDetail.jsx
useEffect(() => {
  if (!postId || postId === "undefined") return; // 預防 undefined 路徑

  const baseUrl = import.meta.env.BASE_URL;
  fetch(`${baseUrl}posts/${postId}.md`) 
    .then((res) => {
      // 檢查回傳的是否為 HTML (代表 404)
      const contentType = res.headers.get("content-type");
      if (!res.ok || (contentType && contentType.includes("text/html"))) {
        throw new Error('Post not found');
      }
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
    <div className={styles.wrapper}>
      <article className={styles.articleCard}>
        {/* 使用 tailwind 的 prose 樣式，或者是我們自定義的 markdownContent */}
        <div className={styles.markdownContent}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;