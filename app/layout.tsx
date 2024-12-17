import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eddie | 个人主页",
  description: "WJY是一个前端菜鸟",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "${inter.className} bg-[#151527] text-[#ffffff] relative h-[5000px] pt-24 sm:pt-33"
        }
      >
        <div className="bg-[#6c2ba5] absolute top-[-3rem] -z-10 right-[11rem] h-[15.25rem] w-[21.25rem] rounded-full blur-[15rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dddd17] absolute top-[-1rem] -z-10 left-[-5rem] h-[15.25rem] w-[30.25rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[-33rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
