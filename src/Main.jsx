import React from "react";
import "./style.css";
import tlou from "./pics/tlou.png";
import tlou1 from "./pics/tlou1.jpg";

function Main() {
  const backgroundStyle = {
    backgroundImage: `url(${tlou1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Adjust height as needed
  };
  return (
    <body style={backgroundStyle} className="vingette">
      <nav className="flex items-center justify-center flex-wrap p-6 mb-7">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-bold text-6xl hover:cursor-pointer">TLOU</span>
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
          <h1 className="text-5xl font-bold mb-5">The Last Of Us</h1>
          <p className="fontForParagraph leading-relaxed">
            Experience the emotional storytelling and unforgettable characters
            <br /> in The Last of Us™, winner of over 200 Game of the Year
            awards. <br />
            In a ravaged civilization, where infected and hardened survivors run
            rampant, Joel, <br /> a weary protagonist, is hired to smuggle
            14-year-old Ellie out of a military quarantine zone. <br /> However,{" "}
            what starts as a small job soon transforms into a brutal
            cross-country journey.
          </p>
        </div>

        <div className="paginationButtons bg-slate-100">
          <button>a</button>
          <button>a</button>
          <button>a</button>
          <button>a</button>
        </div>

        {/* <div className="flex-column justify-center text-center items-center">
          <h1 className="text-white underline font-bold text-6xl">
            The Last Of Us
          </h1>
          <button className="btn btn-blue mx-6 text-white my-12">
            Watch Trailer
          </button>
          <button className="btn btn-blue  mx-6 text-white">Buy TLOU</button>
        </div>
        <div
          className="bg-stone-100 border border-stone-400 text-stone-700 px-4 py-3 rounded relative my-5"
          role="alert"
        >
          <strong className="font-bold">CLICKER COMING</strong>
          <span className="block sm:inline">Please be aware</span>
        </div> */}
      </div>

      {/* <div className="max-w-sm mx-auto flex p-10 bg-white rounded-lg shadow-xl">
        <div className="flex-shrink-0">
          <img src={tlou} alt="" className="w-26 h-32" />
        </div>
        <div className="ml-6 pt-4">
          <h4 className="text-3xl text-stone-800">Ellie</h4>
          <p className="text-base text-stone-600">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div> */}
      {/* <img src={tlou1} alt="" srcset="" className="z-0" /> */}
    </body>
  );
}

export default Main;
