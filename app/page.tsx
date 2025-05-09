'use client'
import Header from "../components/header";
import Experience from "../components/experience"
import Lifephilosophy from "../components/life-philosphy";
import Proud from "../components/proud";
import Strength from "../components/strength"
export default function Home() {

  return (
    <>

      <Header />
      <div className="flex flex-col md:flex-row w-full gap-5 px-4">
      <div className="w-full md:w-[60%]">
      <Experience />
        </div>
        <div className="w-full md:w-[40%]">
          <Lifephilosophy />
          <Proud />
          <Strength/>
        </div>
      </div>

    </>
  );
}
