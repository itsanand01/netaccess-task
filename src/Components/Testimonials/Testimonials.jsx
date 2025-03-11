import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { useState, useEffect } from "react";

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
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
        "https://www.nicepng.com/png/detail/285-2854668_dr-minnoch-quote-mark-quotation-mark.png",
      title: "Great support from the Net Access team to help me learn to use the software.",
      description:
        "Seshan Pathra"
    },
    {
        image:
          "https://www.nicepng.com/png/detail/285-2854668_dr-minnoch-quote-mark-quotation-mark.png",
        title: "Great support from the Net Access team to help me learn to use the software.",
        description:
          "Seshan Pathra"
      },
      {
        image:
          "https://www.nicepng.com/png/detail/285-2854668_dr-minnoch-quote-mark-quotation-mark.png",
        title: "Great support from the Net Access team to help me learn to use the software.",
        description:
          "Seshan Pathra"
      },
      {
        image:
          "https://www.nicepng.com/png/detail/285-2854668_dr-minnoch-quote-mark-quotation-mark.png",
        title: "Great support from the Net Access team to help me learn to use the software.",
        description:
          "Seshan Pathra"
      },
      {
        image:
          "https://www.nicepng.com/png/detail/285-2854668_dr-minnoch-quote-mark-quotation-mark.png",
        title: "Great support from the Net Access team to help me learn to use the software.",
        description:
          "Seshan Pathra"
      },
     

  ];
  return (
    <div className="bg-sky-50">
      <h1 className="text-center font-bold text-4xl pt-10">Testimonials</h1>
      <div className="grid grid-cols-2 px-50 py-10">
        <div>
          <img
            src="//www.netaccess-india.com/wp-content/uploads/2023/08/customer.jpg"
            alt="image"
            className=""
          />
        </div>
        <div className="relative w-full  p-10 bg-white">
          <div ref={sliderRef} className="keen-slider ">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="keen-slider__slide w-full flex flex-col items-center text-center p-4  rounded-lg shadow-lg"
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-20 bg-transparent transition-transform duration-500 ease-out hover:scale-110"
                />
                <h1 className="text-gray-700 mt-4">{slide.title}</h1>
                <p className="text-2xl font-bold mt-16 mb-2">{slide.description}</p>
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
      </div>
    </div>
  );
}

export default Testimonials;
