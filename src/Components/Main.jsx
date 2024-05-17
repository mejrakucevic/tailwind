import React, { useState, useEffect } from "react";
import "../style.css";
import Quiz from "./Quiz";
import logo from "../pics/logo.png";
import tlou1 from "../pics/tlou1.jpg";

import tlou2 from "../pics/tlou2.jpg";
import tlou3 from "../pics/tlou3.jpg";

import tlou5 from "../pics/tlou5.jpg";
import tlou6 from "../pics/tlou6.jpg";
import joel from "../pics/joel.jpg";

function Main() {
  const bgImages = [tlou1, tlou2, tlou3, tlou5, tlou6];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const changeBg = () => {
    setCurrentBgIndex((index) => (index + 1) % bgImages.length);
    setTimeout(() => {
      document.querySelector(".vingette").classList.add("fade-in");
      setTimeout(() => {
        document.querySelector(".vingette").classList.remove("fade-in");
      }, 500);
    }, 0);
  };

  const backgroundStyle = {
    backgroundImage: `url(${bgImages[currentBgIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    minHeight: "100vh",
    overflowY: "auto",
    opacity: 1,
    transition: "opacity 0.5s ease-in-out",
    position: "relative", // Ensure proper positioning of parallax element
  };

  return (
    <body className="vingette overflow-y-auto">
      <div className="vingette overflow-y-auto" style={backgroundStyle}>
        <nav className="flex items-center justify-center flex-wrap p-6 mb-7  ">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-bold text-6xl hover:cursor-pointer">
              <img src={logo} alt="" className="w-12 mr-3" />
            </span>
          </div>

          <div className="w-full flex-grow text-center sm:flex sm:items-center sm:w-auto ">
            <div className="text-3xl sm:flex-grow flex ">
              <a
                href="./src"
                className="block mt-4 sm:inline-block sm:mt-0 text-stone-300 hover:text-white mr-4"
              >
                Info
              </a>
              <a
                href="./src"
                className="block mt-4 sm:inline-block sm:mt-0 text-stone-300  hover:text-white mr-4"
              >
                Merch
              </a>
              <a
                href="./src"
                className="block mt-4 sm:inline-block sm:mt-0 text-stone-300 hover:text-white mr-4"
              >
                Credits
              </a>
            </div>
          </div>
        </nav>
        <div className="container h-screen flex justify-left items-center">
          <div className="mb-80 text-stone-200 text-2xl">
            <h1 className="text-5xl font-bold mb-7">The Last Of Us ᖭ༏ᖫ</h1>
            <p className="fontForParagraph leading-relaxed shadow-ms max-w-4xl mx-auto ">
              Experience the emotional storytelling and unforgettable characters
              in The Last of Us™, winner of over 200 Game of the Year awards. In
              a ravaged civilization, where infected and hardened survivors run
              rampant, Joel, a weary protagonist, is hired to smuggle
              14-year-old Ellie out of a military quarantine zone. However, what
              starts as a small job soon transforms into a brutal cross-country
              journey.
            </p>
            <button className="py-4 px-4 rounded-xl mt-8 hover:text-stone-200 hover:bg-stone-900 text-stone-900 bg-stone-200">
              Watch Trailer
            </button>
          </div>

          <div className="flex justify-center items-end absolute bottom-0 p-5 mr-[-1450px]">
            <div className="flex justify-center items-end absolute bottom-0 p-40 mr-[-1450px]">
              <button className="paginationBtn"></button>
              <button className="paginationBtn" onClick={changeBg}>
                ‎
              </button>
              <button className="paginationBtn" onClick={changeBg}>
                ‎
              </button>
              <button className="paginationBtn" onClick={changeBg}>
                ‎
              </button>
              <button className="paginationBtn" onClick={changeBg}>
                ‎
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-2 flex justify-center items-center">
          <img src={joel} alt="" className="w-screen max-h-fit" />
          <div className="absolute right-0 mr-24 mb-56">
            <h1 className=" text-white text-5xl mb-4">Joel</h1>
            <p className="text-white max-w-2xl mx-auto text-left text-2xl">
              A brutal survivor with few moral lines left to cross. Joel, now in
              his late 40s, has been hardened by the ravages of the fungal
              pandemic that has devastated civilization as we know it. He’s lost
              friends, family, and everything he valued in life. Living in one
              of few remaining military-controlled quarantine zones, he operates
              as a black market smuggler, dealing in contraband, taking numerous
              de-humanizing jobs over the years to survive in this new
              post-pandemic world. Joel’s conscience slowly dwindles away as he
              shuts down his emotions to cope to his new life.
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Main;
