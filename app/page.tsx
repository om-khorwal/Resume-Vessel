'use client'
import Header from "../components/header";
import Experience from "../components/experience"
import Lifephilosophy from "../components/life-philosphy";
import Proud from "../components/proud";
import Strength from "../components/strength"
export default function Home() {

  return (
    <>
    <div className="border-2 p-5">

      <Header />
      <div className="flex w-full gap-15">
        <div className= "w-[60%]">
          <Experience />
        </div>
        <div className="w-[40%]">
          <Lifephilosophy />
          <Proud />
          <Strength/>
        </div>
      </div>
      </div>

    </>
  );
}
