import React from "react";
import "./style.css";

function Main() {
  return (
    <body>
      <div className="container">
        <div className="flex-column justify-center text-center items-center">
          <h1 className="text-white underline font-bold text-6xl">
            HLLO WORLD
          </h1>
          <button className="btn btn-blue mx-6">Find Friends</button>
          <button className="btn btn-blue  mx-6">Find Groups</button>
        </div>
      </div>
    </body>
  );
}

export default Main;
