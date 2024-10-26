// components
import HeroBanner from '@/components/home/HeroBanner';
import Navbar from '@/components/home/Navbar';
import Picture from '@/components/home/Picture';

function Home() {
  return (
    <div className="grid sm:grid-cols-2 h-screen place-items-center xl:mx-40 2xl:mx-96">
      <div>
        <HeroBanner/>
        <Navbar/>
      </div>
      <div>
        <Picture/>
      </div>
    </div>
  )
}

export default Home;