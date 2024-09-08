// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { IoStarSharp } from "react-icons/io5";


const ResponsiveSwiper = () => {

  const reviews = [
    {
      stars: 5,
      reviewText: "Prospct’s user experience is second-to-none. I’ve used a few competitors in the past - they were so cumbersome.",
      authorName: "Antonio George",
      authorCompany: "Ippon Technologies",
      authorImage: "/images/Antoine-Garcia.png",
      dataAccuracy: 80,
      dataLabel: "Data Accuracy"
    },
    {
      stars: 4,
      reviewText: "This platform has really streamlined our processes. We are much more efficient now.",
      authorName: "Sarah Lee",
      authorCompany: "Tech Innovators",
      authorImage: "/images/Antoine-Garcia.png",
      dataAccuracy: 90,
      dataLabel: "User Satisfaction"
    },
    {
      stars: 3,
      reviewText: "The tool is good, but there's room for improvement in customer support.",
      authorName: "Mark Thompson",
      authorCompany: "Creative Solutions",
      authorImage: "/images/Antoine-Garcia.png",
      dataAccuracy: 70,
      dataLabel: "Support Quality"
    },
    {
      stars: 4,
      reviewText: "Great features and user interface. Integration with other tools could be smoother.",
      authorName: "Emily Johnson",
      authorCompany: "Innovatech",
      authorImage: "/images/Antoine-Garcia.png",
      dataAccuracy: 85,
      dataLabel: "Feature Set"
    },
    {
      stars: 5,
      reviewText: "Exceptional service! The platform has exceeded our expectations in every way.",
      authorName: "David Smith",
      authorCompany: "FutureTech",
      authorImage: "/images/Antoine-Garcia.png",
      dataAccuracy: 95,
      dataLabel: "Overall Satisfaction"
    }
  ];

  
  return (
    <Swiper
      spaceBetween={80}
      centeredSlides={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 80,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index} className="border px-4 py-12 mb-6">
        <div className="text-start h-[430px]">
          <div className="text-yellow-400 flex mb-8">
            {[...Array(review.stars)].map((_, i) => (
              <IoStarSharp key={i} size='40' className="mr-1" />
            ))}
          </div>
          <div className="mb-4">“{review.reviewText}”</div>
          <div className="flex items-center pt-4 pb-8 border-b">
            <div className="w-20 h-20 mr-3">
              <img width={20} height={20} src={review.authorImage} alt={review.authorName} className="w-20 h-20" />
            </div>
            <div>
              <div className=" font-bold">{review.authorName}</div>
              <div className="text-sm">{review.authorCompany}</div>
            </div>
          </div>
          <div className="py-4">
            <div className="text-2xl font-bold">{review.dataAccuracy}%</div>
            <div className="font-semibold">{review.dataLabel}</div>
          </div>
        </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
};

export default ResponsiveSwiper;
