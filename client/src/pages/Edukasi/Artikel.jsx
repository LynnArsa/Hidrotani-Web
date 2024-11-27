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
      image: "/src/assets/pakcoy.jpg",
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
      image: "/src/assets/pakcoy.jpg",
      category: "tips",
      date: "2023-10-02",
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
      id: 3,
      title: "Teknik Penyiraman Efisien",
      image: "/src/assets/pakcoy.jpg",
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
      title: "Inovasi Hidroponik Modern",
      image: "/src/assets/pakcoy.jpg",
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
      title: "Tips Perawatan Tanaman",
      image: "/src/assets/pakcoy.jpg",
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
      title: "Tips Sayuran",
      image: "/src/assets/pakcoy.jpg",
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
      image: "/src/assets/pakcoy.jpg",
      category: "inovasi",
      date: "2023-10-07",
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
      id: 8,
      title:
        "Inovasi Pertanian Vertikal yang Membawa Dampak Positif bagi Lingkungan",
      image: "/src/assets/pakcoy.jpg",
      category: "inovasi",
      date: "2023-10-08",
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
      id: 9,
      title:
        "Sistem Irigasi Otomatis dalam Hidroponik: Masa Depan Pertanian Cerdas",
      image: "/src/assets/pakcoy.jpg",
      category: "inovasi",
      date: "2023-10-09",
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
      id: 10,
      title: "Penggunaan Robotika dalam Pertanian Hidroponik",
      image: "/src/assets/pakcoy.jpg",
      category: "inovasi",
      date: "2023-10-10",
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
        "Pemanfaatan AI untuk Meningkatkan Efisiensi dalam Budidaya Hidroponik",
      image: "/src/assets/pakcoy.jpg",
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
      id: 12,
      title:
        "Sistem Akuaponik sebagai Alternatif Hidroponik yang Ramah Lingkungan",
      image: "/src/assets/pakcoy.jpg",
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
      id: 13,
      title: "Mengurangi Jejak Karbon dengan Hidroponik",
      image: "/src/assets/pakcoy.jpg",
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
      id: 14,
      title: "Keuntungan Pertanian Vertikal untuk Keberlanjutan Lingkungan",
      image: "/src/assets/pakcoy.jpg",
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
      id: 15,
      title: "Pentingnya Penggunaan Air dalam Sistem Hidroponik",
      image: "/src/assets/pakcoy.jpg",
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
      id: 16,
      title: "Hidroponik dan Pengurangan Limbah Plastik",
      image: "/src/assets/pakcoy.jpg",
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
      id: 17,
      title: "Energi Terbarukan untuk Sistem Hidroponik yang Berkelanjutan",
      image: "/src/assets/pakcoy.jpg",
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
      id: 18,
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
