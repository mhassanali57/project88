import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <ul className="container mx-auto flex flex-col md:flex-row justify-center gap-6 px-6 py-4 font-medium">
        <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
        <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
