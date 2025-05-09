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
    <div className="w-full h-max flex mb-5">
      <div className="h-40 gap-2 w-[70%] flex flex-col justify-center">
        <Name label="RAHUL GUPTA" />
        <h3 className="text-blue-700 font-bold text-2xl">
          Machine Learning & Data Engineering Expert | Generative AI, Spark Optimization, and Scalable ML Systems
        </h3>
        <div className="flex gap-10 flex-wrap">
          <ContactLink href="mailto:rahul@datamonk.dev" icon={<At />} label="rahul@datamonk.dev" />
          <ContactLink href="https://goo.gl/maps/uKYDKA4GVgrPP2BB7" icon={<Location />} label="Jaipur, India" />
          <ContactLink href="https://datamonk.dev" icon={<Globe />} label="datamonk.dev" />
          <ContactLink href="https://www.linkedin.com/in/rahul1990gupta/" icon={<Linkedin />} label="rahul1990gupta" />
        </div>
      </div>
      <ProfileImage />
    </div>
  );
};

export default Header;
