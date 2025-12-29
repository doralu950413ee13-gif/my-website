import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // 👈 檢查這行有沒有漏掉！

const Home = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Dora <span className={styles.accent}>Portfolio</span></h1>
    <p className={styles.subtitle}>Electrical Engineer | Tutor | Web Developer</p>
    <div className={styles.line}></div>
  </div>
);
export default Home;