// import React, { useState } from 'react';

// const AdminUser = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'User  1', email: 'user1@example.com' },
//     { id: 2, name: 'User  2', email: 'user2@example.com' },
//   ]);

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Manajemen User</h2>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border border-gray-300 p-2">ID</th>
//             <th className="border border-gray-300 p-2">Nama</th>
//             <th className="border border-gray-300 p-2">Email</th>
//             <th className="border border-gray-300 p-2">Aksi</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td className="border border-gray-300 p-2">{user.id}</td>
//               <td className="border border-gray-300 p-2">{user.name}</td>
//               <td className="border border-gray-300 p-2">{user.email}</td>
//               <td className="border border-gray-300 p-2">
//                 <button className="bg-red-500 text-white p-1 rounded">Hapus</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminUser;