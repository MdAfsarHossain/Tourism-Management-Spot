import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TeamMembers = () => {
  return (
    <div className="mt-32">
      {/* Heading */}
      <div className="mt-10">
        <h1 className="text-3xl lg:text-4xl font-bold uppercase text-center">
          Meet{" "}
          <span className="text-green-600">
            <Typewriter
              words={["Our Team"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>{" "}
          Leaders
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 mb-20">
        {/* Member -1 */}
        <div
          data-aos="flip-right"
          className="shadow-xl pb-4 hover:scale-105 cursor-pointer"
        >
          <div className="h-72 border-0 flex flex-col justify-center items-center py-3">
            <img className="h-full" src="/user-avatar-male-5.png" alt="" />
          </div>
          <div className="px-5 flex flex-col gap-1">
            <h1 className="font-bold text-lg">Md. Afsar Hossain</h1>
            <p className="font-bold text-gray-500">CEO</p>
          </div>
        </div>

        {/* Member - 2 */}
        <div
          data-aos="flip-left"
          className="shadow-xl hover:scale-105 cursor-pointer"
        >
          <div className="h-72 border-0 flex flex-col justify-center items-center py-3">
            <img className="h-full" src="/6590630.webp" alt="" />
          </div>
          <div className="px-5 flex flex-col gap-1">
            <h1 className="font-bold text-lg">Rene McPherson</h1>
            <p className="font-bold text-gray-500">CEO</p>
          </div>
        </div>

        {/* Member - 3 */}
        <div
          data-aos="flip-right"
          className="shadow-xl pb-4 hover:scale-105 cursor-pointer"
        >
          <div className="h-72 border-0 flex flex-col justify-center items-center py-3">
            <img className="h-full" src="/user-avatar-male-5.png" alt="" />
          </div>
          <div className="px-5 flex flex-col gap-1">
            <h1 className="font-bold text-lg">Riley Paul</h1>
            <p className="font-bold text-gray-500">CEO</p>
          </div>
        </div>

        {/* Member - 4 */}
        <div
          data-aos="flip-left"
          className="shadow-xl hover:scale-105 cursor-pointer"
        >
          <div className="h-72 border-0 flex flex-col justify-center items-center py-3">
            <img className="h-full" src="/6590630.webp" alt="" />
          </div>
          <div className="px-5 flex flex-col gap-1">
            <h1 className="font-bold text-lg">Noor Shah</h1>
            <p className="font-bold text-gray-500">CEO</p>
          </div>
        </div>
        {/* End of Teams cards */}
      </div>
    </div>
  );
};

export default TeamMembers;
