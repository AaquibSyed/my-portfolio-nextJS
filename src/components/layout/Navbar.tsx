import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full border-b backdrop-blur bg-white/80 text-black z-50">
      <div className="max-w-6xl  mx-auto px-4 py-4 sm: px-16 md:px-[90px] lg:px-[120px] xl:px-[160px] flex justify-between items-center">
        <h1 className="font-bold text-xl ">Aaquib Portfolio</h1>

        <div className="flex gap-6">
          <Link href="#about">Home</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
