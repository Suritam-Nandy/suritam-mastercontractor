/* eslint-disable no-restricted-globals */
import React from "react";
import Typewriter from "typewriter-effect";
import { Zoom } from "react-slideshow-image";
import "./Hero.scss";
import "react-slideshow-image/dist/styles.css";
const images = [
  "https://images.unsplash.com/photo-1596900749995-57cec6ddb861?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGludGVyaW9yJTIwZGVzaWduZXJ8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1601335679963-10013d4578c9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTR8fG9mZmljZXxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];
const zoomOutProperties = {
  duration: 1800,
  transitionDuration: 700,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: false,
};

const Hero = () => {
  return (
    <>
      <section
        className={`${
          screen.width < 800 ? "Hero-small" : "Hero"
        } mt-12 md:mt-16 text-gray-700 body-font }`}
      >
        <div className="container mx-auto  flex px-5 py-12 md:py-24 md:flex-row flex-col items-center">
          <div className="mt-6 md:mt-0 lg:flex-grow md:w-3/5 lg:w-2/5 xl:w-1/3 lg:pl-0 xl:pl-16 lg:pr-2 md:pr-0 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
            <h1 className="title-font text-4xl lg:text-5xl mb-2 font-medium text-white  ">
              Master Contractor
            </h1>
            <h1 className=" h-20 lg:h-32 title-font md:text-3xl text-2xl mb-8 font-medium text-yl ">
              One stop to redesign your
              <div>
                <span className="txt-type text-5xl lg:text-8xl  md:inline-block md:mx-1 block text-yl ">
                  <Typewriter
                    options={{
                      strings: ["Office", "Kitchen", "Bedroom"],
                      autoStart: true,
                      loop: true,
                      cursor: "",
                    }}
                  />
                </span>
              </div>
            </h1>
          </div>
          <div className="lg:max-w-lg lg:w-full xl:mr-16 md:w-2/5 w-5/6 mx-2 mb-4 md:mb-0">
            <div className="slide-container">
              <Zoom {...zoomOutProperties}>
                {images.map((each, index) => (
                  <img
                    key={index}
                    style={{ width: "100%" }}
                    src={each}
                    alt="Hero Animaion"
                  />
                ))}
              </Zoom>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
