'use client'
import Header from "../components/header";
import Experience from "../components/experience"
import Lifephilosophy from "../components/life-philosphy";
import Proud from "../components/proud";
import Strength from "../components/strength"
export default function Home() {

  return (
    <>
    <div className=" p-0 sm:p-10 ">

      <Header />
      <div className=" flex gap-20 flex-col sm:flex-row md:w-full px-4">
      <div className="w-full sm:w-[60%]">
      <Experience />
        </div>
        <div className="w-full sm:w-[40%]">
          <Lifephilosophy />
          <Proud />
          <Strength/>
        </div>
      </div>
    </div>

    </>
  );
}
