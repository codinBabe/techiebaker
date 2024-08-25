import testimonials from "../utils/Testimonials";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";
import { useState } from "react";
export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrev() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <>
      <h3 className="mb-2 text-sm">{testimonials[currentIndex].org}</h3>
      <p className="md:text-2xl">{testimonials[currentIndex].content}</p>
      <div className="flex items-center gap-2 mt-4">
        <div className="rounded-full w-12 h-12">
          <img src={""} alt="icon" />
        </div>
        <div className="">
          <p className="text-base text-primaryBlack font-helvetica-medium">
            {testimonials[currentIndex].author}
          </p>
          <p className="text-sm text-black100">
            {testimonials[currentIndex].company}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6 mt-4 absolute top-0 right-4 transform">
        <button onClick={handlePrev}>
          <img src={ArrowLeft} alt="icon" className="w-4 h-4" />
        </button>
        <button onClick={handleNext}>
          <img src={ArrowRight} alt="icon" className="w-4 h-4" />
        </button>
      </div>
    </>
  );
}
