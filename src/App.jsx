import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import PostDetail from './pages/PostDetail';
import Notes from './pages/Notes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f5f1ea] text-gray-900 font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/experience/:postId" element={<PostDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:postId" element={<PostDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/notes/:postId" element={<PostDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;