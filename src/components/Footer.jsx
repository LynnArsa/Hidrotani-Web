const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 p-8">
      <div className="flex flex-col md:flex-row md:justify-between gap-8 text-center md:text-left">

        {/* Bagian Hidroponik */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Tentang Hidrotani</h3>
          <p className="text-blue-gray-600 text-justify max-w-xs">
            Hidrotani menyediakan solusi lengkap untuk kebutuhan bercocok tanam
            hidroponik Anda, mulai dari alat, edukasi, hingga forum komunitas.
            Kami mendukung setiap langkah Anda menuju pertanian yang lebih
            efisien dan ramah lingkungan.
          </p>
        </div>

        {/* Bagian Kontak */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
          <p className="text-blue-gray-600">Jl.Botanic No.123, Cikarang Pusat</p>
          <p className="text-blue-gray-600">Email: info@hidrotani.com</p>
          <p className="text-blue-gray-600">Telepon: +62 812 3456 7890</p>
        </div>

        {/* Bagian Aplikasi Pembayaran */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Pembayaran</h3>
          <div className="flex gap-4">
            <img
              src="gopay.png"
              alt="GoPay"
              className="w-12 h-10 object-contain" // Tambahkan object-contain untuk menjaga proporsi gambar
              style={{ minWidth: "2.5rem", minHeight: "2.5rem" }} // Ukuran tetap
            />
            <img
              src="ovo.png"
              alt="OVO"
              className="w-12 h-10 object-contain"
              style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
            />
            <img
              src="dana.png"
              alt="Dana"
              className="w-10 h-10 object-contain"
              style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
            />
            <img
              src="seabank.png"
              alt="LinkAja"
              className="w-10 h-10 object-contain"
              style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
            />
            <img
              src="mandiri.png"
              alt="LinkAja"
              className="w-10 h-10 object-contain"
              style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
            />
            {/* Tambahkan logo aplikasi lainnya jika perlu */}
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Pengiriman</h3>
          <div className="flex gap-4">
            <img
              src="sicepat.png"
              alt="GoPay"
              className="w-12 h-10 object-contain" // Tambahkan object-contain untuk menjaga proporsi gambar
              style={{ minWidth: "2.5rem", minHeight: "2.5rem" }} // Ukuran tetap
            />
            <img
              src="spx-express.png"
              alt="OVO"
              className="w-12 h-10 object-contain"
              style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
            />
            <img
              src="ninja-xpress.png"
              alt="Dana"
              className="w-10 h-10 object-contain"
              style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
            />
            <img
              src="gojek.png"
              alt="LinkAja"
              className="w-10 h-10 object-contain"
              style={{ minWidth: "2.5rem", minHeight: "2.5rem" }}
            />
            {/* Tambahkan logo aplikasi lainnya jika perlu */}
          </div>
        </div>
      </div>

      <hr className="my-8 border-blue-gray-50" />

      <footer className="mt-8">  {/* Menambahkan margin-top */}
  <p className="text-center font-normal text-blue-gray-600">
    &copy; 2024 Hidrotani. Semua Hak Dilindungi.
  </p>
</footer>
    </footer>
  );
};

export default Footer;
