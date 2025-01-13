import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";
const DisplayUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });
  console.log(data);
  const deletedItem = (index) => {
    dispatch(removeUser(index));
  };
  return (
    <div className="text-white">
      <div className="">
        {data.map((items, index) => (
          <div key={index} className="flex justify-between">
            <p className="py-2">{items}</p>
            <button
              onClick={() => {
                deletedItem(index);
              }}
            >
              <MdDeleteForever className="text-red-600 text-2xl" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayUser;
