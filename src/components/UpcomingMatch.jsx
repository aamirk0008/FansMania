import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Ticket, Loader2 } from 'lucide-react';
import vs from "../assets/vs2.png";

const UpcomingMatch = () => {
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fallbackMatch = {
    team1: "Royal Challengers Bangalore",
    img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
    team2: "Kolkata Knight Riders",
    img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/KKR.png",
    date: "Saturday, 18 April 2026",
    time: "7:30 PM IST",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    category: "Match 32, T20 2026"
  };

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch('/api/matches');
        const data = await response.json();
        
        if (data.status === "success" && data.data && data.data.length > 0) {
          // Find the first match involving RCB or just the first match
          const rcbMatch = data.data.find(m => 
            m.name.toLowerCase().includes('bangalore') || 
            m.name.toLowerCase().includes('rcb')
          ) || data.data[0];

          if (rcbMatch) {
            setMatchData({
              team1: rcbMatch.teams[0],
              team2: rcbMatch.teams[1],
              img1: rcbMatch.teamInfo?.[0]?.img || fallbackMatch.img1,
              img2: rcbMatch.teamInfo?.[1]?.img || fallbackMatch.img2,
              date: new Date(rcbMatch.dateTimeGMT).toLocaleDateString('en-GB', {
                weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
              }),
              time: new Date(rcbMatch.dateTimeGMT).toLocaleTimeString('en-US', {
                hour: '2-digit', minute: '2-digit', hour12: true
              }) + " GMT",
              venue: rcbMatch.venue || fallbackMatch.venue,
              category: rcbMatch.matchType?.toUpperCase() || fallbackMatch.category,
              status: rcbMatch.status
            });
          }
        }
      } catch (err) {
        console.error("Failed to fetch live matches:", err);
        setError("Could not load live data");
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const displayMatch = matchData || fallbackMatch;

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-900/40 to-black border border-red-500/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm"
        >
          <div className="p-8 sm:p-12">
            <div className="flex flex-col items-center text-center mb-10">
              <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-4 flex items-center gap-2">
                {loading && <Loader2 className="w-3 h-3 animate-spin" />}
                {matchData ? "Live Match Info" : "Upcoming Match"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display tracking-tight uppercase text-white">
                {matchData ? displayMatch.status : "The Battle of Titans"}
              </h2>
              <p className="text-white text-sm mt-2 font-medium">{displayMatch.category}</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-20">
              {/* Team 1 */}
              <div className="flex flex-col items-center gap-4 flex-1">
                <motion.img 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  src={displayMatch.img1} 
                  alt={displayMatch.team1} 
                  referrerPolicy="no-referrer"
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-[0_0_20px_rgba(255,0,0,0.3)]"
                />
                <h3 className="text-xl font-display text-center text-white">{displayMatch.team1}</h3>
              </div>

              {/* VS */}
              <div className="flex flex-col items-center gap-2">
                <img src={vs} alt="VS" className="w-16 h-16 opacity-100" referrerPolicy="no-referrer" />
                <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-red-500 to-transparent"></div>
              </div>

              {/* Team 2 */}
              <div className="flex flex-col items-center gap-4 flex-1">
                <motion.img 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  src={displayMatch.img2} 
                  alt={displayMatch.team2} 
                  referrerPolicy="no-referrer"
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-[0_0_20px_rgba(0,100,255,0.2)]"
                />
                <h3 className="text-xl font-display text-center text-white">{displayMatch.team2}</h3>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/30">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Calendar className="w-5 h-5 text-red-500" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-red-400 font-black">Date & Time</p>
                  <p className="text-sm font-bold text-white">{displayMatch.date}</p>
                  <p className="text-xs text-white font-medium">{displayMatch.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="w-5 h-5 text-red-500" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-red-400 font-black">Venue</p>
                  <p className="text-sm font-bold text-white">{displayMatch.venue}</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-end">
                <button className="bg-white text-black hover:bg-red-600 hover:text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-sm transition-all flex items-center gap-2 group">
                  <Ticket className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  {matchData ? "Match Center" : "Book Tickets"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingMatch;
