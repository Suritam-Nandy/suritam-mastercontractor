import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const FooterNew = () => {
  return (
    <footer className="text-gray-900 body-font">
      <div className="bg-yl">
        <div className="container mx-auto px-6 pt-4 pb-6">
          <div className="flex flex-wrap">
            <div className="md:mb-0 mb-4 w-full md:w-1/3 text-center md:text-left flex flex-col justify-start items-center">
              <h3 className="uppercase text-xl mb-6 font-bold">
                master contractor
              </h3>

              <div className="max-w-full h-auto flex justify-center items-center bg-white">
                <img
                  className="object-contain h-48 w-auto"
                  src="/Images/mastercontractor-logo-01.png"
                  alt="logo"
                ></img>
              </div>
              <div className="m-2 mt-5  flex flex-row justify-center items-center">
                <a
                  href="https://www.facebook.com/mastercontractor.india/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="mx-2 text-gray-900" size={36} />
                </a>
                <a
                  href="https://www.instagram.com/mastercontractor.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="mx-2 text-gray-900" size={36} />
                </a>
                <a
                  href="https://www.twitter.com/ "
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="mx-2 text-gray-900" size={36} />
                </a>
                <a
                  href="https://www.linkedin.com/ "
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="mx-2 text-gray-900" size={36} />
                </a>
              </div>
            </div>

            <div className="w-full my-5 md:my-0 flex px-4 md:px-10 md:w-1/3  flex-col">
              <h3 className="uppercase text-xl mb-3 md:mb-6 font-bold flex justify-center items-center">
                Address
              </h3>
              <p className="mb-3 font-medium flex text-center justify-center items-center">
                EvergreenCube Solutions Pvt.LTD MIIC- MNIT, Naya Bass, Malviya
                Nagar, Jaipur, Rajasthan 302017
              </p>
              <div className="mx-1 ">
                <a
                  className="flex-row flex text-left justify-center items-start cursor-pointer"
                  rel="noopener noreferrer"
                  href="tel:+918003909540"
                >
                  <IoIosCall className="mx-1 text-gray-900" size={36} />
                  <p className="ml-1 text-2xl font-semibold"> 8003909540 </p>
                </a>
              </div>
              <div className="flex-row flex text-left justify-center items-start cursor-pointer">
                <div className="bg-trueGray-200  border max-w-max rounded-lg text-grey900 text-2xl md:text-2xl font-medium px-3 py-1 transform transition-transform duration-200 hover:-translate-y-1 focus:outline-none my-2">
                  Partner With Us
                </div>
              </div>
            </div>

            <div className="w-full flex flex-wrap mx-0 md:px-10 md:w-1/3 text-center flex-col justify-start items-center">
              <h3 className="uppercase text-xl mb-4 font-bold">Contact us</h3>
              <div>
                <input
                  className="w-3/4 bg-white rounded-lg border border-gray-400 focus:outline-none focus:border-offWhite text-base px-4 py-2 mb-2"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="w-3/4 bg-white rounded-lg border border-gray-400 focus:outline-none focus:border-offWhite text-base px-4 py-2 mb-2"
                  type="text"
                  placeholder="Email Address"
                />
                <input
                  className="w-3/4 bg-white rounded-lg border border-gray-400 focus:outline-none focus:border-offWhite text-base px-4 py-2 mb-2"
                  type="text"
                  placeholder="Company Name"
                />
                <input
                  className="w-3/4 h-16 bg-white rounded-lg border border-gray-400 focus:outline-none focus:border-offWhite text-base px-4 py-2 mb-2 justify-start items-start"
                  type="text"
                  placeholder="Message"
                />
              </div>

              <button className="text-gray-900 bg-offWhite border-0 py-2 px-6 focus:outline-none hover:bg-offWhite rounded-lg text-lg flex items-start justify-start">
                Send
              </button>
            </div>
          </div>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=918003909540&text=Hello%20%22Master%20Contractor%22%0A%0APankaj%20this%20side%20%0A%0ALooking%20for%20contractors"
            className="floatWhatsapp flex justify-center items-center"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="flex justify-center items-center" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
