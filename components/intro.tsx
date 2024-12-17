"use client";

import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsWechat } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* <Image src="" alt=""></Image> */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <Avatar className="h-20 w-20 object-cover border-[0.15rem] shadow-xl">
              <AvatarImage src="/avatar.jpg" />
            </Avatar>
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              width: "100px", // 环绕轨迹的宽度
              height: "100px", // 环绕轨迹的高度
              top: "-10%", // 垂直居中
              left: "-10%", // 水平居中
              transformOrigin: "center", // 设置动画中心
            }}
            animate={{
              rotate: 360, // 让环绕轨迹旋转
            }}
            transition={{
              duration: 5, // 动画时间
              repeat: Infinity, // 无限循环
              ease: "linear", // 平滑运动
            }}
          >
            <motion.span className="absolute -bottom-2  text-2xl rotate-0">
              🫡
            </motion.span>
            <motion.span className="absolute -top-2  text-xl rotate-180">
              😘
            </motion.span>
          </motion.div>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 !text-2xl font-medium !leading-[1.5] !sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-bold">
          Hello, I'm Eddie, a beginner in frontend development.
        </span>{" "}
        I am passionate about learning and building{" "}
        <span className="italic">web applications</span>. Currently, I am
        focusing on <span className="underline">React and Next.js</span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-[#eded04] text-[#6c2ba5] px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here!
          <BsArrowRight className="opacity-70 group-hover:translate-x-3 transition" />
        </Link>
        <a
          className="group bg-[#6c2ba5] text-[#dddd17] px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
        >
          <BsWechat />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Eddiewjy"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
