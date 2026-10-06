import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
    <h1 className="text-2xl font-bold">React blogg</h1>
     <nav className="flex items-center justify-center gap-8 bg-rose-300 p-4 text-2xl">
        <Link to="/">Home</Link>
        <Link to="/post">Post</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default App;