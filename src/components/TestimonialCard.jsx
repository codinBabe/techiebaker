import testimonials from "../utils/Testimonials";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";
import { useState } from "react";

export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <h3 className="mb-2 text-sm uppercase">{currentTestimonial.org}</h3>
      <p className="md:text-2xl">{currentTestimonial.content}</p>
      <div className="flex items-center gap-2 mt-4">
        <div className="rounded-full w-12 h-12 overflow-hidden">
          <img
            src={currentTestimonial.src}
            alt={currentTestimonial.author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-base text-primaryBlack font-helvetica-medium">
            {currentTestimonial.author}
          </p>
          <p className="text-sm text-black100">{currentTestimonial.company}</p>
        </div>
      </div>
      <div className="flex items-center gap-6 mt-4 absolute top-0 right-4 transform">
        <button onClick={handlePrev} aria-label="Previous testimonial">
          <img src={ArrowLeft} alt="Previous" className="w-4 h-4" />
        </button>
        <button onClick={handleNext} aria-label="Next testimonial">
          <img src={ArrowRight} alt="Next" className="w-4 h-4" />
        </button>
      </div>
    </>
  );
}
