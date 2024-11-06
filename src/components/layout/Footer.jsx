
import { FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 text-blue-600 py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Links Section */}
        <div className="flex justify-around md:justify-start md:space-x-12">
          {/* Lapor Section */}
          <div>
            <h4 className="font-bold text-blue-600 mb-4">LAPOR</h4>
            <ul className="space-y-2">
              <li><Link to="/qna" className="hover:underline">FAQ</Link></li>
              <li><a href="#" className="hover:underline">Statistik</a></li>
              <li><a href="#" className="hover:underline">Rewards</a></li>
            </ul>
          </div>

          {/* Tentang Section */}
          <div>
            <h4 className="font-bold text-blue-600 mb-4">TENTANG</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Profile</a></li>
              <li><a href="#" className="hover:underline">Mitra</a></li>
              <li><a href="#" className="hover:underline">Kontak</a></li>
            </ul>
          </div>
        </div>

        {/* Sosial Media Section */}
        <div>
          <h4 className="font-bold text-blue-600 mb-4">SOSIAL MEDIA</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaTiktok />
              <a href="#" className="hover:underline">laporpak</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaInstagram />
              <a href="#" className="hover:underline">laporpak</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaFacebook />
              <a href="#" className="hover:underline">laporpak</a>
            </li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center lg:justify-end">
          <img src="/src/assets/logofooter.png" alt="LaporPak Logo" className="h-12 mb-2" />
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-slate-500">
        &copy; 2024 LaporPak. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
