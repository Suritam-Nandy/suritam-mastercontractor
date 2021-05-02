import React from "react";
import { Link } from "react-router-dom";
import { VscSearch, VscLocation } from "react-icons/vsc";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const PROJECTS = [
  {
    id: 1,
    title: " Flooring ",
  },
  {
    id: 2,

    title: " Painting ",
  },
  {
    id: 3,
    title: " Roofing",
  },
];
const AllContractorSlider = () => {
  return (
    <>
      <div className="w-full pr-0 text-justify">
        {/* <Swiper
          // spaceBetween={50}
          // slidesPerView={2}
          // navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          loop={true}
          // autoplay={true}
          breakpoints={{
            1200: {
              slidesPerView: 1,
              loopedSlides: 1,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 1,
              loopedSlides: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 1,
              loopedSlides: 1,
              spaceBetween: 5,
            },
            675: {
              slidesPerView: 1,
              loopedSlides: 1,
              spaceBetween: 2,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide> */}
        <div className="relative">
          <img
            className="w-full border-black border"
            src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&q=80"
          />
          {/* <div */}
          {/* className="bottom-0 left-0 absolute" */}
          {/* style={{ */}
          {/* width: "100%", */}
          {/* }} */}
          {/* > */}
          {/* <div */}
          {/* className="p-2" */}
          {/* style={{ */}
          {/* color: "#ffc107", */}
          {/* font: "bold 24px/45px Helvetica, Sans-Serif", */}
          {/* "letter-spacing": "-1px", */}
          {/* background: "rgb(0, 0, 0)" , background: "rgba(0,
          0, 0, 0.4)", */}
          {/* padding: "10px 10px", */}
          {/* }} */}
          {/* > */}
          {/* <h1 className="text-2xl">Flooring</h1> */}
          {/* <p className="text-base"> */}
          {/* Copper mug try-hard pitchfork pour-over freegan heirloom neutra */}
          {/* air plant cold-presseard tote bag. authentic tumeric truffaut */}
          {/* hexagon try-hard chambray */}
          {/* </p> */}
          {/* <p className="mt-1.5 flex  text-sm ">
                <VscLocation
                  className="mx-1 mt-0"
                  color={"#C4C4C4"}
                  size={16}
                />{" "}
                Delhi
              </p>
            </div>
          </div> */}
        </div>
        {/* </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="w-full border-black border"
                src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&q=80"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="w-full border-black border"
                src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&q=80"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="relative">
              <img
                className="w-full border-black border"
                src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&q=80"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="relative">
              <img
                className="w-full border-black border"
                src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&q=80"
              />
            </div>
          </SwiperSlide>
        </Swiper> */}
      </div>
    </>
  );
};

const ProjectsSection = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
  return (
    <>
      <div className="w-full my-4 p-6">
        <div className="mx-auto flex justify-center items-center">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900">
            Projects
          </h1>
        </div>

        {PROJECTS.map((project) => {
          return (
            <div className="bg-gray-50 py-4 my-2 rounded-xl">
              <div className="md:max-w-screen-lg mx-auto p-2 md:px-4 flex flex-col text-left justify-start items-start">
                <h1 className="text-xl md:text-2xl font-semibold text-gray-900 my-1">
                  {project.title}
                </h1>
                <p className="text-lg my-1">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-presseard tote bag. authentic tumeric
                  truffaut hexagon try-hard chambray
                </p>
                <p className=" flex  text-base my-1">
                  <VscLocation
                    className="mx-1 mt-0"
                    color={"#ffc107"}
                    size={20}
                  />{" "}
                  Delhi
                </p>
              </div>
              <div className="md:max-w-screen-lg mx-auto p-2">
                <div className="md:grid grid-cols-2 md:grid-cols-3 gap-2 ">
                  <div className="col-span-2 ">
                    <div className=" ">
                      <AllContractorSlider className="w-full border-black border " />
                    </div>
                  </div>
                  <div className="md:col-span-1 col-span-2 flex">
                    <div className="md:mt-0 mt-2 grid grid-flow-col md:grid-flow-row  gap-0.5 ">
                      <div className="relative md:row-span-1 col-span-1">
                        <img
                          src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&q=80"
                          alt="office"
                          className="w-44 md:w-full border-black border"
                        />
                      </div>
                      <div className="relative md:row-span-1 col-span-1">
                        <img
                          src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&q=80"
                          alt="office"
                          className="w-44 md:w-full border-black border"
                        />
                        {/*  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center lg:px-8 lg:py-6  p-5 rounded-2xl mt-5">
          <Link
            to="/project"
            onClick={() => {
              // eslint-disable-next-line no-restricted-globals

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <div className="bg-trueGray-200  border max-w-max rounded-lg text-grey900 text-2xl md:text-3xl px-5 py-1 transform transition-transform duration-200 hover:-translate-y-1 focus:outline-none">
              View all Projects
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
