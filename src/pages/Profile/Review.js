import React from "react";
import { AiFillStar } from "react-icons/ai";

const Review = (props) => {
  return (
    <>
      <div className="mx-auto py-10 p-6 md:p-20  container">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
          <div className="bg-gray-200 container p-2 max-h-96 overflow-y-scroll">
            <div id="" className="  ">
              <h1 className="flex items-center justify-center text-3xl font-semibold title-font mb-4 ">
                Reviews
              </h1>

              <div className="review my-4 p-2 bg-white rounded-xl shadow-lg">
                <h1 className="text-xl mb-4 font-medium">Name</h1>
                <div className="flex">
                  <AiFillStar className="fill-current text-yellow-300" />

                  <AiFillStar className="fill-current text-yellow-300" />
                  <AiFillStar className="fill-current text-yellow-300" />
                  <AiFillStar className="fill-current text-yellow-300" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>

              <div className="review my-4 p-2 bg-white rounded-2xl shadow-lg">
                <h1 className="text-xl mb-4 font-medium">Name</h1>
                <div className="flex">
                  <AiFillStar className="fill-current text-yellow-300" />
                  <AiFillStar className="fill-current text-yellow-300" />
                  <AiFillStar className="fill-current text-yellow-300" />
                  <AiFillStar className="fill-current text-yellow-300" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="review my-4 p-2 bg-white rounded-2xl shadow-lg">
                <h1 className="text-xl mb-4 font-medium">Name</h1>
                <div className="flex">
                  <AiFillStar className="fill-current text-yellow-300" />
                  <AiFillStar className="fill-current text-yellow-300" />
                  <AiFillStar className="fill-current text-yellow-300" />
                  <AiFillStar className="fill-current text-yellow-300" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-5  p-24 w-full md:w-max md:px-14 lg:px-32 xl:px-40 mt-8 md:mt-0  mx-auto bg-gray-200">
            <div className="flex flex-col items-start justify-start">
              <h1 className="heading text-2xl font-semibold title-font mb-1">
                <p className="text-left flex text-base md:text-lg text-gray-900 font-medium">
                  MC Id:
                  <span className="mx-1 md:mx-2 font-normal"> {props.id}</span>
                </p>
              </h1>
              <h1 className="heading text-3xl font-semibold title-font mb-4">
                Contact
              </h1>
            </div>
            <div className="flex flex-col items-start justify-start ">
              <div className="items-center justify-center">
                <p className="">xyz, abcdefgh, address</p>
                <p className="">sample@gmail.com</p>
                <p className="">+91 9xxxxxx989</p>
              </div>

              <div className="flex items-start justify-start">
                <button className="mt-3 text-gray-900 bg-yl border-0 py-1 px-2 md:px-4 focus:outline-none hover:bg-yl rounded md:text-lg">
                  Request Quotes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
