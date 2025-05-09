import React from "react";

interface headingprop{
    label :string;
}

const heading =({label}:headingprop)=>{
    return (
        <>
        <h2 className="text-3xl  font-bold text-violet-900">{label}</h2>
        <hr className=" border-2 text-violet-900" />  
        </>
    )
}

export default heading