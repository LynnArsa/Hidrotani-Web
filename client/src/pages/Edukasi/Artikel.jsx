import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import NavbarUser from "../../components/NavbarUser";

const Artikel = () => {
  const [searchInput, setSearchInput] = useState(""); // State untuk input pencarian
  const [currentPageTips, setCurrentPageTips] = useState(1); // Halaman saat ini untuk Tips
  const [currentPageInovasi, setCurrentPageInovasi] = useState(1); // Halaman saat ini untuk Inovasi
  const [currentPageKeberlanjutan, setCurrentPageKeberlanjutan] = useState(1); // Halaman saat ini untuk Keberlanjutan
  const articlesPerPage = 3; // Jumlah artikel per halaman
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null); // State untuk artikel yang dipilih
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const articles = [
    {
      id: 1,
      title: "Cara Menjaga Keseimbangan pH Ideal dalam Sistem Hidroponik",
      image: "/src/assets/1.webp",
      category: "tips",
      date: "2023-10-01",
      content: (
        <>
          <p>
            Menjaga pH dalam sistem hidroponik sangat penting untuk memastikan
            tanaman tumbuh optimal. Berikut adalah langkah-langkahnya:
          </p>
          <br></br>
          <ul className="list-disc pl-6">
            <li>
              <strong>Periksa pH Secara Rutin:</strong> Gunakan pH meter atau
              kertas lakmus untuk mengecek pH larutan nutrisi setiap 2–3 hari.
            </li>
            <li>
              b<strong>Gunakan Larutan pH Up/Down:</strong> Tambahkan pH up jika
              terlalu rendah, atau pH down jika terlalu tinggi, secara perlahan
              sambil memantau perubahan.
            </li>
            <li>
              <strong>Gunakan Air Berkualitas:</strong> Pilih air bersih seperti
              air RO (reverse osmosis) untuk menghindari fluktuasi pH akibat
              mineral berlebih.
            </li>
            <li>
              <strong>Ganti Larutan Nutrisi:</strong> Lakukan penggantian
              larutan setiap 1–2 minggu untuk mencegah penumpukan garam yang
              dapat memengaruhi pH.
            </li>
            <li>
              <strong>Pantau Suhu:</strong> Pastikan suhu larutan berada dalam
              kisaran 18–22°C untuk menjaga kestabilan pH.
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Pemupukan yang Tepat untuk Hasil Panen Maksimal",
      image: "/src/assets/2.webp",
      category: "tips",
      date: "2023-10-02",
      content: (
        <>
          <p>
            Pemupukan merupakan salah satu langkah penting dalam proses budidaya
            tanaman. Dengan teknik pemupukan yang tepat, petani dapat
            meningkatkan kualitas serta kuantitas hasil panen. Artikel ini akan
            membahas cara memilih pupuk yang sesuai, waktu pemupukan yang tepat,
            serta cara mengaplikasikan pupuk untuk hasil maksimal.
          </p>
          <br></br>
          <strong>Mengapa Pemupukan Itu Penting?</strong>
          <p>
            Pupuk memberikan nutrisi penting yang dibutuhkan tanaman untuk
            tumbuh, seperti nitrogen (N), fosfor (P), dan kalium (K). Selain
            itu, pupuk juga dapat memperbaiki struktur tanah dan membantu
            menjaga kesuburannya dalam jangka panjang. Tanpa nutrisi yang cukup,
            tanaman tidak dapat berkembang secara optimal, yang berakibat pada
            penurunan produktivitas.
          </p>
          <br></br>
          <strong>Jenis-jenis Pupuk</strong>
          <ul className="list-decimal pl-6">
            <li>
              <strong>Pupuk Organik</strong>
              <p className="pl-6">
                Berasal dari bahan alami seperti kompos, pupuk kandang, atau
                sisa tanaman. Memiliki <strong>keunggulan</strong> memperbaiki
                struktur tanah dan ramah lingkungan, namun memiliki{" "}
                <strong>kekurangan</strong> yaitu kandungan nutrisi lebih rendah
                dibanding pupuk kimia.{" "}
              </p>
            </li>
            <li>
              <strong>Pupuk Kimia</strong>
              <p className="pl-6">
                Diproduksi secara sintetik dengan kandungan nutrisi tertentu.
                Memiliki <strong>keunggulan</strong> nutrisi lebih cepat diserap
                tanaman dan efektik untuk meningkatkan hasil panen dalam waktu
                singkat <strong>kekurangan</strong> yaitu penggunaan berlebih
                dapat merusak tanah
              </p>
            </li>
          </ul>
          <br></br>

          <strong>Waktu Pemupukan yang tepat</strong>
          <ul className="list-decimal pl-6">
            <li>
              <strong>Saat Persiapan Lahan</strong>
              <p className="list-disc pl-6">
                Aplikasi pupuk dasar sebelum tanam membantu menyediakan nutrisi
                awal bagi tanaman.{" "}
              </p>
            </li>
            <li>
              <strong>Saat Pertumbuhan Vegetatif</strong>
              <p className="list-disc pl-6">
                Berikan pupuk kaya nitrogen untuk membantu perkembangan daun dan
                batang.{" "}
              </p>
            </li>
            <li>
              <strong>Saat Pembungaan dan Pembuahan</strong>
              <p className="list-disc pl-6">
                Gunakan pupuk tinggi fosfor dan kalium untuk mendukung
                pembentukan bunga dan buah.{" "}
              </p>
            </li>
          </ul>
          <br></br>
          <strong>Tips Pemupukan yang Efektif</strong>
          <ul className="list-disc pl-6">
            <li>Sesuaikan jenis pupuk dengan kebutuhan tanaman</li>
            <li>
              Jangan berlebihan dalam penggunaan pupuk kimia, karena dapat
              mencemari lingkungan.
            </li>
            <li>Kombinasikan pupuk organik dan kimia untuk hasil optimal.</li>
            <li>
              Perhatikan waktu dan teknik aplikasi pupuk agar tidak terbuang
              sia-sia.
            </li>
          </ul>
          <br></br>
          <p>
            Pemupukan yang tepat adalah kunci untuk hasil panen yang maksimal.
            Dengan memahami kebutuhan tanaman dan menerapkan teknik yang benar,
            petani dapat meningkatkan produktivitas sekaligus menjaga
            kelestarian lingkungan.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Teknik Penyiraman Efisien",
      image: "/src/assets/4.webp",
      category: "tips",
      date: "2023-10-03",
      content: (
        <>
          <p>
            Pemupukan merupakan salah satu langkah penting dalam meningkatkan
            produktivitas tanaman. Berikut adalah poin-poin penting yang perlu
            diperhatikan agar pemupukan dapat memberikan hasil maksimal:
          </p>
          <br></br>
          <ul className="list-disc pl-6">
            <li>
              <strong>Periksa pH Secara Rutin:</strong> Gunakan pH meter atau
              kertas lakmus untuk mengecek pH larutan nutrisi setiap 2–3 hari.
            </li>
            <li>
              <strong>Gunakan Larutan pH Up/Down:</strong> Tambahkan pH up jika
              terlalu rendah, atau pH down jika terlalu tinggi, secara perlahan
              sambil memantau perubahan.
            </li>
            <li>
              <strong>Gunakan Air Berkualitas:</strong> Pilih air bersih seperti
              air RO (reverse osmosis) untuk menghindari fluktuasi pH akibat
              mineral berlebih.
            </li>
            <li>
              <strong>Ganti Larutan Nutrisi:</strong> Lakukan penggantian
              larutan setiap 1–2 minggu untuk mencegah penumpukan garam yang
              dapat memengaruhi pH.
            </li>
            <li>
              <strong>Pantau Suhu:</strong> Pastikan suhu larutan berada dalam
              kisaran 18–22°C untuk menjaga kestabilan pH.
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "Cara Mudah Memelihara Tanaman Indoor yang Bebas Repot",
      image: "/src/assets/3.webp",
      category: "inovasi",
      date: "2023-10-04",
      content: (
        <>
          <p>
            Pemupukan merupakan salah satu langkah penting dalam meningkatkan
            produktivitas tanaman. Berikut adalah poin-poin penting yang perlu
            diperhatikan agar pemupukan dapat memberikan hasil maksimal:
          </p>
          <br></br>
          <ul className="list-disc pl-6">
            <li>
              <strong>Periksa pH Secara Rutin:</strong> Gunakan pH meter atau
              kertas lakmus untuk mengecek pH larutan nutrisi setiap 2–3 hari.
            </li>
            <li>
              <strong>Gunakan Larutan pH Up/Down:</strong> Tambahkan pH up jika
              terlalu rendah, atau pH down jika terlalu tinggi, secara perlahan
              sambil memantau perubahan.
            </li>
            <li>
              <strong>Gunakan Air Berkualitas:</strong> Pilih air bersih seperti
              air RO (reverse osmosis) untuk menghindari fluktuasi pH akibat
              mineral berlebih.
            </li>
            <li>
              <strong>Ganti Larutan Nutrisi:</strong> Lakukan penggantian
              larutan setiap 1–2 minggu untuk mencegah penumpukan garam yang
              dapat memengaruhi pH.
            </li>
            <li>
              <strong>Pantau Suhu:</strong> Pastikan suhu larutan berada dalam
              kisaran 18–22°C untuk menjaga kestabilan pH.
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
    {
      id: 5,
      title: "Perawatan Tanaman di Musim Hujan Agar Tidak Busuk",
      image: "/src/assets/5.webp",
      category: "tips",
      date: "2023-10-05",
      content: (
        <>
          <p>
            Pemupukan merupakan salah satu langkah penting dalam meningkatkan
            produktivitas tanaman. Berikut adalah poin-poin penting yang perlu
            diperhatikan agar pemupukan dapat memberikan hasil maksimal:
          </p>
          <br></br>
          <ul className="list-disc pl-6">
            <li>
              <strong>Periksa pH Secara Rutin:</strong> Gunakan pH meter atau
              kertas lakmus untuk mengecek pH larutan nutrisi setiap 2–3 hari.
            </li>
            <li>
              <strong>Gunakan Larutan pH Up/Down:</strong> Tambahkan pH up jika
              terlalu rendah, atau pH down jika terlalu tinggi, secara perlahan
              sambil memantau perubahan.
            </li>
            <li>
              <strong>Gunakan Air Berkualitas:</strong> Pilih air bersih seperti
              air RO (reverse osmosis) untuk menghindari fluktuasi pH akibat
              mineral berlebih.
            </li>
            <li>
              <strong>Ganti Larutan Nutrisi:</strong> Lakukan penggantian
              larutan setiap 1–2 minggu untuk mencegah penumpukan garam yang
              dapat memengaruhi pH.
            </li>
            <li>
              <strong>Pantau Suhu:</strong> Pastikan suhu larutan berada dalam
              kisaran 18–22°C untuk menjaga kestabilan pH.
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
    {
      id: 6,
      title: "Rahasia Menjaga Tanaman Tetap Hijau Sepanjang Tahun",
      image: "/src/assets/6.webp",
      category: "tips",
      date: "2023-10-06",
      content: (
        <>
          <p>
            Pemupukan merupakan salah satu langkah penting dalam meningkatkan
            produktivitas tanaman. Berikut adalah poin-poin penting yang perlu
            diperhatikan agar pemupukan dapat memberikan hasil maksimal:
          </p>
          <br></br>
          <ul className="list-disc pl-6">
            <li>
              <strong>Periksa pH Secara Rutin:</strong> Gunakan pH meter atau
              kertas lakmus untuk mengecek pH larutan nutrisi setiap 2–3 hari.
            </li>
            <li>
              <strong>Gunakan Larutan pH Up/Down:</strong> Tambahkan pH up jika
              terlalu rendah, atau pH down jika terlalu tinggi, secara perlahan
              sambil memantau perubahan.
            </li>
            <li>
              <strong>Gunakan Air Berkualitas:</strong> Pilih air bersih seperti
              air RO (reverse osmosis) untuk menghindari fluktuasi pH akibat
              mineral berlebih.
            </li>
            <li>
              <strong>Ganti Larutan Nutrisi:</strong> Lakukan penggantian
              larutan setiap 1–2 minggu untuk mencegah penumpukan garam yang
              dapat memengaruhi pH.
            </li>
            <li>
              <strong>Pantau Suhu:</strong> Pastikan suhu larutan berada dalam
              kisaran 18–22°C untuk menjaga kestabilan pH.
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
    {
      id: 7,
      title: "Teknologi Hidroponik Terbaru untuk Meningkatkan Hasil Panen",
      image: "/src/assets/7.jpg",
      category: "inovasi",
      date: "2023-10-07",
      content: (
        <>
          <p>
            Hidroponik merupakan metode bercocok tanam tanpa menggunakan tanah
            sebagai media tumbuh. Teknologi ini semakin populer di kalangan
            petani modern karena kemampuannya dalam meningkatkan efisiensi
            penggunaan lahan dan air, serta menghasilkan tanaman berkualitas
            tinggi. Dalam beberapa tahun terakhir, berbagai inovasi terbaru di
            bidang hidroponik telah diperkenalkan untuk semakin memaksimalkan
            hasil panen. Berikut adalah beberapa teknologi hidroponik terbaru
            yang patut diperhatikan.
          </p>
          <br></br>
          <ul class="list-decimal pl-6 space-y-4">
            <li>
              <h2 class="text-lg font-semibold">Sistem Hidroponik Vertikal</h2>
              <p>
                Sistem hidroponik vertikal memungkinkan petani untuk menanam
                lebih banyak tanaman dalam ruang yang terbatas. Dengan
                memanfaatkan struktur bertingkat, sistem ini ideal untuk daerah
                perkotaan dengan lahan terbatas.
              </p>
              <strong>Keunggulan:</strong>
              <ul class="list-disc pl-6">
                <li>Memaksimalkan penggunaan ruang vertikal.</li>
                <li>
                  Meningkatkan hasil panen hingga tiga kali lipat dibandingkan
                  metode tradisional.
                </li>
                <li>Ramah lingkungan karena menggunakan lebih sedikit air.</li>
              </ul>
            </li>
            <li>
              <h2 class="text-lg font-semibold">
                Sensor IoT untuk Pemantauan Otomatis
              </h2>
              <p>
                Internet of Things (IoT) kini banyak digunakan dalam sistem
                hidroponik untuk memantau berbagai parameter penting, seperti
                pH, suhu air, kelembapan, dan kadar nutrisi.
              </p>
              <strong>Keunggulan:</strong>
              <ul class="list-disc pl-6">
                <li>
                  Pemantauan real-time untuk mencegah kesalahan dalam
                  pengelolaan nutrisi.
                </li>
                <li>Mengurangi kebutuhan tenaga kerja manual.</li>
                <li>
                  Memberikan data analitik untuk optimasi panen di masa depan.
                </li>
              </ul>
            </li>
            <li>
              <h2 class="text-lg font-semibold">
                Nutrisi Cair yang Disesuaikan dengan AI
              </h2>
              <p>
                Teknologi kecerdasan buatan (AI) kini diterapkan untuk
                menyesuaikan campuran nutrisi cair berdasarkan jenis tanaman dan
                fase pertumbuhan.
              </p>
              <strong>Keunggulan:</strong>
              <ul class="list-disc pl-6">
                <li>Mengurangi pemborosan nutrisi.</li>
                <li>
                  Mendukung pertumbuhan tanaman yang lebih sehat dan produktif.
                </li>
                <li>Mengurangi biaya operasional dalam jangka panjang.</li>
              </ul>
            </li>
            <li>
              <h2 class="text-lg font-semibold">Sistem Irigasi Tetes Cerdas</h2>
              <p>
                Sistem irigasi tetes kini dilengkapi dengan teknologi cerdas
                yang dapat mengatur jumlah air berdasarkan kebutuhan spesifik
                tanaman.
              </p>
              <strong>Keunggulan:</strong>
              <ul class="list-disc pl-6">
                <li>
                  Menghemat hingga 70% air dibandingkan metode konvensional.
                </li>
                <li>
                  Meningkatkan kualitas tanaman karena kelembapan selalu
                  terjaga.
                </li>
                <li>Ramah lingkungan karena meminimalkan limbah air.</li>
              </ul>
            </li>
            <li>
              <h2 class="text-lg font-semibold">
                Greenhouse Terintegrasi dengan Hidroponik
              </h2>
              <p>
                Greenhouse modern yang dilengkapi dengan teknologi hidroponik
                menawarkan kontrol penuh terhadap lingkungan tumbuh tanaman.
              </p>
              <strong>Keunggulan:</strong>
              <ul class="list-disc pl-6">
                <li>
                  Cocok untuk berbagai jenis tanaman, termasuk sayuran, buah,
                  dan rempah-rempah.
                </li>
                <li>Meningkatkan hasil panen secara signifikan.</li>
                <li>Mencegah serangan hama dan penyakit.</li>
              </ul>
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
    {
      id: 8,
      title:
        "Inovasi Pertanian Vertikal yang Membawa Dampak Positif bagi Lingkungan",
      image: "/src/assets/8.jpg",
      category: "inovasi",
      date: "2023-10-08",
      content: (
        <>
          <p>
            Pertanian vertikal adalah metode bercocok tanam modern yang
            mengoptimalkan ruang vertikal dengan menggunakan rak bertingkat.
            Inovasi ini sangat cocok diterapkan di daerah perkotaan yang
            memiliki lahan terbatas. Selain efisien, pertanian vertikal membawa
            berbagai dampak positif bagi lingkungan, antara lain:
          </p>
          <br></br>
          <ul className="list-disc pl-6">
            <li>
              <strong>Penghematan Air</strong>
              <p>
                Dengan sistem irigasi tetes, pertanian vertikal mengurangi
                konsumsi air hingga 70% dibandingkan metode tradisional.
              </p>
            </li>
            <li>
              <strong>Mengurangi Emisi Karbon</strong>
              <p>
                Lokasi dekat dengan konsumen mengurangi kebutuhan transportasi
                jarak jauh, sehingga menurunkan jejak karbon.
              </p>
            </li>
            <li>
              <strong>Pemanfaatan Energi Terbarukan</strong>
              <p>
                Banyak sistem pertanian vertikal menggunakan lampu LED hemat
                energi dan sumber energi terbarukan.
              </p>
            </li>
            <li>
              <strong>Mengurangi Limbah Pangan</strong>
              <p>
                Dengan lingkungan yang terkontrol, hasil panen lebih konsisten
                dan minim kerusakan.
              </p>
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
    {
      id: 9,
      title: "Penggunaan Robotika dalam Pertanian Hidroponik",
      image: "/src/assets/9.jpg",
      category: "inovasi",
      date: "2023-10-10",
      content: (
        <>
          <p>
            Pertanian hidroponik semakin berkembang dengan penerapan teknologi
            robotika untuk meningkatkan efisiensi dan produktivitas. Robotika
            digunakan untuk berbagai tugas, seperti memantau pertumbuhan
            tanaman, mengelola nutrisi, hingga memanen hasil secara otomatis.
          </p>
          <br></br>
          <p>
            Sensor yang terintegrasi dengan robot dapat mendeteksi kebutuhan
            tanaman, seperti tingkat kelembapan, pH, dan nutrisi. Data ini
            kemudian diproses untuk memberikan tindakan yang tepat secara
            otomatis, sehingga tanaman dapat tumbuh optimal.
          </p>
          <br></br>
          <p>
            Selain itu, robot pemanen membantu mengurangi tenaga kerja manual,
            mempercepat proses panen, dan meminimalkan kerusakan tanaman.
            Teknologi ini tidak hanya meningkatkan efisiensi, tetapi juga
            membantu menciptakan pertanian yang lebih berkelanjutan di masa
            depan.
          </p>
          <br></br>
          <p>
            Penggunaan robotika menjadi solusi inovatif untuk mengatasi
            tantangan dalam pertanian modern, khususnya pada sistem hidroponik
            yang membutuhkan pengelolaan yang presisi.
          </p>
        </>
      ),
    },
    {
      id: 10,
      title:
        "Pemanfaatan AI untuk Meningkatkan Efisiensi dalam Budidaya Hidroponik",
      image: "/src/assets/10.jpg",
      category: "inovasi",
      date: "2023-10-11",
      content: (
        <>
          <p>
            Pemupukan merupakan salah satu langkah penting dalam meningkatkan
            produktivitas tanaman. Berikut adalah poin-poin penting yang perlu
            diperhatikan agar pemupukan dapat memberikan hasil maksimal:
          </p>
          <br></br>
          <ul className="list-disc pl-6">
            <li>
              <strong>Periksa pH Secara Rutin:</strong> Gunakan pH meter atau
              kertas lakmus untuk mengecek pH larutan nutrisi setiap 2–3 hari.
            </li>
            <li>
              <strong>Gunakan Larutan pH Up/Down:</strong> Tambahkan pH up jika
              terlalu rendah, atau pH down jika terlalu tinggi, secara perlahan
              sambil memantau perubahan.
            </li>
            <li>
              <strong>Gunakan Air Berkualitas:</strong> Pilih air bersih seperti
              air RO (reverse osmosis) untuk menghindari fluktuasi pH akibat
              mineral berlebih.
            </li>
            <li>
              <strong>Ganti Larutan Nutrisi:</strong> Lakukan penggantian
              larutan setiap 1–2 minggu untuk mencegah penumpukan garam yang
              dapat memengaruhi pH.
            </li>
            <li>
              <strong>Pantau Suhu:</strong> Pastikan suhu larutan berada dalam
              kisaran 18–22°C untuk menjaga kestabilan pH.
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
    {
      id: 11,
      title:
        "Sistem Akuaponik sebagai Alternatif Hidroponik yang Ramah Lingkungan",
      image: "/src/assets/11.jpg",
      category: "keberlanjutan",
      date: "2023-10-12",
      content: (
        <>
          <p>
            Pemupukan merupakan salah satu langkah penting dalam meningkatkan
            produktivitas tanaman. Berikut adalah poin-poin penting yang perlu
            diperhatikan agar pemupukan dapat memberikan hasil maksimal:
          </p>
          <br></br>
          <ul className="list-disc pl-6">
            <li>
              <strong>Periksa pH Secara Rutin:</strong> Gunakan pH meter atau
              kertas lakmus untuk mengecek pH larutan nutrisi setiap 2–3 hari.
            </li>
            <li>
              <strong>Gunakan Larutan pH Up/Down:</strong> Tambahkan pH up jika
              terlalu rendah, atau pH down jika terlalu tinggi, secara perlahan
              sambil memantau perubahan.
            </li>
            <li>
              <strong>Gunakan Air Berkualitas:</strong> Pilih air bersih seperti
              air RO (reverse osmosis) untuk menghindari fluktuasi pH akibat
              mineral berlebih.
            </li>
            <li>
              <strong>Ganti Larutan Nutrisi:</strong> Lakukan penggantian
              larutan setiap 1–2 minggu untuk mencegah penumpukan garam yang
              dapat memengaruhi pH.
            </li>
            <li>
              <strong>Pantau Suhu:</strong> Pastikan suhu larutan berada dalam
              kisaran 18–22°C untuk menjaga kestabilan pH.
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
    {
      id: 12,
      title: "Mengurangi Jejak Karbon dengan Hidroponik",
      image: "/src/assets/12.jpg",
      category: "keberlanjutan",
      date: "2023-10-13",
      content: (
        <>
          <p>
            Pemupukan merupakan salah satu langkah penting dalam meningkatkan
            produktivitas tanaman. Berikut adalah poin-poin penting yang perlu
            diperhatikan agar pemupukan dapat memberikan hasil maksimal:
          </p>
          <br></br>
          <ul className="list-disc pl-6">
            <li>
              <strong>Periksa pH Secara Rutin:</strong> Gunakan pH meter atau
              kertas lakmus untuk mengecek pH larutan nutrisi setiap 2–3 hari.
            </li>
            <li>
              <strong>Gunakan Larutan pH Up/Down:</strong> Tambahkan pH up jika
              terlalu rendah, atau pH down jika terlalu tinggi, secara perlahan
              sambil memantau perubahan.
            </li>
            <li>
              <strong>Gunakan Air Berkualitas:</strong> Pilih air bersih seperti
              air RO (reverse osmosis) untuk menghindari fluktuasi pH akibat
              mineral berlebih.
            </li>
            <li>
              <strong>Ganti Larutan Nutrisi:</strong> Lakukan penggantian
              larutan setiap 1–2 minggu untuk mencegah penumpukan garam yang
              dapat memengaruhi pH.
            </li>
            <li>
              <strong>Pantau Suhu:</strong> Pastikan suhu larutan berada dalam
              kisaran 18–22°C untuk menjaga kestabilan pH.
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
    {
      id: 13,
      title: "Keuntungan Pertanian Vertikal untuk Keberlanjutan Lingkungan",
      image: "/src/assets/13.jpg",
      category: "keberlanjutan",
      date: "2023-10-14",
      content: (
        <>
          <p>
            Pemupukan merupakan salah satu langkah penting dalam meningkatkan
            produktivitas tanaman. Berikut adalah poin-poin penting yang perlu
            diperhatikan agar pemupukan dapat memberikan hasil maksimal:
          </p>
          <br></br>
          <ul className="list-disc pl-6">
            <li>
              <strong>Periksa pH Secara Rutin:</strong> Gunakan pH meter atau
              kertas lakmus untuk mengecek pH larutan nutrisi setiap 2–3 hari.
            </li>
            <li>
              <strong>Gunakan Larutan pH Up/Down:</strong> Tambahkan pH up jika
              terlalu rendah, atau pH down jika terlalu tinggi, secara perlahan
              sambil memantau perubahan.
            </li>
            <li>
              <strong>Gunakan Air Berkualitas:</strong> Pilih air bersih seperti
              air RO (reverse osmosis) untuk menghindari fluktuasi pH akibat
              mineral berlebih.
            </li>
            <li>
              <strong>Ganti Larutan Nutrisi:</strong> Lakukan penggantian
              larutan setiap 1–2 minggu untuk mencegah penumpukan garam yang
              dapat memengaruhi pH.
            </li>
            <li>
              <strong>Pantau Suhu:</strong> Pastikan suhu larutan berada dalam
              kisaran 18–22°C untuk menjaga kestabilan pH.
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
    {
      id: 14,
      title: "Pentingnya Penggunaan Air dalam Sistem Hidroponik",
      image: "/src/assets/14.jpg",
      category: "keberlanjutan",
      date: "2023-10-15",
      content: (
        <>
          <p>
            Pemupukan merupakan salah satu langkah penting dalam meningkatkan
            produktivitas tanaman. Berikut adalah poin-poin penting yang perlu
            diperhatikan agar pemupukan dapat memberikan hasil maksimal:
          </p>
          <br></br>
          <ul className="list-disc pl-6">
            <li>
              <strong>Periksa pH Secara Rutin:</strong> Gunakan pH meter atau
              kertas lakmus untuk mengecek pH larutan nutrisi setiap 2–3 hari.
            </li>
            <li>
              <strong>Gunakan Larutan pH Up/Down:</strong> Tambahkan pH up jika
              terlalu rendah, atau pH down jika terlalu tinggi, secara perlahan
              sambil memantau perubahan.
            </li>
            <li>
              <strong>Gunakan Air Berkualitas:</strong> Pilih air bersih seperti
              air RO (reverse osmosis) untuk menghindari fluktuasi pH akibat
              mineral berlebih.
            </li>
            <li>
              <strong>Ganti Larutan Nutrisi:</strong> Lakukan penggantian
              larutan setiap 1–2 minggu untuk mencegah penumpukan garam yang
              dapat memengaruhi pH.
            </li>
            <li>
              <strong>Pantau Suhu:</strong> Pastikan suhu larutan berada dalam
              kisaran 18–22°C untuk menjaga kestabilan pH.
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
    {
      id: 15,
      title: "Hidroponik dan Pengurangan Limbah Plastik",
      image: "/src/assets/15.jpg",
      category: "keberlanjutan",
      date: "2023-10-16",
      content: (
        <>
          <p>
            Pemupukan merupakan salah satu langkah penting dalam meningkatkan
            produktivitas tanaman. Berikut adalah poin-poin penting yang perlu
            diperhatikan agar pemupukan dapat memberikan hasil maksimal:
          </p>
          <br></br>
          <ul className="list-disc pl-6">
            <li>
              <strong>Periksa pH Secara Rutin:</strong> Gunakan pH meter atau
              kertas lakmus untuk mengecek pH larutan nutrisi setiap 2–3 hari.
            </li>
            <li>
              <strong>Gunakan Larutan pH Up/Down:</strong> Tambahkan pH up jika
              terlalu rendah, atau pH down jika terlalu tinggi, secara perlahan
              sambil memantau perubahan.
            </li>
            <li>
              <strong>Gunakan Air Berkualitas:</strong> Pilih air bersih seperti
              air RO (reverse osmosis) untuk menghindari fluktuasi pH akibat
              mineral berlebih.
            </li>
            <li>
              <strong>Ganti Larutan Nutrisi:</strong> Lakukan penggantian
              larutan setiap 1–2 minggu untuk mencegah penumpukan garam yang
              dapat memengaruhi pH.
            </li>
            <li>
              <strong>Pantau Suhu:</strong> Pastikan suhu larutan berada dalam
              kisaran 18–22°C untuk menjaga kestabilan pH.
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
    {
      id: 16,
      title: "Energi Terbarukan untuk Sistem Hidroponik yang Berkelanjutan",
      image: "/src/assets/16.jpg",
      category: "keberlanjutan",
      date: "2023-10-17",
      content: (
        <>
          <p>
            Pemupukan merupakan salah satu langkah penting dalam meningkatkan
            produktivitas tanaman. Berikut adalah poin-poin penting yang perlu
            diperhatikan agar pemupukan dapat memberikan hasil maksimal:
          </p>
          <br></br>
          <ul className="list-disc pl-6">
            <li>
              <strong>Periksa pH Secara Rutin:</strong> Gunakan pH meter atau
              kertas lakmus untuk mengecek pH larutan nutrisi setiap 2–3 hari.
            </li>
            <li>
              <strong>Gunakan Larutan pH Up/Down:</strong> Tambahkan pH up jika
              terlalu rendah, atau pH down jika terlalu tinggi, secara perlahan
              sambil memantau perubahan.
            </li>
            <li>
              <strong>Gunakan Air Berkualitas:</strong> Pilih air bersih seperti
              air RO (reverse osmosis) untuk menghindari fluktuasi pH akibat
              mineral berlebih.
            </li>
            <li>
              <strong>Ganti Larutan Nutrisi:</strong> Lakukan penggantian
              larutan setiap 1–2 minggu untuk mencegah penumpukan garam yang
              dapat memengaruhi pH.
            </li>
            <li>
              <strong>Pantau Suhu:</strong> Pastikan suhu larutan berada dalam
              kisaran 18–22°C untuk menjaga kestabilan pH.
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
    {
      id: 17,
      title: "Energi hidroponik",
      image: "/src/assets/pakcoy.jpg",
      category: "inovasi",
      date: "2023-10-18",
      content: (
        <>
          <p>
            Pemupukan merupakan salah satu langkah penting dalam meningkatkan
            produktivitas tanaman. Berikut adalah poin-poin penting yang perlu
            diperhatikan agar pemupukan dapat memberikan hasil maksimal:
          </p>
          <br></br>
          <ul className="list-disc pl-6">
            <li>
              <strong>Periksa pH Secara Rutin:</strong> Gunakan pH meter atau
              kertas lakmus untuk mengecek pH larutan nutrisi setiap 2–3 hari.
            </li>
            <li>
              <strong>Gunakan Larutan pH Up/Down:</strong> Tambahkan pH up jika
              terlalu rendah, atau pH down jika terlalu tinggi, secara perlahan
              sambil memantau perubahan.
            </li>
            <li>
              <strong>Gunakan Air Berkualitas:</strong> Pilih air bersih seperti
              air RO (reverse osmosis) untuk menghindari fluktuasi pH akibat
              mineral berlebih.
            </li>
            <li>
              <strong>Ganti Larutan Nutrisi:</strong> Lakukan penggantian
              larutan setiap 1–2 minggu untuk mencegah penumpukan garam yang
              dapat memengaruhi pH.
            </li>
            <li>
              <strong>Pantau Suhu:</strong> Pastikan suhu larutan berada dalam
              kisaran 18–22°C untuk menjaga kestabilan pH.
            </li>
          </ul>
          <br></br>
          <p>
            Dengan perawatan rutin ini, sistem hidroponik Anda akan bekerja
            lebih efisien dan tanaman akan tumbuh lebih sehat.
          </p>
        </>
      ),
    },
  ];

  const tipsArticles = articles.slice(0, 6); // Artikel untuk Tips dan Trik
  const inovasiArticles = articles.slice(6, 12); // Artikel untuk Inovasi
  const keberlanjutanArticles = articles.slice(12, 18); // Artikel untuk Keberlanjutan

  const paginateArticles = (articles, currentPage) => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    return articles.slice(startIndex, startIndex + articlesPerPage);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = () => {
    const foundArticle = articles.find((article) =>
      article.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (foundArticle) {
      setSelectedArticle(foundArticle);
    } else {
      alert("Artikel tidak ditemukan");
    }
  };

  const currentTipsArticles = paginateArticles(tipsArticles, currentPageTips);
  const currentInovasiArticles = paginateArticles(
    inovasiArticles,
    currentPageInovasi
  );
  const currentKeberlanjutanArticles = paginateArticles(
    keberlanjutanArticles,
    currentPageKeberlanjutan
  );

  const openModal = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div>
      <section className="bg-[#075852] p-4 md:p-16 text-white">
        <div className="flex flex-col md:flex-row flex-wrap items-center">
          {/* Bagian Kiri: Teks dan Pencarian */}

          <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
              Temukan Artikel Terkait Hidroponik!
            </h1>

            {/* Form Kategori */}

            <div className="mb-6 w-full flex justify-center md:justify-start">
              <input
                type="text"
                placeholder="Cari artikel..."
                className="w-full max-w-md p-2 rounded-lg text-black"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />

              <button
                className="bg-[#26BE71] hover:bg-green-600 text-white p-2 ml-2 rounded-lg"
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

      {/* SECTION ARTIKEL 1 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-black mb-8">
            Tips dan Trik Perawatan Tanaman
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {currentTipsArticles.map((article) => (
              <div
                key={article.id}
                className="bg-green-100 p-4 rounded-lg shadow-md hover:shadow-xl hover:shadow-[#075852] transition duration-300 cursor-pointer"
                onClick={() => openModal(article)}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-32 text-center object-cover rounded-t-lg mb-3"
                />

                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {new Date(article.date).toLocaleDateString("id-ID", {
                    year: "numeric",

                    month: "long",

                    day: "numeric",
                  })}{" "}
                  {/* Format tanggal */}
                </p>
              </div>
            ))}
          </div>
          {/* Modal */}
          {selectedArticle && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              onClick={closeModal} // Menutup modal saat mengklik di luar
            >
              <div
                className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 max-h-[80vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()} // Mencegah penutupan saat mengklik di dalam modal
              >
                <h2 className="text-2xl font-bold mb-4">
                  {selectedArticle.title}
                </h2>

                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <div className="modal-body">{selectedArticle.content}</div>

                <button
                  className="absolute top-4 right-4 text-red-500 text-2xl z-10"
                  onClick={closeModal}
                >
                  &times; {/* Simbol silang */}
                </button>
              </div>
            </div>
          )}

          {/* Pagination untuk Tips */}
          <div className="flex justify-center mt-8">
            <button
              className={`px-4 py-2 rounded-md ${
                currentPageTips === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#075852] text-white hover:bg-[#26BE71]"
              }`}
              onClick={() => setCurrentPageTips(currentPageTips - 1)}
              disabled={currentPageTips === 1}
            >
              ⮜
            </button>
            {[...Array(Math.ceil(tipsArticles.length / articlesPerPage))].map(
              (_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 mx-2 rounded-lg ${
                    currentPageTips === index + 1
                      ? "bg-[#26BE71] text-white"
                      : "bg-[#075852] text-white hover:bg-[#26BE71]"
                  }`}
                  onClick={() => setCurrentPageTips(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}

            <button
              className={`px-4 py-2 mx-2 rounded-md ${
                currentPageTips * articlesPerPage >= tipsArticles.length
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#075852] text-white hover:bg-[#26BE71]"
              }`}
              disabled={
                currentPageTips * articlesPerPage >= tipsArticles.length
              }
              onClick={() => setCurrentPageTips(currentPageTips + 1)}
            >
              ⮞
            </button>
          </div>
        </div>
      </section>

      {/* SECTION ARTIKEL 2 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-black mb-8">
            Inovasi dan Tren Terbaru
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {currentInovasiArticles.map((article) => (
              <div
                key={article.id}
                className="bg-green-100 p-4 rounded-lg shadow-md hover:shadow-xl hover:shadow-[#075852] transition duration-300 cursor-pointer"
                onClick={() => openModal(article)} // Ganti dengan logika navigasi
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-32 text-center object-cover rounded-t-lg mb-3"
                />

                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {new Date(article.date).toLocaleDateString("id-ID", {
                    year: "numeric",

                    month: "long",

                    day: "numeric",
                  })}{" "}
                  {/* Format tanggal */}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination untuk Inovasi */}

          <div className="flex justify-center mt-8">
            <button
              className={`px-4 py-2 rounded-md ${
                currentPageInovasi === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#075852] text-white hover:bg-[#26BE71]"
              }`}
              onClick={() => setCurrentPageInovasi(currentPageInovasi - 1)}
              disabled={currentPageInovasi === 1}
            >
              ⮜
            </button>

            {[
              ...Array(Math.ceil(inovasiArticles.length / articlesPerPage)),
            ].map((_, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 rounded-lg ${
                  currentPageInovasi === index + 1
                    ? "bg-[#26BE71] text-white"
                    : "bg-[#075852] text-white hover:bg-[#26BE71]"
                }`}
                onClick={() => setCurrentPageInovasi(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className={`px-4 py-2 mx-2 rounded-md ${
                currentPageInovasi * articlesPerPage >= inovasiArticles.length
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#075852] text-white hover:bg-[#26BE71]"
              }`}
              disabled={
                currentPageInovasi * articlesPerPage >= inovasiArticles.length
              }
              onClick={() => setCurrentPageInovasi(currentPageInovasi + 1)}
            >
              ⮞
            </button>
          </div>
        </div>
      </section>

      {/* SECTION ARTIKEL 3*/}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-black mb-8">
            Keberlanjutan dan Lingkungan
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {currentKeberlanjutanArticles.map((article) => (
              <div
                key={article.id}
                className="bg-green-100 p-4 rounded-lg shadow-md hover:shadow-xl hover:shadow-[#075852] transition duration-300 cursor-pointer"
                onClick={() => openModal(article)} // Ganti dengan logika navigasi
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-32 text-center object-cover rounded-t-lg mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {new Date(article.date).toLocaleDateString("id-ID", {
                    year: "numeric",

                    month: "long",

                    day: "numeric",
                  })}{" "}
                  {/* Format tanggal */}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination untuk Keberlanjutan */}
          <div className="flex justify-center mt-8">
            <button
              className={`px-4 py-2 rounded-md ${
                currentPageKeberlanjutan === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#075852] text-white hover:bg-[#26BE71]"
              }`}
              onClick={() =>
                setCurrentPageKeberlanjutan(currentPageKeberlanjutan - 1)
              }
              disabled={currentPageKeberlanjutan === 1}
            >
              ⮜
            </button>

            {[
              ...Array(
                Math.ceil(keberlanjutanArticles.length / articlesPerPage)
              ),
            ].map((_, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 rounded-lg ${
                  currentPageKeberlanjutan === index + 1
                    ? "bg-[#26BE71] text-white"
                    : "bg-[#075852] text-white hover:bg-[#26BE71]"
                }`}
                onClick={() => setCurrentPageKeberlanjutan(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className={`px-4 py-2 mx-2 rounded-md ${
                currentPageKeberlanjutan * articlesPerPage >=
                keberlanjutanArticles.length
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#075852] text-white hover:bg-[#26BE71]"
              }`}
              disabled={
                currentPageKeberlanjutan * articlesPerPage >=
                keberlanjutanArticles.length
              }
              onClick={() =>
                setCurrentPageKeberlanjutan(currentPageKeberlanjutan + 1)
              }
            >
              ⮞
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artikel;
