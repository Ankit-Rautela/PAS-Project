import React from "react";
import { Link } from "react-router-dom";
import { Power } from "lucide-react";

let redirectFunction = () => {
  console.log("Redirecting to Auth Page");
};

const StartButton = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center grey">
        <Link to="/Login" onClick={redirectFunction}>
          <Power 
            size={50}
            color="Black"
            strokeWidth={1.75}
            className="text-gray-500 hover:text-black "
          />
        </Link>
      </div>
    </>
  );
};

export default StartButton;