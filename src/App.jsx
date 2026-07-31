import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.github.com/users/${search}`
      );

      const data = await response.json();
      

      setUser(data);
    } 
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Github User Search</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={getData}>Search</button>

      {loading && <p>Loading...</p>}

      <p>{user.login}</p>
      <p>{user.followers}</p>
        <p>{user.public_repos}</p>
        <p>{user.bio}</p>
        <p>{user.avatar_url}</p>
      
    </>
  );
}

export default App;