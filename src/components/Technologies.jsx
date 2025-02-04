import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-[#001e2b]">
            <SiMongodb className="text-7xl text-green-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-[#333333]">
            <FaNodeJs className="text-7xl text-[#66cc33]"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-[#FFC400]">
            <SiFirebase className="text-7xl text-[#DD2C00]"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss className="text-7xl text-[#06B6D4]"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiRedux className="text-7xl text-[#764abc]"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-white-800">
            <FaGithub className="text-7xl"/>
        </div>
      </div>
    </div>
  )
};

export default Technologies;
