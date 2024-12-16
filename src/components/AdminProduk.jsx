// // AdminProduk.js

// import React, { useState } from "react";

// const AdminProduk = () => {
//   const [products, setProducts] = useState([]);

//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     description: "",
//     price: "",
//   });

//   const handleAddProduct = (e) => {
//     e.preventDefault();

//     setProducts([...products, { id: products.length + 1, ...newProduct }]);

//     setNewProduct({ name: "", description: "", price: "" });
//   };

//   return (
//     <div>
//       <h2 className="text-2xl">Manajemen Produk</h2>

//       <form onSubmit={handleAddProduct} className="mb-4">
//         <input
//           type="text"
//           placeholder="Nama Produk"
//           value={newProduct.name}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, name: e.target.value })
//           }
//           required
//           className="border p-2 mr-2"
//         />

//         <textarea
//           placeholder="Deskripsi Produk"
//           value={newProduct.description}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, description: e.target.value })
//           }
//           required
//           className="border p-2 mr-2"
//         />

//         <input
//           type="number"
//           placeholder="Harga Produk"
//           value={newProduct.price}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, price: e.target.value })
//           }
//           required
//           className="border p-2 mr-2"
//         />

//         <button type="submit" className="bg-blue-500 text-white px-2 py-1">
//           Tambah Produk
//         </button>
//       </form>

//       <ul>
//         {products.map((product) => (
//           <li key={product.id} className="border-b py-2">
//             {product.name} - {product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminProduk;
