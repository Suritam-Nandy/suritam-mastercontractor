import React from "react";

const HowItWorks = () => {
  // const [activeHeroButton, setActiveSearchPlaceholder] = useState(
  //   "RequestQuotes"
  // );

  return (
    <section className="w-full  mx-auto my-8 mb-24">
      <div className="flex flex-col text-center w-full mb-5">
        <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900">
          How it works
        </h1>
      </div>
      <div className="md:max-w-screen-lg  mx-auto">
        <div className="flex flex-col md:flex-row justify-center mx-auto w-full ">
          <div
            className="bg-gray-100 text-lg text-black w-72 p-10 my-4 mx-auto md:mx-8 flex flex-col "
            style={{
              "clip-path":
                "polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 0 50%, 0% 0%)",
            }}
          >
            <div className="flex justify-start w-14 mb-6 ">
              <img src="/Images/plan.png" alt="HIW1"></img>
            </div>
            <div className=" flex justify-center items-center">
              Plan your model and browse our projects for more in
            </div>
            spiration.
          </div>
          <div
            className="bg-gray-100 text-lg text-black w-72 p-16 my-4 mx-auto md:mx-8 flex flex-col"
            style={{
              "clip-path":
                "polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)",
            }}
          >
            <div className="flex justify-start w-14 mb-6">
              <img src="/Images/rating.png" alt="HIW2"></img>
            </div>
            <div className=" flex justify-center items-center">
              Pick a Company from our wide range of contractors.
            </div>
          </div>

          <div
            className="bg-gray-100 text-lg text-black w-72 p-16 my-4 mx-auto md:mx-8 flex flex-col"
            style={{
              "clip-path":
                "polygon(100% 0%, 100% 50%, 100% 100%, 0% 100%, 15% 50%, 0% 0%)",
            }}
          >
            <div className="flex justify-start w-14 mb-6">
              <img src="/Images/selection.png" alt="HIW3"></img>
            </div>
            <div className=" flex justify-center items-center">
              Hire a contractor that fits your need.
            </div>
          </div>
        </div>

        {/* <div
            className="  flex items-center justify-center"
            style={{ background: "transparent" }}
          >
            {activeHeroButton === "RequestQuotes" && (
              <SearchBar placeholder={"What would wou like to build?"} />
            )}

            {activeHeroButton === "BrowseContractors" && (
              <SearchBar placeholder={"Search Contracors"} />
            )}

            <button className="lg:ml-3 ml-1 inline-flex text-gray-700  bg-gray-200 border-0 py-1 md:px-6 px-5 focus:outline-none hover:bg-gray-300 rounded md:text-lg">
              Search
            </button>
          </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;
