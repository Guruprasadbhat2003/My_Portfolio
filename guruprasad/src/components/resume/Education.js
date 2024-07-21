import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
     
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.E in Computer Science"
            subTitle="Canara Engineering College ,Manglore (2022-present)"
            result="9.3/10"
            des="Engineering learnings encompass DSA for efficient data handling, OS for resource management, DBMS for data storage and retrieval, and OOPS for designing software with objects."
          />
          <ResumeCard
            title="PRE UNIVERSITY EDUCATION (PCMCS)"
            subTitle="Beena Vaidya PU College,Murdeshwar (2020 - 2022)"
            result=""
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="SECONDARY SCHOOL EDUCATION"
            subTitle="Govt Highschool, Idagunji (2018 - 2020)"
            result=""
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
