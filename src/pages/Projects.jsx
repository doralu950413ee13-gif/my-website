import { Link } from 'react-router-dom';
import projectData from '../data/projects.json';
import styles from './List.module.css'; // 共用列表樣式

const Projects = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <span className={styles.category}>Selection of Work</span>
      <h2 className={styles.pageTitle}>Projects</h2>
    </header>
    <div className={styles.list}>
      {projectData.map(item => (
        <Link key={item.id} to={`/projects/${item.markdownId}`} className={styles.item}>
          <span className={styles.date}>{item.tags[0]}</span>
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </Link>
      ))}
    </div>
  </div>
);
export default Projects;