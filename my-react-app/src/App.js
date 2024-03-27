import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about/About";
import Blog from "./pages/Blog/Index";
import Blogs from "./pages/blogs/Index";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Index";
import Navbar from "./components/common/navbar/Navbar";
import Footer from "./components/common/footer/Footer";
import Login from "./components/login_register/login/Login";
import Register from "./components/login_register/register/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import PostForm from "./components/postsForm/PostForm";

export default function App() {
    const Layout = () => {
      return <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
    }
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Blogs",
        element: <Blogs />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Blog/1",
        element: <Blog />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Posts",
    element: <PostForm />,
  },
]);
return (
  <div>
    <RouterProvider router={router}></RouterProvider>
  </div>
)
}