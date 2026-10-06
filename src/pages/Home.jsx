import { useState } from "react";
import { useLocation } from "react-router";

function Lists() {
  const location = useLocation();
  const [search, setSearch] = useState("");

  console.log(location.pathname);
  console.log(location.search);

  const list = [
    {
      id: 1,
      languages: "Spain",
      programming: "JavaScript",
      database: "SQL",
    },
    {
      id: 2,
      languages: "English",
      programming: "Python",
      database: "No SQL",
    },
  ];

  const filteredList = list.filter((data) =>
    data.programming.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-serif">Home Page</h1>

      <input
        type="text"
        placeholder="Search something"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      className="p-4 shadow-amber-50 text-2xl bg-red-300 text-black"/>

      {filteredList.map((data) => (
        <div key={data.id} className="grid grid-cols-1 font-light text-2xl">
          <p>{data.languages}</p>
          <p>{data.programming}</p>
          <p>{data.database}</p>
        </div>
      ))}
    </div>
  );
}

export default Lists;