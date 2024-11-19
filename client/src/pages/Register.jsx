import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSuccess(data.message || "Registration successful!");
        setError(null);
      } else {
        setError(data.error || "Registration failed");
        setSuccess(null);
      }
    } catch (error) {
      setError("Network error, please try again later.");
      setSuccess(null);
    }
  };

  return (
    <section className="bg-gradient-to-r from-primary to-secondary p-6 md:p-24 text-white">
      <div className="flex justify-center">
        <div className="container pt-16 w-full md:w-1/2 max-w-md bg-white text-gray-800 rounded-lg p-8 shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center text-black">
            Daftar Akun
          </h1>

          <div className="flex justify-center mb-6">
            <img src="/src/assets/logo-hidro-tani.png" alt="Logo" className="w-12 h-12" />
          </div>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-lg font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Masukkan username"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Masukkan email"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-lg font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Masukkan password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white px-8 py-2 rounded-lg shadow hover:bg-secondary transition duration-300"
            >
              Daftar
            </button>
          </form>
          
          <p className="text-center mt-4 text-gray-600">
            Sudah punya akun?
            <button
              onClick={() => navigate("/login")}
              className="text-primary font-medium hover:underline"
            >
              Masuk
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;