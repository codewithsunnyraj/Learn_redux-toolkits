import React from "react";
import DeleteAllUser from "./DeleteAllUser";

const UserDetails = () => {
  return (
    <div className=" w-[650px] my-5 ">
      <div className="flex w-full justify-between">
        <h3 className="font-semibold text-xl text-slate-500">
          List Of User Details
        </h3>
        <div>
          <button className="bg-gradient-to-r text-white py-2 px-5 from-cyan-500 to-blue-500 ">
            Add New User
          </button>
        </div>
      </div>
      <div className="py-3">
        <h3 className="text-white">Hii</h3>
        <h3 className="text-white">Hii</h3>
      </div>
      <hr className="border-b-  border-white" />
      <DeleteAllUser />
    </div>
  );
};

export default UserDetails;
