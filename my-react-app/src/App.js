import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/Index.jsx';
import AboutPage from './pages/about/About.jsx';
import Blogs from './pages/blogs/Index.jsx';
import ContactPage from './components/contactPage/Index.jsx';
import Blog from './pages/Blog/Index.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import DashboardContent from './pages/dashboardContent/DashboardContent.jsx';
import Post from './pages/post/Post.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Category from './pages/category/Category.jsx';
import Posts from './pages/posts/Posts.jsx';
import AccessDenied from './components/accessDenied/AccessDenied.jsx';
import CustomNavbar from './components/common/navbar/Navbar.jsx';
import Footer from './components/common/footer/Footer.jsx';



export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path='/'
            element={
              <LayoutWithNavbarAndFooter>
             <HomePage/>
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route
            path='/about'
            element={
              <LayoutWithNavbarAndFooter>
               <AboutPage/>
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route
            path='/blogs'
            element={
              <LayoutWithNavbarAndFooter>
              <Blogs/>
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route
            path='/contact'
            element={
              <LayoutWithNavbarAndFooter>
           <ContactPage/>
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route
            path='/blog/:id'
            element={
              <LayoutWithNavbarAndFooter>
               <Blog/>
              </LayoutWithNavbarAndFooter>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<DashboardContent />} />
            <Route path='create_post' element={<Post />} />
            <Route path='sideBar' element={<Sidebar />} />
            <Route path='category' element={<Category />} />
            <Route path='posts' element={<Posts />} />
          </Route>
          <Route path='*' element={<AccessDenied />} />
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
