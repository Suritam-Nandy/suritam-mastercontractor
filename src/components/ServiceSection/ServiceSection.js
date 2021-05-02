/* eslint-disable no-restricted-globals */
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { VscLocation } from "react-icons/vsc";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const SERVICES = [
  {
    title: "Carpenter",
    top: 1300,
    head:
      "Looking for some carpentry work to be done in our office or home, we got it covered.",
    desc: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          `,
  },
  {
    title: "Designer",
    top: 1350,

    head:
      "Want to renovate your Kitchen, or design your office, you are sure to find a Designer that would leave you amazed.",
    desc: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            `,
    img_light: "/images/webdev.png",
    img_dark: "/images/Black-webdev.png",
  },
  {
    title: "Contractor",
    top: 1400,

    head:
      "Finding a reliable Contractor with good deal is tough, we know the struggle, but we got is solved for you.",
    desc:
      "ggggLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img_light: "/images/webdev.png",
    img_dark: "/images/Black-webdev.png",
  },
];
const ProjectsItems = ({ img, contractorName }) => {
  return (
    <div className="my-4 p-2 bg-warmGray-100">
      <div className=" h-full text-center">
        <div className=" h-full text-center">
          <img
            src={img}
            alt=""
            className="h-96 md:h-80 w-full mb-4 rounded border-solid border-2  text-left"
          />
        </div>
        <div className="mt-2 p-1  ">
          <div className="w-full pt-1 pb-3 px-1 py-2 md:px-2 xl:px-2 text-gray-800 flex flex-col justify-between">
            <div className="ml-1 mt-4 text-base text-left">
              <h2 className="text-2xl text-gray-900 font-bold title-font ">
                {contractorName}
              </h2>
              <div className="mx-1 ">
                <p className="text-left  flex  text-lg text-gray-900">
                  <VscLocation className="mt-1" size={22} color={"#ffc107"} />
                  Delhi
                </p>
              </div>
              <div className="flex flex-wrap">
                <div className="bg-yl md:hover:bg-yl flex-row text-white rounded-md m-1  py-1 px-3 items-center justify-center">
                  Kitchen
                </div>
                <div className="bg-yl md:hover:bg-yl flex-row text-white rounded-md m-1  py-1 px-3 items-center justify-center">
                  Dining
                </div>
                <div className="bg-yl md:hover:bg-yl flex-row text-white rounded-md m-1  py-1 px-3 items-center justify-center">
                  Flooring
                </div>
              </div>
            </div>

            <div className="">
              <div className="m-1 md:m-2 py-1 px-0 md:px-4 ">
                <div>
                  <p className="text-left flex md:text-lg text-gray-900 font-medium">
                    Provisions:
                    <span className="mx-1 md:mx-2 font-normal">
                      Only Material
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-left flex md:text-lg text-gray-900 font-medium">
                    Projects Completed:
                    <span className="mx-1 md:mx-2 font-normal">20</span>
                  </p>
                </div>
                <div className="flex flex-wrap flex-row text-left">
                  <div>
                    <p className="md:text-lg text-gray-900 font-medium ">
                      Preference State or cities:
                    </p>
                  </div>
                  <div className="mx-1 p-0 md:p-0.5 text-base  font-normal">
                    Pune,
                  </div>
                  <div className="mx-1 p-0 md:p-0.5 text-base font-normal">
                    Meerut,
                  </div>
                  <div className="mx-1 p-0 md:p-0.5 text-base font-normal">
                    Delhi,
                  </div>
                  <div className="mx-1 p-0 md:p-0.5 text-base font-normal">
                    Bangalore,
                  </div>
                  <div className="mx-1 p-0 md:p-0.5 text-base font-normal">
                    Hyderabad
                  </div>
                </div>
              </div>
              <p className="mt-1 pl-4 leading-relaxed hover:underline hover:text-black text-base text-left text-gray-darkest">
                MasterContractor score:<span className="mx-1">66%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const AllContractorSlider = () => {
  return (
    <>
      <div className=" w-full my-2  pr-0 text-justify">
        <Swiper
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          loop={true}
          breakpoints={{
            1200: {
              slidesPerView: 3,
              loopedSlides: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              loopedSlides: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              loopedSlides: 1,
              spaceBetween: 15,
            },
            675: {
              slidesPerView: 1,
              loopedSlides: 1,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 32000,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide>
            <ProjectsItems
              projectName="Contractor Name"
              contractorName="Contractor Name"
              projectLocation="Location"
              img={
                "https://images.unsplash.com/photo-1571116597236-b8a3ebe15f59?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWduZXJ8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsItems
              projectName="Contractor Name"
              contractorName="Contractor Name"
              projectLocation="Location"
              img={
                "https://images.unsplash.com/photo-1561024172-0ae2ebd65018?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGludGVyaW9yJTIwZGVzaWduZXJ8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsItems
              projectName="Contractor Name"
              contractorName="Contractor Name"
              projectLocation="Location"
              img={
                "https://images.unsplash.com/photo-1596900749995-57cec6ddb861?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGludGVyaW9yJTIwZGVzaWduZXJ8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsItems
              projectName="Contractor Name"
              contractorName="Contractor Name"
              projectLocation="Location"
              img={
                "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsItems
              projectName="Contractor Name"
              contractorName="Contractor Name"
              projectLocation="Location"
              img={
                "https://images.unsplash.com/photo-1538944570562-2c9cb7857097?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsItems
              projectName="Contractor Name"
              contractorName="Contractor Name"
              projectLocation="Location"
              img={
                "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
const ServiceSection = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const [activeIndex, setActiveIndex] = useState(0);
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  // run this function from an event handler or an effect to execute scroll

  return (
    <>
      <div className="conatiner">
        <div className=" rounded-2xl text-black text-xl container mx-auto px-0 md:px-3 py-10">
          <div className="flex flex-col text-center w-full mb-2">
            {/* <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">something if reqd.</h2> */}
            <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900">
              Services
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-around p-5 md:p-10 md:pt-1 container">
            <div className="w-full flex flex-col lg:mt-8">
              <div
                className="grid grid-cols-1 gap-5 lg:grid-cols-3 "
                ref={myRef}
              >
                {SERVICES.map((service, index) => {
                  return (
                    <div key={service.title}>
                      <div
                        onClick={() => {
                          setActiveIndex(index);
                        }}
                        className={`${
                          activeIndex === index
                            ? "bg-yl text-black shadow-inner"
                            : "bg-offWhite text-black shadow-lg"
                        } lg:px-6 lg:py-6 px-5 py-3 focus:outline-none  hover:bg-yl cursor-pointer rounded-2xl }`}
                      >
                        <p
                          onClick={screen.width < 800 && executeScroll}
                          className="active:text-black my-2 text-2xl font-bold"
                        >
                          {service.title}
                        </p>
                      </div>
                      <div
                        key={service.title}
                        className={`${
                          activeIndex === index ? "block lg:hidden" : "hidden"
                        }`}
                      >
                        <div className="p-1 text-sm mt-3">
                          <p>
                            <strong> {SERVICES[activeIndex].head}</strong>
                          </p>
                          <div>
                            <AllContractorSlider />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="p-1 w-full mr-8  flex-col hidden lg:block mt-2">
                <div>
                  <div>
                    <AllContractorSlider />
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:px-8 lg:py-6  p-5 rounded-2xl mt-5">
                <Link
                  to="/services"
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals

                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <div className="bg-trueGray-200  border max-w-max rounded-lg text-grey900 text-2xl md:text-3xl px-5 py-1 transform transition-transform duration-200 hover:-translate-y-1 focus:outline-none">
                    Browse all Contractors
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
