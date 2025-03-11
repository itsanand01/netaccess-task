import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#0B2447] text-gray-300  py-10 px-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">About Net Access</h2>
          <p className="text-sm leading-relaxed">
            An entity of India's leading business conglomerate, the Murugappa
            Group, Net Access India Limited will be your trusted partner of
            choice. We have an excellent track record of offering a broad
            portfolio of professionally managed technological solutions and IT
            infrastructure services to both large and small organizations across
            multiple industry verticals.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Our Services</h2>
          <ul className="text-sm space-y-2">
            <li className="font"><span>&#8250;</span> Application Support Services</li>
            <li className="font"> <span>&#8250;</span> Modern Workplace</li>
            <li className="font"> <span>&#8250;</span> IT Infrastructure Management Services</li>
            <li className="font"> <span>&#8250;</span> End User Support Services</li>
            <li className="font"> <span>&#8250;</span> Managed Cybersecurity Services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Our Locations</h2>
          <div className="font-medium space-y-4">
            <div>
              <p className="font-semibold text-xl text-white">Branch Office</p>
              <p>
                IIT Madras Research Park, Block-E, 8th Floor, Taramani, Chennai
                – 600 113.
              </p>
              <div className="flex items-center space-x-2">
                <Phone size={16} /> <span>+91 73583 00888</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} /> <span>info@netaccess-india.com</span>
              </div>
            </div>
            <div>
              <p className="font-semibold  text-xl text-white">Registered Office</p>
              <p>Parry House, 6th Floor, No:43, Moore Street, Chennai–600001</p>
              <div className="flex items-center space-x-2">
                <Phone size={16} /> <span>+91 73583 00888</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} /> <span>info@netaccess-india.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <img  src="https://www.netaccess-india.com/wp-content/uploads/2023/08/Murugappalogo-768x458.png" className="w-48 h-28"/>
            <p>
              Promoted by the renowned Murugappa Group and powered by
              innovation.
            </p>
          </div>
          <div className="">
            <div className="grid grid-cols-2">
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2023/08/tuv-nord.png"
              alt="TUV Nord"
              className=" w-30 h-20"
            />
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2024/03/nasscom-logo.jpg"
              alt="NASSCOM"
              className=" w-30 h-20 rounded-2xl"
            />
            </div>
           
            <img
              src="https://www.netaccess-india.com/wp-content/uploads/2025/01/certin-logo-1.png"
              alt="Cert-in"
              className=" w-60 h-16 mt-3 rounded-xl "
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 items-center  justify-between flex text-sm">
        <p>© 2025. All Rights Reserved. Designed By Net Access India Limited</p>
        <div className="flex justify-center items-end space-x-4 ">
          <a href="#" >
            Privacy Policy
          </a>
          <a href="#" >
          <img
            src="\assets\facebook.png"
            alt="facebook"
            className="w-6 h-6 cursor-pointer "
          />
          </a>
          <a href="#" >
            <img src="\assets\twitter.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" >
          <img
            src="\assets\instagram.png"
            alt="instagram"
            className="w-6 h-6 cursor-pointer "
          />
          </a>
          <a href="#" >
          <img
            src="\assets\linkedin.png"
            alt="linkedin"
            className="w-6 h-6 cursor-pointer "
          />
          </a>
          <a href="#" >
          <img
            src="\assets\youtube.png"
            alt="youtube"
            className="w-6 h-6 cursor-pointer "
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
