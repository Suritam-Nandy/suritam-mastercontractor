import React from "react";

const AboutUs = () => {
  return (
    <>
      {/* <!-- aboutus section --> */}
      <div className="aboutwrapper mt-7 lg:mt-20">
        <div
          className="aboutbox"
          data-aos="flip-up"
          data-aos-offset="-500"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className="aboutimg"></div>
          <h1 className="abouthead md:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            About Us
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <span className="servelink">Learn more</span>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
