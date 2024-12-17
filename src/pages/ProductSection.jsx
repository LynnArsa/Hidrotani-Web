import { useState } from "react";

const ProductSection = () => {
  const [showDownloadGrid, setShowDownloadGrid] = useState(false);

  const handleBuyNowClick = () => {
    setShowDownloadGrid(true);
  };

  return (
    <section className="bg-green-700 p-6 md:p-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">Produk HidroTani</h2>

        <div className="flex overflow-x-auto space-x-4 md:space-x-8 pb-4">
          <div className="bg-white min-w-[200px] md:min-w-[300px] p-4 md:p-6 rounded-lg shadow-lg text-left">
            <img
              src="paket-hiroponik.jpg"
              alt="Produk 1"
              className="mx-auto mb-2 md:mb-4 w-full h-32 md:h-48 object-cover rounded-md"
            />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Produk Nutrisi A</h3>
            <p className="text-gray-600 mb-1 md:mb-2">
              Nutrisi berkualitas tinggi untuk meningkatkan pertumbuhan tanaman hidroponik Anda.
            </p>
            <p className="text-lg font-semibold text-green-600">Rp. 150.000</p>
            <button
              onClick={handleBuyNowClick}
              className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 mt-2"
            >
              Beli Sekarang
            </button>
          </div>
        </div>

        {showDownloadGrid && (
          <div className="bg-teal-100 p-8 rounded-lg mt-8">
            <h3 className="text-2xl font-bold mb-4">Download aplikasi di Playstore</h3>
            <p className="text-base text-gray-700 mb-6">
              Dapatkan akses mudah ke produk-produk hidroponik kami melalui aplikasi!
            </p>
            <a
              href="#"
              className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700"
            >
              Download Sekarang
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
