import { useEffect, useState } from 'react';

const hero1Data = [
  {
    place: 'Beauty of Japan',
    title: 'Cherry Blossom',
    title2: 'Bridge in Japan',
    description:
      'Nestled in the heart of Japan, the Cherry Blossom bridge enchants with its elegant arches adorned in delicate pink petals. A breathtaking fusion of nature and architecture, it offers a serene passage under blooming cherry blossoms, creating a timeless and ethereal experience.',
    image:
      'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    place: 'Blue Alley - Morocco',
    title: 'Blue Alley with Potted Plants',
    title2: 'Morocco',
    description:
      'Nestled in Morocco, the Blue Alley captivates with its narrow cobalt-hued lanes adorned with vibrant potted plants. A sensory journey unfolds as the azure walls harmonize with the lively greenery, creating a picturesque maze that celebrates the rich colors and culture of Morocco.',
    image:
      'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    place: 'Arches National Park - USA',
    title: 'Brown Rock Formation',
    title2: 'Arches National Park',
    description:
      'Arches National Park in the USA is a mesmerizing red-rock wonderland. Home to over 2,000 natural sandstone arches, the landscape is a surreal masterpiece, with towering formations, balanced rocks, and breathtaking vistas, making it a geological and visual marvel for all who explore its rugged beauty.',
    image:
      'https://images.unsplash.com/photo-1535470614242-bf41943a99fd?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    place: 'Santa Cruz, Sevilla, Spain',
    title: 'SEVILLA',
    title2: 'Restaurant in a sunny day in Spain',
    description:
      'Cycling might not be the best way to move around the old streets of Seville because of the pavements, but this bike sure has a charm.',
    image:
      'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    place: 'Ballooning Marvels Await',
    title: 'Elevate',
    title2: 'Marvel Balloning',
    description:
      'Embark on a magical adventure in Turkey with hot air ballooning. As the sun rises over Cappadocia, colorful balloons dot the sky, offering a breathtaking panorama of otherworldly landscapes, ancient rock formations, and fairy chimneys. Drift serenely above the unique terrain, capturing the essence of Turkeys captivating beauty from a truly elevated perspective.',
    image:
      'https://images.unsplash.com/photo-1510253687831-0f982d7862fc?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Hero1 = () => {
  const [activeIndex, setActiveIndex] = useState(hero1Data[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (activeIndex === hero1Data[hero1Data.length - 1]) {
        setActiveIndex(hero1Data[0]);
      } else {
        const currentIndex = hero1Data.findIndex(
          (item) => item === activeIndex
        );
        setActiveIndex(hero1Data[currentIndex + 1]);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <header className="relative flex justify-center items-center min-h-screen z-10">
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat -z-10`}
        style={{ backgroundImage: `url(${activeIndex.image})` }}
      />
      {hero1Data.map((item, i) => {
        return (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat -z-10 duration-1000 ${
              activeIndex.image === item.image
                ? 'scale-100 opacity-100'
                : 'scale-50 opacity-0'
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        );
      })}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10" />

      {/* main */}
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-1/2 text-white pr-20 xl:pr-32">
          <h2 className="font-semibold uppercase text-2xl">
            {activeIndex.place}
          </h2>
          <h2 className="font-bold uppercase text-7xl !leading-tight">
            {activeIndex.title}
          </h2>
          <p className="font-semibold capitalize text-base tracking-wide">
            {activeIndex.description}
          </p>
        </div>
      </div>
      <div className="absolute w-1/2 bottom-11 !right-0">
        <div className="flex gap-x-4">
          {hero1Data.map((item, i) => {
            return (
              <img
                src={item.image}
                alt=""
                key={i}
                className={`h-72 w-40 rounded-md object-cover hover:-translate-y-4 duration-700 cursor-pointer ${
                  activeIndex.image === item.image && '-translate-y-4'
                }`}
                onClick={() => setActiveIndex(item)}
              />
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Hero1;
