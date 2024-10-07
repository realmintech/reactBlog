import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Blog from './pages/Blog/Index';
import Blogs from './pages/blogs/Index';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Index';
import Footer from './components/common/footer/Footer';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import Category from './pages/category/Category';
import DashboardContent from './pages/dashboardContent/DashboardContent';
import Post from './pages/post/Post';
import Posts from './pages/posts/Posts';
import CustomNavbar from './components/common/navbar/Navbar';
import { useState, useEffect } from 'react';
import AccessDenied from './components/accessDenied/AccessDenied';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userInfo'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutWithNavbarAndFooter>
                <Home />
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route
            path="/about"
            element={
              <LayoutWithNavbarAndFooter>
                <About />
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route
            path="/blogs"
            element={
              <LayoutWithNavbarAndFooter>
                <Blogs />
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route
            path="/contact"
            element={
              <LayoutWithNavbarAndFooter>
                <Contact />
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <LayoutWithNavbarAndFooter>
                <Blog />
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {user && user.token && user?.token?.user?.role === 'admin' ? (
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardContent />} />
              <Route path="create_post" element={<Post />} />
              <Route path="sideBar" element={<Sidebar />} />
              <Route path="category" element={<Category />} />
              <Route path="posts" element={<Posts />} />
            </Route>
          ) : (
            <Route element={<AccessDenied />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

function LayoutWithNavbarAndFooter({ children }) {
  return (
    <div>
      <CustomNavbar />
      {children}
      <Footer />
    </div>
  );
}
