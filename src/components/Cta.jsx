import React from "react";
import AnimationContainer from "../utils/AnimationContainer";

function Cta() {
  function sendEmail() {
    const recipientEmail = "oluwatoyinoredein@gmail.com";
    const subject = "Let's work together";
    const mailtoUrl = "mailto:" + recipientEmail + "&subject=" + subject;
    window.location.href = mailtoUrl;
  }
  return (
    <AnimationContainer>
      <div className="w-[80%] mx-auto text-center mt-20 md:mt-32">
        <h2 className="block md:hidden text-[28px] md:text-[40px] font-helvetica-medium leading-tight">
          Let us work together on your next project or product
        </h2>
        <h2 className="hidden md:block text-[28px] md:text-[40px] font-helvetica-medium leading-tight">
          Let us work together on your next <br />
          project or product
        </h2>
        <p className="my-5">
          Bringing your ideas and products from conceptualisation to reality is
          what I live for.
        </p>
        <button
          onClick={sendEmail}
          className="w-full md:w-[15%] bg-white text-primaryOrange border border-primaryOrange rounded-lg py-[14px] px-3"
        >
          Send an email
        </button>
      </div>
    </AnimationContainer>
  );
}
export default Cta;
