import { motion } from 'motion/react';
import Carousel from 'react-bootstrap/Carousel';
import rcb4 from "../assets/rcb4.jpg";

const CarouselSlide = () => {
  const slides = [
    { 
      src: rcb4, 
      title: "Kohli's Masterclass", 
      desc: "The King reaches a historic milestone with 100 fifty-plus scores in T20 cricket. A true legend of the game.",
      accent: "The Milestone"
    },
    { 
      src: 'https://www.royalchallengers.com/PRRCB01/public/2024-05/Arjun406_1003.jpg', 
      title: 'Play Bold', 
      desc: 'Experience the raw intensity and passion as the Challengers fight for every run.',
      accent: "The Spirit"
    },
    { 
      src: 'https://www.royalchallengers.com/PRRCB01/public/2024-05/Arjun406_0551.jpg', 
      title: '12th Man Army', 
      desc: 'The loudest roar in the world. Our fans are our heartbeat at the Chinnaswamy.',
      accent: "The Support"
    },
    { 
      src: 'https://www.royalchallengers.com/PRRCB01/public/2024-05/Arjun406_1404.jpg', 
      title: 'Victory Roar', 
      desc: 'Celebrating moments of pure joy and hard-earned triumphs on the field.',
      accent: "The Glory"
    }
  ];

  return (
    <section className='w-full overflow-hidden'>
      <Carousel fade interval={5000} indicators={true} controls={true} className="main-hero-carousel">
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            <div className="relative w-full h-[60vh] sm:h-[80vh] lg:h-screen">
              <img className='w-full h-full object-cover' src={slide.src} alt={slide.title} referrerPolicy="no-referrer" />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              <div className="absolute inset-0 flex items-center px-6 sm:px-16 lg:px-24">
                <div className="max-w-3xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 mb-4"
                  >
                    <div className="w-12 h-[2px] bg-red-600"></div>
                    <span className="text-red-500 font-black uppercase tracking-[0.4em] text-xs sm:text-sm">{slide.accent}</span>
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className='text-5xl sm:text-7xl lg:text-9xl font-display uppercase italic leading-[0.85] mb-6 drop-shadow-2xl'
                  >
                    {slide.title.split(' ').map((word, idx) => (
                      <span key={idx} className={idx % 2 !== 0 ? 'text-red-600' : 'text-white'}>
                        {word}{' '}
                      </span>
                    ))}
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className='text-base sm:text-lg lg:text-xl text-white/90 max-w-xl font-light leading-relaxed mb-10'
                  >
                    {slide.desc}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap gap-4"
                  >
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 shadow-xl shadow-red-600/20">
                      Latest News
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all border border-white/10">
                      Match Center
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  )
}

export default CarouselSlide;