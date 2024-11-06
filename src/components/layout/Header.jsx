import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function Header() {
    const { user, isLoggedIn, logout } = useAuth(); // Ambil data pengguna dari AuthContext
    const navigate = useNavigate();

    // Jika pengguna sudah login, tampilkan HeaderUser atau nama pengguna
    if (isLoggedIn && user) {
        return (
            <header className="bg-white shadow p-4 flex justify-between items-center flex-wrap">
                {/* Logo */}
                <Link to="/">
                    <img 
                        src="/src/assets/logoonly.png" 
                        alt="logo" 
                        className="h-10 w-20 sm:w-28 md:w-36 lg:w-40 object-contain" 
                    />
                </Link>

                {/* Navigation Links */}
                <nav className="flex space-x-4 text-blue-800">
                    <Link to="/" className="hover:underline">
                        Beranda
                    </Link>
                    <div className="relative group">
                        <Link to="/laporan" className="hover:underline">
                            Laporan
                        </Link>
                        {/* Dropdown */}
                        <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg">
                            <Link to="/laporan/faq" className="block px-4 py-2 text-blue-800 hover:bg-gray-100">
                                FAQ
                            </Link>
                            <Link to="/laporan/statistik" className="block px-4 py-2 text-blue-800 hover:bg-gray-100">
                                Statistik
                            </Link>
                            <Link to="/laporan/reward" className="block px-4 py-2 text-blue-800 hover:bg-gray-100">
                                Reward
                            </Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <Link to="/tentang" className="hover:underline">
                            Tentang
                        </Link>
                        {/* Dropdown */}
                        <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg">
                            <Link to="/tentang/profil" className="block px-4 py-2 text-blue-800 hover:bg-gray-100">
                                Profil
                            </Link>
                            <Link to="/tentang/mitra" className="block px-4 py-2 text-blue-800 hover:bg-gray-100">
                                Mitra
                            </Link>
                            <Link to="/tentang/kontak" className="block px-4 py-2 text-blue-800 hover:bg-gray-100">
                                Kontak
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* User Greeting and Logout Button */}
                <div className="space-x-4 flex items-center">
                    <span className="text-blue-800">Halo, {user.name || 'Pengguna'}</span> {/* Nama pengguna */}
                    <button 
                        onClick={logout} 
                        className="text-blue-800 px-4 py-2 rounded border border-blue-800"
                    >
                        Logout
                    </button>
                </div>
            </header>
        );
    }

    // Jika pengguna belum login
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center flex-wrap">
            {/* Logo */}
            <Link to="/">
                <img 
                    src="/src/assets/logoonly.png" 
                    alt="logo" 
                    className="h-10 w-20 sm:w-28 md:w-36 lg:w-40 object-contain" 
                />
            </Link>

            {/* Navigation Links */}
            <nav className="flex space-x-4 text-blue-800">
                <Link to="/" className="hover:underline">
                    Beranda
                </Link>
                <div className="relative group">
                    <Link to="/laporan" className="hover:underline">
                        Laporan
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg">
                        <Link to="/laporan/faq" className="block px-4 py-2 text-blue-800 hover:bg-gray-100">
                            FAQ
                        </Link>
                        <Link to="/laporan/statistik" className="block px-4 py-2 text-blue-800 hover:bg-gray-100">
                            Statistik
                        </Link>
                        <Link to="/laporan/reward" className="block px-4 py-2 text-blue-800 hover:bg-gray-100">
                            Reward
                        </Link>
                    </div>
                </div>
                <div className="relative group">
                    <Link to="/tentang" className="hover:underline">
                        Tentang
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg">
                        <Link to="/tentang/profil" className="block px-4 py-2 text-blue-800 hover:bg-gray-100">
                            Profil
                        </Link>
                        <Link to="/tentang/mitra" className="block px-4 py-2 text-blue-800 hover:bg-gray-100">
                            Mitra
                        </Link>
                        <Link to="/tentang/kontak" className="block px-4 py-2 text-blue-800 hover:bg-gray-100">
                            Kontak
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Buttons for Register and Login */}
            <div className="space-x-2 flex items-center">
                <button 
                    onClick={() => navigate('/register')} 
                    className="text-blue-800 px-2 py-1 border border-blue-800 rounded"
                >
                    Daftar
                </button>
                <button 
                    onClick={() => navigate('/login')} 
                    className="bg-blue-800 text-white px-4 py-2 rounded"
                >
                    Lapor
                </button>
            </div>
        </header>
    );
}

export default Header;
