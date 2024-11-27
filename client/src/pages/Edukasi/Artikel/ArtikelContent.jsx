// import React from "react";
// import { useParams, Link } from "react-router-dom";

// const ArtikelContent = ({ articles, sustainabilityArticles }) => {
//   const { id } = useParams(); // Mendapatkan ID dari URL
//   const allArticles = [...articles, ...sustainabilityArticles]; // Gabungkan semua artikel
//   const article = allArticles.find((item) => item.id === parseInt(id)); // Temukan artikel berdasarkan ID

//   if (!article) {
//     return <div>Artikel tidak ditemukan.</div>;
//   }

//   return (
//     <div className="container mx-auto py-12 px-6">
//       {/* Tombol Kembali */}
//       <Link to="/edukasi/artikel">
//         <button className="bg-blue-500 text-white py-2 px-4 rounded-md mb-6">
//           Kembali 
//         </button>
//       </Link>
//       <h1 className="text-4xl font-bold text-center mb-6">{article.title}</h1>
//       <img
//         src={article.image}
//         alt={article.title}
//         className="w-screen h-screen object-cover mb-6"
//       />
//       <p className="text-lg text-gray-700">
//         {/* Isi artikel bisa diganti sesuai kebutuhan */}
//          <strong>{article.content}</strong>. 
//       </p>
//     </div>
//   );
// };

// export default ArtikelContent;

import React from "react";
import { useLocation } from "react-router-dom";

const ArticleDetail = () => {
  const location = useLocation();
  const { article } = location.state; // Mengambil artikel dari state

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;


