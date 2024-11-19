import { useNavigate } from 'react-router-dom';

const Edukasi = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-secondary p-24 text-white">
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
            <img src="src/assets/edukasi.png" alt="Edukasi Icon" className="mx-auto" />
          </div>
        </div>
      </section>

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
            className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700"
            onClick={() => navigate('/edukasi/panduan')}
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
            className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700"
            onClick={() => navigate('/edukasi/artikel')}
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
            className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700"
            onClick={() => navigate('/edukasi/faq')}
          >
            Lihat FAQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edukasi;
