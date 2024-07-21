import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaTwitter, FaLinkedinIn, FaReact, FaPython} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI-UX Designer.",],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Guruprasad Bhat</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Welcome to my portfolio! I am a passionate engineer with expertise in
          Data Structures and Algorithms (DSA), Operating Systems (OS), Database
          Management Systems (DBMS), and Object-Oriented Programming (OOPS) with
          frontend development frameworks such as react js,css3,Tailwindcss. I
          specialize in crafting efficient algorithms, managing system
          resources, designing robust databases, and developing software
          solutions with an object-oriented approach. Explore my projects and
          accomplishments to see how I blend technical skills with creative
          problem-solving to deliver impactful results.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="https://www.instagram.com/bhat__guruprasad?igsh=dXRyeHl6NGViY3Fl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareInstagram />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://x.com/gurubhatkodani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/guruprasad-bhat-493117258/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <FaJava />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <h2 className="text-base uppercase font-titleFont mb-4">
          Get in Touch
        </h2>
        <div className="flex gap-4">
          <a
            href="https://pdf.ac/1a6uz3"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            href="https://mail.google.com/"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
