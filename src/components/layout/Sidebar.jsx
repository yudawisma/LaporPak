import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SuperSidebar from './SuperSidebar';
import SuperAdmin from '../../pages/SuperAdmin';

const Sidebar = () => {
  const [isLaporanOpen, setIsLaporanOpen] = useState(false);
  const { role, logout } = useAuth(); // Ambil role dan logout dari context

  const toggleLaporanMenu = () => {
    setIsLaporanOpen(!isLaporanOpen);
  };

  // Menentukan isi dashboard berdasarkan peran pengguna
  const renderDashboardContent = () => {
    if (!role) {
      return <div>Loading...</div>; // Tampilkan loading jika role belum ada
    }
    
    if (role === 'user') {
      return <Sidebar />;
    } else if (role === 'superadmin') {
      return <SuperAdmin />;
    } else {
      return <SuperSidebar />; // Role lainnya bisa ditangani sesuai kebutuhan
    }
  };

  return (
    <aside className="w-64 bg-white p-4 shadow-lg">
      <div className="text-2xl font-bold mb-6">LAPORPAK</div>
      <nav>
        <NavLink to="/dashboard" className="block py-2 px-4 hover:bg-gray-200 rounded">Ikhtisar</NavLink>

        {/* Bagian Laporan dengan Sub-Menu */}
        <div>
          <button
            onClick={toggleLaporanMenu}
            className="block w-full text-left py-2 px-4 hover:bg-gray-200 rounded focus:outline-none"
          >
            Laporan
          </button>
          {isLaporanOpen && (
            <div className="pl-4 mt-2">
              <NavLink to="/laporan/diproses" className="block py-1 px-2 hover:bg-gray-100 rounded">Diproses</NavLink>
              <NavLink to="/laporan/terealisasi" className="block py-1 px-2 hover:bg-gray-100 rounded">Terealisasi</NavLink>
              <NavLink to="/laporan/feedback" className="block py-1 px-2 hover:bg-gray-100 rounded">Feedback</NavLink>
              <NavLink to="/laporan/tukarpoin" className="block py-1 px-2 hover:bg-gray-100 rounded">Tukar Poin</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/pengaturan" className="block py-2 px-4 hover:bg-gray-200 rounded">Pengaturan</NavLink>
        
        {/* Tombol Logout */}
        {role && (
          <button
            onClick={logout}
            className="mt-4 block w-full text-left py-2 px-4 hover:bg-gray-200 rounded focus:outline-none"
          >
            Logout
          </button>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
