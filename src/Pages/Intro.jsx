import React from "react";
import photo from "../assets/photo.jpg"
import hand from "../assets/hand-icon.png";
import { MdArrowOutward } from "react-icons/md";
import { LuDownload } from "react-icons/lu";


const Intro = () => {
  return (
    <>
      <div className=" bg-fuchsia-200 w-full text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <img
          src={photo}
          alt="profile-pic"
          className="w-32 rounded-full mt-4"
        />
        <h1 className="flex items-center gap-2 text-3xl md:text-2xl mb-3 font-Serif">
          Hi!..I'm Mathivathana
          <img src={hand} alt="hand-icon" className="w-6" />
        </h1>
        <h5 className="text-2xl sm:text-4xl font-Serif">
          I am a Full Stack Developer
        </h5>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 font-Serif text-xl">
          <a
            href='#'
            download
            className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#542b61] to-[#ec8cd7]  text-white flex items-center gap-2"
          >
            Resume
            <LuDownload />
          </a>
          <a
            href="#contact"
           
            className="px-10 py-3 border rounded-full bg-white border-fuchsia-950 text-black flex items-center gap-2"
          >
            Contact
            <MdArrowOutward size={20}/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Intro;
