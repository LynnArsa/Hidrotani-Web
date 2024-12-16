import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Data FAQ
  const faqs = [
    {
      id: 1,
      question: "Apa itu HidroTani-App?",
      answer:
        "HidroTani adalah aplikasi yang dirancang untuk memudahkan pengguna dalam berbelanja produk hidroponik, berinteraksi dengan komunitas, dan mendapatkan informasi edukatif mengenai praktik hidroponik.",
    },
    {
      id: 2,
      question: "Bagaimana cara mendaftar di HidroTani-App",
      answer: (
        <>
          <p className="text-justify mt-4">
            <ol className="list-inside list-decimal space-y-4">
              <li className="font-bold">
                Buka Website atau Aplikasi HidroTani.{" "}
              </li>
              <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
                Akses HidroTani melalui browser di laptop atau perangkat mobile
                Anda, atau unduh aplikasinya di Play Store jika tersedia.
              </ul>
              <li className="font-bold">Klik Tombol Masuk </li>
              <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
                Di halaman utama, cari tombol Masuk kemudian Klik Daftar Akun.
              </ul>
              <li className="font-bold">Isi Formulir Pendaftaran </li>
              <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
                <li> Nama</li>
                <li> Nomer Telepon</li>
                <li> Email</li>
                <li> Kata Sandi</li>
              </ul>
              <li className="font-bold">Login ke Akun Anda </li>
              <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
                Setelah berhasil mendaftar, gunakan email dan kata sandi yang
                telah dibuat untuk masuk ke akun HidroTani Anda.
              </ul>
            </ol>
          </p>
        </>
      ),
    },
    {
      id: 3,
      question: "Apakah saya perlu membayar untuk menggunakan HidroTani?",
      answer: (
        <>
          <p className="text-justify mt-4">
            HidroTani dapat digunakan secara gratis untuk mengakses berbagai
            fitur edukasi, komunitas, dan panduan hidroponik. Namun, terdapat
            fitur premium tertentu yang memerlukan pembayaran, seperti layanan
            konsultasi ahli atau pembelian peralatan hidroponik melalui
            aplikasi.
          </p>
        </>
      ),
    },
    {
      id: 4,
      question: "Bagaimana cara berbelanja di HidroTani?",
      answer: (
        <>
          <ol>
            <li>
              <strong>1. Unduh Aplikasi HidroTani:</strong>
              Untuk memulai belanja di HidroTani, pertama-tama unduh aplikasi
              kami melalui
              <a
                href="https://play.google.com/store/apps/details?id=com.hidrotani"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Playstore
              </a>
              .
            </li>

            <li>
              <strong>2. Daftar atau Masuk ke Akun Anda:</strong>
              Setelah mengunduh aplikasi, buka aplikasi HidroTani dan buat akun
              atau masuk jika sudah memiliki akun.
            </li>

            <li>
              <strong>3. Pilih Produk yang Anda Inginkan:</strong>
              Jelajahi berbagai produk peralatan hidroponik yang kami tawarkan.
              Pilih produk yang Anda inginkan dan tambahkan ke keranjang
              belanja.
            </li>

            <li>
              <strong>4. Lanjutkan ke Pembayaran:</strong>
              Setelah memilih produk, lanjutkan ke proses checkout, masukkan
              alamat pengiriman, dan pilih metode pembayaran yang Anda inginkan.
            </li>

            <li>
              <strong>5. Selesaikan Pembelian:</strong>
              Setelah konfirmasi pembayaran, pesanan Anda akan diproses dan
              dikirim sesuai dengan alamat yang Anda masukkan.
            </li>
          </ol>
        </>
      ),
    },
    {
      id: 5,
      question:
        "Bagaimana cara menghubungi tim dukungan jika saya memiliki pertanyaan?",
      answer: (
        <>
          <ol>
            <li>
              <strong>Lewat Email:</strong>
              Jika Anda memiliki pertanyaan atau membutuhkan bantuan, Anda dapat
              menghubungi tim dukungan kami melalui email di:
              <a href="mailto:support@hidrotani.com">support@hidrotani.com</a>
            </li>
            <li>
              <strong>Lewat Telepon:</strong>
              Untuk bantuan lebih cepat, Anda juga bisa menghubungi kami melalui
              telepon di nomor:
              <a href="tel:+6212345678">(021) 1234 5678</a>
            </li>
            <li>
              <strong>Lewat Live Chat di Aplikasi:</strong>
              Jika Anda sudah mengunduh aplikasi HidroTani, Anda dapat
              menggunakan fitur live chat yang tersedia di dalam aplikasi untuk
              berbicara langsung dengan tim dukungan kami.
            </li>
            <li>
              <strong>Sosial Media:</strong>
              Tim dukungan kami juga siap membantu Anda melalui sosial media:
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/hidrotani_official"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram: @hidrotani_official
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/hidrotani"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook: HidroTani
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong>Formulir Kontak di Website:</strong>
              Anda juga dapat mengisi formulir kontak di website kami untuk
              mengirimkan pertanyaan atau permintaan bantuan. Kunjungi
              <a href="#" target="_blank" rel="noopener noreferrer">
                HidroTani - Hubungi Kami
              </a>{" "}
              di situs kami.
            </li>
          </ol>
        </>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        FAQ
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "20px",
          fontSize: "14px",
        }}
      >
        Tidak perlu bingung lagi! Temukan jawaban lengkap untuk semua pertanyaan
        yang sering kamu tanyakan tentang layanan dan fitur kami di sini.
      </p>
      <h3
        style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}
      >
        Pertanyaan Populer
      </h3>

      <div style={{ borderRadius: "8px", overflow: "hidden" }}>
        {faqs.map((faq, index) => (
          <div key={faq.id} style={{ borderBottom: "1px solid #ddd" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                padding: "10px 15px",
                transition: "background 0.3s",
                backgroundColor: index % 2 === 0 ? "#f5f9f5" : "#d7f5e5",
              }}
              onClick={() => toggleFAQ(index)}
            >
              <span
                style={{
                  fontWeight: "bold",
                  marginRight: "10px",
                  color: "#555",
                }}
              >
                {faq.id}
              </span>
              <span style={{ flex: 1, fontWeight: "500", color: "#333" }}>
                {faq.question}
              </span>
              <span style={{ fontSize: "16px", color: "#777" }}>
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && faq.answer && (
              <div
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#f9f9f9",
                  color: "#555",
                  fontSize: "14px",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
        <p
          style={{
            textAlign: "right",
            color: "#4caf50",
            fontSize: "14px",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          Lihat lebih banyak...
        </p>
      </div>
    </section>
  );
};

export default FAQ;
