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
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
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
            <motion.span className="absolute text-2xl rotate-0 -bottom-2">
              🫡
            </motion.span>
            <motion.span className="absolute text-xl rotate-180 -top-2">
              😘
            </motion.span>
          </motion.div>
        </div>
      </div>
      <CardContainer className="inter-var sm:w-[40rem] h-auto">
        <CardBody className="bg-gray-50  group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-5 border flex-col ">
          <div className="flex justify-center items-center">
            <CardItem
              translateZ="100"
              className="flex  justify-center text-lg text-center text-neutral-600 dark:text-white  max-w-full "
            >
              <motion.div
                className="mt-2  text-xl font-medium leading-[1.5] sm:text-2xl  text-center items-center justify-center flex flex-col w-full "
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl font-medium leading-[1.5] sm:text-2xl ">
                  <span className="block font-bold">Hello, 我是 Eddie</span>
                  <span className="block font-bold">一个前端初学者。</span>
                </p>
              </motion.div>
            </CardItem>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <CardItem
              translateZ="30"
              className="flex justify-center max-w-full gap-4 px-4 mt-5 text-lg font-medium items-enter sm:flex-row "
            >
              <Link
                href="#contact"
                className="group bg-[#eded04] text-[#6c2ba5] px-7 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition text-sm dark:bg-white/10"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact me
                <BsArrowRight className="transition opacity-70 group-hover:translate-x-3" />
              </Link>

              <a
                className="group bg-[#6c2ba5] text-[#dddd17] px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 text-sm"
                href="/CV.pdf"
                download
              >
                Download CV{" "}
                <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
              </a>

              <a
                className=" p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/Eddiewjy"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
              >
                <FaGithubSquare />
              </a>
            </CardItem>
          </motion.div>
        </CardBody>
      </CardContainer>
    </section>
  );
}
