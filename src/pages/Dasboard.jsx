import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/layout/Sidebar';
import AdminDashboard from './AdminDashboard';
import SuperAdmin from './SuperAdmin';

const Dashboard = () => {
  const { role, user } = useAuth(); // Ambil data user dari context

  // Menentukan isi dashboard berdasarkan peran pengguna
  const renderDashboardContent = () => {
    if (role === 'user') {
      return <div>User Dashboard Content</div>;
    } else if (role === 'superadmin') {
      return <SuperAdmin />;
    } else if (role === 'admin') {
      return <AdminDashboard />;
    } else {
      return <div>Loading...</div>;  // Menampilkan loading jika role belum tersedia
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Laporan Yang Dibuat</h2>
            {/* Placeholder chart */}
            <div className="mt-4 h-32 bg-gray-200 rounded"></div>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Details</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Reward Point</h2>
            {/* Placeholder chart */}
            <div className="mt-4 h-32 bg-gray-200 rounded"></div>
            <p className="mt-2 text-gray-600">25 rata-rata reward point dari laporan anda</p>
            <button className="mt-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Tukar Poin</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Profil Pengguna</h2>
            <div className="flex items-center mt-4">
              <img src="/src/assets/bannerForm.png" alt="Profile" className="w-16 h-16 rounded-full" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{user ? user.name : "Pengguna"}</h3>
                <p>Poin Laporan: 25</p>
                <p>Level Pelapor: Mahir</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form untuk laporan baru */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Buat Laporan</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Judul Masalah</label>
              <input type="text" className="border rounded w-full px-2 py-1" placeholder="Masukkan judul masalah" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Masukan Titik Koordinat</label>
              <input type="text" className="border rounded w-full px-2 py-1" placeholder="Ketik koordinat laporan" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-2">Deskripsi Masalah</label>
              <textarea className="border rounded w-full px-2 py-1" placeholder="Ketik isi laporan anda"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Kategori Masalah</label>
              <select className="border rounded w-full px-2 py-1">
                <option>Pilih kategori masalah disini</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Upload Lampiran</label>
              <input type="file" className="border rounded w-full px-2 py-1" />
            </div>
            <button type="submit" className="col-span-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Buat Laporan</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
