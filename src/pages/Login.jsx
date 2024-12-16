import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BiSolidHide } from "react-icons/bi";
import axios from "axios";
import { BiShow, BiHide } from "react-icons/bi"; // Import ikon BiShow dan BiHide

const Login = ({ isRegistered, registeredUser, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    // Cek apakah pengguna sudah terdaftar
    if (!isRegistered) {
      setError("Anda harus mendaftar akun terlebih dahulu.");
      return;
    }

    // Verifikasi kredensial
    if (
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      // Jika login berhasil, set status login dan navigasi ke halaman home
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      // Jika login gagal, tampilkan pesan kesalahan
      setError("Email atau kata sandi salah.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Contoh data user (ganti dengan data dari backend)

      const userData = {
        name: "John Doe",

        email: email,

        avatar: "src/assets/logo-user.png",
      };

      login(userData);

      navigate("/"); // Redirect ke halaman utama setelah login
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setError(""); // Reset error message

  //   try {
  //     // Kirim data ke backend
  //     const API_URL = process.env.REACT_APP_BACKEND_URL;
  //     const response = await axios.post(`${API_URL}/api/login`, {
  //       email,
  //       password,
  //     });

  //     // Cek respons dari backend
  //     if (response.data.success) {
  //       const userData = response.data.data; // Data user dari backend

  //       // Simpan status login dan arahkan ke halaman home
  //       setIsLoggedIn(true);
  //       login(userData); // Simpan data user di AuthContext
  //       navigate("/home");
  //     } else {
  //       // Jika login gagal, tampilkan pesan kesalahan dari backend
  //       setError(response.data.message);
  //     }
  //   } catch (err) {
  //     // Tangani error koneksi atau server
  //     setError("Terjadi kesalahan saat login. Silakan coba lagi.");
  //     console.error(err);
  //   }
  // };

  const handleRegisterRedirect = () => {
    navigate("/register"); // Arahkan ke halaman pendaftaran
  };

  return (
    <section className="bg-[#D5F0DB] min-h-screen flex items-center justify-center p-6 sm:p-12 lg:p-24 text-white">
      <div className="w-full max-w-md bg-white text-gray-800 rounded-lg p-6 sm:p-8 shadow-lg">
        <h1
          className="text-2xl sm:text-3xl font-bold mb-4 text-center "
          style={{ color: "#000" }}
        >
          Masuk
        </h1>

        <div className="flex justify-center mb-6">
          <img
            src="/src/assets/logo-hidro-tani.png"
            alt="Logo"
            className="w-16 h-16 sm:w-12 sm:h-12"
          />
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className=" mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan Email"
              required
            />
          </div>

          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-lg font-medium mb-2"
            >
              Kata Sandi
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan Kata Sandi"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-11 text-gray-500 hover:text-primary"
            >
              {showPassword ? <BiHide size={20} /> : <BiShow size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#075852] text-white px-8 py-2 rounded-lg shadow hover:bg-[#26BE71] transition duration-300"
          >
            Masuk
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Belum punya akun?{" "}
          <button
            onClick={handleRegisterRedirect}
            className=" font-medium hover:underline ml-1"
            style={{ color: "#075852" }}
          >
            Daftar Akun
          </button>
        </p>

        <p className="text-center mt-4 text-gray-600">
          <button
            onClick={() => navigate("/lupakatasandi")}
            className=" font-medium hover:underline ml-1"
            style={{ color: "#075852" }}
          >
            Lupa Kata Sandi?
          </button>
        </p>
      </div>
    </section>
  );
};

export default Login;
