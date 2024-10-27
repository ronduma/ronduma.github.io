import Link from 'next/link'

function NavLinks() {
  return (
  <div className="
    grid 
    grid-cols-3 
    mt-10
    place-items-center
    text-xl
  ">
    <Link href="/about">About</Link>
    <Link href="/experience">Experience</Link>
    <Link href="/contact">Contact</Link>
  </div>
  )
}

export default NavLinks;