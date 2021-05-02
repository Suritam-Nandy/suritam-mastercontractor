import React from "react";
import { IoCallOutline } from "react-icons/io5";

const HELP = [
  { title: "Bathroom Remodel" },
  { title: "Kitchen Remodel" },
  { title: "Bedroom Remodel" },
  { title: "Home Addition" },
  { title: "New Home Construction" },
  { title: "Roofing" },
  { title: "Painting" },
  { title: "Flooring" },
];

const Help = () => {
  return (
    <>
      <div className="w-full my-4 p-5">
        <div className="mx-auto flex flex-col md:flex-row justify-center">
          <p className="text-3xl flex justify-center items-center">
            I need help with
          </p>
          <div className="flex items-center border-b border-yl md:mx-3 my-4 md:mt-3 mx-8">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 text-2xl mr-3 px-2 leading-tight focus:outline-none text-center md:text-left"
              type="text"
              placeholder="ex: Bathroom Remodel"
              aria-label="service"
            />
            {/* <button
                  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="Search"
                >
                  Sign Up
                </button> */}
          </div>
        </div>
        <div className="mx-auto flex-row flex-wrap flex justify-center items-center">
          <IoCallOutline className="mr-3" size={36} />
          <p className="ml-3 text-2xl font-semibold"> 9 1 9 5 5 0 8 1 0 7 5 </p>
        </div>
        <div className="mx-auto flex-row flex-wrap flex justify-center items-center">
          {HELP.map((help) => {
            return (
              <div className="flex flex-col w-32 sm:w-24 h-20  md:w-36 md:h-24  bg-trueGray-100 text-black shadow-xl  p-4 px-2  m-3 focus:outline-none  rounded-lg ">
                <div className="flex justify-start items-center">
                  <img
                    className="w-8 mb-2"
                    src="/Images/plan.png"
                    alt="Help1"
                  ></img>
                </div>
                <div className="">
                  <p className="text-xs ">{help.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Help;
