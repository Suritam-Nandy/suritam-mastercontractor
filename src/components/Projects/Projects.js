import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/swiper.scss";
import "../something.scss";

const ProjectsItems = ({
  img,
  projectName,
  contractorName,
  projectLocation,
}) => {
  return (
    <div className="p-2 bg-gray-100">
      <div className=" h-full text-center">
        <div className=" h-full text-center">
          <img
            src={img}
            alt=""
            className="xs:h-40 h-96 md:h-80 xl:h-96  w-full mb-4 md:mb-2 rounded border-solid border-2  text-left"
          />
        </div>

        <div className="mt-2 p-5 md:py-4 ">
          <p className="text-center title-font font-bold text-3xl pb-3">
            {projectName}
          </p>

          <p className="text-center title-font font-medium text-xl py-1 pb-3 ">
            Location : {projectLocation}
          </p>
        </div>
        <p className="text-left title-font font-medium text-medium  pb-2 pl-2">
          Know more
        </p>
      </div>
    </div>
  );
};

const Projects = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
  return (
    <>
      <div className="h-full bg-yl py-4 pb-5">
        <div className="flex flex-col text-center w-full py-1 mb-2 md:mb-4">
          {/* <h2 classNameName="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">something if reqd.</h2> */}
          <h1 className="text-3xl font-medium title-font text-gray-900">
            Projects
          </h1>
        </div>
        <div className="md:flex py-4 md:py-2 px-3  text-black text-center">
          <Swiper
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop={true}
            breakpoints={{
              1200: {
                slidesPerView: 3,
                loopedSlides: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                loopedSlides: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                loopedSlides: 1,
                spaceBetween: 15,
              },
              675: {
                slidesPerView: 1,
                loopedSlides: 1,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <ProjectsItems
                projectName="Dinning"
                contractorName="Contractor Name"
                projectLocation="Delhi"
                img={
                  "https://images.unsplash.com/photo-1571116597236-b8a3ebe15f59?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yJTIwZGVzaWduZXJ8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectsItems
                projectName="Kitchen"
                contractorName="Contractor Name"
                projectLocation="Meerut"
                img={
                  "https://images.unsplash.com/photo-1561024172-0ae2ebd65018?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGludGVyaW9yJTIwZGVzaWduZXJ8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectsItems
                projectName="Office"
                contractorName="Contractor Name"
                projectLocation="Mumbai"
                img={
                  "https://images.unsplash.com/photo-1596900749995-57cec6ddb861?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGludGVyaW9yJTIwZGVzaWduZXJ8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectsItems
                projectName="Dinning"
                contractorName="Contractor Name"
                projectLocation="Meerut"
                img={
                  "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectsItems
                projectName="Kitchen"
                contractorName="Contractor Name"
                projectLocation="Delhi"
                img={
                  "https://images.unsplash.com/photo-1538944570562-2c9cb7857097?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectsItems
                projectName="Dinning"
                contractorName="Contractor Name"
                projectLocation="Pune"
                img={
                  "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Projects;
