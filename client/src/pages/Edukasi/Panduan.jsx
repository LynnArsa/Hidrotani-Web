import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Panduan() {
  const navigate = useNavigate();

  useEffect(() => {
    // Mengarahkan pengguna ke halaman "Memulai Hidroponik dari Rumah" saat tampilan dibuka
    navigate("/edukasi/panduan/Memulai-Hidroponik-Dari-Rumah");
  }, [navigate]);

  return (
    <div className="flex min-h-screen font-sans">
      <main className="flex-grow p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">Panduan Hidroponik</h2>
        <p>Select a section from the sidebar to view the content.</p>
      </main>
    </div>
  );
}

export default Panduan;
