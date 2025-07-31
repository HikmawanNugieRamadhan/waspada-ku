import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (username === "user" && password === "123456") {
      login(username);
      navigate("/");
    } else {
      setError("Username atau password salah.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 relative px-4 overflow-hidden">
      {/* Background SVG Kiri */}
      <img
        src="/assets/icon/world.svg"
        alt="decor-left"
        className="absolute left-0 bottom-0 w-40 md:w-64 opacity-40 pointer-events-none"
      />
      {/* Background SVG Kanan */}
      <img
        src="/assets/icon/world.svg"
        alt="decor-right"
        className="absolute right-0 top-0 w-40 md:w-64 opacity-40 pointer-events-none"
      />

      {/* Konten Login */}
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg w-full max-w-md z-10">
        <div className="flex flex-col items-center mb-6 text-center">
          <img
            src="/assets/icon/LogoWK.svg"
            alt="Waspada-Ku"
            className="w-16 h-16 mb-2"
            draggable={false}
          />
          <h2 className="text-2xl font-bold text-blue-800">
            Selamat datang di <span className="text-blue-600">Waspada-Ku</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">Masuk untuk mulai menggunakan layanan</p>
        </div>

        {/* Form Login */}
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Masukkan username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="******"
              required
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;