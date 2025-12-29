import { Link } from 'react-router-dom';
import projectData from '../data/projects.json'; // 注意路徑多了一個點

const Projects = () => {
  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">專案紀錄</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <Link 
            key={project.id} 
            to={`/projects/${project.markdownId}`} 
            className="group block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">{project.title}</h3>
            <p className="text-gray-600 line-clamp-2">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects; // 必須匯出