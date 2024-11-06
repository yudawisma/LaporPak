import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Set icon for the marker
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png',
});

const ReportForm = () => {
  const [coordinates, setCoordinates] = useState({ lat: -6.200000, lng: 106.816666 }); // Default coordinates
  const [markerPosition, setMarkerPosition] = useState(coordinates);
  const [coordsInput, setCoordsInput] = useState('');
  const navigate = useNavigate();

  // Handle map events to set marker position and coordinates
  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setMarkerPosition(e.latlng);
        setCoordinates(e.latlng);
        setCoordsInput(`${e.latlng.lat}, ${e.latlng.lng}`);
      },
    });

    return null;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    alert('Laporan berhasil dibuat!');
    navigate('/'); // Redirect to home
  };

  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-lg mx-4 my-8">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Mulai Buat Laporan Anda</h2>
          <p className="text-gray-600 mb-6">Laporan anda dapat menjadi perubahan besar</p>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img
            src="/src/assets/bannerForm.png" 
            alt="Support team"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="block text-gray-700">Judul Masalah</label>
          <input type="text" placeholder="Masukkan judul masalah" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block text-gray-700">Email atau No. Hp</label>
          <input type="text" placeholder="Isi dengan alamat email atau no handphone" className="w-full p-2 border rounded" required />
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700">Deskripsi Masalah</label>
          <textarea placeholder="Ketik isi laporan anda" className="w-full p-2 border rounded h-24" required></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Kategori Masalah</label>
          <select className="w-full p-2 border rounded">
            <option>Pilih kategori masalah disini</option>
            <option>Lingkungan</option>
            <option>Sosial</option>
            <option>Infrastruktur</option>
            <option>Lainnya</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Upload Lampiran</label>
          <input type="file" className="w-full p-2 border rounded" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700">Masukkan Titik Kordinat</label>
          <input 
            type="text" 
            value={coordsInput} 
            placeholder="Ketik koordinat laporan atau gunakan pointing maps" 
            className="w-full p-2 border rounded" 
            readOnly 
          />
          <div className="bg-gray-200 h-48 mt-2 rounded">
            <MapContainer center={coordinates} zoom={13} className="h-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <MapClickHandler />
              <Marker position={markerPosition} icon={markerIcon} />
            </MapContainer>
          </div>
        </div>
        <div className="md:col-span-2 text-center">
          <button type="submit" className="bg-blue-800 text-white px-6 py-2 rounded">Buat Laporan</button>
        </div>
      </form>
    </section>
  );
}

export default ReportForm;
