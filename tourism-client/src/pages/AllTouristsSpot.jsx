import React from "react";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Footer from "../components/Footer";
import SingleTouristsSpot from "../components/SingleTouristsSpot";

const AllTouristsSpot = () => {
  const allTouristsSpot = useLoaderData();
  // console.log(allData);

  return (
    <div className="">
      <div className="px-10">
        {/* Heading */}
        <div className="mt-10">
          <h1 className="text-3xl lg:text-4xl font-bold uppercase text-center">
            All{" "}
            <span className="text-green-600">
              <Typewriter
                words={["Toursists"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{" "}
            Spot
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 mb-20">
          {allTouristsSpot?.map((singleTouristSpot) => (
            <SingleTouristsSpot
              key={singleTouristSpot._id}
              singleTouristSpot={singleTouristSpot}
            ></SingleTouristsSpot>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllTouristsSpot;
