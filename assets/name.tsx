import React from "react";

interface nameprops{
    label:string;
}

const name =({label}:nameprops)=>{
    return(
        <>
    <h1 className=" font-black text-4xl">{label}</h1>
        </>
    )

}

export default name;