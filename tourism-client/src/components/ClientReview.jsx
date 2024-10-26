import { FaRegStar, FaStar } from "react-icons/fa";

const ClientReview = ({name}) => {
  return (
    <div className="flex-1 flex flex-col gap-4 border-2 border-[#ABEF5F80] px-10 py-10 rounded-lg">
      <div className="flex flex-row justify-between items-center">
        <img src="../../public/comma.png" alt="" />
        <div className="flex flex-row gap-1 text-amber-400 text-2xl">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
      </div>
      <div className="">
        <p className="text-gray-600">
          Working with <span className="font-bold">"Tourism"</span> company was
          a fantastic experience. Their team not only brought our ideas to life
          but exceeded our expectations with their innovative solutions and
          impeccable execution.The level of professionalism and creativity shown
          throughout the project was remarkable. We couldn’t be happier with the
          end result.
        </p>
      </div>
      <div className="flex flex-row gap-3 justify-start items-center">
        <img className="w-14 h-14" src="../../public/student-5.png" alt="" />
        <div className="flex flex-col gap-0">
          <h1 className="font-bold text-lg">{name}</h1>
          <p className="font-bold text-gray-400">Manager</p>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
