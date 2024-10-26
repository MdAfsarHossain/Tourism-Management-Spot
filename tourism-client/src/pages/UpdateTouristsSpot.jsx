import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const UpdateTouristsSpot = () => {
  const { user } = useContext(AuthContext);
  const { _id } = useParams();
  const navigate = useNavigate();
  //   console.log(_id);
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
  } = useLoaderData();
  //   console.log(allData);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const touristsSpotName = data.touristsSpotName;
    const countryName =
      data.countryName.charAt(0).toUpperCase() + data.countryName.slice(1);
    const imageUrl = data.imageUrl;
    const location = data.location;
    const description = data.description;
    const averageCost = data.averageCost;
    const travelTime = data.travelTime;
    const totalVisitorsPerYear = data.totalVisitorsPerYear;
    const seasonality = data.seasonality;

    const updateTouristsSpotData = {
      touristsSpotName,
      countryName,
      description,
      averageCost,
      travelTime,
      location,
      imageUrl,
      seasonality,
      totalVisitorsPerYear,
    };

    // console.log(updateTouristsSpotData);

    // Send data to server site
    // fetch(`http://localhost:5000/updateTouristsSpot/${_id}`, {
    fetch(`https://tourism-server-opal.vercel.app/updateTouristsSpot/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTouristsSpotData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Tourists Spots Data Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/allTouristsSpot");
        }
      });
  };

  return (
    <div className="lg:px-10">
      {/* Heading */}
      <div className="mt-10">
        <h1 className="text-2xl lg:text-4xl font-bold uppercase text-center">
          Updated{" "}
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
          Spots
        </h1>
      </div>

      <section className="p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-2xl">
            <div className="grid grid-cols-6 gap-4 col-span-full">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="touristsSpotName" className="text-base">
                  Tourists Spot Name
                </label>
                <input
                  id="touristsSpotName"
                  defaultValue={touristsSpotName}
                  type="text"
                  name="touristsSpotName"
                  placeholder="Tourists Spot Name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                  {...register("touristsSpotName", { required: true })}
                />
                {errors.touristsSpotName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="countryName" className="text-base">
                  Country Name
                </label>
                <input
                  id="countryName"
                  defaultValue={countryName}
                  type="text"
                  name="countryName"
                  placeholder="Country Name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                  {...register("countryName", { required: true })}
                />
                {errors.countryName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="imageUrl" className="text-base">
                  Image URL
                </label>
                <input
                  id="imageUrl"
                  defaultValue={imageUrl}
                  type="text"
                  name="imageUrl"
                  placeholder="Image URL"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                  {...register("imageUrl", { required: true })}
                />
                {errors.imageUrl && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="location" className="text-base">
                  Location
                </label>
                <input
                  id="location"
                  defaultValue={location}
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                  {...register("location", { required: true })}
                />
                {errors.location && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-base">
                  Short Description
                </label>
                <textarea
                  id="bio"
                  defaultValue={description}
                  placeholder="Write short description"
                  name="description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                  {...register("description", { required: true })}
                ></textarea>
                {errors.description && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="averageCost" className="text-base">
                  Average Cost
                </label>
                <input
                  id="averageCost"
                  defaultValue={averageCost}
                  type="number"
                  name="averageCost"
                  placeholder="Average Cost"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                  {...register("averageCost", { required: true })}
                />
                {errors.averageCost && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="travelTime" className="text-base">
                  Travel Time
                </label>
                <input
                  id="travelTime"
                  defaultValue={travelTime}
                  type="number"
                  name="travelTime"
                  placeholder="Travel Time"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                  {...register("travelTime", { required: true })}
                />
                {errors.travelTime && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="totalVisitorsPerYear" className="text-base">
                  Total Visitors Per Year
                </label>
                <input
                  id="totalVisitorsPerYear"
                  defaultValue={totalVisitorsPerYear}
                  type="number"
                  name="totalVisitorsPerYear"
                  placeholder="Total Visitors Per Year"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                  {...register("totalVisitorsPerYear", { required: true })}
                />
                {errors.totalVisitorsPerYear && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-full">
                <label htmlFor="seasonality" className="text-base">
                  Seasonality
                </label>
                <input
                  id="seasonality"
                  defaultValue={seasonality}
                  name="seasonality"
                  type="text"
                  placeholder="Seasonality"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 border-0 bg-gray-200 pl-2 py-2 mt-1"
                  {...register("seasonality", { required: true })}
                />
                {errors.seasonality && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* <div className="col-span-full sm:col-span-2">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <details>
                      <summary>Seasonality</summary>
                      <ul className="p-2">
                        <li>
                          <a>Summer</a>
                        </li>
                        <li>
                          <a>Winter</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div> */}

              <div className="col-span-full">
                <button
                  type="submit"
                  className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-green-500 focus:dark:ring-green-600 hover:dark:ring-green-600 dark:text-gray-50"
                >
                  Update
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdateTouristsSpot;
