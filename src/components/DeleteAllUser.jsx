import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";
const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const AllUserdelete = () => {
    dispatch(deleteUsers());
  };
  return (
    <div className="text-white flex justify-center my-5">
      <button
        className="bg-red-600 py-2 px-8 rounded-md"
        onClick={AllUserdelete}
      >
        Delete All User
      </button>
    </div>
  );
};

export default DeleteAllUser;
