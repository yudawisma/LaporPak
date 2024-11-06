
import { useNavigate } from 'react-router-dom';

function StartReport() {
    const navigate = useNavigate(); 
  return (
    <section className="flex items-center justify-between bg-gray-100 p-8 rounded-lg shadow-lg mx-4 my-8">
      <div className="max-w-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Mulai Buat Laporan</h2>
        <p className="text-gray-600 mb-6">Laporan Anda dapat menjadi perubahan besar</p>
        <button
          onClick={() => navigate('/buat-laporan')}
          className="bg-blue-800 text-white px-6 py-2 rounded"
        >
          Buat Laporan
        </button>
      </div>
      <div className="hidden md:block">
        <img
          src="/src/assets/bannerForm.png"
          alt="Support team"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
}

export default StartReport;
