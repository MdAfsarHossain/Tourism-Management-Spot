import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";

const MyList = () => {
  const myList = useLoaderData();
  const [myListAllData, setMyListAllData] = useState(myList);

  // console.log(myList); // This will contain the data fetched from the API endpoint.

  const touristsSpotDelete = (id) => {
    // console.log("Hello Delete!", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteTouristsSpot/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = myList.filter((item) => item._id !== id);
              setMyListAllData(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="lg:px-10">
      {/* Heading */}
      <div className="mt-10">
        <h1 className="text-2xl lg:text-4xl font-bold uppercase text-center">
          My Added{" "}
          <span className="text-green-600">
            <Typewriter
              words={["Toursists Spots"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>{" "}
          Lists
        </h1>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-10 px-20">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>No</th>
              <th>Tourists Spot Name</th>
              <th>Country Name</th>
              <th>Location</th>
              <th>Average Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myListAllData?.map((item, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{item.touristsSpotName}</td>
                <td>{item.countryName}</td>
                <td>{item.location}</td>
                <td>{item.averageCost}</td>
                <td>
                  <div className="flex flex-row gap-2">
                    <Link to={`/touristsSpotUpdate/${item._id}`}>
                      <button className="btn bg-orange-400 border-2 border-orange-400  hover:border-orange-400 hover:bg-transparent hover:text-orange-400">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => touristsSpotDelete(item._id)}
                      className="btn bg-red-500 border-2 border-red-500  hover:border-red-500 hover:bg-transparent hover:text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* End of Table */}
    </div>
  );
};

export default MyList;
