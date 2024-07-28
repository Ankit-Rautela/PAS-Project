import React from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

let redirectFunction = () => {
  console.log("Redirecting to Login Page");
};

const LogintButton = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center grey">
        <Link to="/Auth" onClick={redirectFunction}>
          <User 
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

export default LogintButton;