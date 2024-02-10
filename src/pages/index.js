"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import logo from "@/../public/logo.png";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import profile from "@/../public/profile.png";
import white from "@/../public/White.png";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="">
      <div className="bg h-[840px] text-white">
        <div className="lg:max-w-5xl p-8 md:max-w-4xl mx-auto flex items-center justify-between">
          <Image src={logo} alt="logo" className="w-14 h-14"></Image>
          <div className="flex gap-6 text-lg items-center">
            <a href="#about" className="hover:text-[#e42c48] cursor-pointer">
              About
            </a>
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
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className=" items-center p-4 mx-auto flex justify-between md:max-w-4xl lg:max-w-5xl"
        >
          <div className="flex flex-col items-center">
            <Image
              src={profile}
              alt="passport"
              className="w-72 h-72 mx-auto "
            />

            <div className="flex items-center gap-6 p-8">
              <button className="bg-gradient-to-br from-[#e42c48] font-semibold to-white text-black px-8 py-3 rounded-[80px]">
                Hire Me
              </button>
              <button className="bg-gradient-to-br to-[#e42c48] font-semibold from-white text-black px-2 py-1 rounded-[80px]">
                <div className="bg-black text-white  rounded-full px-6 py-2">
                  Resume
                </div>
              </button>
            </div>
          </div>
          <div className="lg:max-w-xl md:max-w-sm flex flex-col gap-4">
            <div className="lg:text-4xl md:text-2xl  font-semibold text-center pt-10 text-[#e42c48]">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "--- I'm Kartavya Panthi",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "--- A Frontend Developer",
                  1000,
                  "--- A Backend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1.3em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <div className="text-lg text-center pt-4">
              A creative <span className="text-[#e42c48]">Freelancer </span> &{" "}
              <span className="text-[#e42c48]"> Full Stack Developer</span>{" "}
              focused on crafting clean & user-friendly experiences.
            </div>
          </div>
        </motion.div>
      </div>
      <div
        className="mx-auto h-screen flex items-center bg-neutral-950"
        id="about"
      >
        <div className="flex relative pt-8 justify-between gap-4 lg:max-w-5xl mx-auto">
          <div className="flex flex-col  gap-4">
            <div className="text-[#e42c48] font-serif text-5xl font-medium">
              <span className="text-9xl">W</span>ho am I ?
            </div>
            <div className="max-w-4xl text-white text-lg font-sans ">
              Hello, I'm a software engineer with a focus on full-stack
              development. With over 7 months of experience in the tech
              industry, I have a strong background in both front-end and
              back-end technologies such as Next.js, JavaScript, Python, Java,
              MERN Stack. I have a proven track record of developing robust,
              scalable, and efficient software solutions.
            </div>
            <div className="border-t border-t-[#e42c48] w-[60%]"></div>
            <div className="flex gap-1 pt-2 justify-end text-white">
              <div className="text-white pr-2">Age : 22</div>
              <div className="border-l border-l-[#e42c48]"></div>
              <div className="px-2">From : Gurugram, Haryana </div>
              <div className="border-l border-l-[#e42c48]"></div>
              <div className="pl-2">Email : kartavya.dev07@gmail.com </div>
            </div>
          </div>
          <div>
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image
                src={white}
                alt="white"
                className="w-52 h-52 rounded-full shadow-md shadow-gray-400"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
