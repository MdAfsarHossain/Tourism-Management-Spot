import PropTypes from "prop-types";
import { Typewriter } from "react-simple-typewriter";
import SingleTouristsSpot from "./SingleTouristsSpot";

const HomeTouristsSpots = ({ allTouristsSpot }) => {
  return (
    <div>
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
        {allTouristsSpot.slice(0, 6)?.map((singleTouristsSpot) => (
          <SingleTouristsSpot
            key={singleTouristsSpot._id}
            singleTouristSpot={singleTouristsSpot}
          ></SingleTouristsSpot>
        ))}
      </div>
    </div>
  );
};

HomeTouristsSpots.propTypes = {
  allTouristsSpot: PropTypes.array,
};

export default HomeTouristsSpots;
