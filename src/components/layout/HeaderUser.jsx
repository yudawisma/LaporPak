const HeaderUser = () => {
  const { user } = useAuth();  // Ambil data pengguna dari context

  return (
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
          <div className="text-xl font-semibold">Dashboard / Ikhtisar</div>
          <div className="flex items-center gap-4">
              <input type="text" placeholder="Search..." className="border rounded px-2 py-1" />
              <div className="text-gray-700">Hi, {user ? user.nama_lengkap : 'User'}</div>  {/* Menampilkan nama pengguna */}
              <img src="/profile-pic.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
      </header>
  );
};

export default HeaderUser;
