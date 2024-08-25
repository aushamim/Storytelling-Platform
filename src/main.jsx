import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/User/Login.jsx";
import Register from "./Pages/User/Register.jsx";
import Main from "./Layout/Main.jsx";
import FourOFour from "./Pages/FourOFour/FourOFour.jsx";
import Home from "./Pages/Home/Home.jsx";
import Story from "./Pages/Story/Story.jsx";
import AdminLayout from "./Layout/AdminLayout.jsx";
import AdminHome from "./Pages/Admin/AdminHome/AdminHome.jsx";
import VisualizeStory from "./Pages/Admin/VisualizeStory/VisualizeStory.jsx";
import Users from "./Pages/Admin/Users/Users.jsx";
import Activities from "./Pages/Admin/Activities/Activities.jsx";
import ActivityDetails from "./Pages/Admin/Activities/ActivityDetails.jsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <FourOFour />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/story/:id",
        element: <Story />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminHome />,
      },
      {
        path: "/admin/visualize/:id",
        element: <VisualizeStory />,
      },
      {
        path: "/admin/users",
        element: <Users />,
      },
      {
        path: "/admin/activities/:email",
        element: <Activities />,
      },
      {
        path: "/admin/activities/:email/visualize/:id",
        element: <ActivityDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
