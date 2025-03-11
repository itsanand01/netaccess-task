import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const logos = [
  "https://www.netaccess-india.com/wp-content/uploads/2023/08/Reap_SulphurMill.png",
  "https://www.netaccess-india.com/wp-content/uploads/2023/08/Chamundeswari.png",
  "https://www.netaccess-india.com/wp-content/uploads/2023/08/AgarwalsHospital.png",
  "https://www.netaccess-india.com/wp-content/uploads/2023/08/MaduraFinance.png",
  "https://www.netaccess-india.com/wp-content/uploads/2023/08/CK_Birla_Hil.png",
  "https://www.netaccess-india.com/wp-content/uploads/2023/08/Hatsun.png",
  "https://www.netaccess-india.com/wp-content/uploads/2023/08/PWC.png",
  "https://www.netaccess-india.com/wp-content/uploads/2024/09/is.png",
  "https://www.netaccess-india.com/wp-content/uploads/2023/08/tncsf.png",
  "https://www.netaccess-india.com/wp-content/uploads/2024/09/beissel.png",
];

const animation = { duration: 10000, easing: (t) => t };

const Clients = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: { perView: 10, spacing: 10 },
    breakpoints: {
      "(max-width: 768px)": { slides: { perView: 3, spacing: 30 } },
      "(max-width: 480px)": { slides: { perView: 2, spacing: 30 } },
    },
  });

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center pb-4">Our Clients</h1>
      <div className="w-full py-6">
        <div ref={sliderRef} className="keen-slider">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="keen-slider__slide flex justify-center border w-full border-gray-500 rounded-lg"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-20 w-48 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
