import React from "react";
import "./style.css";
import tlou from "./pics/tlou.png";

function Main() {
  return (
    <body>
      <nav className="flex items-center justify-center flex-wrap bg-stone-800 p-6 mb-7">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-bold text-5xl">TLOU</span>
        </div>

        <div className="w-full flex-grow text-center sm:flex sm:items-center sm:w-auto ">
          <div className="text-2xl sm:flex-grow flex ">
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
      <div className="container">
        <div className="flex-column justify-center text-center items-center">
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
        </div>
      </div>

      <div className="max-w-sm mx-auto flex p-10 bg-white rounded-lg shadow-xl">
        <div className="flex-shrink-0">
          <img src={tlou} alt="" className="w-26 h-32" />
        </div>
        <div className="ml-6 pt-4">
          <h4 className="text-3xl text-stone-800">Ellie</h4>
          <p className="text-base text-stone-600">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </body>
  );
}

export default Main;
