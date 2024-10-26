import Link from 'next/link'

function Navbar() {
  return (
    <div className="
      grid 
      grid-cols-3 
      mt-10
      place-items-center
      text-xl
    ">
      <Link href="/about">About</Link>
      <Link href="">Experience</Link>
      <Link href="">Contact</Link>
    </div>
  )
}

export default Navbar;