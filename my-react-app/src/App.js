import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Blog from "./pages/Blog/Index";
import Blogs from "./pages/blogs/Index";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Index";
import Navbar from "./components/common/navbar/Navbar";
import Footer from "./components/common/footer/Footer";
import Login from "./components/login_register/login/Login";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/Blogs" Component={Blogs} />
          <Route path="/contact" Component={Contact} />
          <Route path="/blog/1" Component={Blog} />
          <Route path="/Login" Component={Login} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
