import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AturUlangKatasandi = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulasi aksi pengaturan ulang kata sandi
      setTimeout(() => {
        setMessage("Kata sandi berhasil diatur ulang.");
        setLoading(false);

        // Navigasi ke halaman login setelah reset kata sandi berhasil
        setTimeout(() => {
          navigate("/login"); // Ganti dengan path login yang sesuai
        }, 1500); // Tunggu 1,5 detik agar pesan sukses muncul terlebih dahulu
      }, 1500);
    } catch (error) {
      setMessage("Terjadi kesalahan saat mengatur ulang kata sandi.");
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-primary to-secondary min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-24">
      <div className="w-full max-w-lg bg-white text-gray-800 rounded-lg shadow-lg p-8 space-y-6">
        {/* Logo dan Judul */}
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-primary">
            Atur Ulang Kata Sandi
          </h2>
          <img
            src="/src/assets/logo-hidro-tani.png"
            alt="Logo HidroTani"
            className="w-16 h-16 sm:w-12 sm:h-12"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleResetSubmit} className="grid gap-4">
          <div>
            <label htmlFor="code" className="block text-lg font-medium mb-2">
              Kode Verifikasi
            </label>
            <input
              type="text"
              id="code"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan Kode Verifikasi"
            />
          </div>
          <div>
            <label
              htmlFor="newPassword"
              className="block text-lg font-medium mb-2"
            >
              Kata Sandi Baru
            </label>
            <input
              type="password"
              id="newPassword"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan Kata Sandi Baru"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-lg font-medium mb-2"
            >
              Konfirmasi Kata Sandi
            </label>
            <input
              type="password"
              id="confirmPassword"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Konfirmasi Kata Sandi Baru"
            />
          </div>

          {/* Pesan Sukses */}
          {message && (
            <div className="text-center text-sm text-green-600 mt-2">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-primary text-white px-8 py-2 rounded-lg shadow hover:bg-secondary transition duration-300 ${
              loading ? "opacity-50" : ""
            }`}
          >
            {loading ? "Memproses..." : "Atur Ulang Kata Sandi"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AturUlangKatasandi;
