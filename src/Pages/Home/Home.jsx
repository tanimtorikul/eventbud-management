import React from "react";
import Banner from "./Banner";
import Services from "../../components/Services/Services";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div className="">
      <Banner></Banner>
      <h2 className='mt-24 text-4xl text-center font-bold mb-12'>Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
      {services.map((service) => (
        <Services service={service}></Services>
      ))}
      </div>
    </div>
  );
};

export default Home;
