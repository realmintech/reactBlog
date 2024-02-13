import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/home/Index';
import About from './Components/pages/about/About';
import Blogs from './Components/pages/blogs/Blogs';
import Contact from './Components/pages/contact/Contact';
import Navbar from './Components/common/navbar/Navbar';


export default function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
            <Routes>
                <Route exact path='/' Component={ Home } />
                <Route path='/components/pages/about/About'  Component={ About } />
                <Route path='/components/pages/blogs/Blogs'  Component={ Blogs } />
                <Route path='/components/pages/contact/Contact' Component={ Contact } />
            </Routes>
        </BrowserRouter>
      </div>
    );
  }
