import React, { useState, useEffect } from "react";
import axios from "axios"; // Pastikan sudah install axios

const User = ({ registeredUser }) => {
  // State untuk manajemen komponen
  const [activeTab, setActiveTab] = useState("editProfile");
  const [profileImage, setProfileImage] = useState(null);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    profilePicture: ""
  });

  // State untuk form ganti password
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // Efek untuk memuat data pengguna
  useEffect(() => {
    if (registeredUser) {
      setUserData({
        username: registeredUser.username,
        email: registeredUser.email,
        profilePicture: registeredUser.profilePicture || "src/assets/logo-user.png"
      });
    }
  }, [registeredUser]);

  // Handler untuk mengganti tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handler untuk unggah foto profil
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validasi tipe dan ukuran file
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        alert("Hanya file gambar (JPEG, PNG, GIF) yang diperbolehkan.");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("Ukuran file tidak boleh lebih dari 5MB.");
        return;
      }

      // Membuat FormData untuk unggah
      const formData = new FormData();
      formData.append('profilePicture', file);

      try {
        // Kirim ke backend untuk unggah
        const response = await axios.post('/api/upload-profile-picture', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        // Update state dengan URL foto baru
        setUserData(prev => ({
          ...prev,
          profilePicture: response.data.imageUrl
        }));

        // Tampilkan pratinjau
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfileImage(reader.result);
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.error("Gagal mengunggah foto:", error);
        alert("Gagal mengunggah foto. Silakan coba lagi.");
      }
    }
  };

  // Handler untuk perubahan input profil
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler untuk submit perubahan profil
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/update-profile', userData);
      alert("Profil berhasil diperbarui!");
    } catch (error) {
      console.error("Gagal memperbarui profil:", error);
      alert("Gagal memperbarui profil. Silakan coba lagi.");
    }
  };

  // Handler untuk perubahan password
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler untuk submit ganti password
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    
    // Validasi password
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }

    try {
      const response = await axios.post('/api/change-password', {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      });
      
      alert("Password berhasil diubah!");
      // Reset form
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error("Gagal mengubah password:", error);
      alert("Gagal mengubah password. Silakan coba lagi.");
    }
  };

  // Handler logout
  const handleLogout = () => {
    // Lakukan proses logout di sini
    localStorage.removeItem('token');
    window.location.href = "/login";
  };

  return (
    <section className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Dashboard Pengguna
        </h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Sidebar Profil */}
          <div className="w-full md:w-1/3 bg-[#075852] rounded-lg shadow p-4 md:p-6">
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <img
                  src={userData.profilePicture || "src/assets/logo-user.png"}
                  alt="Foto Pengguna"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <label 
                  htmlFor="profileImageUpload"
                  className="absolute bottom-0 right-0 bg-[#26BE71] text-white p-2 rounded-full cursor-pointer hover:bg-[#075852] transition"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0011.586 3H8.414a1 1 0 00-.707.293L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </label>
                <input
                  type="file"
                  id="profileImageUpload"
                  accept="image/jpeg,image/png,image/gif"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                {userData.username}
              </h2>
            </div>

            {/* Menu Sidebar */}
            <div className="flex flex-col gap-2 md:gap-4">
              <button
                onClick={() => handleTabChange("editProfile")}
                className={`w-full text-left px-4 py-2 rounde d-lg ${
                  activeTab === "editProfile"
                    ? "bg-[#26BE71] text-white"
                    : "bg-gray-200"
                }`}
              >
                Edit Profil
              </button>
              <button
                onClick={() => handleTabChange("changePassword")}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  activeTab === "changePassword"
                    ? "bg-[#26BE71] text-white"
                    : "bg-gray-200"
                }`}
              >
                Ganti Kata Sandi
              </button>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white px-8 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Konten Utama */}
          <div className="w-full md:w-2/3 bg-white rounded-lg shadow p-4 md:p-6">
            {activeTab === "editProfile" && (
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Edit Profil
                </h2>
                <form onSubmit={handleProfileSubmit}>
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
                      name="username"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nama Pengguna"
                      value={userData.username}
                      onChange={handleProfileChange}
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
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Email Pengguna"
                      value={userData.email}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#075852] text-white px-8 py-2 rounded-lg shadow hover:bg-[#26BE71] transition duration-300"
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
                <form onSubmit={handlePasswordSubmit}>
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
                      name="currentPassword"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Kata Sandi Lama"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
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
                      name="newPassword"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Kata Sandi Baru"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-lg font-medium mb-2"
                    >
                      Konfirmasi Kata Sandi Baru
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Konfirmasi Kata Sandi Baru"
                      value={passwordData.confirmPassword }
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#075852] text-white px-8 py-2 rounded-lg shadow hover:bg-[#26BE71] transition duration-300"
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