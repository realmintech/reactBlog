import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Blog from './pages/Blog/Index';
import Blogs from './pages/blogs/Index';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Index';
import Navbar from './components/common/navbar/Navbar';
import Footer from './components/common/footer/Footer';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import PostForm from './components/postsForm/PostForm';
import Sidebar from './components/sidebar/Sidebar';
import BlogInfo from './components/blogInfo/BlogInfo';
import EditPost from './components/edit_post/EditPost';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/1" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="sidebar" element={<Sidebar />} />
            <Route path="blogInfo" element={<BlogInfo />} />
            <Route path="post" element={<PostForm />} />
            <Route path="edit_post" element={<EditPost />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}


