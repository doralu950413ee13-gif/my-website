import { Link } from 'react-router-dom';
import notesData from '../data/notes.json';

const Notes = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 italic"># 日常札記</h2>
      <div className="space-y-12">
        {notesData.map((note) => (
          <Link key={note.id} to={`/notes/${note.markdownId}`} className="group block">
            <p className="text-sm text-gray-400 mb-2">{note.date}</p>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
              {note.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {note.preview}
            </p>
            <div className="mt-4 text-sm font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
              繼續閱讀 →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Notes;