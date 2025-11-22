import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import AdminLayout from './Pages/admin/AdminLayout'
import Dashboard from './Pages/admin/Dashboard'
import AddBlog from './Pages/admin/AddBlog'
import ListBlog from './Pages/admin/ListBlog'
import Comments from './Pages/admin/comments'
import Login from './Components/admin/Login'
import 'quill/dist/quill.snow.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
      {
        path: "/blog/:id",
        element: <Blog />
      },
    ]
  },
  {
    path: "/login", // New top-level route: Direct full-page login
    element: <Login />
  },
  {
    path: "/admin",
    element: <AdminLayout />, 
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "addBlog",
        element: <AddBlog />
      },
      {
        path: "listBlog",
        element: <ListBlog/> 
      },
      {
        path: "comments",
        element: <Comments /> 
      },
      
    ]
  }
    
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
