import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import { AppProvider, useAppContext } from "./Context/AppContext";
import AdminLayout from "./Pages/admin/AdminLayout";
import Dashboard from "./Pages/admin/Dashboard";
import AddBlog from "./Pages/admin/AddBlog";
import ListBlog from "./Pages/admin/ListBlog";
import Comments from "./Pages/admin/Comments";
import Login from "./Components/admin/Login";
import "quill/dist/quill.snow.css";
import {Toaster} from 'react-hot-toast'
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
 


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/blog/:id", element: <Blog /> },
      ],
    },

    { path: "/login", element: <Login /> },

    {
      path: "/admin",
      element:  (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Dashboard /> },
        { path: "addBlog", element: <AddBlog /> },
        { path: "listBlog", element: <ListBlog /> },
        { path: "comments", element: <Comments /> },
      ],
    },
  ]);

  return (
  <AppProvider>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <RouterProvider router={router} />
  </AppProvider>
);

}

export default App;
