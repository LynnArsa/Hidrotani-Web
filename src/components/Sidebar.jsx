import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside
      className={`bg-gray-100 p-4 ${
        isSidebarOpen ? "w-64" : "w-16"
      } transition-width duration-300 flex-shrink-0`}
    >
      <button
        onClick={toggleSidebar}
        className="bg-green-950 text-white p-2 rounded-md mb-4 focus:outline-none"
      >
        {isSidebarOpen ? "⮜" : "⮞"}
      </button>

      {isSidebarOpen && (
        <nav>
          <h3 className="text-lg font-semibold mb-4">
            <Link
              to="/edukasi/panduan"
              className="hover:text-green-600 cursor-pointer"
            >
              Panduan
            </Link>
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/edukasi/panduan/Memulai-Hidroponik-Dari-Rumah"
                className={`cursor-pointer ${
                  location.pathname ===
                  "/edukasi/panduan/Memulai-Hidroponik-Dari-Rumah"
                    ? "text-green-600 font-bold"
                    : "hover:text-green-600"
                }`}
              >
                Memulai Hidroponik dari Rumah
              </Link>
            </li>
            <li>
              <Link
                to="/edukasi/panduan/Pemeliharaan-Tanaman-Hidroponik"
                className={`cursor-pointer ${
                  location.pathname ===
                  "/edukasi/panduan/Pemeliharaan-Tanaman-Hidroponik"
                    ? "text-green-600 font-bold"
                    : "hover:text-green-600"
                }`}
              >
                Pemeliharaan Tanaman Hidroponik
              </Link>
            </li>
            <li>
              <Link
                to="/edukasi/panduan/Menentukan-Nutrisi-Yang-Tepat"
                className={`cursor-pointer ${
                  location.pathname ===
                  "/edukasi/panduan/Menentukan-Nutrisi-Yang-Tepat"
                    ? "text-green-600 font-bold"
                    : "hover:text-green-600"
                }`}
              >
                Menentukan Nutrisi yang Tepat
              </Link>
            </li>
            <li>
              <Link
                to="/edukasi/panduan/Merawat-Sistem-Hidroponik"
                className={`cursor-pointer ${
                  location.pathname ===
                  "/edukasi/panduan/Merawat-Sistem-Hidroponik"
                    ? "text-green-600 font-bold"
                    : "hover:text-green-600"
                }`}
              >
                Merawat Sistem Hidroponik
              </Link>
            </li>
            <li>
              <Link
                to="/edukasi/panduan/Pemasaran-Hasil-Hidroponik"
                className={`cursor-pointer ${
                  location.pathname ===
                  "/edukasi/panduan/Pemasaran-Hasil-Hidroponik"
                    ? "text-green-600 font-bold"
                    : "hover:text-green-600"
                }`}
              >
                Pemasaran Hasil Hidroponik
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </aside>
  );
};

export default Sidebar;
