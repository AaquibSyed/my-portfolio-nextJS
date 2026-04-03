"use client";

import { TypeAnimation } from "react-type-animation";

const AboutTyping = () => {
  return (
    <div className="text-2xl text-gray-600 mb-4">
      I am {""}
      <TypeAnimation
        sequence={[
          "Software engineer",
          2000,
          "Frontend developer",
          2000,
          "Full stack developer",
          2000,
          "Computer Science Engineer",
          2000,
          "Lifelong learner",
          2000,
          "Passionate tech enthusiast",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-primary font-semibold"
      />
    </div>
  );
};

export default AboutTyping;
