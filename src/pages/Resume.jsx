const Resume = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 italic"># 家教履歷</h2>
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <section className="mb-8">
          <h3 className="text-lg font-bold text-blue-600 mb-4 border-b pb-2">教學經歷</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">高中數學/物理家教</h4>
              <p className="text-sm text-gray-500">2023 - 現在 | 輔導超過 5 位學生</p>
            </div>
          </div>
        </section>
        
        <section>
          <h3 className="text-lg font-bold text-blue-600 mb-4 border-b pb-2">教學特色</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>善於將抽象概念具象化</li>
            <li>根據學生程度客製化進度</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;