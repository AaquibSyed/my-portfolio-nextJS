import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b shadow-sm">
      <div className="max-w-6xl mx-auto p-4 flex justify-between">
        <h1 className="font-bold text-xl">Aaquib Portfolio</h1>
      </div>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
