import React from "react";
import HeroContractors from "../components/Hero/HeroContractors";

const About = () => {
  return (
    <>
      <div className="mx-auto p-6">
        <div className="mt-4">
          <div className="">
            <h1 className="flex items-center justify-center text-3xl font-semibold title-font text-gray-900 my-6">
              Our Story
            </h1>
          </div>
          <div className="mt-4 border-indigo-400 border md:w-full md:min-h-96 h-full rounded-xl">
            <div className="md:p-4 px-12 p-8">
              <p className="text-base my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                maximus ornare semper. Aliquam sagittis elementum quam, vel
                accumsan sapien interdum non. Nam condimentum urna nec enim
                bibendum, sit amet egestas tellus pellentesque. Maecenas tempor
                fermentum diam, eget tempus leo vestibulum vitae. Nam eu auctor
                nibh, id lobortis lectus. Sed iaculis neque vel tempus rhoncus.
                Duis pulvinar sed turpis id sollicitudin. Aliquam semper maximus
                lacus sed tincidunt.
              </p>
              <p className="text-base my-2">
                Curabitur lacinia dui non aliquet dignissim. Maecenas ut est
                molestie, consequat velit eu, pellentesque augue. Aliquam erat
                volutpat. Morbi gravida sem ac purus tempus, vulputate pharetra
                sapien convallis. Pellentesque quis magna turpis. Duis ultricies
                et augue nec scelerisque. Suspendisse eget odio mi. Nunc
                vestibulum risus et aliquam viverra. Ut facilisis, metus eget
                pharetra laoreet, sapien mi suscipit nisi, et bibendum turpis
                leo et ante. Donec ipsum urna, commodo in ultrices cursus,
                posuere in arcu. Curabitur placerat at nunc a scelerisque. Cras
                imperdiet sodales lacus, a pellentesque ligula iaculis eget.
                Vivamus fermentum dolor lorem, sed pretium orci sollicitudin eu.
                Donec consectetur consequat metus et dictum. Sed tincidunt
                consectetur dignissim.
              </p>
              <p className="text-base my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                maximus ornare semper. Aliquam sagittis elementum quam, vel
                accumsan sapien interdum non. Nam condimentum urna nec enim
                bibendum, sit amet egestas tellus pellentesque. Maecenas tempor
                fermentum diam, eget tempus leo vestibulum vitae. Nam eu auctor
                nibh, id lobortis lectus. Sed iaculis neque vel tempus rhoncus.
                Duis pulvinar sed turpis id sollicitudin. Aliquam semper maximus
                lacus sed tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const about = () => {
  return (
    <>
      <HeroContractors
        img={`/Images/ba.jpg`}
        title={"Master Contractor"}
        subtitle={"We build your dream"}
      />
      <About />
    </>
  );
};

export default about;
