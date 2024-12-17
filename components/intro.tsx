"use client";

import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";



export default function Intro() {
  return (
    <section>
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
              duration: 4, // 动画时间
              repeat: Infinity, // 无限循环
              ease: "linear", // 平滑运动
            }}
          >
            <motion.span className="absolute -bottom-2  text-xl rotate-0">
              🫡
            </motion.span>
            <motion.span className="absolute -top-2  text-xl rotate-0">
              😘
            </motion.span>
          </motion.div>
        </div>
      </div>
      <p className="text-center mt-4 text-lg leading-relaxed">
        <span className="font-bold">
          Hello, I'm a beginner in frontend development.
        </span>{" "}
        I am passionate about learning and building{" "}
        <span className="italic">web applications</span>. Currently, I am
        focusing on <span className="underline">React and Next.js</span> to
        enhance my skills.
      </p>
      
    </section>
  );
}
