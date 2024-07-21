import React from 'react'
import Title from '../layouts/Title'
//import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR KNOWLEDGE HIGH !!!"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="TRAVELGURU"
          des="TravelGuru is a comprehensive travel and stay website designed to offer seamless and personalized travel
experiences. Developed using React frameworks like callback hook,Contexthook."
          //src={projectOne}
        />
        <ProjectsCard
          title="SMART-ATTENDANCE SYSTEM"
          des="Created GUI Interface for the usage of attendace in schools and colleges with the help of python libraries such as tensorflow, opencv,tkinter,pickle."
          //src={projectTwo}
        />
        <ProjectsCard
          title="SMART PARKING SYSTEM"
          des="Database managment Project with the help of sql and mongodb."
          //src={projectThree}
        />
        <ProjectsCard
          title="BIKE-RENTAL SYSTEM"
          des="Using Object oriented concepts of java developed a bike rental system for the longer use in the cities."
          // src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects