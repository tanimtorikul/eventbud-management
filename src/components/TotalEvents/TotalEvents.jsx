
import CountUp from "react-countup";

const TotalEvents = () => {
  return (
    <div className="px-4 md:px-0">
      <div className="flex flex-wrap bg-red-400 min-h-[300px] justify-center items-center rounded-lg text-white text-center">
        <div className="w-1/2 md:w-1/4 px-4 mb-4">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            <CountUp end={105} duration={5} separator="," />+
          </div>
          <p className="text-lg sm:text-xl">Total Clients</p>
        </div>
        <div className="w-1/2 md:w-1/4 px-4 mb-4">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            <CountUp end={35} duration={5} separator="," />+
          </div>
          <p className="text-lg sm:text-xl">Active Clients</p>
        </div>
        <div className="w-1/2 md:w-1/4 px-4 mb-4">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            <CountUp end={12} duration={5} separator="," />+
          </div>
          <p className="text-lg sm:text-xl">Projects Completed</p>
        </div>
        <div className="w-1/2 md:w-1/4 px-4 mb-4">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            <CountUp end={24} duration={5} separator="," />+
          </div>
          <p className="text-lg sm:text-xl">Ongoing Projects</p>
        </div>
      </div>
    </div>
  );
};

export default TotalEvents;
