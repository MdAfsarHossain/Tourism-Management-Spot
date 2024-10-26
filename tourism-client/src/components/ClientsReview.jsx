import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const ClientsReview = () => {
  return (
    <div className="mt-32">
      {/* Heading */}
      <div className="mt-10">
        <h1 className="text-3xl lg:text-4xl font-bold uppercase text-center">
          All{" "}
          <span className="text-green-600">
            <Typewriter
              words={["Clients"]}
              loop={0}
              cursor
              cursorStyle="."
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>{" "}
          Review
        </h1>
      </div>

      {/* <Marquee> */}
      <div className="mb-10 mt-12">
        {/* <!-- Feedbacks Wrapper --> */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* <!-- Card - 1 --> */}
          <div className="flex-1 flex flex-col gap-4 border-2 border-[#ABEF5F80] px-10 py-10 rounded-lg ">
            <div className="flex flex-row justify-between items-center">
              <img src="/comma.png" alt="" />
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
                Working with <span className="font-bold">"Tourism"</span>{" "}
                company was a fantastic experience. Their team not only brought
                our ideas to life but exceeded our expectations with their
                innovative solutions and impeccable execution.The level of
                professionalism and creativity shown throughout the project was
                remarkable. We couldn’t be happier with the end result.
              </p>
            </div>
            <div className="flex flex-row gap-3 justify-start items-center">
              <img
                className="w-14 h-14"
                src="/student-5.png"
                alt=""
              />
              <div className="flex flex-col gap-0">
                <h1 className="font-bold text-lg">Afsar Hossain</h1>
                <p className="font-bold text-gray-400">Manager</p>
              </div>
            </div>
          </div>

          {/* <!-- Card - 2 --> */}
          <div className="flex-1 flex flex-col gap-4 border-2 border-[#ABEF5F80] px-10 py-10 rounded-lg">
            <div className="flex flex-row justify-between items-center">
              <img src="/comma.png" alt="" />
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
                Collaborating with
                <span className="font-bold">"Tourism"</span> was an exceptional
                experience. Their team not only realized our ideas but also
                surpassed our expectations with their inventive solutions and
                flawless execution. The professionalism and creativity
                demonstrated throughout the project were outstanding. We are
                absolutely delighted with the final outcome.
              </p>
            </div>
            <div className="flex flex-row gap-3 justify-start items-center">
              <img
                className="w-14 h-14"
                src="/student-6.png"
                alt=""
              />
              <div className="flex flex-col gap-0">
                <h1 className="font-bold text-lg">Shanta Akter</h1>
                <p className="font-bold text-gray-400">Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- End of Feedbacks Wrapper --> */}
      </div>
    </div>
  );
};

export default ClientsReview;
