import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../componenets/Login";
import SignUp from "../componenets/SignUp";
import AddTutorials from "../pages/AddTutorials";
import FindTutors from "../pages/FindTutors";
import TutorDetails from "../pages/TutorDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "find-tutors",
        element: <FindTutors/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "signup",
        element: <SignUp/>
      },
      {
        path: "addTutorials",
        element: <AddTutorials/>
      },
      {
        path: "/tutor/:details",
        element: <TutorDetails/>
      },
    ],
  },
]);
export default router;