import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "🏫就读院校",
        location: "",
        description:
            "我就读于杭州电子科技大学，主修计算机科学与技术，辅修Chatgpt沟通艺术🤪",
        icon: React.createElement(LuGraduationCap),
        date: "2023",
    },
    {
        title: "🍬Front-End Developer",
        location: "",
        description:
            "我是校未央学社的技术部成员之一，负责前端开发和摸鱼🐟，涉及技术包括React, TypeScript, TailwindCSS等",
        icon: React.createElement(CgWorkAlt),
        date: "2024-2025",
    },
    {
        title: "🦉Full-Stack Developer",
        location: "",
        description:
            "我的终极目标是成为一名全栈开发者，能够对架构做出全面而优雅的设计💫",
        icon: React.createElement(FaReact),
        date: "nolonger future(I believe)",
    },
] as const;

export const projectsData = [
    {
        title: "mundo社区",
        description:
            "作为mundu社区的前端开发人员，我目前负责构建客服系统，与后端人员对接，实现包括常见问题展示，客服实时对话，ai问答等功能",
        tags: ["React", "Vite", "TailwindCSS","shadCN","Apifox"],
        imageUrl: corpcommentImg,
    },
    {
        title: "待完善",
        description:
            "准备中",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "待完善",
        description:
            "准备中",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Vite",
    "Git",
    "Apifox",
    "Framer Motion",
    "ShadCN",
    "Magic UI",
    "Python",
    "PyTorch",
] as const;