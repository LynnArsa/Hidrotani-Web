import { useState } from "react";

const Mobile = () => {
  const [visibleParagraph, setVisibleParagraph] = useState(null);
  const [showDownloadOverlay, setShowDownloadOverlay] = useState(false);

  const handleBuyNowClick = () => {
    setShowDownloadOverlay(true);
  };

  const closeOverlay = () => {
    setShowDownloadOverlay(false);
  };

  // Fungsi untuk toggle visibilitas paragraf berdasarkan index
  const toggleParagraphVisibility = (index) => {
    if (visibleParagraph === index) {
      setVisibleParagraph(null); // Menyembunyikan paragraf jika sudah terbuka
    } else {
      setVisibleParagraph(index); // Menampilkan paragraf yang dipilih
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-secondary  p-4 md:p-16 text-white ">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {" "}
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
              Aplikasi HidroTani!
            </h1>
            <p className="text-justify mb-6">
              Solusi lengkap untuk semua tantangan hidroponik Anda, hadir di
              ujung jari. Dengan HidroTani, Anda dapat mengelola tanaman
              hidroponik dengan mudah, menemukan solusi atas masalah yang sering
              muncul, serta mendapatkan tips dan dukungan untuk hasil yang
              optimal. HidroTani adalah teman terpercaya Anda dalam perjalanan
              pertanian modern.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 flex justify-center md:justify-end gap-4">
            <img
              src="src/assets/aplikasi-hidrotani2.png"
              className="w-full sm:max-w-sm md:max-w-md h-auto rounded-lg"
              alt="Mobile App 1"
            />
            <img
              src="src/assets/aplikasi-hidrotani1.png"
              className="w-full sm:max-w-sm md:max-w-md h-auto rounded-lg"
              alt="Mobile App 2"
            />
          </div>
        </div>
      </section>

      <section className="bg-white p-8 md:p-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Bagian Gambar */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/mobile3.png"
              alt="Gemah Ripah Tani2"
              className="w-full max-w-xs md:max-w-md rounded-xl"
            />
            <button
              className="bg-green-900 hover:bg-green-700 hover:text-yellow-300 text-white py-3 px-8 text-lg md:text-xl font-semibold rounded-lg mt-4 md:mt-6 shadow-md hover:shadow-lg hover:shadow-green-500/50 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleBuyNowClick}
            >
              Unduh Sekarang
            </button>
          </div>

          {/* Bagian Teks */}
          <div className="md:w-1/2 text-center ">
            <h2 className="text-3xl font-bold mb-4">
              Mengunduh Aplikasi HidroTani !
            </h2>
            <p className="text-justify">
              Mulai berbelanja dan berinteraksi dengan mudah di semua perangkat
              Anda melalui HidroTani. Aplikasi ini dirancang untuk mendukung
              segala kebutuhan hidroponik Anda, dari berbelanja perlengkapan
              hingga berinteraksi dalam komunitas yang aktif. Dengan HidroTani,
              pengalaman belanja menjadi lebih lancar dan terintegrasi dengan
              fitur-fitur terkini.
              <br />
              <br />
              Dapatkan akses ke fitur E-commerce yang lengkap, Forum Komunitas
              untuk berbagi pengalaman dengan sesama pengguna, serta ruang
              diskusi privat yang aman. HidroTani adalah solusi terbaik untuk
              Anda yang menginginkan kemudahan, interaksi, dan dukungan maksimal
              dalam perjalanan pertanian modern. Mari bergabung dengan komunitas
              kami dan rasakan manfaatnya dengan mengunduh aplikasi HidroTani
              sekarang juga.
            </p>
          </div>
        </div>

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
                className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 w-full sm:w-auto"
              >
                Download Sekarang
              </a>
            </div>
          </div>
        )}
      </section>

      <section className="bg-gray-200 p-8 md:p-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Bagian Teks */}
          <div className="md:w-1/2 text-justify md:text-left">
            <h2 className="text-3xl font-bold mb-4 md:text-center">
              Mengapa HidroTani App?
            </h2>
            <p>
              HidroTani App dirancang khusus untuk memenuhi kebutuhan petani
              hidroponik.
              <br />
              Dengan aplikasi ini Anda dapat:
            </p>

            {/* Poin-Poin Penjelasan */}
            <div className="mt-6 space-y-6">
              <div>
                <strong className="font-bold text-lg">Akses E-Commerce</strong>
                <p>
                  Membeli alat hidroponik, nutrisi, dan hasil panen dengan
                  mudah.
                </p>
              </div>

              <div>
                <strong className="font-bold text-lg">Forum Komunitas</strong>
                <p>
                  Berinteraki dengan pengguna lain, berbagi pengalaman dan
                  mendapatkan tips dari ahli hidroponik.
                </p>
              </div>

              <div>
                <strong className="font-bold text-lg">Edukasi</strong>
                <p>
                  Akses ke artikel dan tutorial untuk meningkatkan keterampilan
                  dan pengetahuan hidroponik anda.
                </p>
              </div>
            </div>
          </div>

          {/* Bagian Gambar */}
          <div className="flex flex-col items-center md:w-1/2">
            <img
              src="src/assets/mobile2.png"
              alt="Gemah Ripah Tani2"
              className="w-2/3 max-w-none md:max-w-md rounded-xl max-h-48 object-contain" // ukuran lebih kecil untuk mobile
            />
            <img
              src="src/assets/mobile1.png"
              alt="Gemah Ripah Tani2"
              className="w-2/3 max-w-none md:max-w-md rounded-xl bg-transparent max-h-48 object-contain" // ukuran lebih kecil untuk mobile
            />
          </div>
        </div>
      </section>

      <section className="bg-white p-8 md:p-24 flex justify-center">
        <div className="md:w-full text-justify md:text-center">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Pertanyaan yang sering diajukan
          </h2>
          <p className="text-justify">
            Berikut ini adalah pertanyaan yang paling sering ditanyakan tentang
            HidroTani. Tidak dapat menemukan apa yang Anda cari? Ngobrol dengan
            tim kami yang ramah!
          </p>

          {/* Title Baru untuk Daftar Pertanyaan */}
          <div className="flex items-center mt-8">
            <h3 className="text-2xl font-semibold text-left">
              Apa itu HidroTani?
            </h3>

            {/* Tombol untuk Menampilkan / Menyembunyikan Paragraf */}
            <button
              onClick={() => toggleParagraphVisibility(0)}
              className="mt-4 ml-4 p-2 bg-green-900 text-white rounded-md flex items-center justify-center"
            >
              <i
                className={`bx ${
                  visibleParagraph === 0 ? "bx-chevron-up" : "bx-chevron-down"
                } text-lg`}
              ></i>
              <span className="text-xs flex items-center">
                {visibleParagraph === 0 ? "Tutup" : "Lihat"}
              </span>
            </button>
          </div>

          {/* Paragraf yang Tersembunyi atau Ditampilkan */}
          {visibleParagraph === 0 && (
            <>
              <p className="text-justify mt-4">
                HidroTani adalah aplikasi yang dirancang untuk memudahkan
                pengguna dalam berbelanja produk hidroponik, berinteraksi dengan
                komunitas, dan mendapatkan informasi edukatif mengenai praktik
                hidroponik.
              </p>
              <hr className="border-t-2 border-gray-300 mt-4" />{" "}
              {/* Garis Pembatas */}
            </>
          )}

          <div className="flex items-center mt-8">
            <h3 className="text-2xl font-semibold text-left">
              Bagaimana cara mendaftar di HidroTani?
            </h3>

            {/* Tombol untuk Menampilkan / Menyembunyikan Paragraf */}
            <button
              onClick={() => toggleParagraphVisibility(1)}
              className="mt-4 ml-4 p-2 bg-green-900 text-white rounded-md flex items-center justify-center"
            >
              <i
                className={`bx ${
                  visibleParagraph === 1 ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
              <span className="text-xs flex items-center">
                {visibleParagraph === 1 ? "Tutup" : "Lihat"}
              </span>
            </button>
          </div>

          {/* Paragraf yang Tersembunyi atau Ditampilkan */}
          {visibleParagraph === 1 && (
            <>
              <p className="text-justify mt-4">
                <ol className="list-inside list-decimal space-y-4">
                  <li className="font-bold">Buka Website atau Aplikasi HidroTani. </li>
                  <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
                  Akses HidroTani melalui browser di laptop atau perangkat mobile Anda, atau unduh aplikasinya di Play Store jika tersedia.
                  </ul>
                  <li className="font-bold">Klik Tombol Masuk </li>
                  <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
                  Di halaman utama, cari tombol Masuk kemudian  Klik Daftar Akun.
                  </ul>
                  <li className="font-bold">Isi Formulir Pendaftaran </li>
                  <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
                  <li>  Nama</li>
                  <li>  Nomer Telepon</li>
                  <li> Email</li>
                  <li>  Kata Sandi</li>
                  </ul>
                  <li className="font-bold">Login ke Akun Anda </li>
                  <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
                  Setelah berhasil mendaftar, gunakan email dan kata sandi yang telah dibuat untuk masuk ke akun HidroTani Anda.
                  </ul>
                </ol>
              </p>
              <hr className="border-t-2 border-gray-300 mt-4" />{" "}
              {/* Garis Pembatas */}
            </>
          )}

          {/* Menambahkan lebih banyak pertanyaan yang sama */}
          <div className="flex items-center mt-8">
            <h3 className="text-2xl font-semibold text-left">
              Apakah saya perlu membayar untuk menggunakan HidroTani?
            </h3>

            <button
              onClick={() => toggleParagraphVisibility(2)}
              className="mt-4 ml-4 p-2 bg-green-900 text-white rounded-md flex items-center justify-center"
            >
              <i
                className={`bx ${
                  visibleParagraph === 2 ? "bx-chevron-up" : "bx-chevron-down"
                } text-lg`}
              ></i>
              <span className="text-xs flex items-center">
                {visibleParagraph === 2 ? "Tutup" : "Lihat"}
              </span>
            </button>
          </div>

          {visibleParagraph === 2 && (
            <>
              <p className="text-justify mt-4">
              HidroTani dapat digunakan secara gratis untuk mengakses berbagai fitur edukasi, komunitas, dan panduan hidroponik. Namun, terdapat fitur premium tertentu yang memerlukan pembayaran, seperti layanan konsultasi ahli atau pembelian peralatan hidroponik melalui aplikasi.
              </p>
              <hr className="border-t-2 border-gray-300 mt-4" />{" "}
              {/* Garis Pembatas */}
            </>
          )}

          {/* Pertanyaan lainnya */}
          {/* ... */}
        </div>
      </section>
    </div>
  );
};

export default Mobile;
