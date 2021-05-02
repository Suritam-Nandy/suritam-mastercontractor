import React from "react";

const HeroContractors = (props) => {
  return (
    <div
      className="text-gray-700 mt-12 md:mt-20 bg-white"
      style={{ "font-family": "Source Sans Pro, sans-serif" }}
    >
      {/* <!--Hero--> */}
      <div
        className="py-20"
        style={{
          // background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
          backgroundImage: `url(${props.img})`,
        }}
        alt="img"
      >
        <div className="container mx-auto px-6 text-white">
          <h2 className={`${props.headingColor} text-4xl font-bold mb-2`}>
            {props.title}
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">{props.subtitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default HeroContractors;
