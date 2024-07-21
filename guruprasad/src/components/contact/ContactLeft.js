import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { FaSquareInstagram } from "react-icons/fa6";
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
         src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">GURUPASAD BHAT</h3>
        <p className="text-lg font-normal text-grey-400">
          FULL STACK WEB DEVELOPER
        </p>
        <p className="text-base text-green-400 tracking-wide">
          "I’d love to hear from you—whether you have a question, a project
          idea, or just want to say hello, get in touch and let’s connect to
          discuss new opportunities and collaborations."
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+919482085414</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">gurubhatkodani@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
};

export default ContactLeft;
