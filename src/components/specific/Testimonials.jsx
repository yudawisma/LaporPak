

function Testimonials() {
  const testimonials = [
    { name: "John Doe", text: "Luar biasa, baru kali ini ada sebuah platform yang dapat mendengar dan menindak laporan masyarakat", image: "/src/assets/mitra1.png" },
    { name: "El Linda", text: "Pemerintah mesti berterimakasih kepada platform LaporPak ini, berkat platform ini dapat membantu mereka", image: "/src/assets/mitra1.png" },
    { name: "El Sasmika", text: "Mestinya dari dulu sih ada platform sebagus dan sekeren ini, tapi gap apa suatu kemajuan sekarang hebat!!", image:"/src/assets/mitra1.png" }
  ];

  return (
    <section className="py-12 bg-gray-100 text-center">
      <h3 className="text-2xl font-bold text-blue-800 mb-8">Apa Kata Mereka</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {testimonials.map((item, index) => (
          <div key={index} className="p-6 bg-white shadow rounded">

            {/* //fotonya kak// */}
            <img 
              src={item.image} 
              alt={`${item.name}'s photo`} 
              className="rounded-full w-20 h-20 mx-auto mb-4 object-cover"
            />
            <h4 className="font-semibold text-blue-800">{item.name}</h4>
            <p className="text-gray-600 mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
