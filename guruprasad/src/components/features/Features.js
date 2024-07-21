import React from "react";
import { FaGlobe, FaUser } from "react-icons/fa";
import Title from "../layouts/Title";
import Card from "./Card";
import { DiMongodb } from "react-icons/di";
import { FaSquareWebAwesome } from "react-icons/fa6";
import { BiBookOpen } from "react-icons/bi";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Proficient in Modern Web Technologies"
          des="Skilled in HTML, CSS, JavaScript, and frameworks like React,Node ensuring responsive and interactive experiences."
        />
        <Card
          title="Strong Problem-Solving Skills"
          des="Expert in identifying, analyzing, and resolving complex issues efficiently. "
          icon={<FaSquareWebAwesome />}
        />
        <Card
          title="User-Centric Design"
          des="Focused on creating intuitive, accessible, and engaging user interfaces. Employs user feedback and usability testing."
          icon={<FaUser />}
        />
        <Card
          title="Backend Development"
          des="Competent in server-side technologies like Node.js, Python, and databases such as MySQL and MongoDB."
          icon={<DiMongodb />}
        />
        <Card
          title="UI-UX Design"
          des="LUI design focuses on creating visually appealing and user-friendly interfaces that enhance user interaction and experience with a product or website.."
          icon={<BiBookOpen />}
        />
        <Card
          title="Web Hosting"
          des="Utilizing robust infrastructure to guarantee consistent performance and accessibility."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
