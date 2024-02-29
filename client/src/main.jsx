import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Login from "./pages/login/index.jsx";
import Signup from './pages//signup/index.jsx';
import Favorites from "./pages/favorites/index.jsx"

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
