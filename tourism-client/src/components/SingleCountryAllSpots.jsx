import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import SingleTouristsSpot from "./SingleTouristsSpot";

const SingleCountryAllSpots = () => {
  const { countryName } = useParams();
  const countryUpdateName = countryName.charAt(0).toUpperCase() + countryName.slice(1);
  const singlecountryAllSpots = useLoaderData();
  return (
    <div className="px-10">
      {/* <h1>Single Country All Spots: {countryName.charAt(0).toUpperCase() + countryName.slice(1)}</h1> */}
      {/* <h1>Single Country All Spots: {countryName}</h1> */}
      {/* <h1>Total Country: {singlecountryAllSpots.length}</h1> */}

      {/* Heading */}
      <div className="mt-10">
        <h1 className="text-4xl font-bold uppercase text-center">
          {" "}
          <span className="text-green-600">
            <Typewriter
              words={[countryUpdateName]}
              loop={0}
              cursor
              cursorStyle="."
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>{" All Spots"}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 mb-20">
        {singlecountryAllSpots?.map((singlecountry) => (
          <SingleTouristsSpot
            key={singlecountry._id}
            singleTouristSpot={singlecountry}
          ></SingleTouristsSpot>
        ))}
      </div>
    </div>
  );
};

export default SingleCountryAllSpots;
