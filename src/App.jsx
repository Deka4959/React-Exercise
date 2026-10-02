import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
      <nav className="flex items-center justify-center gap-8 bg-amber-200 px-6 py-4 shadow-md">
        <Link
          to="/"
          className="font-semibold text-gray-800 hover:text-blue-600"
        >
          Home
        </Link>

        <Link
          to="/recipes"
          className="font-semibold text-gray-800 hover:text-blue-600"
        >
          Recipes
        </Link>

        <Link
          to="/category"
          className="font-semibold text-gray-800 hover:text-blue-600"
        >
          Category
        </Link>
      </nav>

      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>
    </>
  );
}

export default App;