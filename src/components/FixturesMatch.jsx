import { useState, useEffect } from 'react';
import vs from "../assets/vs2.png";
import stadium from "../assets/stadium.png";
import { Loader2 } from 'lucide-react';

const FixturesMatch = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fallbackMatches = [
    {
      team1: "Royal Challengers Banglore",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs1: 173,
      wickets1: 6,
      overs1: 20.0,
      team2: "Chennai Super Kings",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/CSK.png",
      runs2: 176,
      wickets2: 4,
      overs2: 18.4,
      result: "Chennai Super Kings won by 6 wickets",
      venue: "MA Chidambaram Stadium, Chennai",
      date: "Fri, 22 Mar 24"
    }
  ];

  useEffect(() => {
    const fetchIPLFixtures = async () => {
      try {
        const response = await fetch('/api/ipl-fixtures');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.reason || errorData.error || `HTTP ${response.status}`);
        }
        const result = await response.json();
        
        if (result.status === "success" && result.data) {
          const mappedMatches = result.data.map(m => {
            return {
              team1: m.teams[0],
              img1: m.teamInfo?.[0]?.img || "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
              runs1: m.score?.[0]?.r || 0,
              wickets1: m.score?.[0]?.w || 0,
              overs1: m.score?.[0]?.o || 0,
              team2: m.teams[1],
              img2: m.teamInfo?.[1]?.img || "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/KKR.png",
              runs2: m.score?.[1]?.r || 0,
              wickets2: m.score?.[1]?.w || 0,
              overs2: m.score?.[1]?.o || 0,
              result: m.status,
              venue: m.venue || "TBD Stadium",
              date: new Date(m.dateTimeGMT).toLocaleDateString('en-GB', {
                weekday: 'short', day: 'numeric', month: 'short', year: '2-digit'
              })
            };
          });
          setMatches(mappedMatches.length > 0 ? mappedMatches : fallbackMatches);
        }
      } catch (err) {
        console.error("Failed to fetch IPL fixtures:", err);
        setError(err.message || "Could not load live fixtures");
        setMatches(fallbackMatches);
      } finally {
        setLoading(false);
      }
    };

    fetchIPLFixtures();
  }, []);

  return (
    <div className="min-h-screen text-white bg-fixed bg-center bg-cover bg-[url('https://i.pinimg.com/736x/b9/fd/2b/b9fd2b741db0f7f435be4f04b1b576c7.jpg')] py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-body font-bold text-center drop-shadow-lg mb-2">
            IPL Match Fixtures
          </h1>
          {loading && (
            <div className="flex items-center gap-2 text-red-500 font-bold animate-pulse">
              <Loader2 className="w-4 h-4 animate-spin" />
              Fetching Live Scores...
            </div>
          )}
          {error && (
            <div className="text-red-500 bg-black/40 px-4 py-2 rounded-lg mt-2 text-sm border border-red-500/30">
              Error: {error}. Showing fallback data.
            </div>
          )}
        </div>

        <div className="space-y-6">
          {matches.map((d, index) => (
            <div key={index} className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-red-900/40 transition-all duration-300 group">
              <div className="p-4 sm:p-6">
                {/* Header: Date and Venue */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 pb-4 border-b border-white/10 gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-red-500 font-bold text-lg">{d.date}</p>
                    <p className="text-sm opacity-60">Match Time: 7:30 PM IST</p>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                    <img className="w-5 h-5 invert" src={stadium} alt="stadium" referrerPolicy="no-referrer" />
                    <p className="text-sm font-medium">{d.venue}</p>
                  </div>
                </div>

                {/* Match Content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  {/* Team 1 */}
                  <div className="flex flex-1 items-center justify-end gap-4 w-full md:w-auto">
                    <div className="text-right hidden sm:block">
                      <h3 className="font-bold text-lg">{d.team1}</h3>
                      <p className="text-2xl font-black text-white">
                        {d.runs1}{d.wickets1 ? `/${d.wickets1}` : ''} 
                        <span className="text-xs opacity-60 ml-2">({d.overs1})</span>
                      </p>
                    </div>
                    <img className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xl" src={d.img1} alt={d.team1} referrerPolicy="no-referrer" />
                    <div className="text-left sm:hidden flex-1">
                      <h3 className="font-bold text-base">{d.team1}</h3>
                      <p className="text-xl font-black">
                        {d.runs1}{d.wickets1 ? `/${d.wickets1}` : ''} 
                        <span className="text-xs opacity-60 ml-2">({d.overs1})</span>
                      </p>
                    </div>
                  </div>

                  {/* VS */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-red-600 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img className="w-10 h-10 sm:w-12 sm:h-12 relative z-10" src={vs} alt="vs" referrerPolicy="no-referrer" />
                  </div>

                  {/* Team 2 */}
                  <div className="flex flex-1 items-center justify-start gap-4 w-full md:w-auto">
                    <div className="text-right sm:hidden flex-1">
                      <h3 className="font-bold text-base">{d.team2}</h3>
                      <p className="text-xl font-black">
                        {d.runs2}{d.wickets2 ? `/${d.wickets2}` : ''} 
                        <span className="text-xs opacity-60 ml-2">({d.overs2})</span>
                      </p>
                    </div>
                    <img className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xl" src={d.img2} alt={d.team2} referrerPolicy="no-referrer" />
                    <div className="text-left hidden sm:block">
                      <h3 className="font-bold text-lg">{d.team2}</h3>
                      <p className="text-2xl font-black text-white">
                        {d.runs2}{d.wickets2 ? `/${d.wickets2}` : ''} 
                        <span className="text-xs opacity-60 ml-2">({d.overs2})</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Result Footer */}
                <div className="mt-8 pt-4 border-t border-white/10 text-center">
                  <p className="text-lg font-bold text-red-500 tracking-wide uppercase">{d.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FixturesMatch;
