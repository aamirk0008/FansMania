import FrontPage from './FrontPage'
import CarouselSlide from './CarouselSlide'
import PlayerStats from './PlayerStats'
import NewsUpdate from './NewsUpdate'
import Brands from './Brands'
import UpcomingMatch from './UpcomingMatch'

const Home = () => {
  return (
    <main className='bg-[#0a0a0a] min-h-screen'>
      {/* Hero Section */}
      <CarouselSlide/>
      
      {/* Next Match Highlight */}
      <UpcomingMatch />

      {/* Fan Zone / Intro */}
      <FrontPage/>

      {/* Player Showcase */}
      <PlayerStats/>

      {/* Match Highlights / News */}
      <NewsUpdate/>

      {/* Partner Brands */}
      <Brands/>
    </main>
  )
}

export default Home