// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Login = ({ isRegistered, registeredUser, setIsLoggedIn }) => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { login } = useAuth();

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setError(""); // Reset error message

//     // Cek apakah pengguna sudah terdaftar
//     if (!isRegistered) {
//       setError("Anda harus mendaftar akun terlebih dahulu.");
//       return;
//     }

//     // Verifikasi kredensial
//     if (
//       email === registeredUser.email &&
//       password === registeredUser.password
//     ) {
//       // Jika login berhasil, set status login dan navigasi ke halaman home
//       setIsLoggedIn(true);
//       navigate("/home");
//     } else {
//       // Jika login gagal, tampilkan pesan kesalahan
//       setError("Email atau kata sandi salah.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Contoh data user (ganti dengan data dari backend)

//       const userData = {
//         name: "John Doe",

//         email: email,

//         avatar: "src/assets/logo-user.png",
//       };

//       login(userData);

//       navigate("/"); // Redirect ke halaman utama setelah login
//     } catch (error) {
//       console.error("Login failed", error);
//     }
//   };

//   const handleRegisterRedirect = () => {
//     navigate("/register"); // Arahkan ke halaman pendaftaran
//   };

//   return (
//     <section className="bg-[#D5F0DB] min-h-screen flex items-center justify-center p-6 sm:p-12 lg:p-24 text-white">
//       <div className="w-full max-w-md bg-white text-gray-800 rounded-lg p-6 sm:p-8 shadow-lg">
//         <h1
//           className="text-2xl sm:text-3xl font-bold mb-4 text-center "
//           style={{ color: "#000" }}
//         >
//           Masuk
//         </h1>

//         <div className="flex justify-center mb-6">
//           <img
//             src="/src/assets/logo-hidro-tani.png"
//             alt="Logo"
//             className="w-16 h-16 sm:w-12 sm:h-12"
//           />
//         </div>

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form onSubmit={handleLogin}>
//           <div className=" mb-4">
//             <label htmlFor="email" className="block text-lg font-medium mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//               placeholder="Masukkan Email"
//               required
//             />
//           </div>

//           <div className="mb-6 relative">
//             <label
//               htmlFor="password"
//               className="block text-lg font-medium mb-2"
//             >
//               Kata Sandi
//             </label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//               placeholder="Masukkan Kata Sandi"
//               required
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               className="absolute right-4 top-9 text-gray-500 hover:text-primary"
//             >
//               {showPassword ? "Sembunyikan" : "Tampilkan"}
//             </button>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#075852] text-white px-8 py-2 rounded-lg shadow hover:bg-[#26BE71] transition duration-300"
//           >
//             Masuk
//           </button>
//         </form>

//         <p className="text-center mt-4 text-gray-600">
//           Belum punya akun?{" "}
//           <button
//             onClick={handleRegisterRedirect}
//             className=" font-medium hover:underline ml-1"
//             style={{ color: "#075852" }}
//           >
//             Daftar Akun
//           </button>
//         </p>

//         <p className="text-center mt-4 text-gray-600">
//           <button
//             onClick={() => navigate("/lupakatasandi")}
//             className=" font-medium hover:underline ml-1"
//             style={{ color: "#075852" }}
//           >
//             Lupa Kata Sandi?
//           </button>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from 'axios'; // Pastikan sudah menginstall axios

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Contoh proses autentikasi (ganti dengan endpoint backend Anda)
      // const response = await axios.post('/api/login', { email, password });
      
      // Simulasi autentikasi
      if (!email || !password) {
        throw new Error("Email dan password harus diisi");
      }

      // Data pengguna contoh (ganti dengan data dari backend)
      const userData = {
        id: Date.now(), // Generate unique ID
        name: email.split('@')[0], // Ambil nama dari email
        email: email,
        avatar: "src/assets/logo-user.png",
        token: generateToken() // Fungsi generate token sementara
      };

      // Simpan data pengguna menggunakan fungsi login dari AuthContext
      login(userData);

      // Redirect ke halaman utama
      navigate("/");
    } catch (error) {
      // Tangani error autentikasi
      setError(
        error.response?.data?.message || 
        error.message || 
        "Login gagal. Silakan coba lagi."
      );
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi generate token sementara (ganti dengan metode backend)
  const generateToken = () => {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <section className="bg-[#D5F0DB] min-h-screen flex items-center justify-center p-6 sm:p-12 lg:p-24 text-white">
      <div className="w-full max-w-md bg-white text-gray-800 rounded-lg p-6 sm:p-8 shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center" style={{ color: "#000" }}>
          Masuk
        </h1>

        <div className="flex justify-center mb-6">
          <img
            src="/src/assets/logo-hidro-tani.png"
            alt="Logo"
            className="w-16 h-16 sm:w-12 sm:h-12"
          />
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
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
              disabled={isLoading}
            />
          </div>

          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-lg font-medium mb-2">
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
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-9 text-gray-500 hover:text-primary"
              disabled={isLoading}
            >
              {showPassword ? "Sembunyikan" : "Tampilkan"}
            </button>
          </div>

          <button
            type="submit"
            className={`w-full text-white px-8 py-2 rounded-lg shadow transition duration-300 ${
              isLoading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-[#075852] hover:bg-[#26BE71]"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Mohon Tunggu..." : "Masuk"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Belum punya akun?{" "}
            <button
              onClick={handleRegisterRedirect}
              className="font-medium hover:underline"
              style={{ color: "#075852" }}
              disabled={isLoading}
            >
              Daftar Akun
            </button>
          </p>

          <p className="mt-2">
            <button
              onClick={() => navigate("/lupakatasandi")}
              className="text-gray-600 font-medium hover:underline"
              style={{ color: "#075852" }}
              disabled={isLoading}
            >
              Lupa Kata Sandi?
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;