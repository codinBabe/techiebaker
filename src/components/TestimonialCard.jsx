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
      <p>{testimonials[currentIndex].content}</p>
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
      <div className="flex items-center gap-6 justify-end mt-4">
        <button onClick={handlePrev}>
          <img src={ArrowLeft} alt="icon" />
        </button>
        <button onClick={handleNext}>
          <img src={ArrowRight} alt="icon" />
        </button>
      </div>
    </>
  );
}
