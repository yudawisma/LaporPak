import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // Role pengguna
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Mengambil data pengguna dari API dengan token
      axios.get('http://localhost:5000/api/auth/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        setUser(response.data);
        setRole(response.data.role); // Mengatur role dari respons API
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch user data:', error);
        logout(); // Hapus token jika gagal mengakses
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const login = (role, token) => {
    setRole(role); // Set role setelah login
    localStorage.setItem('token', token); // Simpan token saat login
    setUser({ role }); // Set user sementara jika diperlukan
  };

  const logout = () => {
    localStorage.removeItem('token'); // Hapus token dari localStorage
    setUser(null);
    setRole(null);
  };

  const isLoggedIn = !!user;  // Memeriksa apakah ada data user

  const value = { user, role, isLoggedIn, login, logout };

  if (loading) return <div>Loading...</div>; // Tampilkan "Loading" saat mengambil data

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
