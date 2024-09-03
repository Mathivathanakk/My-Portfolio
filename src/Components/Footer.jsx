import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
    <div
        id="contact"
        class="bg-fuchsia-950 text-white font-Nunito w-full px-[12%] py-10 scroll-mt-20 "
      >
        <h4 class="text-center mb-2 text-lg">Connect with me</h4>
        <h2 class="text-center text-5xl font-Roboto">Get in touch</h2>
        <p class="text-center max-w-2xl mx-auto mt-5 mb-12 font-Nunito">
          I'd love to hear from you! If you have any questions,comments or
          feedback ,please use the form below.
        </p>

        <form
          method="POST"
          action="https://api.web3forms.com/submit"
          class="max-w-2xl mx-auto"
        >
          <input
            type="hidden"
            name="access_key"
            value="3b65e1bf-b037-48c0-a3e3-18b54fed3691"
          />

          <div class="grid grid-cols-auto gap-6 mt-10 mb-8">
            <input
              type="text"
              placeholder="Enter Your name"
              name="name"
              class="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
              required
            />
            <input
              type="email"
              required
              name="email"
              placeholder="Enter Your Email"
              class="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
          </div>
          <textarea
            rows="6"
            required
            name="message"
            placeholder="Enter your message"
            class="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          ></textarea>
          <button
            type="submit"
            class="py-2 px-4 w-max flex font-Roboto text-xl items-center justify-between gap-2 bg-gradient-to-r from-[#542b61] to-[#ec8cd7] text-white rounded-full mx-auto hover:bg-black duration-500"
          >
            Submit Now
          </button>
        </form>
        <div className="flex items-center mt-5 justify-center gap-5">
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
        <p className="text-white font-bold text-center mt-5">&copy;2024 Mathivathanakk.All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
