// // Login.js

// import React, { useState } from "react";

// const AdminLogin = ({ onLogin }) => {
//   const [username, setUsername] = useState("");

//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Implement authentication logic here

//     onLogin();
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
//         <h2 className="text-2xl mb-4">Login Admin</h2>

//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           className="border p-2 mb-4 w-full"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="border p-2 mb-4 w-full"
//         />

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 w-full"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;
