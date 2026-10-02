import { createBrowserRouter } from "react-router";

import App from "./App";
import Home from "./RecPages/Home";
import Receipes from "./RecPages/Receipes";
import Gategory from "./RecPages/Gategory";

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
        path: "recipes",
        element: <Receipes />,
      },
      {
        path: "category",
        element: <Gategory />,
      },
    ],
  },
]);

export default router;