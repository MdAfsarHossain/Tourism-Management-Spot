import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SingleTouristsSpot = ({ singleTouristSpot }) => {
  const {
    _id,
    touristsSpotName,
    countryName,
    description,
    averageCost,
    travelTime,
    location,
    imageUrl,
    seasonality,
    totalVisitorsPerYear,
  } = singleTouristSpot;

  return (
    <div data-aos="flip-left" className="shadow-lg rounded-lg hover:scale-105">
      {/* Image and Location */}
      <div className="h-60 relative">
        <img className="rounded w-full h-full" src={imageUrl} alt="" />
        <div
          className="absolute bottom-3 bg-yellow-500 ml-2 py-[2px]"
          style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 95%, 0% 100%)" }}
        >
          <p className=" px-10 text-center font-bold  text-black">{location}</p>
        </div>
      </div>
      {/* Details */}
      <div className="px-5 mt-3">
        {/* Spot Name */}
        <div className="">
          <h1 className="font-bold text-2xl">{touristsSpotName}</h1>
        </div>
        {/* Average Cost */}
        <div className="">
          <h1 className="text-lg">Average Cost: ${averageCost}</h1>
        </div>
        {/* Total Visitors */}
        <div className="">
          <h1 className="text-lg">
            Total Visitors Per Year: {totalVisitorsPerYear}
          </h1>
        </div>
        {/* Seasonality */}
        <div className="">
          <h1 className="text-lg text-gray-700">
            Seasonality:{" "}
            <span
              className={`px-5 rounded-lg text-black font-semibold ${
                seasonality?.toLowerCase() == "winter"
                  ? "bg-sky-300"
                  : "bg-lime-300"
              }`}
            >
              {seasonality}
            </span>
          </h1>
        </div>
        {/* Time */}
        <div className="flex flex-row justify-start items-center gap-2 text-gray-600">
          <IoTimeOutline className="text-xl" />
          <h1 className="text-lg">
            {travelTime} days {travelTime - 1} nights
          </h1>
        </div>
        {/* View Details */}
        <div className="mt-5 flex justify-center items-center mb-8">
          {/* <Link
            to={`/touristSpotDetails/${_id}`}
            className="bg-green-500 text-white font-bold rounded-2xl px-16 py-2 border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all"
          >
            View Details
          </Link> */}

          <Link
            to={`/touristSpotDetails/${_id}`}
            className="relative inline-block text-lg group"
          >
            <span className="relative z-10 block px-16 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-green-500 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-16 py-3 rounded-lg bg-green-50"></span>
              <span className="absolute left-0 w-full h-48  transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-green-500 group-hover:-rotate-180 ease"></span>
              <span className="relative">View Details</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-green-700 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </Link>

          {/* <Link> */}
          <a href="#_"></a>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

SingleTouristsSpot.propTypes = {
  singleTouristSpot: PropTypes.object.isRequired,
};

export default SingleTouristsSpot;
