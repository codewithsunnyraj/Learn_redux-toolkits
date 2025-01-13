import React from "react";
import { useSelector } from "react-redux";

const DisplayUser = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  console.log(data);
  return (
    <div className="text-white">
      <div className="">
        {data.map((items, index) => (
          <div key={index} className="flex">
            <p className="py-2">{items}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayUser;
