import React from "react";
import HeroContractors from "../../components/Hero/HeroContractors";
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
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";

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
        <div className=" ">
          <img
            className="w-full border-black border"
            src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&q=80"
          />
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
  return (
    <>
      <div className="w-full mx-auto">
        <div className="flex flex-wrap mt-2 md:mx-8 justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full ">
            {PROJECTS.map((project) => {
              return (
                <div className="bg-gray-50 py-4 my-2 rounded-xl p-2 md:px-4 flex flex-col text-left justify-start items-start mx-4">
                  <div className="">
                    <h1 className="text-xl md:text-2xl font-semibold text-gray-900 my-1">
                      {project.title}
                    </h1>
                    <p className="text-lg my-1">
                      Copper mug try-hard pitchfork pour-over freegan heirloom
                      neutra air plant cold-presseard tote bag. authentic
                      tumeric truffaut hexagon try-hard chambray
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
          </div>
        </div>
      </div>
    </>
  );
};

const project = () => {
  return (
    <>
      <HeroContractors
        img={`/Images/ba3.jpg`}
        title={"Dream Big Contractors"}
        // subtitle={"Build your dream project!"}
      />
      <Projects />
    </>
  );
};

export default project;
