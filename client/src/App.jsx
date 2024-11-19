import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Edukasi from './pages/Edukasi';
import Artikel from './pages/Edukasi/Artikel';
import Forum from './pages/Forum';
import About from './pages/About';
import Mobile from './pages/Mobile';
import Panduan from './pages/Edukasi/Panduan';
import Content from './pages/Edukasi/Panduan/Content';
import Login from './pages/Login';
import User from './pages/User';
import RegisterForm from './pages/Register';
import NavbarUser from './components/NavbarUser';

import './index.css';


const App = () => {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/edukasi/panduan/*"
          element={
            <div className="flex">
              <Sidebar />
              <Routes>
                <Route path="" element={<Panduan />} />
                <Route path=":babTitle" element={<Content />} />
              </Routes>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/about" element={<About />} />
        <Route path="/mobileapp"element={<Mobile />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/edukasi/artikel" element={<Artikel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/navbaruser" element={<NavbarUser/>} />

        <Route path="/home" element={<Home />} /> 

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
