import { motion } from 'motion/react';

const Brands = () => {
  const partners = {
    main: {
      name: "Qatar Airways",
      src: "https://www.royalchallengers.com/PRRCB01/public/2023-03/Qatar-Airways_30.jpg"
    },
    principal: [
      "https://www.royalchallengers.com/PRRCB01/public/2023-03/KEI%20Wires%20%26%20Cables.png",
      "https://www.royalchallengers.com/PRRCB01/public/2024-03/DELHIVERY.png",
      "https://www.royalchallengers.com/PRRCB01/public/2021-04/JioDot_RGB_RED.png"
    ],
    associate: [
      "https://www.royalchallengers.com/PRRCB01/public/2021-04/PUMA.png",
      "https://www.royalchallengers.com/PRRCB01/public/2022-03/8%20-%20boat.png",
      "https://www.royalchallengers.com/PRRCB01/public/2024-03/CONFIRMTKT.png",
      "https://www.royalchallengers.com/PRRCB01/public/2023-03/Nippon%20Paint.png"
    ]
  };

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-black uppercase tracking-[0.3em] text-xs">Our Network</span>
          <h2 className="text-3xl sm:text-4xl font-display uppercase italic mt-2">Brand <span className="text-red-600">Partners</span></h2>
        </div>
        
        <div className="space-y-20">
          {/* Main Partner */}
          <div className="flex flex-col items-center">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 mb-8 text-center">Main Principal Partner</p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-3xl shadow-2xl"
            >
              <img className="w-48 sm:w-64 lg:w-80 object-contain" src={partners.main.src} alt={partners.main.name} referrerPolicy="no-referrer" />
            </motion.div>
          </div>

          {/* Principal Partners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {partners.principal.map((src, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors flex items-center justify-center h-32"
              >
                <img className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-500" src={src} alt="Partner" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>

          {/* Associate Partners */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 items-center opacity-50 hover:opacity-100 transition-opacity duration-500">
            {partners.associate.map((src, i) => (
              <img key={i} className="h-8 sm:h-12 object-contain grayscale" src={src} alt="Partner" referrerPolicy="no-referrer" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
