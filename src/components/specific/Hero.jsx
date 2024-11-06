
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from 'react-router-dom';

function Hero() {
  const images = [
    "/src/assets/banner1.png",
    "/src/assets/banner2.png",
    "/src/assets/banner3.png",
  ];
  const navigate = useNavigate();

  return (
    <div className="relative text-white">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={2000}
        transitionTime={200}
        className="absolute top-0 left-0 w-full h-[300px] md:h-[400px] lg:h-[500px]" 
      >
        {images.map((image, index) => (
          <div key={index} className="h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Carousel>
      <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
          Apa itu LaporPak?
        </h2>
        <p className="mb-6 text-sm sm:text-base md:text-lg text-center lg:text-left">
          LaporPak adalah platform untuk melaporkan masalah lingkungan dan sosial di sekitar Anda.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button 
           onClick={() => navigate('/buat-laporan')} 
          className="bg-blue-800 text-white px-4 py-2 md:px-6 md:py-3 rounded transition duration-200 hover:bg-blue-700">
            Mulai Laporkan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
