import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

const Events = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="mt-24 mb-12">
      <h2 className="text-2xl md:text-5xl text-center font-bold mb-10">
        Read trusted reviews from our customers
      </h2>
      <Swiper
        modules={[EffectFlip, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ delay: 5000 }} 
        effect={'flip'}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-blue-500 p-4 rounded-lg h-[300px] shadow-lg">
              <div className="text-white text-center mb-4">
                <h3 className="text-2xl md:text-3xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-300 ">{testimonial.title}</p>
              </div>
              <p className="text-white text-center text-lg mb-4">
                {testimonial.testimonial}
              </p>
              <div className="flex flex-col md:flex-row justify-around">
                <div className="md:w-1/2">
                  <p className="text-red-300">
                    Event Date: {testimonial.event_date}
                  </p>
                </div>
                <div className="md:w-1/2 text-right">
                  <p className="text-red-400">
                    Rating: {testimonial.rating}/5
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Events;
