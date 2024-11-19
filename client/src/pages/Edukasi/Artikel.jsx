import { useState } from "react";

const Artikel = () => {
  const [searchInput, setSearchInput] = useState("");

  const articles = [
    {
      id: 1,
      title: "Cara Menjaga Keseimbangan pH Ideal dalam Sistem Hidroponik",
      image: "/src/assets/pakcoy.jpg",
    },
    {
      id: 2,
      title: "Pemupukan yang Tepat untuk Hasil Panen Maksimal  ",
      image: "/src/assets/pakcoy.jpg",
    },
    {
      id: 3,
      title: "Teknik Penyiraman Efisien",
      image: "/src/assets/pakcoy.jpg",
    },
    {
      id: 4,
      title: "Inovasi Hidroponik Modern",
      image: "/src/assets/pakcoy.jpg",
    },
    { id: 5, title: "Tips Perawatan Tanaman", image: "/src/assets/pakcoy.jpg" },
    { id: 6, title: "Tips Sayuran", image: "/src/assets/pakcoy.jpg" },

    // Artikel baru untuk bagian Inovasi dan Tren Terbaru
    {
      id: 7,
      title: "Teknologi Hidroponik Terbaru untuk Meningkatkan Hasil Panen",
      image: "/src/assets/pakcoy.jpg",
    },
    {
      id: 8,
      title:
        "Inovasi Pertanian Vertikal yang Membawa Dampak Positif bagi Lingkungan",
      image: "/src/assets/pakcoy.jpg",
    },
    {
      id: 9,
      title:
        "Sistem Irigasi Otomatis dalam Hidroponik: Masa Depan Pertanian Cerdas",
      image: "/src/assets/pakcoy.jpg",
    },
    {
      id: 10,
      title: "Penggunaan Robotika dalam Pertanian Hidroponik",
      image: "/src/assets/pakcoy.jpg",
    },
    {
      id: 11,
      title:
        "Pemanfaatan AI untuk Meningkatkan Efisiensi dalam Budidaya Hidroponik",
      image: "/src/assets/pakcoy.jpg",
    },
    {
      id: 12,
      title:
        "Sistem Akuaponik sebagai Alternatif Hidroponik yang Ramah Lingkungan",
      image: "/src/assets/pakcoy.jpg",
    },
  ];

  const sustainabilityArticles = [
    {
      id: 1,
      title: "Mengurangi Jejak Karbon dengan Hidroponik",
      image: "/src/assets/pakcoy.jpg",
    },
    {
      id: 2,
      title: "Keuntungan Pertanian Vertikal untuk Keberlanjutan Lingkungan",
      image: "/src/assets/pakcoy.jpg",
    },
    {
      id: 3,
      title: "Pentingnya Penggunaan Air dalam Sistem Hidroponik",
      image: "/src/assets/pakcoy.jpg",
    },
    {
      id: 4,
      title: "Hidroponik dan Pengurangan Limbah Plastik",
      image: "/src/assets/pakcoy.jpg",
    },
    {
      id: 5,
      title: "Energi Terbarukan untuk Sistem Hidroponik yang Berkelanjutan",
      image: "/src/assets/pakcoy.jpg",
    },
    {
      id: 6,
      title: "Menciptakan Pertanian Berkelanjutan dengan Teknologi Cerdas",
      image: "/src/assets/pakcoy.jpg",
    },
  ];

  const handleSearch = () => {
    const foundArticle = articles.find((article) =>
      article.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (foundArticle) {
      alert(`Membuka artikel: ${foundArticle.title}`); // Ganti dengan navigasi sesuai aplikasi Anda
    } else {
      alert("Artikel tidak ditemukan.");
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-secondary p-4 md:p-16 text-white">
        <div className="flex flex-col md:flex-row flex-wrap items-center">
          {/* Bagian Kiri: Teks dan Pencarian */}
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
              Temukan Artikel Terkait Hidroponik!
            </h1>

            {/* Pencarian */}
            <div className="mb-6 w-full flex justify-center md:justify-start">
              <input
                type="text"
                placeholder="Cari artikel..."
                className="w-full max-w-md p-2 rounded-lg text-black"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                className="bg-green-700 hover:bg-green-600 text-white p-2 ml-2 rounded-lg"
                onClick={handleSearch}
              >
                Cari
              </button>
            </div>
          </div>

          {/* Bagian Kanan: Gambar */}
          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <img
              src="/src/assets/section-artikel.png"
              className="w-64 h-48 rounded-lg object-cover"
              alt="Mobile App"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-black mb-8">
            Tips dan Trik Perawatan Tanaman
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {articles.slice(0, 6).map(
              (
                article // Ambil artikel dari index 6 sampai 11
              ) => (
                <div
                  key={article.id}
                  className="bg-green-100 p-4 rounded-lg shadow-md hover:shadow-xl  hover:shadow-green-300 transition duration-300 cursor-pointer"
                  onClick={() => alert(`Membuka artikel: ${article.title}`)} // Ganti dengan logika navigasi
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-32 text-center object-cover rounded-t-lg mb-3"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {article.title}
                  </h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-black mb-8">
            Inovasi dan Tren Terbaru
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {articles.slice(6, 12).map(
              (
                article // Ambil artikel dari index 6 sampai 11
              ) => (
                <div
                  key={article.id}
                  className="bg-green-100 p-4 rounded-lg shadow-custom-blue shadow-md hover:shadow-xl hover:shadow-green-300 transition duration-300 cursor-pointer"
                  onClick={() => alert(`Membuka artikel: ${article.title}`)} // Ganti dengan logika navigasi
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-32 text-center object-cover rounded-t-lg mb-3"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {article.title}
                  </h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-black mb-8">
            Keberlanjutan dan Lingkungan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {sustainabilityArticles.map((article) => (
              <div
                key={article.id}
                className="bg-green-100 p-4 rounded-lg shadow-md hover:shadow-xl  hover:shadow-green-300  transition duration-300 cursor-pointer"
                onClick={() => alert(`Membuka artikel: ${article.title}`)}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-32 text-center object-cover rounded-t-lg mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artikel;
