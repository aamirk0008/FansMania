import vs from "../assets/vs2.png";

const MyCard = () => {
  return (
    <div className="w-[85%] bg-blue-600 flex  items-center flex-col mx-auto font-body">
      <div className=" flex  items-center justify-around w-full">
        <div>
          <h3>Date:</h3>
          <h2>Time:</h2>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-1">
            <h1 className="text-2xl font-semibold">Royal Challenger Banglore</h1>
            <img className="w-16" src="https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/RCB.png" alt="" />
            <h2 className="text-2xl font-bold">186/7</h2>
          </div>
          <div>
          <img className="w-12" src={vs} alt="" />

          </div>
          <div className="flex items-center gap-1">
            <h2 className="text-2xl font-bold">199/2</h2>
            <img className="w-16" src="https://feeds-100mb.s3-ap-southeast-1.amazonaws.com/teamLogos/CSK.png" alt="" />
            <h1 className="text-2xl font-semibold">Chennai Super Kings</h1>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <h2>Venue:</h2>
        </div>
      </div>
      <div>
        <h2>Results</h2>
      </div>
    </div>
  );
};

export default MyCard;
