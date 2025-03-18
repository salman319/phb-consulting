import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Robert Harris, Director of Operations, Siemens",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEayWq62cOGgg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705267110090?e=2147483647&v=beta&t=qowsDb2v6hibH7wM0vZN7ohONcPaD8rmzGNosJ0OCoU",
    text: "PHB Consulting's insights helped us understand the key drivers behind our team’s performance. Their data-driven approach and focus on behavioral trends allowed us to make smarter decisions and improve our internal processes.",
  },
  {
    name: "Jessica Clarke, Director of Financial Operations, Bank of America",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGNNRn_D2Iv7w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517706994361?e=2147483647&v=beta&t=TX3FaJrEI7lhwsa2ltEfNm_zrOtgHa45Cti1ecIP7fk",
    text: "The strategic approach provided by PHB Consulting allowed us to align our resources more effectively. Their blend of data analysis and technical expertise helped us navigate a critical period of change.",
  },
  {
    name: "Karen Mitchell, Director of Human Resources, Ford Motor Company",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFG7LGtjRWbcA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696091905001?e=2147483647&v=beta&t=k3zGPh4zEYtqMgK6u4NFt3fNEmGpPysrG8zBqsTD0kc",
    text: "PHB’s HR consulting helped us identify the root causes of employee turnover and improve retention strategies. Their focus on behavioral data was key to creating a more engaged and productive workforce.",
  },
  {
    name: "Alex Moore, Director of IT Services, Dell Technologies",
    image: "https://cdn.prod.website-files.com/635154aa7d0a29a9ed041ba2/64ff673ecbf9ac171ea9e82f_AlexMoore-1000px%20(1)%20Medium.jpeg",
    text: "By analyzing our data and combining it with technical solutions, PHB Consulting helped us identify operational inefficiencies that led to significant improvements in productivity.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="">
      <div className="container mx-auto text-center">
        <p className="font-semibold text-sm text-gray-400 uppercase">Leaders Share Insights</p>
        <h1 className="text-2xl md:text-4xl mt-1 mb-5 text-white">Executive Testimonials</h1>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 5000 }}
          className="w-full md:w-2/3 mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 rounded-lg text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-300"
                />
                <p className="text-white text-lg italic mx-5">{testimonial.text}</p>
                <h4 className="text-xl font-bold text-white mt-3 mx-5">
                  {testimonial.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
