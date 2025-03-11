import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../Image-slider/slider.css"

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img src="\assets\big-buildings.jpg" alt="Slide 1" className="w-full object-contain  " />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src="\assets\beautiful-tall-buildings-red-sky.jpg" alt="Slide 2" className
            ="w-full  object-contain  " />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src="\assets\new-york-view-with-empire-state-building.jpg" alt="Slide 3" className="
            w-full object-contain " />
          </div>
          
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {Array.from(
            { length: instanceRef.current.track.details.slides.length },
            (_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`dot${currentSlide === idx ? " active" : ""}`}
              ></button>
            )
          )}
        </div>
      )}
    </>
  );
};

const Arrow = ({ left, onClick, disabled }) => {
  const disabledClass = disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={onClick}
      className={`arrow ${left ? "arrow--left" : "arrow--right"}${disabledClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
};

export default ImageSlider;
