import React from "react";

import {
  ChartBar,
  Settings,
  Rocket,
  ClipboardList,
  Monitor,
  Search,
} from "lucide-react";

const services = [
  {
    title: "Chart Out A Roadmap",
    description:
      "We evaluate your existing infrastructure and analyze pain points while carefully analyzing technology risks like security and architecture.",
    img: "https://www.netaccess-india.com/wp-content/uploads/2023/08/roadmap.svg"
  },
  {
    title: "Develop Solutions",
    description:
      "Discussions with our internal teams along with customer representatives pave the way for picking effective solutions that align and improve your business processes.",
   img: "https://www.netaccess-india.com/wp-content/uploads/2023/08/solution-1.svg"
  },
  {
    title: "Deployment",
    description:
      "Reconfiguration and optimization in phases without interruptions.",
   img: "https://www.netaccess-india.com/wp-content/uploads/2023/08/startup.svg"
  },
  {
    title: "Quality Analysis",
    description:
      "After deployment we measure and analyze the results. Implement changes/modifications for improvement.",
   img: "https://www.netaccess-india.com/wp-content/uploads/2023/08/audit.svg"
  },
  {
    title: "Monitoring",
    description: "We monitor and manage various aspects of your technology.",
    img: "https://www.netaccess-india.com/wp-content/uploads/2023/08/monitor.svg"
  },
];

const ITInfrastructureServices = () => {
  return (
    <div className="p-8 bg-white pt-20">
      <div className=" mx-auto  px-50">
        <div className="flex">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-black mb-4 ">
              Our Approach To Delivering Our Enterprise IT Infrastructure
              Services
            </h1>
            <h2 className="text-xl font-semibold mb-2">
              AI-Driven Solutions For Helpdesks And Problem Resolutions:
            </h2>
            <p className="text-gray-700 mb-4">
              At Net Access, we provide best-in-class services for routine
              responses to common inquiries using automated and integrated
              features. Our solutions allow you to get precise insights into
              helpdesk activities and keep your customers happy with faster
              response and provide a superior experience to the users.
            </p>
            <p className="text-gray-700 mb-4">
              We are providing hands-on experience to people through our center
              of excellence for advanced technologies.
            </p>
            <button className="bg-blue-600 px-7 py-2 rounded-lg text-white ">
              CONTACT US
            </button>
          </div>

          <div className="">
            {services.map((service, index) => (
              <div key={index} className="flex">
              <img src= {service.img} alt="service" className="w-12 h-12 object-cover mr-4 transition-transform duration-500 ease-out hover:scale-150"/>
                <div className=" mb-3">
                  <h3 className="text-lg font-semibold text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITInfrastructureServices;
