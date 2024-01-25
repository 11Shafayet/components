import { useState } from 'react';
import shoe1 from '../../assets/shoe1.jpg';
import shoe2 from '../../assets/shoe2.jpg';
import shoe3 from '../../assets/shoe3.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [shoe1, shoe2, shoe3];

const Hero1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }

    console.log(activeIndex);
  };

  const handleNext = () => {
    if (activeIndex === images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }

    console.log(activeIndex);
  };
  return (
    <header className="relative min-h-screen z-10">
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat -z-10 duration-700 ${
          activeIndex === 0 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${images[0]})` }}
      />
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat -z-10 duration-700 ${
          activeIndex === 1 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${images[1]})` }}
      />
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat -z-10 duration-700 ${
          activeIndex === 2 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${images[2]})` }}
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10" />

      <div
        className="w-11 h-11 flex justify-center items-center bg-white shadow-lg absolute top-1/2 -translate-y-1/2 left-5 cursor-pointer"
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </div>
      <div
        className="w-11 h-11 flex justify-center items-center bg-white shadow-lg absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
        onClick={handleNext}
      >
        <FaArrowRight />
      </div>
    </header>
  );
};

export default Hero1;
