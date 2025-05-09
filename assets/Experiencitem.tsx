import React from "react";
import Calender from "./Calender";
import Location from "./Location";

interface ExperienceProps {
  title: string;
  company: string;
  date: string;
  location: string;
  points: string[];
}

const ExperienceItem = ({ title, company, date, location, points }: ExperienceProps) => {
  return (
    <div>
      <h3 className="sm:text-2xl sm:mt-5 text-xl">{title}</h3>
      <p className="text-xl text-violet-900 font-bold">{company}</p>
      <div className="mt-1 mb-2 flex gap-10 text-gray-700 flex-wrap">
        <div className="flex w-fit gap-2">
          <Calender />
          <p>{date}</p>
        </div>
        <div className="flex w-fit gap-2">
          <Location />
          <p>{location}</p>
        </div>
      </div>
      <ul className="text-gray-700 list-disc pl-5">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <p className="mt-1 sm:mt-2 text-gray-800">————————————————————————</p>
    </div>
  );
};

export default ExperienceItem;
