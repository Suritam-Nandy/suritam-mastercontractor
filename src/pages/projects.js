import React from "react";
import HeroContractors from "../components/Hero/HeroContractors";

import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";

const PROJECT = [
  {
    id: 10023,
    date: "10-10-2021",
    project: "Carpentary",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
    img:
      "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 10023,

    date: "10-10-2021",
    project: "Precast Boundary Wall",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
  },
  {
    id: 10023,

    date: "10-10-2021",
    project: "Flooring",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
  },
  {
    id: 10023,

    date: "10-10-2021",
    project: "Flooring",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
  },
  {
    id: 10023,

    date: "10-10-2021",
    project: "Flooring",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
  },
  {
    id: 10023,

    date: "10-10-2021",
    project: "Flooring",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
  },
  {
    id: 10023,

    date: "10-10-2021",
    project: "Flooring",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
  },
  {
    id: 10023,

    date: "10-10-2021",
    project: "Flooring",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
  },
  {
    id: 10023,

    date: "10-10-2021",
    project: "Flooring",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
  },
  {
    id: 10023,

    date: "10-10-2021",
    project: "Flooring",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
  },
  {
    id: 10023,

    date: "10-10-2021",
    project: "Flooring",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
  },
  {
    id: 10023,

    date: "10-10-2021",
    project: "Flooring",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
  },
  {
    id: 10023,

    date: "10-10-2021",
    project: "Flooring",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
  },
  {
    id: 10023,

    date: "10-10-2021",
    project: "Flooring",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
  },
  {
    id: 10023,

    date: "10-10-2021",
    project: "Flooring",
    company: "Aggarwal Construction",
    loaction: "Delhi",
    projectLocation: "Delhi",
    projectType: "Building work",
    projectSize: "Rs. 50,000",
    Rates: "Rs, 1,000 - 10,000",
    description:
      "Copper mug pitchfork presseard tote bag. authentic tumeric try-hard chambray",
  },
];

const Projects = () => {
  return (
    <>
      <div className="w-full mx-auto mt-10 md:mt-28">
        <div className="flex flex-wrap mt-2 md:mx-8 justify-center items-start">
          {PROJECT.map((project, index) => {
            return (
              <div
                className="flex justify-center items-center w-96 max-h-min md:w-96 mx-2 my-4 md:mx-5"
                key={project.index}
              >
                <div className="w-full p-2 bg-trueGray-100 rounded-xl">
                  <div className="w-full pt-1 pb-2 px-1 py-2 md:px-2 xl:px-6 text-gray-800 flex flex-col justify-between divide-y-2 divide-gray-900">
                    <div className=" mt-4 ">
                      <h2 className="text-2xl text-gray-900 font-bold title-font  pr-24">
                        {project.project}
                      </h2>
                      <div className="text-left text-lg flex md:text-xl text-gray-900 font-medium my-1">
                        Company:
                        <span className="mx-1 md:mx-2 font-normal">
                          {project.company}
                        </span>
                      </div>
                      <p className="flex justify-start text-lg text-gray-900">
                        <VscLocation
                          className="mt-1"
                          size={22}
                          color={"#ffc107"}
                        />
                        {project.projectLocation}
                      </p>
                      <div className="flex justify-center  -mt-6">
                        <MdDateRange size={22} color={"#ffc107"} />
                        {project.date}
                      </div>
                    </div>

                    <div className="">
                      <div className="m-1 md:m-2 py-1 px-4 md:px-4 ">
                        <div></div>
                        <div className="mx-1 "></div>
                        <div>
                          <p className="text-left flex md:text-lg text-gray-900 font-medium">
                            Project type:
                            <span className="mx-1 md:mx-2 font-normal">
                              {project.projectType}
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="text-left flex md:text-lg text-gray-900 font-medium">
                            Project size:
                            <span className="mx-1 md:mx-2 font-normal">
                              {project.projectSize}
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="text-left flex md:text-lg text-gray-900 font-medium">
                            Rates:
                            <span className="mx-1 md:mx-2 font-normal">
                              {project.Rates}
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-wrap flex-row text-left">
                          <div>
                            <p className="  text-base md:text-lg text-gray-900 font-medium ">
                              Description:
                            </p>
                          </div>
                          <div className="pt-0.5 px-1 font-normal">
                            {" "}
                            {project.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end -mt-2  pb-4 pr-4">
                    <p className="  text-base text-gray-900 font-medium ">
                      Project Id:
                    </p>
                    {project.id}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-auto  flex-wrap flex justify-center items-center my-3">
          <a
            className="flex-row flex text-left justify-start items-start m-3 cursor-pointer"
            rel="noopener noreferrer"
            href="tel:+918003909540"
          >
            <IoCallOutline className="mr-1" size={32} />
            <p className="ml-1 text-2xl font-semibold"> 8003909540 </p>
          </a>
          <a
            className="flex-row flex text-left justify-start items-start m-3 cursor-pointer"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=918003909540&text=Hello%21%20"
          >
            <FaWhatsapp className="mr-1" size={32} />
            <p className="ml-1 text-2xl font-semibold"> 8003909540 </p>
          </a>
        </div>
      </div>
    </>
  );
};

const projects = () => {
  return (
    <>
      <HeroContractors
        img={`/Images/ba2.jpg`}
        title={"Our on going Projects"}
        headingColor={"text-gray-900"}
      />
      <Projects />
    </>
  );
};

export default projects;
