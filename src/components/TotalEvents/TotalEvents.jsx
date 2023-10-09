import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TotalEvents = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="text-center">
      <h2 className="text-4xl mb-4 font-bold">
        Numbers That Define Our Success
      </h2>
      <p className="text-lg mb-4">
      Discover the quantifiable results of our unwavering commitment to excellence. These numbers reflect <br /> our journey towards making a meaningful impact on clients and projects
      </p>
      </div>
      <div
        className="px-4 md:px-0"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <div className="flex flex-wrap bg-[#11C0B4] min-h-[300px] justify-center items-center rounded-lg text-white text-center">
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
    </div>
  );
};

export default TotalEvents;
