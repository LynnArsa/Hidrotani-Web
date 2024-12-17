import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarUser from "../components/NavbarUser";

const About = () => {
  const images = [
    "galeri-tani.png",
    "galeri-tani2.png",
    "galeri-tani3.png",
    "bertani1.jpg",
    "bertani1.jpg",
    "bertani1.jpg",
  ];

  const [startIndex, setStartIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const prevSet = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSet = () => {
    setStartIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      
      <section className=" bg-[#075852] p-4 md:p-16 text-white">
        <div className="flex flex-col md:flex-row flex-wrap items-center">
          <div className="container w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-center">
              Tentang Kami!
            </h1>
            <p className="text-justify mb-6">
              Jelajahi kemudahan bertani hidroponik dengan dukungan lengkap dari
              aplikasi HidroTani – sebuah platform terpadu yang menghadirkan
              solusi E-commerce sekaligus komunitas pertanian urban. HidroTani
              hadir untuk mempermudah Anda dalam memulai dan mengembangkan
              praktik bertani hidroponik, dengan berbagai fitur untuk membeli
              peralatan berkualitas, mempelajari teknik-teknik terbaru, dan
              terhubung dengan sesama pegiat hidroponik. Bersama HidroTani,
              bertani menjadi lebih praktis, efisien, dan mendukung
              keberlanjutan pertanian di lingkungan perkotaan, menciptakan masa
              depan yang lebih hijau bagi kita semua.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <img
              src="tentang-kami.png"
              className="max-w-full h-auto rounded-lg "
              alt="Mobile App"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Visi dan Misi</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch">
            <div className="bg-green-200 p-6 rounded-lg shadow-md flex flex-col items-center justify-center h-full w-full max-w-sm mx-auto">
              {/* <img
                src="/path-to-education-icon.png"
                alt="Misi"
                className="mx-auto mb-4 w-16 h-16"
              /> */}
              <h3 className="text-xl font-bold mb-2">Visi</h3>
              <p className="text-justify">
                Tempat bagi petani urban untuk berbagi pengalaman, saling
                bertanya, dan mendapatkan dukungan mengenai teknik bertani
                hidroponik, mulai dari pemilihan media tanam hingga nutrisi.
              </p>
            </div>
            <div className="bg-green-200 p-6 rounded-lg shadow-md flex flex-col items-center justify-center h-full w-full max-w-sm mx-auto">
              {/* <img
                src="/path-to-education-icon.png"
                alt="Misi"
                className="mx-auto mb-4 w-16 h-16"
              /> */}
              <h3 className="text-xl font-bold mb-2">Misi</h3>
              <p className="text-justify">
                Tempat bagi petani urban untuk berbagi pengalaman, saling
                bertanya, dan mendapatkan dukungan mengenai teknik bertani
                hidroponik, mulai dari pemilihan media tanam hingga nutrisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 p-8 md:p-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Tim Kami</h2>
            <p className="text-justify">
              Berawal dari visi untuk mendukung praktik pertanian berkelanjutan,
              HidroTani hadir sebagai platform bagi para pegiat urban farming
              dan penggemar hidroponik di Indonesia. Kami tidak hanya
              menyediakan alat-alat berkualitas dan nutrisi yang diperlukan
              untuk berkebun secara hidroponik, namun juga membangun komunitas
              belajar bagi para pengguna, baik pemula maupun yang sudah
              berpengalaman.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="gemah-ripah-tani2.png"
              alt="Gemah Ripah Tani2"
              className="max-w-xs md:max-w-md rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Section Galeri Tani */}
      <section className="bg-white p-6 md:p-24">
  <div className="container mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">Galeri Tani</h2>
    <p className="mb-8 text-justify md:text-base">
      Berawal dari visi untuk mendukung praktik pertanian berkelanjutan,
      HidroTani hadir sebagai platform bagi para pegiat urban farming dan
      penggemar hidroponik di Indonesia.
    </p>

    <div className="relative flex justify-center items-center space-x-4">
      {/* Button Left */}
      {startIndex > 0 && (
        <button
          onClick={prevSet}
          className="absolute left-0 bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
          &#8592;
        </button>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.slice(startIndex, startIndex + 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Galeri Tani ${startIndex + index + 1}`}
            className="w-full h-64 object-contain rounded-xl cursor-pointer"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {/* Button Right */}
      {startIndex + 3 < images.length && (
        <button
          onClick={nextSet}
          className="absolute right-0 bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
          &#8594;
        </button>
      )}
    </div>
  </div>
</section>

{/* Modal for displaying larger image */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="relative max-w-3xl w-full p-4">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 bg-gray-800 text-white rounded-full px-3 py-1"
      >
        &#x2715;
      </button>
      <img
        src={selectedImage}
        alt="Selected Galeri Tani"
        className="w-full h-auto rounded-lg max-h-[90vh] object-contain"
      />
    </div>
  </div>
)}
 

      <section className="bg-gray-200 p-6 md:p-24">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-4 text-center">Komitmen Kami</h2>
          <p className="text-justify mb-6">
            Kami berkomitmen untuk menyediakan produk dan layanan terbaik yang
            mendukung keberhasilan pertanian hidroponik Anda. Dengan fokus pada
            kualitas dan keberlanjutan, kami menghadirkan solusi yang dirancang
            untuk memenuhi kebutuhan petani urban dan pegiat hidroponik di Kota
            Cikarang. HidroTani hadir sebagai mitra terpercaya dalam perjalanan
            Anda menuju pertanian yang lebih hijau, efisien, dan berkelanjutan,
            memberikan pengalaman berkebun yang menyenangkan dan penuh manfaat.
          </p>
          <ol className="list-decimal pl-6 space-y-6 md:space-y-8">
            <li className="flex flex-col md:flex-row items-start space-x-0 md:space-x-6 border-b border-gray-300 pb-6">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <p className="w-full text-justify px-6">
                  <strong className="font-bold "> Kualitas produk</strong>
                  <br />
                  Berawal dari visi untuk mendukung praktik pertanian
                  berkelanjutan, HidroTani hadir sebagai platform bagi para
                  pegiat urban farming dan penggemar hidroponik di Cikarang.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="kualitas-produk.jpg"
                  alt="Kualitas Produk"
                  className="w-full h-auto max-w-xs rounded-lg shadow-md mx-auto md:mx-20"
                />
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-start space-x-0 md:space-x-6 border-b border-gray-300 pb-6">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <p className="w-full text-justify px-6">
                  <strong className="font-bold text-left"> Edukasi</strong>
                  <br />
                  Kami memberikan informasi dan panduan komprehensif tentang
                  bercocok tanam secara hidroponik, mulai dari pemahaman dasar
                  hingga teknik yang lebih mendalam.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="ahli.jpg"
                  alt="Edukasi"
                  className="w-full h-auto max-w-xs rounded-lg shadow-md mx-auto md:mx-20"
                />
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-start space-x-0 md:space-x-6 border-b border-gray-300 pb-6">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <p className="w-full text-justify px-6">
                  <strong className="font-bold"> Komunitas</strong>
                  <br />
                  Selain menyediakan produk, kami membangun komunitas belajar
                  bagi para pengguna, baik pemula maupun yang sudah
                  berpengalaman, untuk berbagi pengalaman dan pengetahuan
                  tentang hidroponik.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="berkomunitas.jpg"
                  alt="Komunitas"
                  className="w-full h-auto max-w-xs rounded-lg  shadow-md mx-auto md:mx-20"
                />
              </div>
            </li>
          </ol>
        </div>
        
      </section>
      <Footer/>
    </div>
  );
};

export default About;
