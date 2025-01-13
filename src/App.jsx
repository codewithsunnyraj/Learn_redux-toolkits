import React from "react";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <div className="bg-black w-full h-screen">
      <div>
        <div className="py-10 text-center">
          <h4 className="text-white text-2xl">Redux Toolkits</h4>
          <h2 className="text-gray-400 text-5xl py-4">Admin Table</h2>
          <h4 className="text-slate-500 text-2xl">
            One destination for complete web development
          </h4>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex justify-center items-center">
            <div className="bg-slate-300 p-5">
              <ul className="flex gap-20 font-bold">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>CODE</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
