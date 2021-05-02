import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialItem = () => {
  return (
    <>
      <div className="w-full h-full lg:h-64 relative  py-6 lg:py-8">
        <div className="border static  rounded border-yl p-3">
          <div className="z-50 left-10 top-0 lg:top-2  absolute flex items-center justify-center rounded-3xl w-11 h-11 bg-yl text-white">
            <FaQuoteLeft />
          </div>
          <div className="card-body pb-5">
            <p className="card-text mt-2 md:mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <p className="card-text mt-2 md:mt-5 text-gray-900 testname">
              -Matthew Richards
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Testimonial = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return (
    <div className="mt-5">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col justify-center text-center w-full mb-4">
          {/* <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">something if reqd.</h2> */}
          <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900">
            Testimonials
          </h1>
        </div>

        <div className=" w-4/5 mx-auto">
          <Swiper
            spaceBetween={5}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              1200: {
                slidesPerView: 3,
                loopedSlides: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                loopedSlides: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                loopedSlides: 1,
                spaceBetween: 5,
              },
              675: {
                slidesPerView: 1,
                loopedSlides: 1,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <TestimonialItem />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialItem />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialItem />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialItem />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="">
          <div className="flex justify-center my-10">
            <div className=" mt-6 flex flex-row justify-between mx-3">
              <button
                // onClick={() => setActiveSearchPlaceholder("RequestQuotes")}
                className="inline-flex  text-gray-900 bg-yl border-0 py-1 px-2 md:px-4 focus:outline-none hover:bg-yellow-600 rounded md:text-lg"
              >
                Request Quotes
              </button>
              <button
                // onClick={() => setActiveSearchPlaceholder("BrowseContractors")}
                className="ml-4 inline-flex text-gray-900 bg-yl border-0 py-1 px-2 md:px-4 focus:outline-none hover:bg-yellow-600 rounded md:text-lg"
              >
                Browse Contractors
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
