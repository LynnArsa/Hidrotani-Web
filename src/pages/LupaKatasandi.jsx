import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LupaKatasandi = () => {
  // State untuk menyimpan data email dan status pesan sukses
  const [email, setEmail] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);

  // Mendapatkan fungsi navigate dari useNavigate
  const navigate = useNavigate();

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan aksi reset password (misalnya kirim email reset)
    setResetSuccess(true); // Contoh: Menampilkan pesan sukses setelah submit

    // Setelah sukses, navigasi ke halaman Atur Ulang Kata Sandi
    setTimeout(() => {
      navigate("/aturulangkatasandi"); // Pastikan URL sesuai dengan route halaman aturulangkatasandi
    }, 1000); // Delay agar pesan sukses terlihat terlebih dahulu
  };

  return (
    <section className="bg-[#D5F0DB] p-6 md:p-24 text-white min-h-screen flex items-center">
      <div className="w-full max-w-md mx-auto bg-white text-gray-800 rounded-lg p-6 sm:p-8 shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center ">Lupa Kata Sandi</h1>

        {/* Tambahkan logo di bawah judul */}
        <div className="flex justify-center mb-6">
          <img
            src="/public/logo-hidro-tani.png"
            alt="Logo"
            className="w-16 h-16 sm:w-12 sm:h-12"
          />
        </div>

        {/* Pesan Sukses Reset */}
        {resetSuccess && (
          <p className="text-center  mb-4"style={{ color: "#26BE71" }}>
            Instruksi reset kata sandi telah dikirim ke email Anda.
          </p>
        )}

        <form onSubmit={handleSubmit}>
          {/* Input untuk email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan email Anda"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#075852] text-white px-4 py-2 rounded-lg shadow hover:bg-[#26BE71] transition duration-300"
          >
            Kirim
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Sudah ingat kata sandi?{" "}
          <a href="/login" className=" font-medium hover:underline"style={{ color: "#075852" }}>
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default LupaKatasandi;
