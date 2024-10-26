import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#131313] mt-28 py-16">
      <section className="px-10 grid grid-cols-2 gap-8 md:flex md:flex-row justify-between">
        {/* <!-- Left --> */}
        <div className="col-span-2 flex flex-col gap-5">
          {/* <!-- Logo --> */}
          <div className="flex flex-row gap-2">
            <h1 className="font-bold text-5xl">
              <span className="text-green-500">Tourism</span>
            </h1>
          </div>
          {/* <!-- Location --> */}
          <div className="text-gray-300">
            <p>Location: Oxyzen, Chattogram</p>
            <p>Phone: +8801991785857</p>
            <p>Email: afsar291722@gmail.com</p>
            <p>Openings hours: 9.00 AM - 5.00 PM</p>
          </div>
          {/* <!-- Social Icons --> */}
          <div className="flex flex-row gap-5 text-4xl">
            <i className="fa-brands fa-facebook text-blue-500 cursor-pointer"></i>
            <i className="fa-brands fa-x-twitter text-white cursor-pointer"></i>
            <i className="fa-brands fa-youtube text-red-500 cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-amber-300 cursor-pointer"></i>
          </div>
        </div>

        {/* <!-- Center --> */}
        <div className="flex flex-col gap-5">
          <div className="text-white font-bold text-xl">
            <h1>Useful Links</h1>
          </div>
          <div className="">
            <ul className="text-gray-200 flex flex-col gap-2">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/allTouristsSpot'>All Tourists Spot</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
              {/* <li>
                <a href="">Contact</a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* <!-- Right --> */}
        <div className="flex flex-col gap-5">
          <div className="text-white font-bold text-xl">
            <h1>Drop a Message</h1>
          </div>
          <input
            className="rounded-xl py-2 px-5 bg-[#FFFFFF0D] text-[#FFFFFF99]"
            type="text"
            placeholder="Enter your email"
          />
          <button className="px-5 py-2 rounded-xl text-white bg-[#0E7A81] border-2 border-[#0E7A81] hover:bg-transparent hover:border-[#0E7A81] font-bold">
            Subscribe
          </button>
        </div>
      </section>
    </footer>
    // <!-- End of Footer -->
  );
};

export default Footer;
