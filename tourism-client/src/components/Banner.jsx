import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const bgBanner =
  "https://www.jodogoairportassist.com/main/assets/images/blog/bangladesh/top-ten-tourist-places-to-visit-in-bangladesh-8.webp";

// import './styles.css';

const Banner = () => {
  return (
    <div className="mt-12 mb-24">
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full lg:h-[540px] rounded-lg hero bg-[url(https://pullman.accor.com/destinations/country/thailand-1400x788-1.jpg)] bg-cover bg-no-repeat bg-center">
            <div className="hero-overlay bg-opacity-40 rounded-lg">
              <div className="px-8 lg:px-16 border-0 md:w-3/4 lg:w-1/2 flex flex-col gap-5 justify-center items-start border-black h-screen rounded-lg">
                <h1 className="font-bold uppercase text-4xl md:text-5xl lg:text-7xl text-white">
                  Thailand
                </h1>
                <p className="text-base lg:text-lg text-gray-50">
                  Thailand, often called the 'Land of Smiles,' is a Southeast
                  Asian gem known for its tropical beaches, opulent royal
                  palaces, and ornate temples such as Wat Arun and Wat Phra
                  Kaew.
                </p>
                <div className="">
                  <button className="btn bg-green-500 text-white border-2 border-green-500 hover:bg-transparent hover:border-green-500 font-bold">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full lg:h-[540px] rounded-lg hero bg-[url(https://images.ctfassets.net/wv75stsetqy3/15er14j2Azz7yxXFRlT8p5/acc7ba4935aca368bacb6006cbcac6c3/The_Pros_and_Cons_of_Living_in_Malaysia.jpg?q=60&fit=fill&fm=webp)] bg-cover bg-no-repeat bg-center">
            <div className="hero-overlay bg-opacity-40 rounded-lg">
              <div className="px-8 lg:px-16 border-0 md:w-3/4 lg:w-1/2 flex flex-col gap-5 justify-center items-start border-black h-screen rounded-lg">
                <h1 className="font-bold uppercase text-4xl md:text-5xl lg:text-7xl text-white">
                  Malaysia
                </h1>
                <p className="text-base lg:text-lg text-gray-50">
                  Malaysia is a Southeast Asian country known for its modern
                  cities, rainforests, and cultural diversity. Kuala Lumpur, the
                  capital, is home to the iconic Petronas Twin Towers, while
                  Penang offers a rich colonial history and diverse culinary
                  experiences.
                </p>
                <div className="">
                  <button className="btn bg-green-500 text-white border-2 border-green-500 hover:bg-transparent hover:border-green-500 font-bold">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[540px] rounded-lg hero bg-[url(https://constructive-voices.com/wp-content/uploads/2024/04/Indonesia-Sacred-Natural-Sites-and-Biodiversity.jpg)] bg-cover bg-no-repeat bg-center">
            <div className="hero-overlay bg-opacity-40 rounded-lg">
              <div className="px-8 lg:px-16 border-0 md:w-3/4 lg:w-1/2 flex flex-col gap-5 justify-center items-start border-black h-screen rounded-lg">
                <h1 className="font-bold uppercase text-4xl md:text-5xl lg:text-7xl text-white">
                  Indonesia
                </h1>
                <p className="text-base lg:text-lg text-gray-50">
                  Indonesia is the world's largest archipelago, consisting of
                  over 17,000 islands, each with its unique charm and natural
                  beauty. Famous destinations like Bali attract visitors with
                  its stunning beaches, terraced rice fields, and vibrant arts
                  scene.
                </p>
                <div className="">
                  <button className="btn bg-green-500 text-white border-2 border-green-500 hover:bg-transparent hover:border-green-500 font-bold">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
