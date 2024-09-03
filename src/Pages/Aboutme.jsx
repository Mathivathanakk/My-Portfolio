import React from "react";
import photo from "../assets/photo.jpg"
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Aboutme = () => {
  return (
    <div id="about" className="bg-slate-200 w-full px-[12%] py-5  scroll ">
      
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img
            src={photo}
            alt="profilepic"
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />
        </div>
        <div className="flex flex-col items-center">
        <h2 className="text-center text-5xl font-Serif p-3">About me</h2>
          <p className="mb-2 max-w-2xl font-Nunito text-l">
            
         Hai..I'm Mathivathana from Tiruppur.I am a Full stack Developer(MERN).
         I have recently completed DGNM. My educational background is in Medical field, but I took the initative to learn programming independently. I have a collection of projects on my github profile that demonstrate my programming skills.
         I'm proficient in HTML, CSS, Bootstrap, Javascript, React, Redux, MongoDB, Node.js, Express.js, and MySQL. I'm dedicated to continous learning in building dynamic and scalable web applications and constantly seekout new knowledge.
         My goal is  to contribute to innovative projects and drive progress in the field of web development with my comprehensive skill set.  

          </p>
          <div className="flex items-start justify-start gap-5">
          <a href="https://github.com/Mathivathanakk" target="_blank"
          className="text-black hover:text-black-500">
            <FaGithub size={25}/>
          </a>
          <a href="mailto:mathikk06@gmail.com" target="_blank"
          className="text-orange-600">
            <IoIosMail size={30}/>
          </a>
          <a href="https://www.linkedin.com/in/mathivathana-kannan-68313a2b9" target="_blank" className="text-blue-600">
            <GrLinkedin size={25}/>
          </a>
         
        </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
