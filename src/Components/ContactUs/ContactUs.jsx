import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const countryCodes = [
  { code: "IN", dial_code: "+91" },
  { code: "US", dial_code: "+1" },
  { code: "HK", dial_code: "+852" },
];

const ContactUs = () => {
  const [selectedCode, setSelectedCode] = useState("+91");
  const [selectedWhatsAppCode, setSelectedWhatsAppCode] = useState("+852");
  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-100 p-8 md:px-50">
      {/* Contact Form */}
      <div className="flex-1 bg-white p-8  shadow-md">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 "
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 "
            />
          </div>
          <label className="block font-semibold mb-1">Phone</label>
          <div className="flex">
            <select
              className="border border-gray-300  px-2 bg-white"
              value={selectedCode}
              onChange={(e) => setSelectedCode(e.target.value)}
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.dial_code}>
                  {country.dial_code}
                </option>
              ))}
            </select>
            <input
              placeholder="Enter your phone number"
              className="w-full p-2 border border-gray-300"
            />
          </div>
          <label className="block font-semibold mb-1">WhatsApp number</label>
          <div className="flex">
            <select
              className="border border-gray-300  px-2 bg-white"
              value={selectedWhatsAppCode}
              onChange={(e) => setSelectedWhatsAppCode(e.target.value)}
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.dial_code}>
                  {country.dial_code}
                </option>
              ))}
            </select>
            <input
              placeholder="Enter your WhatsApp number"
              className="w-full p-2 border border-gray-300 "
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              placeholder="Enter your message"
              className="w-full p-4 border border-gray-300 "
            />
          </div>
          <div className="my-4">
            <div className="flex items-center">
              <input type="checkbox" id="recaptcha" className="mr-2" />
              <label htmlFor="recaptcha">I'm not a robot</label>
            </div>
          </div>
          <button className="py-3 px-6 bg-blue-600 text-white font-medium rounded-xs">
            SUBMIT NOW
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="flex-1 bg-blue-700 text-white p-8 shadow-md mt-8 md:mt-0 ">
        <h2 className="text-4xl font-bold mb-6 pt-15">Contact Info</h2>
        <div className="space-y-8 ">
          {/* Branch Office Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">Branch Office</h3>
            <div className="flex items-start space-x-2 mb-5">
              <MapPin size={50} />
              <p className="text-gray-200">
                IIT Madras Research Park, Block-E, 8th Floor, Kanagam Road,
                Taramani, Chennai – 600 113, India
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-5">
              <Phone size={30} />
              <p className="text-gray-200">+91 73583 00888</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={30} />
              <p className="text-gray-200">info@netaccess-india.com</p>
            </div>
          </div>

          {/* Registered Office Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">Registered Office</h3>
            <div className="flex items-start space-x-2 my-5">
              <MapPin size={40} />
              <p className="text-gray-200">
                "Parry House", 6th Floor, No:43, Moore Street, Chennai – 600001,
                India
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-5">
              <Phone size={30} />
              <p className="text-gray-200">+91 73583 00888</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={30} />
              <p className="text-gray-200">info@netaccess-india.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
