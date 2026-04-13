import vs from "../assets/vs2.png";
import stadium from "../assets/stadium.png";


const FixturesMatch = () => {
  const matches = [
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
    },
    {
      team1: "Punjab Kings",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/PBKS.png",
      runs1: 176,
      wickets1: 6,
      overs1: 20.0,
      team2: "Royal Challengers Banglore",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs2: 178,
      wickets2: 6,
      overs2: 19.2,
      result: "Royal Challengers Banglore won by 4 wickets",
      venue: "M.Chinnaswamy Stadium, Bengaluru",
      date: "Mon, 25 Mar 24"
    },
    {
      team1: "Royal Challengers Banglore",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs1: 182,
      wickets1: 6,
      overs1: 20.0,
      team2: "Kolkata Knight Riders",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/KKR.png",
      runs2: 186,
      wickets2: 3,
      overs2: 16.5,
      result: "Kolkata Knight Riders won by 7 wickets",
      venue: "M.Chinnaswamy Stadium, Bengaluru",
      date: "Fri, 29 Mar 24"
    },
    {
      team1: "Lucknow Super Giants",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/LSG.png",
      runs1: 181,
      wickets1: 5,
      overs1: 20.0,
      team2: "Royal Challengers Banglore",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs2: 153,
      wickets2: 10,
      overs2: 19.4,
      result: "Lucknow Super Giants won by 28 runs",
      venue: "M.Chinnaswamy Stadium, Bengaluru",
      date: "Tue, 02 Apr 24"
    },
    {
      team1: "Royal Challengers Banglore",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs1: 183,
      wickets1: 3,
      overs1: 20.0,
      team2: "Rajasthan Royals",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RR.png",
      runs2: 189,
      wickets2: 4,
      overs2: 19.1,
      result: "Rajasthan Royals won by 6 wickets",
      venue: "Sawai Mansingh Stadium, Jaipur",
      date: "Sat, 06 Apr 24"
    },
    {
      team1: "Royal Challengers Banglore",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs1: 196,
      wickets1: 8,
      overs1: 20.0,
      team2: "Mumbai Indians",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/MI.png",
      runs2: 199,
      wickets2: 3,
      overs2: 15.3,
      result: "Mumbai Indians won by 7 wickets",
      venue: "Wankhede Stadium, Mumbai",
      date: "Thu, 11 Apr 24"
    },
    {
      team1: "Kolkata Knight Riders",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/KKR.png",
      runs1: 222,
      wickets1: 6,
      overs1: 20.0,
      team2: "Royal Challengers Banglore",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs2: 221,
      wickets2: 10,
      overs2: 20.0,
      result: "Kolkata Knight Riders won by 1 run",
      venue: "Eden Gardens, Kolkata",
      date: "Mon, 15 Apr 24"
    },
    {
      team1: "Royal Challengers Banglore",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs1: 206,
      wickets1: 7,
      overs1: 20.0,
      team2: "Sunrisers Hyderabad",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/SRH.png",
      runs2: 171,
      wickets2: 8,
      overs2: 20.0,
      result: "Royal Challengers Banglore won by 35 runs",
      venue: "Rajiv Gandhi International Stadium, Hyderabad",
      date: "Sun, 21 Apr 24"
    },
    {
      team1: "Royal Challengers Banglore",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs1: 206,
      wickets1: 1,
      overs1: 16.0,
      team2: "Gujrat Titans",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/GT.png?v=1",
      runs2: 200,
      wickets2: 3,
      overs2: 20.0,
      result: "Royal Challengers Banglore won by 9 wickets",
      venue: "Narendra Modi Stadium, Ahmedabad",
      date: "Sun, 28 Apr 24"
    },
    {
      team1: "Gujrat Titans",
      img1: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/GT.png?v=1",
      runs1: 147,
      wickets1: 10,
      overs1: 20.0,
      team2: "Royal Challengers Banglore",
      img2: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
      runs2: 152,
      wickets2: 6,
      overs2: 13.4,
      result: "Royal Challengers Banglore won by 4 wickets",
      venue: "M.Chinnaswamy Stadium, Bengaluru",
      date: "Sat, 04 May 24"
    },
  ];
  return (
    <div className="min-h-screen text-white bg-fixed bg-center bg-cover bg-[url('https://i.pinimg.com/736x/b9/fd/2b/b9fd2b741db0f7f435be4f04b1b576c7.jpg')] py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-body font-bold text-center mb-12 drop-shadow-lg">
          RCB&apos;s Match Fixtures
        </h1>
        <div className="space-y-6">
          {matches.map((d, index) => (
            <div key={index} className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-red-900/40 transition-all duration-300 group">
              <div className="p-4 sm:p-6">
                {/* Header: Date and Venue */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 pb-4 border-bottom border-white/10 gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-red-500 font-bold text-lg">{d.date}</p>
                    <p className="text-sm opacity-60">Match Time: 7:30 PM IST</p>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                    <img className="w-5 h-5 invert" src={stadium} alt="stadium" />
                    <p className="text-sm font-medium">{d.venue}</p>
                  </div>
                </div>

                {/* Match Content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  {/* Team 1 */}
                  <div className="flex flex-1 items-center justify-end gap-4 w-full md:w-auto">
                    <div className="text-right hidden sm:block">
                      <h3 className="font-bold text-lg">{d.team1}</h3>
                      <p className="text-2xl font-black text-white">{d.runs1}/{d.wickets1} <span className="text-xs opacity-60">({d.overs1})</span></p>
                    </div>
                    <img className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xl" src={d.img1} alt={d.team1} />
                    <div className="text-left sm:hidden flex-1">
                      <h3 className="font-bold text-base">{d.team1}</h3>
                      <p className="text-xl font-black">{d.runs1}/{d.wickets1} <span className="text-xs opacity-60">({d.overs1})</span></p>
                    </div>
                  </div>

                  {/* VS */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-red-600 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img className="w-10 h-10 sm:w-12 sm:h-12 relative z-10" src={vs} alt="vs" />
                  </div>

                  {/* Team 2 */}
                  <div className="flex flex-1 items-center justify-start gap-4 w-full md:w-auto">
                    <div className="text-right sm:hidden flex-1">
                      <h3 className="font-bold text-base">{d.team2}</h3>
                      <p className="text-xl font-black">{d.runs2}/{d.wickets2} <span className="text-xs opacity-60">({d.overs2})</span></p>
                    </div>
                    <img className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xl" src={d.img2} alt={d.team2} />
                    <div className="text-left hidden sm:block">
                      <h3 className="font-bold text-lg">{d.team2}</h3>
                      <p className="text-2xl font-black text-white">{d.runs2}/{d.wickets2} <span className="text-xs opacity-60">({d.overs2})</span></p>
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
