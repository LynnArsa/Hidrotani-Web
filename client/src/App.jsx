import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import NavbarUser from "./components/NavbarUser";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Edukasi from "./pages/Edukasi";
import Artikel from "./pages/Edukasi/Artikel";
import Forum from "./pages/Forum";
import About from "./pages/About";
import Mobile from "./pages/Mobile";
import Panduan from "./pages/Edukasi/Panduan";
import Content from "./pages/Edukasi/Panduan/Content";
import Login from "./pages/Login";
import "./index.css";
import User from "./pages/Profile";
import RegisterForm from "./pages/Register";
import LupaKatasandi from "./pages/LupaKatasandi";
import AturUlangKatasandi from "./pages/AturUlangKatasandi";
import BuatPostinganBaru from "./pages/BuatPostinganBaru";

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false); // Status pendaftaran
  const [registeredUser, setRegisteredUser] = useState(null); // Data pengguna yang terdaftar
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Status login

  const handleLogin = () => {
    setIsLoggedIn(true); // Mengatur status login menjadi true setelah login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Mengatur status login menjadi false saat logout
  };

  return (
    <AuthProvider>
      <Router>
        {/* Ganti Navbar berdasarkan status login */}
        {isLoggedIn ? <NavbarUser onLogout={handleLogout} /> : <Navbar />}

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

          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/about" element={<About />} />
          <Route path="/mobileapp" element={<Mobile />} />
          <Route path="/edukasi" element={<Edukasi />} />
          <Route path="/edukasi/artikel" element={<Artikel />} />
          <Route
            path="/user"
            element={<User registeredUser={registeredUser} />}
          />
          <Route
            path="/login"
            element={
              <Login
                isRegistered={isRegistered}
                registeredUser={registeredUser}
                setIsLoggedIn={setIsLoggedIn}
                onLogin={handleLogin} // Tambahkan callback login
              />
            }
          />
          <Route
            path="/register"
            element={
              <RegisterForm
                setIsRegistered={setIsRegistered}
                setRegisteredUser={setRegisteredUser}
              />
            }
          />
          <Route path="/lupakatasandi" element={<LupaKatasandi />} />
          <Route path="/aturulangkatasandi" element={<AturUlangKatasandi />} />
          <Route path="/buatpostinganbaru" element={<BuatPostinganBaru />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        
      </Router>
    </AuthProvider>
  );
};

export default App;
