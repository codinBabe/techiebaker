import React from "react";
import AnimationContainer from "../utils/AnimationContainer";
import { Link } from "react-router-dom";

const NotFound = () => (
  <AnimationContainer>
    <div className="flex flex-col gap-5 items-center justify-center h-screen text-center">
      <h1 className="font-fraunces font-bold text-6xl">404</h1>
      <p className="text-lg">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-primaryOrange border-2 text-white text-sm px-5 py-3 rounded-lg"
      >
        Go back to Homepage
      </Link>
    </div>
  </AnimationContainer>
);

export default NotFound;
