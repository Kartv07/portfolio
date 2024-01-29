import Image from "next/image";
import { Inter } from "next/font/google";
import logo from "@/../public/logo.png";
import github from "@/../public/github.png";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import passport from "@/../public/White_PassPort.jpg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <div className="bg h-[840px] text-white">
        <div className="max-w-5xl mx-auto flex items-center justify-between pt-9">
          <Image src={logo} alt="logo" className="w-14 h-14"></Image>
          <div className="flex gap-6 text-lg items-center">
            <div className="hover:text-[#e42c48] cursor-pointer">About</div>
            <div className="hover:text-[#e42c48] cursor-pointer">
              Experience
            </div>
            <div className="hover:text-[#e42c48] cursor-pointer">Projects</div>
            <a
              href="https://www.linkedin.com/in/kartavya-panthi"
              target="_blank"
            >
              <GrLinkedinOption
                size={24}
                className="hover:text-[#e42c48] cursor-pointer"
              />
            </a>
            <a href="https://github.com/Kartv07" target="_blank">
              <AiFillGithub
                size={24}
                className="hover:text-[#e42c48] cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="pt-20 mx-auto max-w-5xl">
          <Image
            src={passport}
            alt="passport"
            className="w-36 rounded-full h-36 mx-auto border border-red-200 shadow-red-500"
          />
          <div className="text-4xl font-semibold text-center pt-10 text-[#e42c48]">
            Kartavya Panthi
          </div>
          <div className="text-lg text-center  pt-4">
            A creative Freelancer & Full Stack Developer
          </div>
        </div>
      </div>
    </div>
  );
}
