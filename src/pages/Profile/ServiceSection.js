import React from "react";
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  // CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../../components/Quality/AnimatedProgressProvider";
const SERVICES = [
  { title: " Roofing " },
  { title: " Painting " },
  { title: " Flooring " },
  { title: "Bathroom Remodel" },
  { title: "Kitchen Remodel" },
  { title: "Home Addition" },

  { title: " Bedroom Remodel " },
];

const ServiceSection = () => {
  return (
    <>
      <div className="mx-auto p-6">
        <div className="mt-4">
          <div className="">
            <h1 className="flex items-center justify-center text-3xl font-semibold title-font text-gray-900 my-6">
              Services
            </h1>
            <div className="mx-auto flex-row flex-wrap flex justify-center items-center">
              {SERVICES.map((service) => {
                return (
                  <div
                    className="bg-gray-200 md:hover:bg-gray-400  text-base md:text-lg text-gray-900 rounded-lg m-2 py-2 px-4 flex flex-col items-center justify-center mx-2 md:mx-6"
                    key={service.title}
                  >
                    {service.title}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4 border-indigo-400 border md:w-full md:min-h-96 h-full rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
              <div className="col-span-1 px-2 md:px-6 py-6 flex items-center justify-center">
                <div className=" ">
                  <h1 className="flex justify-center text-2xl md:text-4xl font-medium title-font mb-6 text-gray-900">
                    Quality
                  </h1>
                  <div className="flex justify-center quality">
                    {" "}
                    <div label="Fully controlled text animation using react-move">
                      <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={66}
                        duration={2.4}
                        easingFunction={easeQuadInOut}
                        // repeat
                      >
                        {(value) => {
                          const roundedValue = Math.round(value);
                          return (
                            <CircularProgressbar
                              value={value}
                              text={`${roundedValue}%`}
                              /* This is important to include, because if you'-ci fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                              styles={buildStyles({ pathTransition: "none" })}
                            />
                          );
                        }}
                      </AnimatedProgressProvider>
                    </div>
                  </div>
                  <h1 className="flex justify-center text-xl md:text-2xl font-medium title-font my-6 text-gray-900">
                    Master Contractor Score
                  </h1>
                </div>
              </div>
              <div className="col-span-1 mx-auto md:mx-10 block justify-center py-6 md:justify-start ">
                <div className="grid-rows-1">
                  <div>
                    <h1 className="flex items-center justify-center text-2xl font-medium title-font mb-4 text-gray-900">
                      Activity
                    </h1>
                    <div className="grid grid-cols-3">
                      <div className="col-span-2 relative mx-4 pt-1">
                        <div className="overflow-hidden h-6 mb-4 text-base flex rounded-xl bg-offWhite">
                          <div
                            style={{ width: "30%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap rounded-md  text-gray-900 justify-center bg-yl
                            "
                          >
                            4 Projects
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 text-base  pt-1 mx-2">
                        2020
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="col-span-2 relative mx-4 pt-1">
                        <div className="overflow-hidden h-6 mb-4 text-base flex rounded-xl bg-offWhite">
                          <div
                            style={{ width: "90%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap rounded-md  text-gray-900 justify-center bg-yl"
                          >
                            12 Projects
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 text-base  pt-1 mx-2">
                        2019
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="col-span-2 relative mx-4 pt-1">
                        <div className="overflow-hidden h-6 mb-4 text-base flex rounded-xl bg-offWhite">
                          <div
                            style={{ width: "60%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap rounded-md  text-gray-900 justify-center bg-yl"
                          >
                            8 Projects
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 text-base  pt-1 mx-2">
                        2018
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="flex items-center justify-center text-2xl font-medium title-font mb-4 text-gray-900">
                      Experience
                    </h1>
                    <div className="grid grid-cols-3">
                      <div className="col-span-2 relative mx-4 pt-1">
                        <div className="overflow-hidden h-6 mb-4 text-base flex rounded-xl bg-offWhite">
                          <div
                            style={{ width: "89%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap rounded-md  text-gray-900 justify-center bg-yl"
                          >
                            14 Projects
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 text-base   pt-1 mx-2">
                        Multi-room remodel
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="col-span-2 relative mx-4 pt-1">
                        <div className="overflow-hidden h-6 mb-4 text-base flex rounded-xl bg-offWhte">
                          <div
                            style={{ width: "79%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap rounded-md  text-gray-900 justify-center bg-yl"
                          >
                            12 Projects
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 text-base  pt-1 mx-2">
                        Bathroom remodel
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="col-span-2 relative mx-4 pt-1">
                        <div className="overflow-hidden h-6 mb-4 text-base flex rounded-xl bg-offWhite">
                          <div
                            style={{ width: "60%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap rounded-md  text-gray-900 justify-center bg-yl"
                          >
                            28 Projects
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 text-base  pt-1 mx-2">
                        Kitchen remodel
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="flex items-center justify-center text-2xl font-medium title-font mb-4 text-gray-900">
                      Pricing
                    </h1>
                    <div className="grid grid-cols-3">
                      <div className="col-span-2 relative mx-4 pt-1">
                        <div className="overflow-hidden h-6 mb-4 text-base flex rounded-xl bg-offWhite">
                          <div
                            style={{ width: "89%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap rounded-md  text-gray-900 justify-center bg-yl"
                          >
                            14 Projects
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 text-base   pt-1 mx-2">
                        under 10L
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="col-span-2 relative mx-4 pt-1">
                        <div className="overflow-hidden h-6 mb-4 text-base flex rounded-xl bg-offWhite">
                          <div
                            style={{ width: "79%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap rounded-md  text-gray-900 justify-center bg-yl"
                          >
                            12 Projects
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 text-base  pt-1 mx-2">
                        under 30L
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="col-span-2 relative mx-4 pt-1">
                        <div className="overflow-hidden h-6 mb-4 text-base flex rounded-xl bg-offWhite">
                          <div
                            style={{ width: "60%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap rounded-md  text-gray-900 justify-center bg-yl"
                          >
                            28 Projects
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 text-base  pt-1 mx-2">
                        under 50L
                      </div>
                    </div>
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

export default ServiceSection;
