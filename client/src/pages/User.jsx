import { useState } from "react";

const User = () => {
  const [activeTab, setActiveTab] = useState("editProfile");

  // Fungsi untuk mengganti tampilan di kotak 2
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Dashboard Pengguna
        </h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow p-4 md:p-6">
            <div className="text-center mb-6">
              <img
                src="src/assets/pria.png"
                alt="Foto Pengguna"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl md:text-2xl font-semibold">
                Nama Pengguna
              </h2>
            </div>

            <div className="flex flex-col gap-2 md:gap-4">
              <button
                onClick={() => handleTabChange("editProfile")}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  activeTab === "editProfile"
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
              >
                Edit Profil
              </button>
              <button
                onClick={() => handleTabChange("changePassword")}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  activeTab === "changePassword"
                    ? "bg-primary text-white"
                    : "bg-gray-200"
                }`}
              >
                Ganti Kata Sandi
              </button>
              <button
                onClick={() => {
                  // Fungsi logout (contoh implementasi)
                  alert("Anda telah logout!");
                  window.location.href = "/login"; // Redirect ke halaman login
                }}
                className="w-full bg-red-500 text-white px-8 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/3 bg-white rounded-lg shadow p-4 md:p-6">
            {activeTab === "editProfile" && (
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Edit Profil
                </h2>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className="block text-lg font-medium mb-2"
                    >
                      Nama Pengguna
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nama Pengguna"
                    />
                  </div>
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Email Pengguna"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-2 rounded-lg shadow hover:bg-secondary transition duration-300"
                  >
                    Simpan Perubahan
                  </button>
                </form>
              </div>
            )}
            {activeTab === "changePassword" && (
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Ganti Kata Sandi
                </h2>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="currentPassword"
                      className="block text-lg font-medium mb-2"
                    >
                      Kata Sandi Lama
                    </label>
                    <input
                      type="password"
                      id="currentPassword"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Kata Sandi Lama"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="newPassword"
                      className="block text-lg font-medium mb-2"
                    >
                      Kata Sandi Baru
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Kata Sandi Baru"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-2 rounded-lg shadow hover:bg-secondary transition duration-300"
                  >
                    Simpan Kata Sandi
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
