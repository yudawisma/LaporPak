
import ChartCard from '../components/common/ChartCard';
import InfoCard from '../components/common/InfoCard';
import ReportList from '../components/common/ReportList';
import MapSection from './MapSection';

const AdminDashboard = () => {
  const reports = [
    { name: 'Mang Ucup', message: 'Tolong di benahi kembali untuk jalan re martadinata...' },
    { name: 'Sarahan', message: 'Tolong di benahi kembali fasilitas publik sangat berantakan...' },
    // Tambahkan data lainnya di sini
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <ChartCard title="Laporan Masuk">
        {/* Komponen chart atau elemen canvas untuk chart */}
      </ChartCard>
      <ChartCard title="Rentan Usia Pelapor">
        {/* Komponen chart atau elemen canvas untuk chart */}
      </ChartCard>
      <InfoCard title="Laporan Masuk" value="900" subtitle="Pemda Desa Manislor" />
      <InfoCard title="Feedback" value="4.8+" />
      <InfoCard title="Total Laporan" value="2291" />
      <InfoCard title="Laporan Teratasi" value="875" />
      <MapSection />
      <ReportList reports={reports} />
    </div>
  );
};

export default AdminDashboard;
