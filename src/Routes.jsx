import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "post",
        element: <Post />,
      },
    ],
  },
]);

export default router;