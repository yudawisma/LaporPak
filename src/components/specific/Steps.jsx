

function Steps() {
  const steps = [
    { title: "Tulis Laporan", description: "Laporan keluhan anda akan ditulis secara jelas." },
    { title: "Verifikasi", description: "Laporan akan segera diverifikasi." },
    { title: "Tindak Lanjut", description: "Laporan diverifikasi akan segera ditindaklanjuti." },
    { title: "Selesai", description: "Laporan yang selesai diproses akan dipantau." },
  ];

  return (
    <div className="relative z-20 py-12 bg-gray-100 text-center mt-10"> {/* Tambah z-index dan margin-top */}
      <h3 className="text-2xl font-bold text-blue-800 mb-8">Alur Laporan Anda</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {steps.map((step, index) => (
          <div key={index} className="p-4 bg-white shadow rounded">
            <h4 className="font-semibold text-blue-800 mb-2">{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;
