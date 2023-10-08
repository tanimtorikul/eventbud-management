import React from "react";
import Banner from "./Banner";
import Services from "../../components/Services/Services";
import { useLoaderData } from "react-router-dom";
import Events from "../../components/Events/Events";
import TotalEvents from "../../components/TotalEvents/TotalEvents";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div className="">
      <Banner></Banner>
      <h2 className='mt-24 text-5xl text-center font-bold mb-4'>Our Services</h2>
      <p className="text-center text-lg mb-12">We make your events smart & impactful by personalised event management services
</p>
      <div className="grid md:grid-cols-3 gap-6">
      {services.map((service) => (
        <Services service={service}></Services>
      ))}
      </div>
      <h2 className='mt-24 text-5xl text-center font-bold mb-4'>Our Upcoming Events
</h2>
      <p className="text-center text-lg mb-12">We make your events smart & impactful by personalised event management services
</p>
      <div>
        <Events></Events>
      </div>
      <div>
        <TotalEvents></TotalEvents>
      </div>
    </div>
  );
};

export default Home;
