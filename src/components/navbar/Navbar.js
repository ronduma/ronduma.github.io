'use client'

import Link from 'next/link';
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  else return (
    <div className="grid grid-cols-2 mt-10 mx-10 text-xl">
      <div className="flex justify-start">
        <Link href="/">
          Ron Dumalagan
        </Link>
      </div>
      <div className="flex justify-end space-x-6">
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
