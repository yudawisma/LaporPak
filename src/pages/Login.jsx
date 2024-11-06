// Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Pastikan fungsi login dari konteks autentikasi sudah ada
  const [formData, setFormData] = useState({
    identifier: "", // Bisa diisi email atau username
    password: "",
  });

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fungsi untuk menangani submit form login
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { identifier, password } = formData;

    // Validasi input
    if (!identifier || !password) {
      alert("Email/Username dan Password harus diisi!");
      return;
    }

    try {
      // Mengirim request login ke API backend
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email: identifier, password },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Respons API:", response);

      if (response.data.token) {
        // Login berhasil, menyimpan token dan role ke localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.user.role);
        login(response.data.user.role); // Menyimpan informasi role di konteks autentikasi

        // Arahkan ke dashboard berdasarkan role
        const userRole = response.data.user.role;
        switch (userRole) {
          case "user":
            navigate("/dashboard");
            break;
          case "admin":
            navigate("/admin/dashboard");
            break;
          case "superadmin":
            navigate("/superadmin/dashboard");
            break;
          default:
            navigate("/");
            break;
        }
      } else {
        alert("Login gagal, token tidak ditemukan.");
      }
      
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        alert(`Login gagal: ${error.response.data.message || "Kesalahan server"}`);
      } else {
        alert("Terjadi kesalahan, coba lagi nanti.");
      }
    }
  };

  // Fungsi untuk mengarahkan ke halaman registrasi
  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  // Fungsi untuk mengarahkan ke halaman lupa password
  const handleForgotPasswordRedirect = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <img
          src="/src/assets/logowithslogan.png"
          alt="logo"
          className="w-32 h-10 mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold text-center mb-6">Masuk</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="identifier"
            placeholder="Email/Username"
            value={formData.identifier}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-full"
            required
          />
          <div className="col-span-1">
            <button
              type="submit" // Ganti menjadi type="submit" untuk form
              className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-700"
            >
              Masuk
            </button>
          </div>
        </form>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleForgotPasswordRedirect}
            className="text-blue-800 underline"
          >
            Lupa Password?
          </button>
          <button
            onClick={handleRegisterRedirect}
            className="text-blue-800 underline"
          >
            Daftar disini
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
