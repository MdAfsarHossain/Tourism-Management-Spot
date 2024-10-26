import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import SingleCountry from "./SingleCountry";

const AllCountries = () => {
  const [allCountries, setAllCountries] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tourism-server-opal.vercel.app/allCountries");
        // const response = await fetch("http://localhost:5000/allCountries");
        const data = await response.json();
        setAllCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* Heading */}
      <div className="mt-10">
        <h1 className="text-3xl lg:text-4xl font-bold uppercase text-center">
          All{" "}
          <span className="text-green-600">
            <Typewriter
              words={["Countries"]}
              loop={0}
              cursor
              cursorStyle="."
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>{" "}
        </h1>
      </div>

      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 mb-20">
        {
            allCountries.map(country => 
                <SingleCountry
                key={country._id}
                country={country}
                ></SingleCountry>
            )
        }
      </div>
    </div>
  );
};

export default AllCountries;
