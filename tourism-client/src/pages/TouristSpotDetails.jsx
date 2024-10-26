import { IoIosPeople } from "react-icons/io";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { LuDollarSign } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router-dom";

const TouristSpotDetails = () => {
  const { _id } = useParams();
  const {
    touristsSpotName,
    countryName,
    description,
    averageCost,
    travelTime,
    location,
    imageUrl,
    seasonality,
    totalVisitorsPerYear,
    email,
    name,
  } = useLoaderData();

  return (
    <div className="px-10">
      {/* Summary */}
      <div className="shadow-lg py-5 px-5 rounded-lg flex flex-col lg:flex-row gap-10 justify-between lg:items-center border-2 border-gray-100">
        {/* Details */}
        <div className="flex flex-col gap-3">
          <div className="relative w-fit">
            <h1 className="font-bold text-4xl w-fit border-0">
              {touristsSpotName}
            </h1>
            <p
              className={`hidden md:block absolute bottom-0 -right-28 px-5 rounded-lg text-black font-semibold w-fit ${
                seasonality?.toLowerCase() == "winter"
                  ? "bg-sky-300"
                  : "bg-lime-300"
              }`}
            >
              {seasonality}
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col md:flex-row gap-5 lg:gap-10">
            <div className="">
              <h1 className="font-bold text-lg text-gray-700">Average Cost</h1>
              <div className="flex flex-row justify-start items-center gap-1">
                <LuDollarSign />
                <p className="text-gray-600">{averageCost}</p>
              </div>
            </div>
            <div className="">
              <h1 className="font-bold text-lg text-gray-700">Travel Time</h1>
              <div className="flex flex-row justify-start items-center gap-1">
                <IoTimeOutline />
                <p className="text-gray-600">
                  {travelTime} days {travelTime - 1} nights
                </p>
              </div>
            </div>
            <div className="">
              <h1 className="font-bold text-lg text-gray-700">
                Total Visitors Per Year
              </h1>
              <div className="flex flex-row justify-start items-center gap-1">
                <IoIosPeople />
                <p className="text-gray-600">{totalVisitorsPerYear}</p>
              </div>
            </div>
            <div className="">
              <h1 className="font-bold text-lg text-gray-700">Location</h1>
              <div className="flex flex-row justify-start items-center gap-1">
                <IoLocationOutline />
                <p className="text-gray-600">{location}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Country Name */}
        <div className="">
          <h1 className="text-3xl uppercase text-gray-800 font-semibold">
            Country
          </h1>
          <p className="text-2xl font-bold text-green-500">{countryName}</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10 text-xl text-justify mb-10">
        <div className="border-b-2 pb-1 mb-2">
          <h1 className="text-3xl font-bold uppercase text-gray-700">
            Description
          </h1>
        </div>
        <h1>{description}</h1>
      </div>

      {/* Image */}
      <div className="w-full">
        <img
          className="w-full object-fill h-96 lg:h-[550px] rounded-lg"
          src={imageUrl}
          alt=""
        />
      </div>

      {/* Author */}
      <div className=" mt-10">
        <div className="border-b-2 pb-1">
          <h1 className="text-3xl font-bold uppercase">Author Info</h1>
        </div>
        <div className="mt-2">
          <div className="flex flex-row justify-start items-center gap-1 font-bold">
            <RiAdminLine />
            <h1 className=""> {name}</h1>
          </div>
          <div className="flex flex-row justify-start items-center gap-1 font-bold ">
            <MdOutlineMail />
            <h1 className="text-gray-700"> {email}</h1>
          </div>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="mt-10">
        <div className="border-b-2 pb-1 mb-2">
          <h1 className="text-3xl font-bold uppercase">Quick Summary</h1>
        </div>
        <p className="text-xl text-justify">{description}</p>
      </div>

      {/* Map */}
      <div className="mt-10 mb-10">
        <div className="border-b-2 pb-1 mb-2">
          <h1 className="text-3xl font-bold uppercase">Map</h1>
        </div>
        <div className="w-full h-64 rounded-lg overflow-hidden justify-center items-center text-center">
          <h1 className="font-bold">Comming Soon.........</h1>
        </div>
      </div>

      {/* Add Review */}
      <div className="">
        <div className="border-b-2 pb-1 mb-2">
          <h1 className="text-3xl font-bold uppercase">Add Review</h1>
        </div>
        <form className="flex flex-col gap-3">
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border-2 p-3 rounded-sm"
          />
        </form>

        <div className="w-full mt-10 h-64 rounded-lg overflow-hidden justify-center items-center text-center">
          <h1 className="font-bold">Comming Soon.........</h1>
        </div>
      </div>

      {/* All Reviews */}
      <div className="mt-10 mb-10">
        <div className="border-b-2 pb-1 mb-2">
          <h1 className="text-3xl font-bold uppercase">All Reviews</h1>
        </div>
        {/* <p>Comming Soon.........</p> */}
        <div className="flex flex-col gap-5">
          {/* Review 1 */}
          {/* <div className="border-2 p-3 rounded-lg">
            <h2>Reviewer Name:</h2>
            <p>Review Title:</p>
            <p>Review Content:</p>
            <p>Review Date:</p>
          </div> */}
          {/* Review 2 */}
          {/* <div className="border-2 p-3 rounded-lg mt-5">
            <h2>Reviewer Name:</h2>
            <p>Review Title:</p>
            <p>Review Content:</p>
            <p>Review Date:</p>
          </div> */}
        </div>

        {/*  */}
        <div className="w-full h-64 rounded-lg overflow-hidden justify-center items-center text-center">
          <h1 className="font-bold">Comming Soon.........</h1>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotDetails;
