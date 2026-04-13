import { motion } from 'motion/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, Zap } from 'lucide-react';

const PlayerStats = () => {
  const players = [
    {
      name: "Virat Kohli",
      role: "Batter",
      stats: { runs: "741", avg: "61.7", sr: "154.7" },
      image: "https://www.royalchallengers.com/PRRCB01/public/2024-03/vk%20%281%29_0_24_11zon.png",
      color: "from-red-600 to-black"
    },
    {
      name: "Faf du Plessis",
      role: "Batter",
      stats: { runs: "438", sr: "161.0", avg: "29.2" },
      image: "https://www.royalchallengers.com/PRRCB01/public/2024-03/faf.png",
      color: "from-red-600 to-black"
    },
    {
      name: "Dinesh Karthik",
      role: "Wicketkeeper / Batter",
      stats: { runs: "326", sr: "187.4", avg: "36.2" },
      image: "https://www.royalchallengers.com/PRRCB01/public/2024-03/dk_0.png",
      color: "from-red-600 to-black"
    },
    {
      name: "Rajat Patidar",
      role: "Batter",
      stats: { runs: "395", sr: "177.1", avg: "30.4" },
      image: "https://www.royalchallengers.com/PRRCB01/public/2024-03/rajat.png",
      color: "from-red-600 to-black"
    },
    {
      name: "Will Jacks",
      role: "All-Rounder",
      stats: { runs: "230", sr: "175.6", matches: "8" },
      image: "https://www.royalchallengers.com/PRRCB01/public/2024-03/jacks_0.png",
      color: "from-red-600 to-black"
    },
    {
      name: "Cameron Green",
      role: "All-Rounder",
      stats: { runs: "255", sr: "143.3", wickets: "10" },
      image: "https://www.royalchallengers.com/PRRCB01/public/2024-03/green%20_0.png",
      color: "from-red-600 to-black"
    },
    {
      name: "Glenn Maxwell",
      role: "All-Rounder",
      stats: { runs: "52", sr: "120.9", wickets: "6" },
      image: "https://www.royalchallengers.com/PRRCB01/public/2024-03/max_0.png",
      color: "from-red-600 to-black"
    },
    {
      name: "Mohammed Siraj",
      role: "Bowler",
      stats: { wickets: "15", eco: "9.18", best: "3/43" },
      image: "https://www.royalchallengers.com/PRRCB01/public/2024-03/siraj_0.png",
      color: "from-red-600 to-black"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerMode: false }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerMode: false }
      }
    ]
  };

  return (
    <section className="py-24 bg-rcb-gradient relative overflow-hidden">
      {/* Decorative Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[15vw] font-display text-white/5 whitespace-nowrap select-none pointer-events-none uppercase italic">
        The Challengers
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-2">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-xs">Elite Squad</span>
            <h2 className="text-4xl sm:text-6xl font-display uppercase italic leading-none">Player <span className="text-red-600">Profiles</span></h2>
          </div>
          <p className="max-w-md text-white text-sm font-medium">
            Meet the warriors who carry the legacy of Bengaluru. A blend of experience, raw power, and tactical brilliance.
          </p>
        </div>

        <Slider {...settings} className="player-slider -mx-4">
          {players.map((player, index) => (
            <div key={index} className="px-4 pb-12">
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative group bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 backdrop-blur-sm"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-b ${player.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Player Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={player.image} 
                    alt={player.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain object-bottom transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Stats Overlay */}
                  <div className="absolute top-6 right-6 flex flex-col gap-3">
                    {Object.entries(player.stats).map(([key, value], i) => (
                      <div key={i} className="bg-black border border-white/40 px-3 py-1 rounded-full text-center shadow-lg">
                        <p className="text-[8px] uppercase tracking-widest text-white font-black">{key}</p>
                        <p className="text-xs font-black text-red-500">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-8 relative">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-3 h-3 text-red-500 fill-red-500" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-red-400">{player.role}</span>
                  </div>
                  <h3 className="text-2xl font-display text-gray-100 uppercase tracking-tight group-hover:text-red-500 transition-colors">{player.name}</h3>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <button className="text-[10px] uppercase tracking-widest font-black border-b-2 border-red-600 pb-1 text-red-300 hover:text-red-500 transition-colors">
                      Full Statistics
                    </button>
                    <Zap className="w-5 h-5 text-white/50 group-hover:text-red-500 transition-colors" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PlayerStats;
