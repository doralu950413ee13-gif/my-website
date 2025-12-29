import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: '活動心得', path: '/experience' },
    { name: '專案紀錄', path: '/projects' },
    { name: '日常札記', path: '/notes' },
    { name: '家教履歷', path: '/resume' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          My Portfolio
        </Link>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname.startsWith(item.path) ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;