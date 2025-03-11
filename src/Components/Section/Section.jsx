import React from "react";
import ApplicationSlider from "../Applications-slider/Application-slider";
import Solutions from "../Management-solutions/management-solutions";

function Section() {
  return (
    <div>
      <div className="flex w-full px-52 pt-10 gap-10">
        <div className="">
          <img
            src="https://www.netaccess-india.com/wp-content/uploads/2023/08/data-center-management.png"
            alt="image"
            className="w-xl p-14 bg-sky-100 rounded-sm "
          />
        </div>
        <div className="w-1/2 pt-5">
          <h1 className="font-bold text-4xl">
            Enterprise IT Services And Solutions
          </h1>
          <p className="pt-5 text-gray-600">
            The state of your IT topology is vital in determining your
            operational efficiency and transforming your workflow for the
            digital era. We handpick and offer valuable business-oriented
            solutions to fast-forward your day-to-day activities. Change up the
            pace of operations without compromising on technology quality. To
            ensure your business is always on, predict the changes in the
            technology before it happen and transform your digital environment
            to stay relevant.
          </p>
          <p className="pt-5  text-gray-600">
            Net Access is helping you to adapt to the digital age with
            enterprise technology services and solutions that are transforming
            the face of organizations and improving the user experience through
            our wide range of top-notch IT services & solutions. Using our
            unparalleled techniques to analyze your business requirements, we
            modernize your digital ecosystem for the best work experience.
          </p>
        </div>
      </div>
      <div className="mt-10 w-full bg-[url('https://www.netaccess-india.com/wp-content/uploads/2020/10/coutner.jpg')]">
        <h1 className="text-center font-extrabold text-3xl text-white pt-10">
          Empowering Excellence Of Net Access
        </h1>
        <div className="px-52 flex justify-around items-center">
          <div className=" items-center py-10">
            <h2 className="font-extrabold text-4xl text-white">20+</h2>
            <p className="font-bold text-2xl text-white pt-3">
              Years of Experience
            </p>
          </div>
          <div className="">
            <h2 className="font-extrabold text-4xl text-white">600+</h2>
            <p className="font-bold text-2xl text-white pt-3">Professionals</p>
          </div>
          <div className="">
            <h2 className="font-extrabold text-4xl text-white">1000+</h2>
            <p className="font-bold text-2xl text-white pt-3">
              Location Touch Points
            </p>
          </div>
          <div className="">
            <h2 className="font-extrabold text-4xl text-white">200+</h2>
            <p className="font-bold text-2xl text-white pt-3">
              Satisfied Customers
            </p>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <h1 className="font-bold text-4xl text-center">Our services</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 p-6 px-48">
          <div className="p-4 flex-1 ">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="">
                  <img
                    src="https://www.netaccess-india.com/wp-content/uploads/2023/08/icon1.png"
                    alt=" icon1"
                    className="transition-transform duration-500 ease-out hover:scale-110"
                  />
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">
                IT Infrastructure Management Services
              </h2>
              <p className="text-gray-600 mb-4">
                Our digital infrastructure services deploy tailor-made solutions
                to give businesses an incredible agility boost for higher
                returns and to be ready for future organizational objectives.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2  hover:text-blue-500 cursor-pointer">
                  ✔️ Data center services
                </li>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Network management services
                </li>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Network transformation services
                </li>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Cloud services
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 flex-1 ">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className=" ">
                  <img
                    src="https://www.netaccess-india.com/wp-content/uploads/2023/08/icon3.png"
                    alt=" icon1"
                    className="transition-transform duration-500 ease-out hover:scale-110"
                  />
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">
                End-User Support Services
              </h2>
              <p className="text-gray-600 mb-4">
                Holistic assistance for troubleshooting and overcoming issues
                swiftly, fostering frictionless workflows. Round-the-clock
                support for various challenges.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ IT help desk with remote support
                </li>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Endpoint security services
                </li>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Onsite and On-call support
                </li>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Break-fix services
                </li>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Asset and vendor management
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 flex-1 ">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="">
                  <img
                    src="https://www.netaccess-india.com/wp-content/uploads/2023/08/cyber-security-1.png"
                    alt="icon1"
                    className="transition-transform duration-500 ease-out hover:scale-110"
                  />
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">Cyber Security</h2>
              <p className="text-gray-600 mb-4">
                Assessment of risks, penetration testing, security monitoring,
                security compliance, and more to protect your infrastructure
                from cyber threats.
              </p>
              <ul className="space-y-2">
                <i
                  aria-hidden="true"
                  class="fas fa-check-square two_elementor_element"
                ></i>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Managed cybersecurity services
                </li>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Phishing simulation and security awareness
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4 flex-1 ">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className=" ">
                  <img
                    src="https://www.netaccess-india.com/wp-content/uploads/2023/08/icon3.png"
                    alt=" icon1"
                    className="transition-transform duration-500 ease-out hover:scale-110"
                  />
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">
                End-User Support Services
              </h2>
              <p className="text-gray-600 mb-4">
                Holistic assistance for troubleshooting and overcoming issues
                swiftly, fostering frictionless workflows. Round-the-clock
                support for various challenges.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ IT help desk with remote support
                </li>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Endpoint security services
                </li>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Onsite and On-call support
                </li>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Break-fix services
                </li>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Asset and vendor management
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 flex-1 ">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="">
                  <img
                    src="https://www.netaccess-india.com/wp-content/uploads/2023/08/cyber-security-1.png"
                    alt="icon1"
                    className="transition-transform duration-500 ease-out hover:scale-110"
                  />
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">Cyber Security</h2>
              <p className="text-gray-600 mb-4">
                Assessment of risks, penetration testing, security monitoring,
                security compliance, and more to protect your infrastructure
                from cyber threats.
              </p>
              <ul className="space-y-2">
                <i
                  aria-hidden="true"
                  class="fas fa-check-square two_elementor_element"
                ></i>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Managed cybersecurity services
                </li>
                <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  ✔️ Phishing simulation and security awareness
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky-50">
        <div className="pt-14">
          <h1 className="text-center font-bold text-4xl px-72">
            Best-in-class applications from the highly acclaimed enterprise IT
            applications provider
          </h1>
          <p className="text-center p-5 text-blue-600 font-bold text-xl">
            Digital Applications
          </p>
          <p className="text-center px-72 text-gray-700">
            Ramp up operations, drill down into the granular details of your
            daily activities, gain a bird’s eye view of your business progress,
            and more with state-of-the-art digital applications. Make informed
            decisions backed by data, and streamline niche workflow pipelines.
            We offer a gamut of application solutions to simplify the most
            complex tasks.
          </p>
        </div>
        <ApplicationSlider />
      </div>
      <div className=" pt-10">
        <div>
          <h1 className="text-center font-bold text-4xl px-72">
            Industries that benefit from our IT infrastructure management
            solutions
          </h1>
          <p className="text-center px-72 text-gray-700 py-5">
            Business processes in each industry domain are on the fast lane when
            the solutions in use exactly complement the end goals. Our refined
            approaches to tailoring world-class IT infrastructure-managed
            services and consulting solutions are helping grow an increasing
            number of businesses to unlock brand-new, profitable potentials. We
            understand the intricate requirements of several industries.
          </p>
          <Solutions />
        </div>
      </div>
      <div>
        <div className=" bg-sky-50 pt-10">
          <h1 className="text-center font-bold text-4xl ">Our Partners</h1>
          <div className="grid grid-cols-6 px-52 gap-6 py-10">
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/microsoft.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/ibm.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/dell.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/hp.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/cisco.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/samsung.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/microsoft.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/ibm.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/dell.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/hp.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/cisco.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/samsung.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/microsoft.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/ibm.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/dell.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/hp.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/cisco.png"
              alt="partner
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/samsung.png"
              alt="partner 
                logo"
                className=" border-gray-500 border-1 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
