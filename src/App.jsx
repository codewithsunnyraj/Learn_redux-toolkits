import React from "react";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <div className="bg-black w-full min-h-screen md:flex justify-center items-center px-8 sm:px-14 md:px-14 xl:px-32 ">
      <div className="container mx-auto w-full">
        <div className="lg:flex justify-between lg:gap-16 ">
          <div className="w-full lg:w-[65%]">
            <div className="py-10">
              <h4 className="text-white text-2xl font-semibold">
                Redux Toolkits Project
              </h4>
              <h4 className="text-slate-500 text-2xl">
                One destination for complete web development
              </h4>
            </div>
              <ul className="flex gap-[7px] md:gap-8 lg:gap-24 flex-wrap border-[1px] text-white py-5 px-2 justify-center md:px-8 font-bold">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>CODE</li>
                <li>CONTACT</li>
              </ul>
          
            <div className="flex justify-center"> <UserDetails /> </div>
          </div>
          <div className="flex mt-14 md:mt-0 justify-center items-center w-full lg:w-[35%]">
            <div >
              <img src="../src/assets/1.png" className="md:w-96 w-80" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
