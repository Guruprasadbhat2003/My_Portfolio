import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2022 -present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Development Intern"
            subTitle="Internship Studio (Jun-2024)"
            result="PUNE"
            des="Gained hands-on experience in building responsive and interactive web interfaces using HTML, CSS, and JavaScript as a Front-End Development Intern."
          />
          <ResumeCard
            title="EDU-VITALITY 2024"
            subTitle="Participated Hackathon at RV college of Engineering "
            result="Banglore"
            des="Developed smart attendace system using artifical Intelligence with the help of python and its libraries"
          />
          <ResumeCard
            title="DPBH -2023"
            subTitle="Participated Hackathon at Canara Engineering College"
            result="Manglore"
            des="Got knowledge About Dark patterns and worked on basket sneaking concept. "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
