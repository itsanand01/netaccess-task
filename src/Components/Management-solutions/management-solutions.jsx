import React, { useState } from "react";

const Solutions = () => {
  const [activeTab, setActiveTab] = useState("Manufacturing");

  const tabs = [
    {
      name: "Manufacturing",
      description:
        "Assisting manufacturers in digitizing and modernizing daily activities to surpass customer expectations. Net Access provides sound infrastructure expertise, capabilities, and plans to help manufacturers overcome hurdles in modernizing their IT ecosystems and improving plant automation.",
      image:
        "https://www.netaccess-india.com/wp-content/uploads/2023/08/manufacturing.jpg",
    },
    {
      name: "Non-Banking Financial Services",
      description:
        "Transforming payment capabilities and providing exceptional services suited to microloan organizations and others. Net Access drives growth, meets customer demand, simplifies non-banking operations, and provides extensive expertise to elevate business prospects. Furthermore, we guard against increasing security threats. Modernize your organization today. ",
      image:
        "https://www.netaccess-india.com/wp-content/uploads/2023/08/financial.jpg",
    },
    {
      name: "General Insurance",
      description:
        "Assisting insurers to modernize and transform for the new era. Net Access transforms insurance companies by simplifying task complexities, business process optimization, and implementing robust infrastructures. With over two decades of technical experience, we craft foundations that enable you to speed up technology developments",
      image:
        "https://www.netaccess-india.com/wp-content/uploads/2023/08/insurance-software.jpg",
    },
    {
      name: "Travel & Hospitality",
      description:
        "Helping travel and hospitality companies build loyalty with stable and dependable technology solutions. Net Access fulfills new business goal objectives by upgrading legacy systems and providing infrastructures at scale, and expert knowledge. ",
      image:
        "https://www.netaccess-india.com/wp-content/uploads/2023/08/Travel-hospitality.jpg",
    },
    {
      name: "Retail",
      description:
        "Meet the ever-changing needs of customers, get the most out of your hardware, and streamline your retail mobile processes with the MDM Platform. Mobile Device Management platform providing full visibility, control, and optimization of the critical mobile hardware and software underpinning your retail operations.",
      image:
        "https://www.netaccess-india.com/wp-content/uploads/2023/08/retail.jpg",
    },
    {
      name: "Hospitals & Healthcare",
      description:
        "Assisting hospitals & healthcare institutions to deliver best-in-class patient care. Net Access provides industry-leading technology solutions that seamlessly integrate with your existing business ecosystem. Our expertise helps you unlock higher operational efficiencies, minimize costs, transform business potential, and heighten patient care.",
      image:
        "https://www.netaccess-india.com/wp-content/uploads/2023/08/Hospitals-Healthcare.jpg",
    },
    {
      name: "Agribusiness",
      description:
        "Helping travel and hospitality companies build loyalty with stable and dependable technology solutions. Net Access fulfills new business goal objectives by upgrading legacy systems and providing infrastructures at scale, and expert knowledge. ",
      image:
        "https://www.netaccess-india.com/wp-content/uploads/2024/01/Agribusiness.jpg",
    },
    {
      name: "Micro and Small Finance Banking",
      description:
        "Optimize your finance operations by streamlining tasks, managing multiple branches more efficiently, and boosting customer satisfaction. Our comprehensive suite of services, covering IT infrastructure management, messaging and collaboration, and cybersecurity, is crafted to improve efficiency, facilitate seamless communication, and strengthen your digital defenses",
      image:
        "https://www.netaccess-india.com/wp-content/uploads/2024/01/Micro-and-small-finance-banking.jpg",
    },
  ];

  return (
    <div className="flex p-10 gap-10 px-52">
      <div className="w-1/3 bg-white shadow-lg rounded-lg">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`p-4 cursor-pointer ${
              activeTab === tab.name
                ? "bg-blue-700 text-white font-bold"
                : "bg-gray-200  text-black"
            }`}
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div className="w-2/3 bg-white shadow-lg rounded-lg p-5  relative">
        {tabs.map(
          (tab) =>
            tab.name === activeTab && (
              <div key={tab.name}>
                <img
                  src={tab.image}
                  alt={tab.name}
                  className="w-full h-96 object-cover mb-4"
                />
                <p className="text-white mb-4 absolute top-70 px-10">
                  {tab.description}
                  <span className="text-[#e4bf00] font-semibold underline ml-1 cursor-pointer">
                    Read More
                  </span>
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Solutions;
