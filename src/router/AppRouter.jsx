import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../componenets/Login";
import SignUp from "../componenets/SignUp";
import AddTutorials from "../pages/AddTutorials";
import FindTutors from "../pages/FindTutors";
import TutorDetails from "../pages/TutorDetails";
import MyBookedTutor from "../pages/MyBookedTutor";
import MyTutorials from "../pages/MyTutorials";
import UpdateTutorial from "../pages/UpdateTutorial";
import PrivateRoute from "./PrivateRoute";
import Categories from "../componenets/Categories";
import ErrorPage from "../componenets/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "find-tutors",
        element: <FindTutors />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "addTutorials",
        element: (
          <PrivateRoute>
            <AddTutorials />
          </PrivateRoute>
        ),
      },
      {
        path: "/tutor/:id",
        element: (
          <PrivateRoute>
            <TutorDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tutortime-server.vercel.app/tutorials/${params.id}`),
      },
      {
        path: "/bookedTutorial",
        element: (
          <PrivateRoute>
            <MyBookedTutor />,
          </PrivateRoute>
        ),
      },
      {
        path: "/myTutorials",
        element: (
          <PrivateRoute>
            <MyTutorials />,
          </PrivateRoute>
        ),
      },
      {
        path: "/updateTutorial/:id",
        element: (
          <PrivateRoute>
            <UpdateTutorial />,
          </PrivateRoute>
        ),
      },
      {
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
]);
export default router;
