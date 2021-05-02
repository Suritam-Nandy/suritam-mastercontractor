import React from "react";
import { VscLocation } from "react-icons/vsc";
import ProjectsSection from "./Profile/ProjectsSection";
import ServiceSection from "./Profile/ServiceSection";
import About from "./Profile/About";

import Review from "./Profile/Review";

const SearchBar = ({ placeholder }) => {
  return (
    <div>
      <div
        className=" h-auto overflow-hidden flex items-center justify-center"
        style={{ background: "transparent" }}
      >
        <div className="relative md:mr-2 mr-1 my-2">
          <input
            type="search"
            className="w-72 xl:w-96 focus:outline-none bg-purple-white shadow rounded border-0 px-3 py-2"
            placeholder={placeholder}
          />
          <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter"></div>
        </div>
      </div>
    </div>
  );
};

const HeroProfile = (props) => {
  return (
    <>
      <div className="mt-10 md:mt-16  mx-auto py-4 px-2 md:p-6">
        <div className="md:w-full md:min-h-72 h-full ">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mx-auto">
            <div className="col-span-1 lg:col-span-1 mx-10 block justify-center py-6 md:justify-start ">
              <div className="flex justify-center items-center md:py-2 px-1">
                <img src="https://images.unsplash.com/photo-1611486212557-88be5ff6f941?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fGludGVyaW9yJTIwY29uc3RydWN0aW9uJTIwd29ya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-1 py-4 ">
              <div className="flex justify-center items-center py-2 px-1">
                <div className="">
                  <h1 className="text-3xl md:text-4xl font-semibold title-font text-gray-900 my-2.5">
                    Dream Big Contractors
                  </h1>
                  <div className=" ">
                    <p className="text-left  flex  text-xl text-gray-900">
                      <VscLocation
                        className="mt-0.5"
                        size={26}
                        color={"#ffc107"}
                      />
                      Delhi
                    </p>
                  </div>

                  <div className="">
                    <div className="m-1 md:m-2 py-1 px-0 ">
                      <div>
                        <p className="text-left flex text-base md:text-lg text-gray-900 font-medium">
                          MC Id:
                          <span className="mx-1 md:mx-2 font-normal">
                            {props.id}
                          </span>
                        </p>
                        <p className="text-left flex text-base md:text-lg text-gray-900 font-medium">
                          Projects Completed:
                          <span className="mx-1 md:mx-2 font-normal">20</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-left flex text-base md:text-lg text-gray-900 font-medium">
                          Experience:
                          <span className="mx-1 md:mx-2 font-normal">
                            10 years
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-left flex text-base md:text-lg text-gray-900 font-medium">
                          Provisions:
                          <span className="mx-1 md:mx-2 font-normal">
                            Only Material
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-left flex text-base md:text-lg text-gray-900 font-medium">
                          Minimum project size:
                          <span className="mx-1 md:mx-2 font-normal">
                            Rs. 50,000
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-left flex text-base md:text-lg text-gray-900 font-medium">
                          Rates:
                          <span className="mx-1 md:mx-2 font-normal">
                            {" "}
                            Rs. 1,000 - 10,000
                          </span>
                        </p>
                      </div>

                      <div className="flex flex-wrap flex-row text-left">
                        <div>
                          <p className="  text-base md:text-lg text-gray-900 font-medium ">
                            Preference Location:
                          </p>
                        </div>
                        <div className="pt-0.5 px-1 font-normal">Pune,</div>
                        <div className="pt-0.5 px-1 font-normal">Meerut,</div>
                        <div className="pt-0.5 px-1 font-normal">Delhi,</div>
                        <div className="pt-0.5 px-1 font-normal">Bangalore</div>
                        <div className="pt-0.5 px-1 font-normal">
                          Hyderabad,
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      // eslint-disable-next-line no-restricted-globals
                      screen.width < 800
                        ? window.scrollTo({
                            top: 672,
                            behavior: "smooth",
                          })
                        : window.scrollTo({
                            top: 392,
                            behavior: "smooth",
                          });
                    }}
                    className="bg-yl md:hover:bg-yl inline-block text-white rounded-md m-2 py-1 px-4 items-center justify-center cursor-pointer"
                  >
                    Services
                  </div>
                  <div
                    onClick={() => {
                      // eslint-disable-next-line no-restricted-globals
                      screen.width < 800
                        ? window.scrollTo({
                            top: 2070,
                            behavior: "smooth",
                          })
                        : window.scrollTo({
                            top: 1192,
                            behavior: "smooth",
                          });
                    }}
                    className="bg-yl md:hover:bg-yl inline-block text-white rounded-md m-2 py-1 px-4 items-center justify-center cursor-pointer"
                  >
                    Gallery
                  </div>
                  <div
                    onClick={() => {
                      // eslint-disable-next-line no-restricted-globals
                      screen.width < 800
                        ? window.scrollTo({
                            top: 4540,
                            behavior: "smooth",
                          })
                        : window.scrollTo({
                            top: 3862,
                            behavior: "smooth",
                          });
                    }}
                    className="bg-yl md:hover:bg-yl inline-block text-white rounded-md m-2 py-1 px-4 items-center justify-center cursor-pointer"
                  >
                    About
                  </div>

                  <div
                    onClick={() => {
                      // eslint-disable-next-line no-restricted-globals
                      screen.width < 800
                        ? window.scrollTo({
                            top: 6190,
                            behavior: "smooth",
                          })
                        : window.scrollTo({
                            top: 4282,
                            behavior: "smooth",
                          });
                    }}
                    className="bg-yl md:hover:bg-yl inline-block text-white rounded-md m-2 py-1 px-4 items-center justify-center cursor-pointer"
                  >
                    Reviews
                  </div>
                  <div
                    onClick={() => {
                      // eslint-disable-next-line no-restricted-globals
                      screen.width < 800
                        ? window.scrollTo({
                            top: 6450,
                            behavior: "smooth",
                          })
                        : window.scrollTo({
                            top: 4242,
                            behavior: "smooth",
                          });
                    }}
                    className="bg-yl md:hover:bg-yl inline-block text-white rounded-md m-2 py-1 px-4 items-center justify-center cursor-pointer"
                  >
                    Contact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const profile = (props) => {
  return (
    <>
      {/* <HeroContractors
        img={`/Images/ba3.jpg`}
        title={"Dream Big Contractors"}
        subtitle={"Build your dream project!"}
      /> */}
      <HeroProfile id={props.location.id} />
      <ServiceSection />

      <ProjectsSection />
      <About />

      <Review id={props.location.id} />
      {/* <div>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div> */}

      {/* <ContractorServices /> */}

      {/* <!-- component --> */}
      {/* <ContractorProjectsTimeline /> */}
    </>
  );
};

export default profile;
