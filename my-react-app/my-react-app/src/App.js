import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Index';
function App() {
  return (
    <BrowserRouter>
      {/*put Navbar here  */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      {/*put footer here  */}
    </BrowserRouter>
  );
}

export default App;
