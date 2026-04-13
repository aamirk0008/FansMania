const PointsTable = () => {
    const teams = [
        {
            team: "Kolkata Knight riders",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/KKR.png",
            played: 11,
            won: 8,
            lost: 3,
            points: 16 
        },
        {
            team: "Rajasthan Royals",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RR.png",
            played: 10,
            won: 8,
            lost: 2,
            points: 16 
        },
        {
            team: "Chennai Super Kings",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/CSK.png",
            played: 11,
            won: 6,
            lost: 5,
            points: 12 
        },
        {
            team: "Sunrisers Hyderabad",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/SRH.png",
            played: 11,
            won: 6,
            lost: 5,
            points: 12
        },
        {
            team: "Lucknow Super Giants",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/LSG.png",
            played: 11,
            won: 6,
            lost: 5,
            points: 12 
        },
        {
            team: "Delhi Capitals",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/DC.png",
            played: 11,
            won: 5,
            lost: 6,
            points: 10
        },
        {
            team: "Royal Challengers Bengaluru",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png",
            played: 11,
            won: 4,
            lost: 7,
            points: 8 
        },
        {
            team: "Punjab Kings",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/PBKS.png",
            played: 11,
            won: 4,
            lost: 7,
            points: 8 
        },
        {
            team: "Mumbai Indians",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/MI.png",
            played: 12,
            won: 4,
            lost: 8,
            points: 8
        },
        {
            team: "Gujarat Titans",
            img: "https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/GT.png?v=1",
            played: 11,
            won: 4,
            lost: 7,
            points: 8 
        },
    ]
  return (
    <div className='w-full min-h-screen text-white flex flex-col py-8 bg-black/40'>
        <div className="max-w-7xl mx-auto w-full px-4">
            <h1 className='text-center py-8 text-3xl sm:text-4xl font-bold font-serif tracking-tight'>
                IPL&apos;24 Points Table
            </h1>
            
            <div className='overflow-x-auto rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm shadow-2xl'>
                <table className='w-full font-body text-left border-collapse'>
                    <thead>
                        <tr className="bg-red-700/80 text-white uppercase text-sm sm:text-base tracking-widest">
                            <th className='px-6 py-4 font-bold'>Teams</th>
                            <th className='px-6 py-4 font-bold text-center'>P</th>
                            <th className='px-6 py-4 font-bold text-center'>W</th>
                            <th className='px-6 py-4 font-bold text-center'>L</th>
                            <th className='px-6 py-4 font-bold text-center'>Pts</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {teams.map((d, index) =>(
                            <tr key={index} className={`hover:bg-red-600/30 cursor-pointer transition-colors duration-200 ${d.team.includes('Bengaluru') ? 'bg-red-900/20' : ''}`}>
                               <td className='px-6 py-4 font-semibold flex items-center gap-4 min-w-[240px]'>
                                   <span className="text-xs opacity-40 w-4">{index + 1}</span>
                                   <img className='w-10 h-10 object-contain' src={d.img} alt={d.team} />
                                   <span className="text-base sm:text-lg">{d.team}</span>
                               </td> 
                               <td className='px-6 py-4 text-center font-medium'>{d.played}</td> 
                               <td className='px-6 py-4 text-center font-medium text-green-400'>{d.won}</td> 
                               <td className='px-6 py-4 text-center font-medium text-red-400'>{d.lost}</td> 
                               <td className='px-6 py-4 text-center font-bold text-xl'>{d.points}</td> 
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="mt-8 text-center opacity-60 text-sm">
                <p>* P: Played, W: Won, L: Lost, Pts: Points</p>
            </div>
        </div>
    </div>
  )
}

export default PointsTable