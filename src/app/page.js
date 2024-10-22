// components
import HeroBanner from '@/components/home/HeroBanner';
import NavLinks from '@/components/home/NavLinks';
import Picture from '@/components/home/Picture';

function Home() {
  return (
    <div className="grid sm:grid-cols-2 h-screen place-items-center">
      <div>
        <HeroBanner/>
        <NavLinks/>
      </div>
      <div>
        <Picture/>
      </div>
    </div>
  )
}

export default Home;