"use client";

import Button from "../../ui/Button";

const AboutActions = () => {
  const downloadResume = () => {
    console.log("Resume download functionality is not implemented yet.");
  };

  return (
    <div className="flex gap-4">
      <Button onClick={downloadResume}>Download Resume</Button>
      <Button variant="primary">Contact Me</Button>
    </div>
  );
};

export default AboutActions;
