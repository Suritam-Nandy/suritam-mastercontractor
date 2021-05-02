import React from "react";

const CounterSection = () => {
  return (
    <>
      {/* <!-- number-counter --> */}
      <div className="mt-8">
        <div className=" databox">
          <div className="container">
            <div className="grid grid-cols-4">
              <div className="col-md-3 md:col-span-1 col-span-2 col-sm-6 col-xs-6 datainnerbox">
                <span className="counter-count" id="score">
                  100
                </span>
                <span>+</span>
                <div className="datahead">Projects</div>
              </div>
              <div className="col-md-3 md:col-span-1 col-span-2 col-sm-6 col-xs-6 datainnerbox">
                <span className="counter-count">100</span>
                <span>+</span>
                <div className="datahead">Contractors</div>
              </div>
              <div className="col-md-3 md:col-span-1 col-span-2 col-sm-6 col-xs-6 datainnerbox">
                <span className="counter-count">100</span>
                <span>+</span>
                <div className="datahead">Carpenters</div>
              </div>
              <div
                className="col-md-3 md:col-span-1 col-span-2 col-sm-6 col-xs-6 datainnerbox"
                style={{ "border-right": "none" }}
              >
                <span className="counter-count">100</span>
                <span>+</span>
                <div className="datahead">Interior Designers</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:max-w-screen-lg  mx-auto">
          <div className="flex justify-center my-10">
            <div className=" mt-6 flex flex-row justify-between mx-3">
              <button className="inline-flex  text-gray-900 bg-yl border-0 py-1 px-2 md:px-4 focus:outline-none hover:bg-yellow-600 rounded md:text-lg">
                Request Quotes
              </button>
              <button className="ml-4 inline-flex text-gray-900 bg-yl border-0 py-1 px-2 md:px-4 focus:outline-none hover:bg-yellow-600 rounded md:text-lg">
                Browse Contractors
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterSection;
