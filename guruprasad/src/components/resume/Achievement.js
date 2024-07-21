import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022-present</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Certifications & Achievements
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Introduction to Java"
            subTitle="By Cousera (OCt 11-2023)."
            result="96%"
            des="gained the knowledge in importance of java,data types,lexical issues,constructors,interfaces,method overloading and method overriding with inheritance methods"
          />
          <ResumeCard
            title="Problem Solving through programming in C"
            subTitle="Completed NPTEL CERTICATION BY IIT Karaghpur"
            result="52%"
            des="basic data types,initialization of the function,function calling,function definition,built in functions,arrays,strings,pointers."
          />
          <ResumeCard
            title="Foundation of Cyber Security"
            subTitle="BY Google AND Coursera"
            result="89%"
            des="learned basic knowledge about cyber security sectors."
          />
        </div>
      </div>
      
     
    </motion.div>
  );
};

export default Achievement;
