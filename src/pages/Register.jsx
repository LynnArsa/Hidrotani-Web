import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ setIsRegistered, setRegisteredUser }) => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !registerData.username ||
      !registerData.phone ||
      !registerData.email ||
      !registerData.password
    ) {
      setError("Semua field harus diisi.");
      return;
    }

    console.log("User  registered:", registerData);
    setRegisterSuccess(true);
    setIsRegistered(true);
    setRegisteredUser(registerData); // Simpan data pengguna yang terdaftar

    // Arahkan ke halaman login setelah pendaftaran berhasil
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <section className="bg-[#D5F0DB] min-h-screen flex items-center justify-center p-6 sm:p-12 lg:p-24 text-white">
      <div className="w-full max-w-md bg-white text-gray-800 rounded-lg p-6 sm:p-8 shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          Daftar Akun
        </h1>

        <div className="flex justify-center mb-6">
          <img
            src="/src/assets/logo-hidro-tani.png"
            alt="Logo"
            className="w-16 h-16 sm:w-12 sm:h-12"
          />
        </div>

        {registerSuccess && (
          <p className="text-center mb-4" style={{ color: "#26BE71" }}>
            Pendaftaran berhasil! Silakan login dengan akun Anda.
          </p>
        )}

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-lg font-medium mb-2"
            >
              Nama
            </label>
            <input
              type="text"
              id="username"
              value={registerData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline -none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan Nama Lengkap Anda"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg font-medium mb-2">
              Nomor Telepon
            </label>
            <input
              type="tel"
              id="phone"
              value={registerData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan Nomor Telepon"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={registerData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan Email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg font-medium mb-2"
            >
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              value={registerData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan Kata Sandi"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#075852] text-white px-8 py-2 rounded-lg shadow hover:bg-[#26BE] transition duration-300"
          >
            Daftar
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Sudah punya akun?{" "}
          <a
            href="/login"
            className=" font-medium hover:underline"
            style={{ color: "#075852" }}
          >
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default RegisterForm;

// const RegisterForm = ({
//   setIsRegistered,
//   setRegisteredUser,
//   setIsLoggedIn,
//   setLoggedInUser,
// }) => {
//   const navigate = useNavigate();

//   const [registerData, setRegisterData] = useState({
//     name: "",

//     phone: "",

//     email: "",

//     password: "",
//   });

//   const [registerSuccess, setRegisterSuccess] = useState(false);

//   const [error, setError] = useState("");

//   const handleInputChange = (e) => {
//     setRegisterData({
//       ...registerData,

//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // Validasi input
//     if (!registerData.name || !registerData.phone || !registerData.email || !registerData.password) {
//       setError("Semua field harus diisi.");
//       return;
//     }

//     try {
//       // Kirim data pendaftaran ke backend
//       const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`, registerData);

//       if (response.status === 201) {
//         setRegisterSuccess(true);
//         setIsRegistered(true);
//         setRegisteredUser (registerData); // Simpan data pengguna yang terdaftar

//         // Login pengguna setelah pendaftaran berhasil
//         const loginResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
//           email: registerData.email,
//           password: registerData.password,
//         });

//         if (loginResponse.status === 200) {
//           setIsLoggedIn(true);
//           setLoggedInUser (loginResponse.data); // Simpan data pengguna yang login

//           // Arahkan ke halaman dashboard setelah login berhasil
//           setTimeout(() => {
//             navigate("/dashboard"); // Ubah ke rute yang diinginkan
//           }, 2000);
//         }
//       }
//     } catch (err) {
//       // Tangani kesalahan dari backend
//       if (err.response) {
//         setError(err.response.data.error);
//       } else {
//         setError("Terjadi kesalahan saat pendaftaran. Silakan coba lagi.");
//       }
//     }
//   };
