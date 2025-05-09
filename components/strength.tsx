import React from "react";
import Title from "../assets/Title"
import StrengthC from "../assets/StrengthC";


const titles = [
        {
            label:"Maching Learning"
        },
        {
            label:"Model Optimization"
        },
        {
            label: "Generative AI"
        },
        {
            label: "Apache Spark"
        },
        {
            label: "ML-Ops"
        },
        {
            label: "ETL"
        },
        {
            label: "Databricks"
        },
        {
            label: "Team Leadership"
        },
        {
            label: "Strategic Thinking"
        },
        {
            label: "Adaptability"
        },
        
]
const strength=()=>{
    return (
    <>
    <div className="w-full mt-2 ">
        <Title label="Strength"/>
        <div className="flex flex-wrap ">
        {
            titles.slice(0,7).map((item,index)=>(
                <StrengthC key={index} {...item}/>
            ))
        }      
      </div>
      <hr className=" mt-3 text-gray-400 border-1"/>
      <div className="flex flex-wrap ">
      {
            titles.slice(7).map((item,index)=>(
                <StrengthC key={index} {...item}/>
            ))
        }
      </div>
    </div>
    </>
    )
}

export default strength;