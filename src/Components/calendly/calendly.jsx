import React from "react";

function Calendly() {
  return (
    <div className="flex md:px-52 bg-sky-50 py-10">
      <div className="bg-blue-600 p-5 w-2/3">
        <h1 className="text-white text-4xl font-bold p-4">
          We're Part of Renowned Murugappa Group
        </h1>
        <p className="text-gray-100 p-3 pb-5 ">
          At Net Access, we are driven by the values of the Murugappa Group:
          Integrity, Passion, Quality, Respect, and Responsibility towards our
          customers.
        </p>
        <img
          src="https://www.netaccess-india.com/wp-content/uploads/2023/08/murugappa-location-1.jpg"
          alt="img"
          className=" rounded-2xl"
        />
      </div>
      <div className=" flex items-center flex-col bg-white gap-3 pt-15 ">
        <img
          src="https://www.netaccess-india.com/wp-content/uploads/2023/07/netaccess-logo.png"
          alt="logo"
          className="w-20 h-20"
        />
        <p className="text-gray-600 font-semibold">Net Access India Limited</p>
        <h1 className=" text-3xl font-bold  text-black">Schedule Meeting</h1>
        <img
          src="https://thefamouslastpull.com/content/images/2022/01/calendly.png"
          alt="img"
          className="w-"
        />
      </div>
    </div>
  );
}

export default Calendly;
