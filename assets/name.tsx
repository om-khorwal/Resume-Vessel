import React from "react";

interface nameprops {
  label: string;
}

const Name = ({ label }: nameprops) => {
  return (
    <h1 className="font-black text-2xl sm:text-3xl md:text-4xl">{label}</h1>
  );
};

export default Name;