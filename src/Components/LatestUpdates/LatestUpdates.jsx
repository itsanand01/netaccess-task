import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect } from "react";

function LatestUpdates() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 15,
    },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  const slides = [
    {
      image:
        "https://www.netaccess-india.com/wp-content/uploads/2023/08/Agriculture.jpg",
      title: "IT Infrastructure Management Services",
      description:
        "Outsmart Hackers: How Managed Cybersecurity Services Safeguard Your Data",
    },
    {
      image:
        "https://www.netaccess-india.com/wp-content/uploads/2023/08/Gate-management-system.jpg",
      title: "Healthcare Management System",
      description:
      "Outsmart Hackers: How Managed Cybersecurity Services Safeguard Your Data",
  },
    {
      image:
        "https://www.netaccess-india.com/wp-content/uploads/2023/08/Lease-management-software.jpg",
      title: "Education ERP System",
      description:
      "Outsmart Hackers: How Managed Cybersecurity Services Safeguard Your Data",
  },
    {
      image:
        "https://www.netaccess-india.com/wp-content/uploads/2023/08/Lease-management-software.jpg",
      title: "Education ERP System",
      description:
        "Outsmart Hackers: How Managed Cybersecurity Services Safeguard Your Data",
    },
  ];

  return (
    <>
      <div className="pt-10 md:px-52">
        <p className="text-blue-500 pb-5 text-xl">Latest News ----</p>
        <div className="flex justify-between ">
          <h1 className="font-bold text-4xl">Read Latest Updates</h1>
          <button className="bg-blue-600 text-white p-3 rounded-sm">
            View Updates
          </button>
        </div>
      </div>
      <div className="relative w-full px-52 py-10">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="keen-slider__slide w-full flex flex-col items-center text-center p-4 border border-gray-300 rounded-lg shadow-lg"
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-60 object-cover rounded-md transition-transform duration-500 ease-out hover:scale-110"
              />
              <h1 className="text-gray-700 text-right py-3 ">{slide.title}</h1>
              <p className=" text-2xl font-bold hover:text-blue-500">{slide.description}</p>
              <div className="flex justify-between w-full mt-4 p-4">
                <img
                  src="https://secure.gravatar.com/avatar/99f90bff515993b8579187ac7a96a237?s=80&d=mm&r=g"
                  alt="img"
                  className=" w-14 h-14 rounded-full"
                />
                <p>Net Access India Limited (A Murugappa Group Company)</p>
                <p>08 Jan 2025</p>
              </div>
            </div>
          ))}
        </div>
     

        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: slides.length }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`rounded-full ${
                currentSlide === idx
                  ? "bg-blue-500 w-8 h-3"
                  : "bg-gray-400 w-6 h-3"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestUpdates;
