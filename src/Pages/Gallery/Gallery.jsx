import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <h2 className="text-5xl text-center font-extrabold mb-4">
        Events Gallery
      </h2>
      <p className="text-center mb-4">
        Elevate your special moments with our expert event management services.
        Let's create unforgettable experiences together
      </p>
      <div className="bg-[#F3F1EC] min-h-screen py-12">
        <div className="container mx-auto px-4 ">
          <div
            data-aos="zoom-in-up"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2000"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {images.map((image) => (
              <div
                className="max-w-md rounded overflow-hidden shadow-lg hover:shadow-2xl"
                key={image.id}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="px-6 py-4 bg-white">
                  <div className="font-semibold text-lg text-gray-800 mb-2">
                    {image.title}
                  </div>
                  <p className="text-gray-600 text-sm">
                    Date: {image.date}
                    <br />
                    Location: {image.location}
                  </p>
                  <p className="text-gray-700 mt-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
