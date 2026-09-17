const DesignTailwind = () => {
  return (
    <div>
      <div>
          <h1 className="bg-gray-100 font-bold text-2xl">
        Welcome back students
      </h1>
      <span>Here whats happening your course today!</span>

      </div>
    

      <div className="grid grid-cols-3 gap-4 p-4 bg-amber-50 text-lg border-amber-50">
        <div className="bg-blue-200 p-6 rounded-lg">
            <span >Average grade 📊</span>
        <h2>88%</h2>

        </div>

        <div className="bg-blue-200 p-6 rounded-lg">
           <span>Courses 📚</span>
        <h2>3</h2>

        </div>
        <div className="bg-blue-200 p-6 rounded-lg">
          <span>Study hours ⏱️</span>
        <h2>4h</h2>

        </div>
        <div className="bg-blue-200 p-6 rounded-lg">
            <span>Assignmen 📝</span>
        <h2>12h</h2>

        </div>

      </div>
      {/* courses pregress */}
      <div className="w-full">
  <div className="mb-2 flex justify-between text-sm">
    <span>Progress</span>
    <span>Html</span>
    <span>76%</span>
    
    <span>Deka abdulkadir</span>
  </div>

  <div className="h-2 w-full rounded-full bg-gray-200">
    <div
      className="h-2 rounded-full bg-blue-500"
      style={{ width: "76%" }}
    ></div>
  </div>
</div>
<div className="w-full">
  <div className="mb-2 flex justify-between text-sm">
    <span>Progress</span>
    <h2>Javascript</h2>
    <span>76%</span>
  </div>

  <div className="h-2 w-full rounded-full bg-gray-200">
    <div
      className="h-2 rounded-full bg-blue-500"
      style={{ width: "76%" }}
    ></div>
  </div>
</div>
<div className="w-full">
  <div className="mb-2 flex justify-between text-sm">
    <span>Progress</span>
    <h2>React fundementals</h2>
    <span>65%</span>
  </div>

  <div className="h-2 w-full rounded-full bg-gray-200">
    <div
      className="h-2 rounded-full bg-blue-500"
      style={{ width: "76%" }}
    ></div>
  </div>
</div>
  
    </div>
  );
};

export default DesignTailwind;