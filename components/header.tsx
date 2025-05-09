'use client';
import React from "react";
import ContactLink from "../assets/ContactLink";
import ProfileImage from "../assets/Profileimg";
import At from "../assets/At";
import Location from "../assets/Location";
import Globe from "../assets/Globe";
import Linkedin from "../assets/Linkedin";
import Name from "../assets/name";

const Header = () => {
  return (
    <div className="sm:w-full h-max flex flex-row  items-start justify-between gap-4  px-4">
      
      {/* Left: Name + Tagline + Links */}
      <div className="w-[65%] min-w-[240px] flex flex-col justify-center gap-3">
        <Name label="RAHUL GUPTA" />
        <h3 className="text-blue-700 font-bold text-sm sm:text-base md:text-lg">
          Machine Learning & Data Engineering Expert | Generative AI, Spark Optimization, <br />and Scalable ML Systems
        </h3>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
          <ContactLink href="mailto:rahul@datamonk.dev" icon={<At />} label="rahul@datamonk.dev" />
          <ContactLink href="https://goo.gl/maps/uKYDKA4GVgrPP2BB7" icon={<Location />} label="Jaipur, India" />
          <ContactLink href="https://datamonk.dev" icon={<Globe />} label="datamonk.dev" />
          <ContactLink href="https://www.linkedin.com/in/rahul1990gupta/" icon={<Linkedin />} label="rahul1990gupta" />
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-[35%] min-w-[100px] flex justify-end ">

        <ProfileImage />
      </div>
    </div>
  );
};

export default Header;
