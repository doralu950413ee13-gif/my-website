import { Link } from 'react-router-dom';
import projectData from '../data/projects.json';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.label}>SELECTED WORKS</span>
        <h2 className={styles.title}>專案紀錄</h2>
      </header>

      <div className={styles.grid}>
        {projectData.map((project) => (
          <Link 
            key={project.id} 
            to={`/projects/${project.markdownId}`}
            className={styles.projectItem}
          >
            <div className={styles.content}>
              <div className={styles.topRow}>
                <span className={styles.id}>0{project.id}</span>
                <div className={styles.tags}>
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.arrow}>EXPLORE →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;