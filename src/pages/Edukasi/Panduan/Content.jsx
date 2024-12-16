import { useParams } from "react-router-dom";

const Content = () => {
  const { babTitle } = useParams();

  const babContent = {
    // Panduan
    "Memulai-Hidroponik-Dari-Rumah": (
      <div className="space-y-8 ">
        <p>
          Hidroponik adalah metode bertani tanpa tanah yang memungkinkan Anda
          menanam tanaman di ruang terbatas
        </p>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">Apa itu Hidroponik?</h2>
        <p className="leading-relaxed">
          Hidroponik adalah metode pertanian yang memungkinkan tanaman tumbuh
          tanpa menggunakan tanah. Sebaliknya, tanaman ditanam dalam larutan
          nutrisi yang kaya akan mineral yang diperlukan untuk pertumbuhan.
          Dalam sistem hidroponik, akar tanaman berada dalam medium air atau
          dalam media tanam alternatif seperti rockwool, cocopeat, atau clay
          pellets. Metode ini memberikan kontrol yang lebih besar terhadap
          kondisi pertumbuhan, seperti pH, kelembapan, dan kadar nutrisi,
          sehingga meningkatkan efisiensi penggunaan air dan memungkinkan
          tanaman tumbuh lebih cepat dibandingkan dengan metode tradisional.
        </p>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Apa keuntungan Hidroponik di rumah?
        </h2>
        <ol className="list-inside list-decimal space-y-4">
          <li>
            Hidroponik cocok untuk rumah dengan lahan terbatas, hemat ruang, dan
            memungkinkan penanaman lebih banyak tanaman dalam area kecil.
          </li>
          <li>
            Tanaman hidroponik tumbuh lebih cepat karena nutrisi langsung
            diserap oleh akar, mempercepat proses pertumbuhan dibandingkan
            metode konvensional.
          </li>
          <li>
            Menggunakan lebih sedikit air karena air dalam sistem hidroponik
            bisa didaur ulang, membuatnya lebih hemat air. Mengurangi risiko
            hama dan penyakit tanah, sehingga tidak memerlukan banyak pestisida.
          </li>
          <li>
            Bisa menanam sepanjang tahun, terlepas dari musim atau cuaca,
            terutama jika dilakukan di dalam ruangan. Kondisi tanaman dapat
            dikontrol dengan lebih tepat, mulai dari nutrisi hingga pH, untuk
            menghasilkan panen yang optimal.
          </li>
          <li>
            Proses menanam lebih bersih dan higienis karena tidak menggunakan
            tanah, sehingga cocok untuk di dalam rumah.
          </li>
          <li>
            Lebih ramah lingkungan karena mengurangi penggunaan air, pestisida,
            dan limbah tanah.
          </li>
          <li>
            Membantu meningkatkan kualitas udara di dalam rumah, karena tanaman
            dapat menyaring udara.
          </li>
          <li>
            Menjadi aktivitas yang edukatif untuk mempelajari ilmu pertanian
            modern, nutrisi tanaman, dan teknik berkebun.
          </li>
        </ol>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Peralatan apa saja yang diperlukan untuk memulai hidroponik?
        </h2>
        <ol className="list-inside list-decimal space-y-4">
          <li>
            Wadah atau Tangki Nutrisi yang menampung larutan nutrisi untuk
            tanaman, bisa berupa ember, baki, atau kontainer plastik.
          </li>
          <li>
            Media Tanam seperti rockwool, cocopeat, perlite, atau clay pellets
            untuk menopang akar tanaman tanpa tanah.
          </li>
          <li>
            Pompa Air yang membantu sirkulasi larutan nutrisi, terutama pada
            sistem hidroponik yang memerlukan aliran air, seperti sistem NFT
            (Nutrient Film Technique).
          </li>
          <li>
            Net Pot berlubang yang menampung tanaman dan media tanam,
            memungkinkan akar tanaman terendam dalam larutan nutrisi.
          </li>
          <li>
            Larutan Pupuk yang mengandung semua nutrisi yang dibutuhkan tanaman
            untuk tumbuh.
          </li>
          <li>
            pH Meter dan TDS Meter untuk mengukur pH dan konsentrasi larutan
            nutrisi agar sesuai dengan kebutuhan tanaman hidroponik.
          </li>
          <li>
            Pipa atau Selang (Opsional) untuk mengalirkan air dan larutan
            nutrisi dari tangki ke tanaman, terutama pada sistem hidroponik yang
            menggunakan aliran air.
          </li>
          <li>
            Lampu Tumbuh (Grow Light)/Opsional untuk pertumbuhan tanaman, jika
            hidroponik dilakukan di dalam ruangan tanpa cukup sinar matahari.
          </li>
          <li>
            Timer (Opsional) mengatur waktu nyala dan mati pompa atau lampu
            tumbuh secara otomatis, terutama jika ingin menjaga sirkulasi atau
            pencahayaan secara teratur.
          </li>
          <li>
            Thermometer dan Hygrometer (Opsional) untuk memantau suhu dan
            kelembapan, membantu menciptakan kondisi yang optimal bagi tanaman.
          </li>
        </ol>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Apa saja langkah-langkah untuk memulai hidroponik di rumah?
        </h2>
        <ol className="list-inside list-decimal space-y-4">
          <li>
            Riset dan Perencanaan: Pelajari berbagai sistem hidroponik dan pilih
            yang sesuai dengan kebutuhan dan ruang yang tersedia.
          </li>
          <li>
            Persiapkan Ruang: Tentukan area di rumah yang cukup untuk
            menempatkan sistem hidroponik, seperti di dalam ruangan atau di
            balkon. .
          </li>
          <li>
            Pilih Sistem Hidroponik: Pilih metode hidroponik, seperti NFT
            (Nutrient Film Technique), DWC (Deep Water Culture), atau sistem
            vertika
          </li>
          <li>
            Siapkan Peralatan: Dapatkan semua peralatan yang diperlukan,
            termasuk wadah, pompa, media tanam, nutrisi hidroponik, dan lampu
            tumbuh (jika diperlukan). larutan nutrisi.
          </li>
          <li>
            Pilih Tanaman: Tentukan jenis tanaman yang ingin ditanam. Sayuran
            daun seperti selada, basil, atau pakcoy adalah pilihan yang baik
            untuk pemula.
          </li>
          <li>
            Persiapkan Nutrisi: Campurkan nutrisi hidroponik sesuai petunjuk
            untuk memberikan makanan yang tepat bagi tanaman.
          </li>
          <li>
            Tanam Benih: Tanam benih atau bibit dalam media tanam yang telah
            disiapkan, pastikan mereka mendapatkan cahaya dan kelembapan yang
            cukup.
          </li>
          <li>
            Pemantauan dan Perawatan: Pantau pertumbuhan tanaman secara rutin,
            periksa pH dan tingkat nutrisi, serta pastikan sistem berfungsi
            dengan baik.
          </li>
          <li>
            Pemanenan: Ketika tanaman sudah siap, lakukan pemanenan dengan
            hati-hati untuk memastikan tanaman tumbuh kembali dengan baik
          </li>
        </ol>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Apa saja langkah-langkah untuk memulai hidroponik di rumah?
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/src/assets/media-tanam.png"
            alt="Peralatan Hidroponik"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg"
          />
          <div className="flex flex-col gap-6">
            <p className="md:w-full md:text-left">
              Dengan peralatan yang tepat, Anda bisa memulai hidroponik dengan
              mudah.<br></br> Peralatan seperti tangki nutrisi, media tanam, dan pompa
              air adalah kebutuhan dasar untuk memulai sistem ini.
            </p>
          </div>
        </div>
      </div>
    ),

    // panduan 2
    "Pemeliharaan-Tanaman-Hidroponik": (
      <div className="space-y-8 ">
        <p>
          Pemeliharaan tanaman hidroponik sangat penting agar tanaman tetap
          sehat dan menghasilkan panen yang optimal
        </p>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Apa itu pH dan EC, dan mengapa keduanya penting dalam hidroponik?
        </h2>
        <p className="leading-relaxed">
          pH (potensial hidrogen) adalah ukuran keasaman atau kebasaan larutan,
          yang diukur pada skala 0 hingga 14. Nilai pH 7 dianggap netral, nilai
          di bawah 7 menunjukkan keasaman, dan nilai di atas 7 menunjukkan
          kebasaan. <br></br>
          Sedangkan, EC (Electrical Conductivity) adalah ukuran kemampuan
          larutan untuk menghantarkan listrik, yang terkait dengan konsentrasi
          ion dalam larutan. EC diukur dalam milisiemen per sentimeter (mS/cm)
          atau mikrosiemens per sentimeter (µS/cm).
          <br></br>
          <br></br>
          Keduanya penting dalam hidroponik karena:
        </p>
        <ol className="list-none space-y-0">
          <li className="m-0 p-0">
            - Memastikan keseimbangan nutrisi yang optimal untuk pertumbuhan
            tanaman.
          </li>
          <li className="m-0 p-0">
            - Mencegah masalah yang terkait dengan kelebihan atau kekurangan
            nutrisi.
          </li>
          <li className="m-0 p-0">
            - Meningkatkan kesehatan dan hasil tanaman secara keseluruhan
          </li>
        </ol>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Bagaimana cara mengukur dan menyesuaikan pH dan EC dalam sistem
          hidroponik?
        </h2>
        <p>
          Gunakan pH meter atau test kit pH untuk mengukur tingkat pH larutan
          nutrisi. Gunakan EC meter untuk mengukur tingkat konduktivitas listrik
          larutan nutrisi. Lakukan pengukuran pH dan EC secara rutin (misalnya
          setiap beberapa hari) untuk memastikan bahwa keduanya tetap dalam
          rentang yang optimal. Sesuaikan sesuai kebutuhan untuk menjaga
          kesehatan tanaman.
        </p>
        <ol className="list-inside list-decimal space-y-4">
          <li>Menyesuaikan pH</li>
          <p className="ml-4">
            - Jika pH Terlalu Rendah: Tambahkan larutan pH naik (biasanya
            berbasis natrium hidroksida atau kalium hidroksida) sedikit demi
            sedikit, lalu aduk larutan dan ukur kembali pH hingga mencapai
            rentang yang diinginkan (biasanya antara 5.5 hingga 6.5 untuk banyak
            tanaman).
          </p>
          <li>Menyesuaikan EC</li>
          <p className="ml-4">
            - Jika EC Terlalu Rendah: Tambahkan lebih banyak nutrisi ke larutan.
            Ikuti petunjuk dosis pada kemasan nutrisi dan ukur EC kembali
            setelah mencampur. Jika EC Terlalu Tinggi: Tambahkan air bersih
            untuk mengencerkan larutan. Lakukan ini perlahan dan ukur kembali EC
            setelah pencampuran. .
          </p>
        </ol>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Apa saja Hama yang menyerang tanaman Hidroponik?
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/src/assets/hama.png"
            alt="Peralatan Hidroponik"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg"
          />
          <ol className="list-inside list-decimal space-y-4">
            <li>
              Kutu Daun: Hama kecil yang menghisap getah tanaman, menyebabkan
              daun menguning dan menggulung.
            </li>
            <li>
              Thrips: Serangga berukuran kecil yang dapat merusak daun dan bunga
              dengan cara menghisap cairan tanaman, menyebabkan bercak atau
              warna perak pada permukaan daun.
            </li>
            <li>
              Whiteflies (Kutu Kebul): Hama ini mempengaruhi berbagai tanaman
              dengan menghisap cairan, dan dapat menyebabkan kerusakan serius
              pada pertumbuhan tanaman.
            </li>
            <li>
              Lalat Buah: Serangga yang dapat menginfeksi buah dengan meletakkan
              telurnya, menyebabkan buah membusuk dan berwarna cokelat.
            </li>
            <li>
              Nematoda: Cacing mikroskopis yang dapat merusak akar tanaman,
              menyebabkan pertumbuhan terhambat dan menurunkan hasil.
            </li>
            <li>
              Kutu Beras: Serangga kecil yang dapat merusak akar tanaman dan
              mengurangi daya tahan tanaman terhadap penyakit
            </li>
            <li>
              Ulat: Larva berbagai jenis kupu-kupu dan ngengat yang dapat
              merusak daun dengan cara memakannya.
            </li>
            <li>
              Kepik: Beberapa spesies kepik dapat menjadi hama dengan menghisap
              getah tanaman, meskipun banyak yang juga berfungsi sebagai
              predator alami.
            </li>
            <li>
              Mites (Kutu Halus): Serangga kecil yang menghisap getah tanaman,
              sering menyebabkan bintik-bintik kuning pada daun dan dapat
              menyebar dengan cepat dalam kondisi kering.
            </li>
          </ol>
        </div>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Bagaimana cara merawat akar tanaman dalam sistem hidroponik?
        </h2>
        <ul className="list-inside list-disc space-y-0">
          <li>Menjaga kelembapan</li>
          <li>Menjaga kualitas larutan nutrisi</li>
          <li>Periksa akar secara berkala</li>
          <li>Menggunakan media tanam yang tepat</li>
          <li>Pastikan tanaman mendapatkana pencahayaan yang cukup</li>
          <li>Sirkulasi udara yang baik</li>
          <li>Sterilkan peralatan</li>
          <li>Pemupukan yang tepat</li>
          <li>Perawatan rutin</li>
          <li>Pemindahan tanaman</li>
        </ul>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Apa saja Hama yang menyerang tanaman Hidroponik?
        </h2>
        <ol className="list-inside list-decimal space-y-4">
          <ul>
            Daun Menguning: Tanda ini bisa disebabkan oleh kekurangan nutrisi,
            terlalu banyak air, atau infeksi penyakit.
            <li className="ml-4 mt-2 list-inside list-disc space-y-0">
              Cara Mengatasi: Periksa pH dan EC larutan nutrisi, pastikan
              tanaman mendapatkan nutrisi yang cukup, dan sesuaikan tingkat
              kelembapan.
            </li>
          </ul>
          <ul>
            Daun Menggulung: Daun yang menggulung dapat menandakan hama,
            kekurangan air, atau kondisi lingkungan yang tidak optimal.
            <li className="ml-4 mt-2 list-inside list-disc space-y-0">
              Cara Mengatasi: Periksa tanaman untuk hama, pastikan tanaman
              mendapatkan cukup air, dan kontrol suhu dan kelembapan lingkungan.
            </li>
          </ul>
          <ul>
            Pertumbuhan Terhambat: Jika tanaman tidak tumbuh dengan baik,
            mungkin ada masalah pada akar atau nutrisi.
            <li className="ml-4 mt-2 list-inside list-disc space-y-0">
              Cara Mengatasi: Periksa kesehatan akar, pastikan akar tidak busuk,
              dan pastikan larutan nutrisi memiliki konsentrasi yang sesuai.
            </li>
          </ul>
          <ul>
            Bercak atau Bintik pada Daun: Bercak bisa menunjukkan infeksi jamur,
            virus, atau serangan hama.
            <li className="ml-4 mt-2 list-inside list-disc space-y-0">
              Cara Mengatasi: Hapus daun yang terinfeksi dan gunakan pestisida
              organik jika diperlukan. Jaga kebersihan area tanam.
            </li>
          </ul>
          <ul>
            Daun Mengering: Ini dapat disebabkan oleh kekurangan air atau
            kelembapan yang sangat rendah.
            <li className="ml-4 mt-2 list-inside list-disc space-y-0">
              Cara Mengatasi: Tingkatkan kelembapan di sekitar tanaman atau
              tambahkan air pada sistem hidroponik. Warna Daun Pucat: Jika daun
              tampak pucat, bisa jadi karena kekurangan nutrisi.
            </li>
          </ul>
        </ol>
      </div>
    ),

    // Panduan 3

    "Menentukan-Nutrisi-Yang-Tepat": (
      <div className="space-y-8">
        <p className="leading-relaxed">
          Menentukan Nutrisi yang Tepat Untuk Pertumbuhan Tanaman Hidroponik
          yang Optimal.
        </p>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Apa saja jenis nutrisi yang digunakan dalam hidroponik?
        </h2>
        <ul className="list-inside list-disc space-y-0">
          <li>Nitrogen (N): </li>
          <p className="ml-4">
            - Nutrisi ini penting untuk pertumbuhan daun dan batang, serta
            berperan dalam proses fotosintesis.
          </p>
          <li>Fosfor (P): </li>
          <p className="ml-4">
            - Fosfor mendukung perkembangan akar, pembentukan bunga, dan buah.
            Penting untuk mempercepat pertumbuhan tanaman pada fase awal.
          </p>
          <li>Kalium (K): </li>
          <p className="ml-4">
            - Kalium membantu tanaman dalam pembentukan bunga dan buah,
            memperkuat jaringan tanaman, serta meningkatkan daya tahan terhadap
            penyakit.
          </p>
          <li>Kalsium (Ca): </li>
          <p className="ml-4">
            - Kalsium mendukung struktur sel tanaman dan mencegah masalah
            seperti akar busuk dan ujung daun menguning.
          </p>
          <li>Magnesium (Mg): </li>
          <p className="ml-4">
            - Sebagai komponen utama dalam klorofil, magnesium membantu dalam
            proses fotosintesis.
          </p>
          <li>Sulfur (S): </li>
          <p className="ml-4">
            - Nutrisi ini diperlukan dalam pembentukan protein dan enzim
            tanaman.
          </p>
          <li>Zat Mikro: </li>
          <p className="ml-4">
            - Termasuk zat besi (Fe), mangan (Mn), tembaga (Cu), seng (Zn),
            boron (B), dan molibdenum (Mo).
          </p>
        </ul>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Apa perbedaan antara nutrisi organik dan anorganik?
        </h2>
        <table className="min-w-full bg-white border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2 bg-gray-300">Aspek</th>
              <th className="border px-4 py-2 bg-gray-300">Nutrisi Organik</th>
              <th className="border px-4 py-2 bg-gray-300">
                Nutrisi Anorganik
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Asal Nutrisi</td>
              <td className="border px-4 py-2">
                Berasal dari bahan alami, seperti kompos, pupuk kandang atau
                bahan tumbuhan yang membusuk
              </td>
              <td className="border px-4 py-2">
                Diolah secara sintesis atau melalui proses kimia dari mineral
                terlarut
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Penyerapan oleh tanaman</td>
              <td className="border px-4 py-2">
                Perlu diuraikan oleh mikroorganisme terlebih dahulu, sehingga
                penyerapan lebih lambat
              </td>
              <td className="border px-4 py-2">
                Langsung larut dalam air dan cepat diserap oleh akar tanaman
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Komposisi Nutrisi</td>
              <td className="border px-4 py-2">
                Mengandung campuran nutrisi yang bervariasi dan sulit dikontrol;
                terkadang tidak lengkap
              </td>
              <td className="border px-4 py-2">
                Tersedia dalam formulasi spesifik dengan nutrisi yang tepat dan
                konsisten
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Pengaruh pada Sistem Hidroponik
              </td>
              <td className="border px-4 py-2">
                Cenderung menyumbat sistem karena partikel organik, serta
                meningkatkan risiko pertumbuhan mikroba yang tak diinginkan
              </td>
              <td className="border px-4 py-2">
                Bersih dan tidak menyumbat sistem, lebih mudah pemeliharaannya
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Dampak Lingkungan</td>
              <td className="border px-4 py-2">
                Lebih ramah lingkungan, terbuat dari bahan alami yang terbarukan
              </td>
              <td className="border px-4 py-2">
                Berisiko mencemari lingkungan jika tidak digunakan dengan bijak{" "}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Efek pada Kualitas Tanaman</td>
              <td className="border px-4 py-2">
                Dapat meningkatkan rasa dan kualitas tanaman (tergantung jenis
                tanaman)
              </td>
              <td className="border px-4 py-2">
                Pertumbuhan cepat dengan hasil panen besar, kualitas rasa
                umumnya serupa
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl font-semibold mt-6">
          Bagaimana cara menyesuaikan nutrisi berdasarkan jenis tanaman?
        </h2>
        <ol className="list-inside list-decimal space-y-4">
          <li>Identifikasi Kebutuhan Nutrisi Tanaman</li>
          <li>Sesuaikan Proporsi Nutrisi Makro</li>
          <li>Gunakan Nutrisi Sesuai Tahap Pertumbuhan</li>
          <li>Pantau dan Sesuaikan pH dan EC</li>
          <li>Periksa dan Pantau Tanaman secara Rutin</li>
          <li>Gunakan Larutan Nutrisi yang Disesuaikan</li>
          <li>Sesuaikan Berdasarkan Suhu dan Kondisi Lingkungan</li>
        </ol>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Seberapa sering nutrisi perlu diganti atau diuji?
        </h2>
        <ol className="list-inside list-decimal space-y-4">
          <li>Pengujian Nutirisi :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <li>
              Setiap Hari atau Setiap 2–3 Hari: Ukur pH dan EC (Electrical
              Conductivity) larutan nutrisi untuk memastikan tetap dalam kisaran
              optimal sesuai kebutuhan tanaman. Perubahan pH atau EC dapat
              mempengaruhi kemampuan tanaman untuk menyerap nutrisi.
            </li>
            <li>
              Setiap Minggu: Periksa komposisi nutrisi secara keseluruhan untuk
              memastikan semua elemen yang dibutuhkan masih tersedia dalam
              proporsi yang tepat. Nutrisi utama seperti nitrogen, fosfor, dan
              kalium bisa berkurang seiring waktu.
            </li>
          </ul>
          <li>Pengujian Nutirisi :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <li>
              Setiap 1–2 Minggu: Biasanya, ganti larutan nutrisi sepenuhnya
              setiap satu atau dua minggu untuk menghindari penumpukan zat yang
              tidak diinginkan (seperti garam) dan memastikan nutrisi tetap
              seimbang.
            </li>
            <li>
              Berdasarkan Jenis Tanaman dan Kondisi Pertumbuhan: Tanaman besar
              atau yang menyerap lebih banyak nutrisi mungkin memerlukan
              pergantian lebih sering. Kondisi lingkungan, seperti suhu tinggi,
              juga bisa menyebabkan tanaman membutuhkan nutrisi yang lebih
              sering diperbarui.
            </li>
          </ul>
          <li>Tambahan Nutrisi :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <li>
              Setiap Beberapa Hari: Jika terlihat adanya tanda-tanda kekurangan
              nutrisi (misalnya, daun menguning atau pertumbuhan lambat),
              tambahkan nutrisi tambahan sesuai kebutuhan tanpa mengganti
              larutan sepenuhnya.
            </li>
          </ul>
          <li>Penggantian Air :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <li>
              Setiap 2–3 Minggu: Ganti air dalam tangki sepenuhnya untuk
              mencegah penumpukan zat yang dapat mengganggu pertumbuhan tanaman.
            </li>
          </ul>
        </ol>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Bagaimana cara menghitung konsentrasi nutrisi yang tepat?
        </h2>
        <p>
          Langkah inti untuk menghitung konsentrasi nutrisi yang tepat dalam
        </p>
        <ol className="list-inside list-decimal space-y-4">
          <li>
            Kenali Kebutuhan Tanaman: Setiap tanaman punya kebutuhan EC dan ppm
            yang berbeda.
          </li>
          <li>
            Ikuti Panduan Produk: Campur nutrisi sesuai instruksi produk, lalu
            ukur dengan EC meter.
          </li>
          <li>
            Sesuaikan EC dan PPM: Jika EC terlalu tinggi, tambahkan air; jika
            terlalu rendah, tambahkan nutrisi.
          </li>
          <li>
            Rumus Pengenceran (C1 x V1 = C2 x V2): Gunakan untuk menyesuaikan
            konsentrasi dengan tepat.
          </li>
          <li>
            Pantau Rutin: Cek kembali EC atau ppm tiap beberapa hari agar
            nutrisi tetap seimbang.
          </li>
        </ol>
      </div>
    ),

    // Panduan 4
    "Merawat-Sistem-Hidroponik": (
      <div className="space-y-8">
        <p className="leading-relaxed">
          Merawat sistem hidroponik memerlukan perhatian yang konsisten dan
          pengaturan yang tepat agar tanaman dapat tumbuh dengan sehat dan
          optimal.
        </p>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Apa penyebab utama pertumbuhan alga dalam sistem hidroponik, dan
          bagaimana cara mencegahnya?
        </h2>
        <ol className="list-inside list-decimal space-y-4">
          <p>
            Pertumbuhan alga dalam sistem hidroponik terutama disebabkan oleh:
          </p>

          <li className="ml-4">
            Paparan Cahaya Berlebihan pada Larutan Nutrisi: Alga tumbuh subur
            dengan adanya cahaya, terutama di dalam tangki nutrisi atau pipa
            yang terkena sinar langsung.
          </li>
          <li className="ml-4">
            Kelebihan Nutrisi dalam Air: Tingkat nutrisi yang tinggi dapat
            memicu pertumbuhan alga karena menyediakan lingkungan yang kaya
            nutrisi bagi alga.
          </li>
          <li className="ml-4">
            Ventilasi dan Sirkulasi Air yang Kurang: Air yang tidak mengalir
            atau tidak berventilasi dapat meningkatkan risiko pertumbuhan alga.
          </li>
        </ol>
        <ol className="list-inside list-decimal space-y-4">
          <p>Cara Mencegah Pertumbuhan Alga: </p>

          <li className="ml-4">
            Lindungi Larutan dari Cahaya: Gunakan tangki nutrisi yang tidak
            tembus cahaya, atau tutup area yang terang untuk mencegah sinar
            masuk ke larutan.
          </li>
          <li className="ml-4">
            Rutin Bersihkan Sistem: Bersihkan tangki dan pipa secara berkala
            untuk menghilangkan alga dan mencegah perkembangannya.
          </li>
          <li className="ml-4">
            Tambahkan Aerasi pada Air: Pastikan air terus mengalir dan
            menggunakan aerator untuk meningkatkan oksigen, mengurangi peluang
            pertumbuhan alga.
          </li>
        </ol>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Apa saja jenis lampu grow light yang cocok untuk hidroponik?
        </h2>
        <img
          src="/src/assets/export-hidroponik.png"
          alt="System maintenance"
          className="my-4"
  style={{ width: "50%", height: "auto" }}
        />
        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Apa yang harus dilakukan jika pompa atau listrik gagal berfungsi?
        </h2>
        <ol className="list-inside list-decimal space-y-4">
          <li>Cek Sumber Listrik :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <li>Pastikan bahwa aliran listrik ke pompa tidak terputus.</li>
            <li> Periksa pemutus sirkuit dan colokan listrik.</li>
            <li>
              Gunakan alat pengukur (multimeter) untuk memeriksa apakah ada
              aliran listrik di soket.
            </li>
          </ul>
          <li>Periksa Pompa :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <li>
              Pastikan pompa terpasang dengan benar dan tidak ada penyumbatan
              pada saluran masuk atau keluar.
            </li>
            <li>
              Coba matikan dan nyalakan kembali pompa. Terkadang, pompa hanya
              perlu di-reset.
            </li>
            <li>
              Jika pompa masih tidak berfungsi, buka bagian luar untuk memeriksa
              kerusakan atau keausan pada komponen internal.
            </li>
          </ul>
          <li>Gunakan Sumber Daya Cadangan :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <li>
              Jika memungkinkan, gunakan generator atau sumber daya cadangan
              lainnya untuk menjaga sistem tetap berjalan selama pemadaman
              listrik.
            </li>
          </ul>
          <li>Sistem Cadangan Pompa :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <li>
              Pertimbangkan untuk memasang pompa cadangan yang dapat diaktifkan
              secara otomatis jika pompa utama gagal.
            </li>
          </ul>
          <li>Penyimpanan Nutrisi :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <li>
              Jika sistem hidroponik tidak dapat dipompa, pastikan bahwa tanaman
              tidak kekurangan nutrisi. Pertimbangkan untuk mengalirkan air atau
              larutan nutrisi secara manual jika diperlukan.
            </li>
          </ul>
        </ol>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Bagaimana mengatur aliran nutrisi yang stabil?
        </h2>
        <table className="min-w-full bg-white border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2 bg-gray-300">Aspek</th>
              <th className="border px-4 py-2 bg-gray-300">Langkah</th>
              <th className="border px-4 py-2 bg-gray-300">Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Aliran Nutrisi</td>
              <td className="border px-4 py-2">Pompa dan Timer</td>
              <td className="border px-4 py-2">
                Gunakan pompa yang dapat diatur dan timer untuk mengontrol
                frekuensi dan durasi penyiraman
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">Sistem Aliran Terus-menerus</td>
              <td className="border px-4 py-2">
                Gunakan sistem aliran terus-menerus (NFT) untuk memastikan
                pasoka nutrisi yang stabil.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">Pengujian dan penyesuaian</td>
              <td className="border px-4 py-2">
                Uji pH dan EC larutan nutrisi secara rutin dan sesuaikan formula
                pasokan nutrisi jika diperlukan.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">Penyimpanan Nutrisi</td>
              <td className="border px-4 py-2">
                Simpan larutan nutrisi dalam wadah tertutup untuk mencegah
                penguapan dan kontaminasi.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">Filter</td>
              <td className="border px-4 py-2">
                Pasang filter untuk mencegah penyumbatan partikel besar agar
                aliran nutrisi tetap lancar.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">Jadwal Pemupukan</td>
              <td className="border px-4 py-2">
                Buat jadwal pemupukan yang teratur untuk mengganti atay menambah
                larutan nutrisi sesuai kebutuhan.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Monitoring</td>
              <td className="border px-4 py-2">Sistem Pemantauan</td>
              <td className="border px-4 py-2">
                Gunakan alat pemantauan otomatis untuk mendapatkan informasi
                real-timw tentang aliran nutrisi.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">Revisi dan Adaptasi</td>
              <td className="border px-4 py-2">
                Lakukan revisi berkala berdasarkan data yang dikumpulkan untuk
                menjaga aliran nutrisi sesuai kebutuhan tanaman.
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl font-semibold mt-6">
          Apa saja masalah umum dalam sistem hidroponik dan cara mengatasinya?
        </h2>
        <table className="min-w-full bg-white border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2 bg-gray-300">Masalah Umum</th>
              <th className="border px-4 py-2 bg-gray-300">Cara Mengatasi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Kualitas Air Buruk</td>
              <td className=" border px-4 py-2">
                <li className="ml-4">Uji dan Sesuaikan pH dan EC</li>
                <li className="ml-4">Ganti larutan nutrisi secara rutin</li>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Penyakit dan Hama</td>
              <td className=" border px-4 py-2">
                <li className="ml-4">Lakukan pemantauan rutin</li>
                <li className="ml-4">
                  - Gunakan pestisida organik atau media alami
                </li>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Kekurangan Nutrisi</td>
              <td className=" border px-4 py-2">
                <li className="ml-4">
                  Uji larutan nutrisi dan sesuaikan formula
                </li>
                <li className="ml-4">Berikan pupuk tambahan jika perlu</li>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Sistem Pompa yang tidak berfungsi
              </td>
              <td className=" border px-4 py-2">
                <li className="ml-4">Periksa sumber listrik dan sambungan</li>
                <li className="ml-4">Ganti pompa jika rusak</li>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Suhu Terlalu Tinggi/Rendah</td>
              <td className=" border px-4 py-2">
                <li className="ml-4">Atur ventilasi dan pencahayaan</li>
                <li className="ml-4">Gunakan pemanas atau pendingin ruangan</li>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Salinitas Tinggi</td>
              <td className=" border px-4 py-2">
                <li className="ml-4">
                  Ganti sebagian larutan nutrisi dengan air bersih
                </li>
                <li className="ml-4">Pastikan drainase tetap baik</li>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Pertumbuhan Tanaman Tidak Optimal
              </td>
              <td className=" border px-4 py-2">
                <li className="ml-4">Cek cahaya, nutrisi dan suhu</li>
                <li className="ml-4">
                  Sesuaikan parameter lingkungan sesuai kebutuhan tanaman
                </li>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),

    // Panduan 5
    "Pemasaran-Hasil-Hidroponik": (
      <div className="space-y-8">
        <p className="leading-relaxed">
          Pemasaran hasil hidroponik merupakan langkah krusial untuk memastikan
          keberhasilan usaha pertanian modern dimasa kini.
        </p>

        <table className="min-w-full bg-white border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border px-4 py-2 bg-gray-300">
                Segmen Target Pasar
              </th>
              <th className="border px-4 py-2 bg-gray-300">Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Konsumen Individu</td>
              <td className=" border px-4 py-2">
                <li className="ml-4">
                  Keluarga dan rumah tangga yang ingin mengonsumsi sayuran dan
                  buah segar berkualitas tinggi
                </li>
                <li className="ml-4">
                  Penggemar kesehatan yang memilih produk organik
                </li>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Restoran dan Kafe</td>
              <td className=" border px-4 py-2">
                <li className="ml-4">
                  - Usaha makanan yang mencari bahan baku segar dan berkualitas
                  tinggi untuk menu sehat
                </li>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Toko Ritel</td>
              <td className=" border px-4 py-2">
                <li className="ml-4">
                  Supermarket dan toko bahan makanan yang ingin menjual produk
                  hidroponik kepada pelanggan.
                </li>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Pendidikan dan Komunitas</td>
              <td className=" border px-4 py-2">
                <li className="ml-4">
                  Sekolah dan universitas yang tertarik pada pendidikan tentang
                  pertanian berkelanjutan
                </li>
                <li className="ml-4">
                  Komunitas pertanian urban yang ingin belajar tentang
                  hidroponik
                </li>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Petani dan Pengusaha</td>
              <td className=" border px-4 py-2">
                <li className="ml-4">
                  Petani Hidroponik yang ingin meningkatkan hasil pertanian
                </li>
                <li className="ml-4">
                  Pengecer dan distributor yang menjual produk Hidroponik
                </li>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Pasar Online</td>
              <td className=" border px-4 py-2">
                <li className="ml-4">
                  Konsumen e-commerce yang lebih suka berbelanja online untuk
                  produk segar dan berkelanjutan.
                </li>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Pemasaran Berbasis Lingkungan
              </td>
              <td className=" border px-4 py-2">
                <li className="ml-4">
                  Konsumen yang peduli lingkungan dan memilih produk yang ramah
                  lingkungan dna berkelanjutan
                </li>
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Bagaimana cara menentukan harga jual produk hidroponik?
        </h2>
        <ol className="list-inside list-decimal space-y-4">
          <li className="font-bold">Analisis Biaya </li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <li>Biaya Produksi : </li>
            <p className="ml-4">
              Hitung semua biaya yang terkait dengan produksi, termasuk bahan
              baku, nutrisi, listrik, dan tenaga kerja.
            </p>
            <br></br>
            <li>Biaya Operasional : </li>
            <p className="ml-4">
              Pertimbangkan biaya tetap dan variabel seperti sewa, pemeliharaan
              alat, dan transportasi.
            </p>
          </ul>
          <li className="font-bold">Studi Pasar </li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <li>Penelitian Kompetitor : </li>
            <p className="ml-4">
              Lihat harga yang ditawarkan oleh pesaing untuk produk serupa di
              pasar. Ini membantu menentukan kisaran harga yang wajar.
            </p>
            <br></br>
            <li>Permintaan Pasar :</li>
            <p className="ml-4">
              Tinjau permintaan untuk produk hidroponik di wilayah Anda. Jika
              permintaan tinggi, Anda mungkin dapat menetapkan harga lebih
              tinggi.
            </p>
          </ul>
          <li className="font-bold">Segmentasi Pasar </li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Jika memungkinkan, gunakan generator atau sumber daya cadangan
              lainnya untuk menjaga sistem tetap berjalan selama pemadaman
              listrik.
            </p>
          </ul>
          <li className="font-bold">Strategi Pemasaran </li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Pertimbangkan strategi pemasaran yang akan diterapkan. Jika produk
              memiliki nilai tambah (misalnya, produk organik, bebas pestisida),
              harga dapat disesuaikan untuk mencerminkan nilai tersebut.
            </p>
          </ul>
          <li className="font-bold">Uji Pasar </li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Lakukan pengujian harga dengan meluncurkan produk pada harga
              tertentu, lalu pantau respons pelanggan. Ini dapat membantu
              menyesuaikan harga berdasarkan umpan balik.
            </p>
          </ul>
          <li className="font-bold">Penyesuaian Harga </li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Sesuaikan harga secara berkala berdasarkan perubahan biaya
              produksi, tren pasar, dan umpan balik pelanggan.
            </p>
          </ul>
        </ol>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Bagaimana cara mempromosikan produk hidroponik di media sosial?
        </h2>
        <img
          src="/src/assets/promosi-produk-hidroponik.png"
          alt="System maintenance"
          className="w-1/2 h-auto my-4"
        />
        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Apa yang tips dalam membangun hubungan bak dengan pelanggan?
        </h2>
        <ol className="list-inside list-decimal space-y-4">
          <li>Komunikasi yang efektif :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Selalu berkomunikasi dengan jelas dan terbuka. Tanggapi pertanyaan
              dan keluhan pelanggan dengan cepat dan dengan sikap yang ramah.
            </p>
          </ul>
          <li>Memberi Layanan Yang Konsisten :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Pastikan bahwa setiap interaksi dengan pelanggan memenuhi standar
              yang tinggi. Layanan yang konsisten membangun kepercayaan dan
              loyalitas.
            </p>
          </ul>
          <li>Mendengarkan Pelanggan :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Dengarkan umpan balik dan saran dari pelanggan. Ini menunjukkan
              bahwa Anda menghargai pendapat mereka dan bersedia untuk
              memperbaiki layanan atau produk.
            </p>
          </ul>
          <li>Transparansi :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Jika terjadi kesalahan atau masalah, komunikasikan dengan jujur
              kepada pelanggan. Mengakui kesalahan dan menawarkan solusi dapat
              meningkatkan kepercayaan.
            </p>
          </ul>
          <li>Follow Up :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Setelah pembelian, lakukan follow-up untuk memastikan pelanggan
              puas dengan produk atau layanan. Ini menunjukkan bahwa Anda peduli
              terhadap pengalaman mereka.
            </p>
          </ul>
          <li>Pendidikan :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Berikan informasi dan edukasi tentang produk atau layanan yang
              Anda tawarkan. Pelanggan yang terinformasi lebih cenderung
              menghargai nilai yang Anda tawarkan.
            </p>
          </ul>
        </ol>

        <hr className="border-t-2 border-gray-300 mt-2 mb-6" />

        <h2 className="text-xl font-semibold mt-6">
          Bagaimana mengikut tren dan inovasi di pasar hidroponik?
        </h2>
        <ol className="list-inside list-decimal space-y-4">
          <li>Riset Pasar Secara Rutin :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Lakukan riset pasar secara berkala untuk memahami perubahan dalam
              preferensi konsumen, teknologi baru, dan praktik terbaik. Gunakan
              sumber daya seperti laporan industri, jurnal penelitian, dan
              artikel terkait.
            </p>
          </ul>
          <li>Bergabung dengan Komunitas dan Forum :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Terlibat dalam komunitas online atau forum diskusi tentang
              hidroponik. Di sana, Anda dapat berbagi pengalaman, bertanya, dan
              belajar dari praktisi lain.
            </p>
          </ul>
          <li>Membaca Publikasi Khusus :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Ikuti publikasi dan blog yang fokus pada hidroponik dan pertanian
              urban. Ini bisa mencakup majalah, newsletter, dan situs web yang
              menawarkan berita dan artikel tentang tren terbaru.
            </p>
          </ul>
          <li>Mengikuti Pelatihan dan Workshop :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Daftarkan diri untuk pelatihan atau workshop yang membahas teknik
              hidroponik terbaru, manajemen sistem, atau pemasaran produk
              hidroponik.
            </p>
          </ul>
          <li>Feedback dari Pelanggan :</li>
          <ul className="ml-4 mt-2 list-inside list-disc space-y-0">
            <p>
              Dapatkan umpan balik dari pelanggan tentang produk dan layanan
              Anda. Pelanggan sering kali memberikan wawasan berharga mengenai
              apa yang mereka cari dan harapkan dari produk hidroponik.
            </p>
          </ul>
        </ol>
      </div>
    ),
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{babTitle.replace(/-/g, " ")}</h2>
      {babContent[babTitle] || <p>Content not found for this bab.</p>}
    </div>
  );
};

export default Content;