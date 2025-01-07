"use client";

import type { SectionName } from "@/lib/types.ts";
import React, { useState, createContext, useContext } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);//创建一个上下文对象

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {//创建一个上下文提供者
  const [activeSection, setActiveSection] = useState<SectionName>("Home");//用于跟踪当前活动的部分
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // 用于跟踪用户最后一次点击的时间

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}//将这四个值传递给子组件
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);//使用上下文对象

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );//如果上下文对象为空，则抛出错误
  }

  return context;
}
