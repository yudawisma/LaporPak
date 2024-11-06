

function Instansi() {
  const logos = [
    "/src/assets/mitra1.png",
    "/src/assets/mitra2.png",
    "/src/assets/mitra3.png",
  ];

  return (
    <section className="py-12 bg-gray-100 text-center">
      <h3 className="text-2xl font-bold text-blue-800 mb-8">Instansi Terkait</h3>
      <div className="flex flex-wrap justify-center space-x-6 px-4">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Institution logo ${index}`}
            className="h-16 max-h-16 w-auto mb-4 md:mb-0"
          />
        ))}
      </div>
    </section>
  );
}

export default Instansi;
