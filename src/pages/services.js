import React from "react";
import { Link } from "react-router-dom";
import { VscSearch, VscLocation } from "react-icons/vsc";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import HeroContractors from "../components/Hero/HeroContractors";

const CARDS = [
  {
    id: 10021,
    title: " Company Name ",
  },
  {
    id: 10022,

    title: " Company Name ",
  },
  {
    id: 10023,
    title: " Company Name ",
  },
  {
    id: 10024,
    title: " Company Name ",
  },
  {
    id: 10025,
    title: " Company Name ",
  },
  {
    id: 10026,
    title: " Company Name ",
  },
  {
    id: 10027,
    title: " Company Name ",
  },
  {
    id: 10028,

    title: " Company Name ",
  },
  {
    id: 10029,
    title: " Company Name ",
  },
  {
    id: 10030,
    title: " Company Name ",
  },
];

const Card = (props) => {
  return (
    <div className=" ">
      <div className="flex flex-col lg:h-80 lg:flex-row overflow-hidden bg-warmGray-50 rounded-lg shadow-md  mt-4 w-100 mx-2">
        <div className="h-full p-2 pt-4 w-auto xl:w-7/12 lg:w-4/6">
          <img
            className="inset-0 lg:h-full object-fill object-center"
            src="https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
        </div>
        <div className="w-full pt-1 pb-3 px-1 py-2 md:px-2 xl:px-6 text-gray-800 flex flex-col justify-between">
          <div className="ml-1 mt-4 ">
            <h2 className="text-2xl text-gray-900 font-bold title-font ">
              {props.card.title}
            </h2>
            <div className="mx-1 ">
              <p className="text-left  flex  text-lg text-gray-900">
                <VscLocation className="mt-1" size={22} color={"#ffc107"} />
                Delhi
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="bg-yl md:hover:bg-yl flex-row text-white rounded-md m-1  py-1 px-3 items-center justify-center">
                Kitchen
              </div>
              <div className="bg-yl md:hover:bg-yl flex-row text-white rounded-md m-1  py-1 px-3 items-center justify-center">
                Dining
              </div>
              <div className="bg-yl md:hover:bg-yl flex-row text-white rounded-md m-1  py-1 px-3 items-center justify-center">
                Flooring
              </div>
            </div>
          </div>

          <div className="">
            <div className="m-1 md:m-2 py-1 px-0 md:px-4 ">
              <div>
                <p className="text-left flex md:text-lg text-gray-900 font-medium">
                  Provisions:
                  <span className="mx-1 md:mx-2 font-normal">
                    Only Material
                  </span>
                </p>
              </div>
              <div>
                <p className="text-left flex md:text-lg text-gray-900 font-medium">
                  Projects Completed:
                  <span className="mx-1 md:mx-2 font-normal">20</span>
                </p>
              </div>

              <div className="flex flex-wrap flex-row text-left">
                <div>
                  <p className="md:text-lg text-gray-900 font-medium ">
                    Preference Locations:
                  </p>
                </div>
                <div className="mx-1 p-0 md:p-0.5  font-normal">Pune,</div>
                <div className="mx-1 p-0 md:p-0.5  font-normal">Meerut,</div>
                <div className="mx-1 p-0 md:p-0.5  font-normal">Delhi,</div>
                <div className="mx-1 p-0 md:p-0.5  font-normal">Bangalore,</div>
                <div className="mx-1 p-0 md:p-0.5  font-normal">Hyderabad</div>
              </div>
              <div>
                <p className="mt-1 leading-relaxed hover:underline hover:text-black text-base text-gray-900 font-medium ">
                  MasterContractor score:
                  <span className="mx-1 font-normal">66%</span>
                </p>
                <p className="leading-relaxed hover:underline hover:text-black text-base text-gray-900 font-medium ">
                  MC Id:
                  <span className="mx-1 font-normal">{props.card.id}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const PaginationComponet = () => {
  return (
    <>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-center sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
          >
            Previous
          </a>
          <a
            href="#"
            className="ml-4 relative inline-flex items-center px-6 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
          <div>
            {/* <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">10</span> of{" "}
              <span className="font-medium">97</span> results
            </p> */}
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <AiOutlineLeft className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                className="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <AiOutlineRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
const Services = () => {
  return (
    <>
      <HeroContractors
        img={`/Images/ba.jpg`}
        title={"Explore our Contractors!!!"}
        subtitle={"Build your dream project!"}
      />

      <div className="flex flex-col md:flex-row justify-around p-1 md:p-5 xl:p-10 container mx-auto">
        <div className="xl:mx-10 flex-row align-items-center justify-center md:justify-start ">
          <div className="flex flex-row flex-wrap sm:flex-nowrap mx-0 md:mx-8 justify-center  md:flex-col">
            <button
              // onClick={() => setActiveCardSection("Contractor")}
              className="m-2  flex justify-center  text-white bg-yl border-0 mx-2 xl:mx-2 py-2 px-4  focus:outline-none hover:bg-yl rounded text-lg"
            >
              State
            </button>
            <button
              // onClick={() => setActiveCardSection("Contractor")}
              className="m-2  flex justify-center  text-white bg-yl border-0 mx-2 xl:mx-2 py-2 px-4  focus:outline-none hover:bg-yl rounded text-lg"
            >
              Score
            </button>
            <button
              // onClick={() => setActiveCardSection("Contractor")}
              className="m-2 flex justify-center  text-white bg-yl border-0 xl:mx-2 py-2 px-4  focus:outline-none hover:bg-yl rounded text-lg "
            >
              Carpenter
            </button>
            <button
              // onClick={() => setActiveCardSection("Contractor")}
              className="m-2 flex justify-center  text-white bg-yl border-0 mx-2 xl:mx-2 py-2 px-4  focus:outline-none hover:bg-yl rounded text-lg "
            >
              Designer
            </button>
            <button
              // onClick={() => setActiveCardSection("Contractor")}
              className="m-2  flex justify-center  text-white bg-yl border-0 mx-2 xl:mx-2 py-2 px-4  focus:outline-none hover:bg-yl rounded text-lg"
            >
              Contractor
            </button>
          </div>
          <div className="flex -ml-2 items-center justify-center  ">
            <div className="flex-row  h-auto overflow-hidden flex items-center justify-center">
              <div className="relative mr-2 my-2">
                <input
                  type="search"
                  className="w-56 focus:outline-none bg-purple-white shadow rounded border-0 p-3"
                  placeholder="seacrh contractor"
                />
                <div className="absolute ml-1 mt-1.5 left-3/4 top-1/4 ">
                  <VscSearch color={"#ffc107"} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          {CARDS.map((card) => {
            return (
              <Link
                to={{
                  pathname: "/profile",
                  id: `${card.id}`,
                }}
                onClick={() => {
                  // eslint-disable-next-line no-restricted-globals
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                {" "}
                <Card card={card} />
              </Link>
            );
          })}
        </div>
      </div>
      <PaginationComponet />
    </>
  );
};

export default Services;
