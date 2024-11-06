

const MapSection = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Peta Lokasi</h3>
      {/* Di sini kamu bisa menambahkan komponen peta menggunakan library seperti Leaflet, Google Maps, atau lainnya */}
      <div className="h-64 bg-gray-200 flex items-center justify-center">
        <p>Peta akan ditampilkan di sini</p>
      </div>
    </div>
  );
};

export default MapSection;
