

function Partners() {
  const logos = [
    "/src/assets/mitra1.png",
    "/src/assets/mitra2.png",
    "/src/assets/mitra3.png",
  ];

  return (
    <section className="py-12 bg-white text-center">
      <h3 className="text-2xl font-bold text-blue-800 mb-8">Mitra Kami</h3>
      <div className="flex flex-wrap justify-center space-x-6 px-4">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner logo ${index}`}
            className="h-12 md:h-16 lg:h-20 max-w-full mb-4"
          />
        ))}
      </div>
    </section>
  );
}

export default Partners;
