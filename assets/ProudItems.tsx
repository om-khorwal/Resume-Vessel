import React from "react";
import Trophy from "../assets/Trophy";

interface ProudItemProps {
  title: string;
  description: string;
}

const ProudItem = ({ title, description }: ProudItemProps) => {
  return (
    <div className="mt-5 flex justify-center gap-2">
      <div className="m-1">
        <Trophy />
      </div>
      <div>
        <span className="font-bold">{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProudItem;
