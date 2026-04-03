import Section from "../../ui/Section";
import AboutActions from "./AboutActions";
import AboutTyping from "./AboutTyping";

const About = () => {
  return (
    <Section id="about">
      <div
        id="aboutMain"
        className="grid md:grid-cols-2 gap-10 items-center py-20"
      >
        <div id="aboutLeft">
          <p className="text-large mb-2">I&apos;m</p>
          <h1 className="text-4xl font-bold mb-4">Syed Aaquib</h1>
          <AboutTyping />
          <p className="text-gray-600 mb-4">
            I&apos;m a passionate full stack developer with experience in
            building scalable web applications.
          </p>
          <AboutActions />
        </div>
        <div id="aboutRight" className="flex justify-center">
          <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
            Profile Image
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
