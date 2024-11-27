import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarUser from "../components/NavbarUser";
import Navbar from "../components/Navbar";

const Edukasi = () => {
  const navigate = useNavigate();

  // Data berita (dapat diganti dengan data API jika tersedia)
  const beritaList = [
    {
      img: "src/assets/budidaya-hidroponik-samarinda.jpeg",
      title: "Budi Daya Sayur Hidroponik Beromzet Rp 1,5 Juta/Bulan",
      date: "DetikFinance (24 Okt 2024)",
      description:
        "Seorang warga di Samarinda memanfaatkan pekarangan rumahnya untuk budi daya sayur hidroponik.",
      link: "https://finance.detik.com/foto-bisnis/d-7586062/intip-budi-daya-sayur-hidroponik-beromzet-rp-1-5-juta-bulan-di-samarinda",
      credit: "Gambar dan informasi bersumber dari Detik Finance.",
    },
    {
      img: "src/assets/pencipta-hydroboom.jpeg",
      title: "Mahasiswa Surabaya Ciptakan Hydrobloom untuk Pembelajaran Sains",
      date: "DetikJatim (26 Sep 2024)",
      description:
        "Mahasiswa Universitas Dinamika Surabaya, menciptakan karya inovatif paket tanaman hidroponik.",
      link: "https://www.detik.com/jatim/berita/d-7559127/mahasiswa-surabaya-ciptakan-hydrobloom-untuk-pembelajaran-sains",
    },
    {
      img: "src/assets/pemuda-ponorogo.jpeg",
      title:
        "Pemuda Ponorogo Pilih Jadi Petani Melon, Cuan Rp 30 Juta Setiap Panen",
      date: "DetikJatim (25 Agu 2024)",
      description:
        "Seorang pemuda 28 tahun sukses menjadi petani melon hidroponik.",
      link: "https://www.detik.com/jatim/bisnis/d-7507811/pemuda-ponorogo-pilih-jadi-petani-melon-cuan-rp-30-juta-setiap-panen",
    },
    {
      img: "src/assets/aneka-sayur.jpeg",
      title:
        "Tanam Aneka Sayur di Pekarangan Jadi Tambahan Pendapatan Warga Muara Enim",
      date: "28 Jul 2024",
      description:
        "Aneka sayur ditanam sehngga mengurangi uang yang dibelanjakan untuk membeli sayuran .",
      link: "https://www.detik.com/jatim/berita/d-7482519/uniknya-kebun-hidroponik-untag-surabaya-ditanam-di-atap-gedung-kampus",
    },

    {
      img: "src/assets/menanam-melon.webp",
      title: "Cara Menanam Melon dari Biji",
      date: "Liputan 6 (6 Nov 2024)",
      description:
        "Temukan tips sukses budidaya melon di rumah untuk hasil panen ",
      link: "https://www.liputan6.com/feeds/read/5771519/cara-menanam-melon-dari-biji-panduan-lengkap-untuk-hasil-panen-melimpah",
    },
    {
      img: "src/assets/menanam-cabe.webp",
      title: "Cara Menamam Cabe",
      date: "Liputan 6 (6 Nov 2024)",
      description: "Pelajari cara menanam cabe dengan mudah dan efektif..",
      link: "https://www.liputan6.com/feeds/read/5763117/cara-menanam-cabe-panduan-lengkap-dari-persiapan-hingga-panen",
    },
    {
      img: "src/assets/menanam-hidroponik.webp",
      title: "Cara Menanam Tanaman Hidroponik",
      date: "Liputan 6 (6 Nov 2024)",
      description:
        "Pelajari cara menanam tanaman hidroponik dengan mudah di rumah.",
      link: "https://www.liputan6.com/feeds/read/5771521/cara-menanam-tanaman-hidroponik-panduan-lengkap-untuk-pemula",
    },
    {
      img: "src/assets/green-house.jpeg",
      title: "Budidaya Hidroponik di Atas Pasar Mayestik",
      date: "CNN Indonesia (31 Jul 2024)",
      description:
        "Pekerja merawat tanaman cabai di Rumah Tanam yang berada diatas Pasar Mayestik.",
      link: "https://www.cnnindonesia.com/gaya-hidup/20240730172847-286-1127264/foto-budidaya-hidroponik-di-atas-pasar-mayestik",
    },
    // Tambahkan berita lainnya di sini
  ];

  // State untuk paginasi
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Hitung total halaman
  const totalPages = Math.ceil(beritaList.length / itemsPerPage);

  // Dapatkan data berita untuk halaman saat ini
  const currentItems = beritaList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      
      <section className="bg-[#075852] p-24 text-white">
        <div className="flex flex-col md:flex-row">
          <div className="text-white py-8 px-4">
            <div className="max-w-5xl mx-auto text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Sumber Daya Edukasi
              </h2>
              <p className="mt-2 text-lg md:text-xl">
                Jelajahi beragam informasi praktis dan mendalam mengenai
                hidroponik, mulai dari panduan langkah demi langkah hingga tips
                perawatan.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="src/assets/edukasi.png"
              alt="Edukasi Icon"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r p-24 text-white">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center m-12">
          <div className="bg-green-100 text-green-900 rounded-lg shadow-lg p-6 max-w-xs md:max-w-sm text-center">
            <img
              src="src/assets/edukasi-panduan.png"
              alt="Panduan Icon"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Panduan</h3>
            <p className="mb-4">
              Pelajari dasar-dasar dan panduan lengkap untuk memulai hidroponik
            </p>
            <button
              className="bg-[#075852] text-white px-4 py-2 rounded-md hover:bg-[#26BE71]"
              onClick={() => navigate("/edukasi/panduan")}
            >
              Lihat Panduan
            </button>
          </div>

          <div className="bg-green-100 text-green-900 rounded-lg shadow-lg p-6 max-w-xs md:max-w-sm text-center">
            <img
              src="src/assets/edukasi-artikel.png"
              alt="Artikel Icon"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Artikel</h3>
            <p className="mb-4">
              Temukan berbagai artikel menarik dan informatif seputar hidroponik
            </p>
            <button
              className="bg-[#075852] text-white px-4 py-2 rounded-md hover:bg-[#26BE71]"
              onClick={() => navigate("/edukasi/artikel")}
            >
              Lihat Artikel
            </button>
          </div>

          <div className="bg-green-100 text-green-900 rounded-lg shadow-lg p-6 max-w-xs md:max-w-sm text-center">
            <img
              src="src/assets/edukasi-faq.png"
              alt="FAQ Icon"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">FAQ</h3>
            <p className="mb-4">
              Temukan jawaban untuk pertanyaan umum seputar hidroponik
            </p>
            <button
              className="bg-[#075852] text-white px-4 py-2 rounded-md hover:bg-[#26BE71]"
              onClick={() => navigate("/edukasi/faq")}
            >
              Lihat FAQ
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r bg-gray-200 p-24 text-black">
        <div className="px-4 py-12 bg-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Berita Terbaru
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
              {currentItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                >
                  <img
                    src={item.img}
                    alt={`Berita ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <button
                      className="bg-[#075852] text-white px-4 py-2 rounded-md hover:bg-[#26BE71] mt-auto"
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      Selengkapnya
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol Paginasi */}
            <div className="flex justify-center mt-8 space-x-2">
              <button
                className={`px-4 py-2 rounded-md ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#075852] text-white hover:bg-[#26BE71]"
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ⮜
              </button>
              {[...Array(totalPages)].map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === pageIndex + 1
                      ? "bg-[#26BE71] text-white"
                      : "bg-[#075852] text-white hover:bg-[#26BE71]"
                  }`}
                  onClick={() => handlePageChange(pageIndex + 1)}
                >
                  {pageIndex + 1}
                </button>
              ))}
              <button
                className={`px-4 py-2 rounded-md ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#075852] text-white hover:bg-[#26BE71]"
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                ⮞
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Edukasi;
