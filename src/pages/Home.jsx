import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarUser from "../components/NavbarUser";

const Home = () => {
  const [showDownloadOverlay, setShowDownloadOverlay] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Atalya",
      text: "Aplikasi ini sangat membantu dalam bertani hidroponik.",
      image: "public/wanita.png",
    },
    {
      name: "Adi",
      text: "Produk HidroTani berkualitas dan mudah digunakan.",
      image: "public/pria.png",
    },
    {
      name: "Amdy",
      text: "Komunitas yang aktif dan penuh dukungan.",
      image: "public/pria.png",
    },
    {
      name: "Lintang",
      text: "Sangat membantu untuk pemula.",
      image: "public/wanita.png",
    },
    {
      name: "Faraz",
      text: "Panduan yang sangat jelas dan informatif.",
      image: "public/pria.png",
    },
    {
      name: "Rayhan",
      text: "Harga produk terjangkau dan layanan cepat.",
      image: "public/pria.png",
    },
  ];

  const handleBuyNowClick = () => {
    setShowDownloadOverlay(true);
  };

  const closeOverlay = () => {
    setShowDownloadOverlay(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  return (
    <div>
      
      <section className="bg-[#D5F0DB] p-4 md:p-16  text-white">
        <div className="flex flex-col md:flex-row">
          <div className="container w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 " style={{ color: "#1F3636" }}>
              Masa Depan Pertanian Urban Ada di Genggaman Anda!
            </h1>
            <p className="text-lg mb-6" style={{ color: "#1F3636" }}>
              Jelajahi kemudahan bertani hidroponik dengan dukungan lengkap dari
              aplikasi HidroTani – E-commerce dan komunitas pertanian urban
              dalam satu platform.
            </p>
            <button
              className="bg-[#075852] hover:bg-[#26BE71] hover:text-yellow-300 text-white py-3 px-8 text-lg md:text-xl font-semibold rounded-lg mt-4 md:mt-6 shadow-md hover:shadow-lg hover:shadow-green-500/50 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleBuyNowClick}
            >
              Unduh Sekarang
            </button>
          </div>
          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <img
              src="public/mobile-app.png"
              className="mx-auto "
              alt="Mobile App"
            />
          </div>
        </div>
      </section>

      {/* Section 2: About */}
      <section className="p-8 md:p-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">HidroTani</h2>
            <p className="text-base md:text-lg text-justify">
              Berawal dari visi untuk mendukung praktik pertanian berkelanjutan,
              HidroTani hadir sebagai platform bagi para pegiat urban farming
              dan penggemar hidroponik di Indonesia. Kami tidak hanya
              menyediakan alat-alat berkualitas dan nutrisi yang diperlukan
              untuk berkebun secara hidroponik, namun juga membangun komunitas
              belajar bagi para pengguna, baik pemula maupun yang sudah
              berpengalaman.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="public/logo-hidro-tani.png"
              alt="HidroTani Logo"
              className="h-auto max-w-xs md:max-w-sm" // Responsif
            />
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section className="bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12" style={{ color: "#1F3636" }} >
            HidroTani Punya Apa Saja?
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-[#075852] p-4 rounded-lg shadow flex flex-col items-center min-w-[200px] max-w-[300px]">
              <img
                src="/public/E-commerce.png"
                alt="E-commerce"
                className="mx-auto mb-4 w-24 h-24 md:w-32 md:h-32 object-contain"
              />
              <h3 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>E-commerce</h3>
              <p className="text-center" style={{ color: "#ffffff" }}>
                Menyediakan peralatan, nutrisi, dan aksesoris hidroponik
              </p>
            </div>
            <div className="bg-[#075852] p-4 rounded-lg shadow flex flex-col items-center min-w-[200px] max-w-[300px]">
              <img
                src="/public/Komunitas.png"
                alt="Forum Komunitas"
                className="mx-auto mb-4 w-24 h-24 md:w-32 md:h-32 object-contain"
              />
              <h3 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>Forum Komunitas</h3>
              <p className="text-center" style={{ color: "#ffffff" }}>
              Ruang interaksi dan berbagi pengetahuan bagi para penggiat hidroponik.
              </p>
            </div>
            <div className="bg-[#075852] p-4 rounded-lg shadow flex flex-col items-center min-w-[200px] max-w-[300px]">
              <img
                src="/public/Edukasi.png"
                alt="Edukasi"
                className="mx-auto mb-4 w-24 h-24 md:w-32 md:h-32 object-contain"
              />
              <h3 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>Edukasi</h3>
              <p className="text-center" style={{ color: "#ffffff" }}>
                Kumpulan artikel dan panduan praktis untuk membantu Anda memulai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Community Join */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto bg-[#D5F0DB] p-6 md:p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white" style={{ color: "#1f3636" }}>
              Bergabung dengan Komunitas Hidroponik Indonesia
            </h2>
            <p className="text-sm md:text-base mb-4 md:mb-6 text-white" style={{ color: "#1f3636" }}>
              Dapatkan akses ke jaringan luas para penggemar hidroponik yang
              berbagi pengetahuan, pengalaman, dan dukungan
            </p>
            <button
              className="bg-[#075852] hover:bg-[#26BE71] hover:text-yellow-300 text-white py-3 px-8 text-lg md:text-xl font-semibold rounded-lg mt-4 md:mt-6 shadow-md hover:shadow-lg hover:shadow-green-500/50 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleBuyNowClick}
            >
              Unduh Sekarang
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="public/homepage-forum.png"
              alt="Homepage Forum"
              className="w-full h-auto max-w-xs md:max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="bg-[#075852] py-12 md:py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">
            Testimonial
          </h2>
          <div className="relative flex items-center justify-center md:space-x-4">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#333333] text-white rounded-full p-3 md:p-4"
            >
              &larr;
            </button>

            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
              {testimonials
                .slice(currentIndex, currentIndex + 3)
                .map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-[#D5F0DB] p-4 md:p-8 rounded-lg shadow-lg w-full md:w-80 h-72 flex-none flex flex-col justify-between"
                  >
                    <div className="h-32 overflow-y-auto mb-4">
                      <p className="text-sm md:text-base">{testimonial.text}</p>
                    </div>
                    <div className="flex items-center mt-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <p className="font-bold text-sm md:text-base">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <button
              onClick={handleNext}
              className=" absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#333333] text-white rounded-full p-3 md:p-4"
            >
              &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Products */}
      <section className="bg-[#ffffff] p-6 md:p-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 ">
            Produk HidroTani
          </h2>
          {/* Container Scrollable */}
          <div className="flex overflow-x-auto space-x-4 md:space-x-8 pb-4">
            {/* Kotak Produk 1 */}
            <div className="bg-[#D5F0DB] min-w-[200px] md:min-w-[300px] p-4 md:p-6 rounded-lg shadow-lg text-left">
              <img
                src="/public/paket-hiroponik.jpg"
                alt="Produk 1"
                className="mx-auto mb-2 md:mb-4 w-full h-32 md:h-48 object-cover rounded-md"
              />
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                Produk Nutrisi A
              </h3>
              <p className="text-gray-600 mb-1 md:mb-2">
              Paket Hidroponik Pemula Lengkap.
              </p>
              <p className="text-lg font-semibold">
                Rp. 150.000
              </p>
              <button
                className="bg-[#075852] text-white px-4 py-2 mt-4 rounded-lg w-full hover:bg-[#26BE71] transition duration-300"
                onClick={handleBuyNowClick}
              >
                Beli Sekarang
              </button>
            </div>

            {/* Kotak Produk 2 */}
            <div className="bg-[#D5F0DB] min-w-[200px] md:min-w-[300px] p-4 md:p-6 rounded-lg shadow-lg text-left">
              <img
                src="/public/nutrisi-hidroponik.jpg"
                alt="Produk 2"
                className="mx-auto mb-2 md:mb-4 w-full h-32 md:h-48 object-cover rounded-md"
              />
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                Produk Media Tanam B
              </h3>
              <p className="text-gray-600 mb-1 md:mb-2">
                Media tanam khusus untuk hidroponik.
              </p>
              <p className="text-lg font-semibold ">
                Rp. 200.000
              </p>
              <button
                className="bg-[#075852] text-white px-4 py-2 mt-4 rounded-lg w-full hover:bg-[#26BE71] transition duration-300"
                onClick={handleBuyNowClick}
              >
                Beli Sekarang
              </button>
            </div>

            {/* Kotak Produk 3 */}
            <div className="bg-[#D5F0DB] min-w-[200px] md:min-w-[300px] p-4 md:p-6 rounded-lg shadow-lg text-left">
              <img
                src="/public/pakcoy.jpg"
                alt="Produk 3"
                className="mx-auto mb-2 md:mb-4 w-full h-32 md:h-48 object-cover rounded-md"
              />
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                Pakcoy Hidroponik 
              </h3>
              <p className="text-gray-600 mb-1 md:mb-2">
              Pakcoy Saturan Hidroponik (1kg)
              </p>
              <p className="text-lg font-semibold">
                Rp. 13.500
              </p>
              <button
                className="bg-[#075852] text-white px-4 py-2 mt-4 rounded-lg w-full hover:bg-[#26BE71] transition duration-300"
                onClick={handleBuyNowClick}
              >
                Beli Sekarang
              </button>
            </div>

            {/* Kotak Produk 4 */}
            <div className="bg-[#D5F0DB] min-w-[200px] md:min-w-[300px] p-4 md:p-6 rounded-lg shadow-lg text-left">
              <img
                src="/public/instalasi-hidroponik.jpg"
                alt="Produk 4"
                className="mx-auto mb-2 md:mb-4 w-full h-32 md:h-48 object-cover rounded-md"
              />
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                Instalasi Hidroponik
              </h3>
              <p className="text-gray-600 mb-1 md:mb-2">
                Fullset Instalasi Hidroponik
              </p>
              
              <p className="text-lg font-semibold ">
                Rp. 800.000
              </p>
              <button
                className="bg-[#075852] text-white px-4 py-2 mt-4 rounded-lg w-full hover:bg-[#26BE71] transition duration-300"
                onClick={handleBuyNowClick}
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overlay Download */}
      {showDownloadOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 md:p-8 rounded-lg max-w-md w-full text-center relative">
            <button
              onClick={closeOverlay}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4">
              Download aplikasi di Playstore
            </h3>
            <p className="text-gray-700 mb-6">
              Dapatkan akses mudah ke produk-produk hidroponik kami melalui
              aplikasi!
            </p>
            <a
              href="#"
              className="bg-[#075852] text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 w-full sm:w-auto"
            >
              Download Sekarang
            </a>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
  
};

export default Home;
