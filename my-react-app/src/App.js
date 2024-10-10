import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home/Index.jsx';
import AboutPage from './Pages/about/About.jsx';
import Blogs from './Pages/blogs/Index.jsx';
import ContactPage from './Components/contactPage/Index.jsx';
import Blog from './Pages/Blog/Index.jsx';
import Login from './Pages/login/Login.jsx';
import Register from './Pages/register/Register.jsx';
import Dashboard from './Pages/dashboard/Dashboard.jsx';
import DashboardContent from './Pages/dashboardContent/DashboardContent.jsx';
import Post from './Pages/post/Post.jsx';
import Sidebar from './Components/sidebar/Sidebar.jsx';
import Category from './Pages/category/Category.jsx';
import Posts from './Pages/posts/Posts.jsx';
import AccessDenied from './Components/accessDenied/AccessDenied.jsx';
import CustomNavbar from './Components/common/navbar/Navbar.jsx';
import Footer from './Components/common/footer/Footer.jsx';



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
