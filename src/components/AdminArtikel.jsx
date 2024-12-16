// // AdminArtikel.js

// import { useState } from "react";

// const AdminArtikel = () => {
//   const [articles, setArticles] = useState([]);

//   const [newArticle, setNewArticle] = useState({ title: "", content: "" });

//   const handleAddArticle = (e) => {
//     e.preventDefault();

//     setArticles([...articles, { id: articles.length + 1, ...newArticle }]);

//     setNewArticle({ title: "", content: "" });
//   };

//   return (
//     <div>
//       <h2 className="text-2xl">Manajemen Artikel</h2>

//       <form onSubmit={handleAddArticle} className="mb-4">
//         <input
//           type="text"
//           placeholder="Judul Artikel"
//           value={newArticle.title}
//           onChange={(e) =>
//             setNewArticle({ ...newArticle, title: e.target.value })
//           }
//           required
//           className="border p-2 mr-2"
//         />

//         <textarea
//           placeholder="Konten Artikel"
//           value={newArticle.content}
//           onChange={(e) =>
//             setNewArticle({ ...newArticle, content: e.target.value })
//           }
//           required
//           className="border p-2 mr-2"
//         />

//         <button type="submit" className="bg-blue-500 text-white px-2 py-1">
//           Tambah Artikel
//         </button>
//       </form>

//       <ul>
//         {articles.map((article) => (
//           <li key={article.id} className="border-b py-2">
//             {article.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminArtikel;
