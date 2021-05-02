/* eslint-disable no-restricted-globals */
import React, { useState, useRef } from "react";

import HeroContractors from "../components/Hero/HeroContractors";
const signin = () => {
  // const [activeCardSection, setActiveCardSection] = useState("Sign In");
  const SignInCard = () => {
    const [activeCardSection, setActiveCardSection] = useState("SignIn");
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();
    return (
      <>
        <div className="" ref={myRef}>
          <div className="bg-grey-lighter min-h-100  ">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 py-20 md:py-24">
              <div className="bg-trueGray-100 px-5 md:px-6 py-8 rounded shadow-md text-black w-full">
                {activeCardSection === "SignIn" && (
                  <h1 className="mb-8 text-3xl text-center">Sign In</h1>
                )}
                {activeCardSection === "SignUp" && (
                  <h1 className="mb-8 text-3xl text-center">Sign Up</h1>
                )}
                {activeCardSection === "SignUp" && (
                  <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="fullname"
                    placeholder="Full Name"
                  />
                )}
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                />
                {/* {activeCardSection === "SignIn" && <span>Sign In</span>} */}
                {activeCardSection === "SignUp" && (
                  <input
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="confirm_password"
                    placeholder="Confirm Password"
                  />
                )}
                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-700 focus:outline-none my-1"
                >
                  {activeCardSection === "SignIn" && <span>Log In</span>}
                  {activeCardSection === "SignUp" && (
                    <span>Create Account</span>
                  )}
                </button>
                {activeCardSection === "SignUp" && (
                  <div className="text-start text-sm text-grey-900 mt-4 px-1.5">
                    By signing up, you agree to the
                    <a
                      className="no-underline border-b border-grey-900 text-grey-900 mx-0.5"
                      href="/signin"
                    >
                      Terms of Service
                    </a>{" "}
                    and
                    <a
                      className="no-underline border-b border-grey-900 text-grey-900 mx-0.5"
                      href="/signin"
                    >
                      Privacy Policy.
                    </a>
                  </div>
                )}
              </div>

              <div className="text-grey-900 mt-6">
                Don't have an account?
                {activeCardSection === "SignIn" && (
                  <button
                    className="focus:outline-none no-underline border-b border-blue-500 text-blue-500 ml-2"
                    onClick={() => setActiveCardSection("SignUp")}
                  >
                    {" "}
                    <span onClick={executeScroll}>Sign Up</span>.
                  </button>
                )}
                {activeCardSection === "SignUp" && (
                  <button
                    className="focus:outline-none no-underline border-b border-blue-500 text-blue-500 ml-2"
                    onClick={() => setActiveCardSection("SignIn")}
                  >
                    {" "}
                    <span onClick={executeScroll}>Sign In</span>.
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div>
        <HeroContractors
          img={`/Images/ba.jpg`}
          title={"Welcome to Master Contractor"}
          subtitle={" "}
        />
      </div>
      <SignInCard />
    </>
  );
};

export default signin;
