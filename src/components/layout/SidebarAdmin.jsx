
import { NavLink } from 'react-router-dom';

const SidebarAdmin = () => {
  return (
    <aside className="w-64 bg-white p-4 shadow-lg">
      <div className="text-2xl font-bold mb-6">LAPORPAK</div>
      <nav>
        <NavLink to="/admin/dashboard" className="block py-2 px-4 hover:bg-gray-200 rounded">Ikhtisar</NavLink>
        <div>
          <button className="block w-full text-left py-2 px-4 hover:bg-gray-200 rounded">Laporan</button>
          <div className="pl-4 mt-2">
            <NavLink to="/admin/laporan/masuk" className="block py-1 px-2 hover:bg-gray-100 rounded">Masuk</NavLink>
            <NavLink to="/admin/laporan/diproses" className="block py-1 px-2 hover:bg-gray-100 rounded">Diproses</NavLink>
            <NavLink to="/admin/laporan/terealisasi" className="block py-1 px-2 hover:bg-gray-100 rounded">Terealisasi</NavLink>
            <NavLink to="/admin/laporan/kelola" className="block py-1 px-2 hover:bg-gray-100 rounded">Kelola Laporan</NavLink>
          </div>
        </div>
        <NavLink to="/admin/pengaturan" className="block py-2 px-4 hover:bg-gray-200 rounded">Pengaturan</NavLink>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
