import React from "react";
import Title from "../assets/Title";
import ProudItem from "../assets/ProudItems"; // adjust path as needed

const proudList = [
  {
    title: "Patent Award",
    description:
      "Granted a patent for “Assigning Maneuvers to Sensor Data for Agents Around Autonomous Vehicles,” recognizing innovation in motion prediction systems within the AV domain.",
  },
  {
    title: "Hero Award",
    description:
      "Received the company’s Hero Award for leading efforts that directly contributed to securing a key customer account, demonstrating strong crossfunctional and impact-driven execution",
  },
  {
    title: "Departmental Silver Medal – IIT Kanpur",
    description:
      "Awarded 2nd Rank in the Department of Mathematics, IIT Kanpur, for outstanding academic performance among graduating peers.",
  },
];

const Proud = () => {
  return (
    <div className="w-full">
      <Title label="Most Proud of" />
      {proudList.map((item, index) => (
        <ProudItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Proud;
