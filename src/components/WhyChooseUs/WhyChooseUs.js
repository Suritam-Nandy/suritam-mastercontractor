import React from "react";
import { Link } from "react-router-dom";
const WhyChooseUs = () => {
  return (
    <section className="text-gray-700 body-font border-gray-200 my-8">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900">
            Why Choose Us
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex-grow">
                <div className="flex justify-center">
                  <img
                    className="object-contain h-56"
                    src="/Images/whychooseus1.png"
                    alt="whychooseus1"
                  ></img>
                </div>
                <p className="leading-relaxed text-base mt-4">
                  We have a wide range of ontractors. Find the contractor that
                  meets your purpose.
                </p>
                <Link to="/services">
                  <div className="mt-3 text-yl inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2 stroke-current  text-yl"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex-grow">
                <div className="flex justify-center">
                  <img
                    className="object-contain h-56"
                    src="/Images/undraw_Updated_resume_re_q1or.png"
                    alt="whychooseus2"
                  ></img>
                </div>

                <p className="leading-relaxed text-base mt-4">
                  Contractors who you can trust and have been delivering
                  impeccable work over the years.
                </p>
                <Link to="/services">
                  <div className="mt-3 text-yl inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2  stroke-current  text-yl"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex-grow">
                <div className="flex justify-center">
                  <img
                    className="object-contain h-56"
                    src="/Images/whychooseus3.png"
                    alt="whychooseus3"
                  ></img>
                </div>
                <p className="leading-relaxed text-base mt-4">
                  Our experienced designers make sure to blow you away with
                  creativity with an unique design that fits your business.
                </p>
                <Link to="/services">
                  <div className="mt-3 text-yl inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2 stroke-current text-yl"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
