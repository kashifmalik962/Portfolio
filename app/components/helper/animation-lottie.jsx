"use client";

import React from "react";
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width = '95%' }) => {
  if (!animationPath) {
    console.warn("animationPath is missing in AnimationLottie component");
    return null;
  }

  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{ width }}
    />
  );
};

export default AnimationLottie;
