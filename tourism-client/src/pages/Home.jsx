import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCountries from "../components/AllCountries";
import Banner from "../components/Banner";
import ClientsReview from "../components/ClientsReview";
import Footer from "../components/Footer";
import HomeTouristsSpots from "../components/HomeTouristsSpots";
import TeamMembers from "../components/TeamMembers";

const Home = () => {
  const allTouristsSpot = useLoaderData();

  return (
    <div className="">
      <div className="px-10">
        <Banner />
        <HomeTouristsSpots allTouristsSpot={allTouristsSpot} />
        <AllCountries />
        <TeamMembers />
        <ClientsReview />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
