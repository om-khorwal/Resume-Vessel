import React from "react";

interface Strengthprops {
    label:String,
}
const StrengthC =({label}:Strengthprops)=>{

    return (
        <>

        <div className="w-fit px-1.5 py-1 mr-1 border-gray-300 border-2 justify-center items-center flex rounded-2xl mt-2">
            <p className=" text-[18px] font-semibold  text-[#666666]"> {label}</p>
        </div>
        </>
    )
}

export default StrengthC;