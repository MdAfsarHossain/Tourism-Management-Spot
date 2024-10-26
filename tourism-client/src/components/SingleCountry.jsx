import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCountry = ({ country }) => {
  const { image, country_name, description, _id } = country;

  return (
    <Link to={`/singleCountryAllSpots/${country_name.toLowerCase()}`} className="hover:scale-105 transition-all">
      <div data-aos="fade-up" className="shadow-lg flex flex-col gap-3 rounded-lg pb-5">
        <div className="h-60 relative">
          <img className="w-full h-full rounded-t-lg" src={image} alt="" />
          <div
            className="absolute bottom-3 bg-green-500 ml-2 py-[2px]"
            style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 95%, 0% 100%)" }}
          >
            <p className=" px-10 text-center font-bold  text-black">
              {country_name}
            </p>
          </div>
          <br />
        </div>
        <div className="px-5 text-justify">
          <p className="text-gray-600 line-clamp-6">{description}</p>
        </div>
      </div>
    </Link>
  );
};

SingleCountry.propTypes = {
  country: PropTypes.object,
};

export default SingleCountry;
