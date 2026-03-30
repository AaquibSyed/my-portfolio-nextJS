import Section from "@/src/components/ui/Section";

export default function Home() {
  return (
    <div>
      <Section id="about">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p>I am a frontend developer...</p>
      </Section>

      <Section id="skills">
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
      </Section>

      <Section id="projects">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
      </Section>

      <Section id="contact">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
      </Section>
    </div>
  );
}
