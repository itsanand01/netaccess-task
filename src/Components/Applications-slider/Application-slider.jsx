import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState, useEffect } from "react"

function ApplicationSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 15,
    },
    loop: true, 
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 3000)

    return () => clearInterval(interval)
  }, [instanceRef])

  const slides = [
    {
      image: "https://www.netaccess-india.com/wp-content/uploads/2023/08/Agriculture.jpg",
      title: "Field Force Management Software - Agriculture",
      description: "The ultimate software solution for planning the required workforce, attendance management, activity logging, generating sales reports, and mapping farms region-wise. Boost your agriculture business throughput."
    },
    {
      image: "https://www.netaccess-india.com/wp-content/uploads/2023/08/Gate-management-system.jpg",
      title: "Healthcare Management System",
      description: "Efficiently manage patient records, appointments, billing, and reporting. Enhances productivity and accuracy in healthcare services."
    },
    {
      image: "https://www.netaccess-india.com/wp-content/uploads/2023/08/Lease-management-software.jpg",
      title: "Education ERP System",
      description: "Complete solution for student management, attendance, online assessments, grading, and fee processing. Improve your institution’s efficiency."
    },
    {
        image: "https://www.netaccess-india.com/wp-content/uploads/2023/08/Lease-management-software.jpg",
        title: "Education ERP System",
        description: "Complete solution for student management, attendance, online assessments, grading, and fee processing. Improve your institution’s efficiency."
      },
  ]

  return (
    
    <div className="relative w-full px-52 py-10">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="keen-slider__slide w-full flex flex-col items-center text-center p-4 border border-gray-300 rounded-lg shadow-lg"
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-52 object-cover rounded-md transition-transform duration-500 ease-out hover:scale-110" />
            <h1 className="text-2xl font-bold mt-4 mb-2">{slide.title}</h1>
            <p className="text-gray-700">{slide.description}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute top-1/2 left-40 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full"
      >
        <span>&#8592;</span>
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute top-1/2 right-40 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full"
      >
        <span>&#8594;</span>
      </button>

      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: slides.length }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`rounded-full ${currentSlide === idx ? 'bg-blue-500 w-8 h-3' : 'bg-gray-400 w-6 h-3'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ApplicationSlider;
