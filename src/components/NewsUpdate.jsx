import { motion } from 'motion/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PlayCircle } from 'lucide-react';

const NewsUpdate = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const highlights = [
    {
      href: "https://www.jiocinema.com/sports/cricket/rcb-vs-gt-highlights/3966232",
      src: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/15_min_ipl_highlights_vertical-1714311211628.jpg",
      title: "RCB vs GT",
      desc: "Clinical victory at Chinnaswamy"
    },
    {
      href: "https://www.jiocinema.com/sports/cricket/srh-vs-rcb-highlights/3959255",
      src: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/15_min_ipl_highlights_vertical_3x4-1714068031266.jpg",
      title: "SRH vs RCB",
      desc: "High scoring thriller"
    },
    {
      href: "https://www.jiocinema.com/sports/cricket/kkr-vs-rcb-highlights/3955352",
      src: "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/15_min_ipl_highlights_vertical_3x4-1713709709725.jpg",
      title: "KKR vs RCB",
      desc: "Last ball drama"
    },
    {
      href: "https://www.jiocinema.com/sports/cricket/mi-vs-rcb-highlights/3948656",
      src: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/15_min_ipl_highlights_vertical_3x4-1712858356747.jpg",
      title: "MI vs RCB",
      desc: "The Wankhede Showdown"
    },
    {
      href: "https://www.jiocinema.com/sports/cricket/rr-vs-rcb-highlights/3944841",
      src: "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/15-min_ipl_highlights_vertical_3x4-1712426016731.jpg",
      title: "RR vs RCB",
      desc: "Battle in Jaipur"
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-2">
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-xs">Season Recap</span>
            <h2 className="text-4xl sm:text-6xl font-display uppercase italic leading-none">Match <span className="text-red-600">Highlights</span></h2>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-red-500 transition-colors">
            View All Highlights
          </button>
        </div>

        <Slider {...settings} className="highlights-slider -mx-3">
          {highlights.map((item, index) => (
            <div key={index} className="px-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
                className="block group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100">
                  <PlayCircle className="w-16 h-16 text-white drop-shadow-2xl" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-display uppercase italic tracking-tight text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-white font-bold group-hover:opacity-100 transition-opacity">{item.desc}</p>
                </div>
              </motion.a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewsUpdate;
