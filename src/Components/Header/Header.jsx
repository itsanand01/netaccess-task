import React, { useState } from "react";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Handles both 'services' and 'about'
  return (
    <div className="w-full fixed z-50">
      <div className="flex w-full justify-between px-52 bg-[#004DB6] h-10 items-center">
        <div className="flex w-full gap-4">
          <div className="flex w-auto items-center gap-2 ">
            <img src="\assets\email.png" alt="email" className="w-6 h-6" />
            <p className="text-white">info@netaccess-india.com </p>
          </div>
          <div className=" border-r-1  border-amber-50"></div>
          <div className="flex w-auto items-center gap-2">
            <img src="assets\phone-call.png" alt="phone" className="w-5 h-5" />
            <p className="text-white">+917358300888</p>
          </div>
        </div>
        <div className="flex gap-3">
          <img
            src="\assets\facebook.png"
            alt="facebook"
            className="w-5 h-5 cursor-pointer "
          />
          <img
            src="assets\twitter.png"
            alt="twitter"
            className="w-5 h-5 cursor-pointer "
          />
          <img
            src="\assets\linkedin.png"
            alt="linkedin"
            className="w-5 h-5 cursor-pointer "
          />
          <img
            src="\assets\instagram.png"
            alt="instagram"
            className="w-5 h-5 cursor-pointer "
          />
          <img
            src="\assets\youtube.png"
            alt="youtube"
            className="w-5 h-5 cursor-pointer "
          />
        </div>
      </div>
      <div className="flex justify-between items-center p-4  bg-white px-52">
        <div className="flex items-center">
          <img
            src="https://www.netaccess-india.com/wp-content/uploads/2023/07/netaccess-logo.png"
            alt="Net Access Logo"
            className="h-24 w-24"
          />
        </div>

        <div className="flex space-x-8 items-center">
          <div className="group relative mt-1">
            <button className="text-black hover:text-blue-600 font-medium cursor-pointer">
              Home
            </button>
          </div>
          <div
            className="group relative"
            onMouseEnter={() => setActiveDropdown("services")}
          >
            <button className="text-black hover:text-blue-600 font-medium cursor-pointer">
              Services
            </button>
            <span className="ml-1 text-xl">+</span>
          </div>
          <div className="group relative">
            <button
              className="text-black hover:text-blue-600 font-medium cursor-pointer"
              onMouseEnter={() => setActiveDropdown("applications")}
            >
              Applications
            </button>
            <span className="ml-1 text-xl">+</span>
          </div>
          <div className="group relative">
            <button className="text-black hover:text-blue-600 font-medium cursor-pointer"
             onMouseEnter={() => setActiveDropdown("Industries")}>
              Industries
            </button>
            <span className="ml-1 text-xl">+</span>
          </div>
          <div className="group relative">
            <button className="text-black hover:text-blue-600 font-medium cursor-pointer"
            onMouseEnter={() => setActiveDropdown("Resources")}>
              Resources
            </button>
            <span className="ml-1 text-xl">+</span>
          </div>
          <div
            className="group relative"
            onMouseEnter={() => setActiveDropdown("about")}
          >
            <button className="text-black hover:text-blue-600 font-medium cursor-pointer">
              About
            </button>
            <span className="ml-1 text-xl">+</span>
          </div>
          <div className="group relative mt-1">
            <button className="text-black hover:text-blue-600 font-medium cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center text-white rounded-full ">
            <div className="text-center">
              <img
                src="https://www.netaccess-india.com/wp-content/uploads/2024/09/decades-bg4.png"
                alt="Murugappa Logo"
                className="h-24 w-24  "
              />
              {/* <div className="text-2xl font-bold z-20 relative text-center">2</div>
              <div className="text-xs z-10 relative w-10">Decades of IT Brilliance</div> */}
            </div>
          </div>
          <img
            src="https://www.netaccess-india.com/wp-content/uploads/2024/01/murugappa-logo.png"
            alt="Murugappa Logo"
            className="h-20 w-20"
          />
        </div>
      </div>
      {activeDropdown === "services" && (
        <div
          className="absolute top-5 left-0  flex bg-white shadow-lg p-8 mt-30 rounded-lg m-50 gap-4"
          onMouseEnter={() => setActiveDropdown("services")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div>
            <h3 className="font-bold">Application Support Services</h3>
            <div className="flex gap-3 pt-4">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>

            <h3 className="font-bold mt-4">
              IT Infrastructure Management Services
            </h3>
            <div className="flex gap-3 pt-4">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
            <div className="flex gap-3 ">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
            <div className="flex gap-3 ">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
            <div className="flex gap-3 ">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Application Support Services</h3>
            <div className="flex gap-3 pt-4">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>

            <h3 className="font-bold mt-4">
              IT Infrastructure Management Services
            </h3>
            <div className="flex gap-3 pt-4">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
            <div className="flex gap-3 ">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
            <div className="flex gap-3 ">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
            <div className="flex gap-3 ">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Application Support Services</h3>
            <div className="flex gap-3 pt-4">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>

            <h3 className="font-bold mt-4">
              IT Infrastructure Management Services
            </h3>
            <div className="flex gap-3 pt-4">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
            <div className="flex gap-3 ">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
            <div className="flex gap-3 ">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
            <div className="flex gap-3 ">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Application Support Services</h3>
            <div className="flex gap-3 pt-4">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>

            <h3 className="font-bold mt-4">
              IT Infrastructure Management Services
            </h3>
            <div className="flex gap-3 pt-4">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
            <div className="flex gap-3 ">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
            <div className="flex gap-3 ">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
            <div className="flex gap-3 ">
              <img src="\assets\cube.png" alt="icon" className="h-5 w-5" />
              <p>Microsoft D-365 Application Support</p>
            </div>
          </div>
        </div>
      )}
      {activeDropdown === "about" && (
        <div
          className=" bg-white absolute right-[27%] w-60 p-5 items-center"
          onMouseEnter={() => setActiveDropdown("about")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">About net access</h3>
          </div>
          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">About net access</h3>
          </div>
          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">About net access</h3>
          </div>
          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">About net access</h3>
          </div>

          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">About net access</h3>
          </div>
        </div>
      )}
        {activeDropdown === "Industries" && (
        <div
          className=" bg-white absolute right-[40%] w-60 p-5 items-center"
          onMouseEnter={() => setActiveDropdown("Industries")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">manufacturing</h3>
          </div>
          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">manufacturing</h3>
          </div>
          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">manufacturing</h3>
          </div>
          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">About net access</h3>
          </div>

          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">About net access</h3>
          </div>
        </div>
      )}
         {activeDropdown === "Resources" && (
        <div
          className=" bg-white absolute right-[35%] w-60 p-5 items-center"
          onMouseEnter={() => setActiveDropdown("Resources")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">manufacturing</h3>
          </div>
          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">manufacturing</h3>
          </div>
          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">manufacturing</h3>
          </div>
          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">About net access</h3>
          </div>

          <div className="flex gap-2 p-2">
            <img src="\assets\cube.png" alt="icon" />
            <h3 className="font-bold text-center">About net access</h3>
          </div>
        </div>
      )}
      {activeDropdown === "applications" && (
        <div
          className=" bg-white mx-50 p-10"
          onMouseEnter={() => setActiveDropdown("application")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <h1 className="font-bold pb-5">Digital Applications</h1>
          <div className="flex gap-3">
            <div className="flex gap-2 p-2">
              <img src="\assets\cube.png" alt="icon" />
              <h3 className="font-bold text-center">About net access</h3>
            </div>
            <div className="flex gap-2 p-2">
              <img src="\assets\cube.png" alt="icon" />
              <h3 className="font-bold text-center">About net access</h3>
            </div>
            <div className="flex gap-2 p-2">
              <img src="\assets\cube.png" alt="icon" />
              <h3 className="font-bold text-center">About net access</h3>
            </div>
            <div className="flex gap-2 p-2">
              <img src="\assets\cube.png" alt="icon" />
              <h3 className="font-bold text-center">About net access</h3>
            </div>

            <div className="flex gap-2 p-2">
              <img src="\assets\cube.png" alt="icon" />
              <h3 className="font-bold text-center">About net access</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
