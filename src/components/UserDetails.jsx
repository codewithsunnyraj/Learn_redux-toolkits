import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DisplayUser from "./DisplayUser";
const UserDetails = () => {
  const dispatch = useDispatch();

  const addddUser = (name) => {
    console.log(name);
    dispatch(addUser(name));
  };
  return (
    <div className=" w-[650px] my-5 ">
      <div className="flex w-full justify-between">
        <h3 className="font-semibold text-xl text-slate-500">
          List Of User Details
        </h3>
        <div>
          <button
            onClick={() => {
              addddUser(fakeUserData());
            }}
            className="bg-gradient-to-r text-white py-2 px-5 from-cyan-500 to-blue-500 "
          >
            Add New User
          </button>
        </div>
      </div>
      <div className="py-3">
        <DisplayUser />
      </div>
      <hr className="border-b-  border-white" />
      <DeleteAllUser />
    </div>
  );
};

export default UserDetails;
