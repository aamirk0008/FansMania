import { FaAnglesRight } from "react-icons/fa6";
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import rcb1 from "../assets/rcb3.jpg";
import rcb2 from "../assets/rcb4.jpg";
import rcb3 from "../assets/rcb6.jpg";
import rcb4 from "../assets/rcb9.jpg";
import rcb5 from "../assets/rcb22.jpg";

import 'swiper/css';
import 'swiper/css/effect-creative';
import './Front.css';
import { EffectCreative, Autoplay } from 'swiper/modules';

const FrontPage = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 skew-x-12 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='w-full lg:w-1/2 flex flex-col gap-8'
          >
            <div className="space-y-4">
              <span className="text-red-600 font-black uppercase tracking-[0.4em] text-sm">Join the 12th Man Army</span>
              <h1 className='text-4xl sm:text-6xl lg:text-7xl font-display leading-[0.9] uppercase italic'>
                More than a team, <br />
                <span className="text-red-600">It&apos;s a legacy.</span>
              </h1>
            </div>
            
            <p className='text-lg sm:text-xl text-white leading-relaxed font-medium'>
              Dive into the vibrant world of Royal Challengers Bangalore. Join millions of fans worldwide fueled by the dream of victory and the thrill of the game. Experience the passion that makes us the heartbeat of Bengaluru.
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <button className='bg-red-600 hover:bg-red-700 text-white px-5 py-4 rounded-2xl font-black uppercase tracking-widest text-lg transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-red-600/30 flex items-center justify-center gap-3 group'>
                Get Exclusive Swag
                <FaAnglesRight className='group-hover:translate-x-2 transition-transform'/>
              </button>
              <button className='bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-4 rounded-2xl font-black uppercase tracking-widest text-lg transition-all'>
                View Fan Gallery
              </button>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-white/5">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/fan${i}/100/100`} referrerPolicy="no-referrer" className="w-12 h-12 rounded-full border-4 border-[#0a0a0a]" alt="fan" />
                ))}
              </div>
              <p className="text-sm text-red-100 font-bold">Join <span className="text-white font-black">10M+</span> fans worldwide</p>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className='w-full lg:w-1/2'
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-red-600/20 rounded-[2.5rem] -z-10 rotate-3"></div>
              <div className="absolute -inset-4 border border-white/10 rounded-[2.5rem] -z-10 -rotate-3"></div>
              
              <Swiper
                grabCursor={true}
                effect={'creative'}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                creativeEffect={{
                  prev: { shadow: true, translate: ['-120%', 0, -500] },
                  next: { shadow: true, translate: ['120%', 0, -500] },
                }}
                modules={[EffectCreative, Autoplay]}
                className="w-full aspect-[4/5] sm:aspect-square rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]"
              >
                {[rcb1, rcb2, rcb3, rcb4, rcb5].map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} alt={`RCB Scene ${i+1}`} className='w-full h-full object-cover' />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-red-600 p-6 rounded-3xl shadow-2xl rotate-12 hidden sm:block">
                <p className="text-white font-display text-4xl leading-none uppercase">Play<br/>Bold</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FrontPage;