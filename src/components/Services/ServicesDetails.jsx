import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const ServicesDetails = () => {
  const navigate = useNavigate();
  const services = useLoaderData();
  const { id } = useParams();
  console.log(id);
  console.log(services);
  const idInt = parseInt(id);
  console.log(idInt);

  const service = services.find((service) => service.id === idInt);
  console.log(service);

  const handleBook = () => {
    toast.success("Booked successfully");
    navigate("/");
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl px-4 md:p-0">
      <figure>
        <img src={service.image} alt="Donation" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl lg:text-3xl font-medium mb-2">
          {service.name}
        </h2>
        <p className="mb-4">{service.description}</p>
        {service.features && service.features.length > 0 && (
          <div className="features mb-4">
            <h3 className="text-xl font-semibold mb-2">Features:</h3>
            <ul className="list-disc pl-6">
              {service.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="card-actions justify-between items-center">
          <h2 className="text-red-500 text-xl font-medium">{service.price}</h2>
          <button onClick={handleBook} className="btn btn-neutral">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
