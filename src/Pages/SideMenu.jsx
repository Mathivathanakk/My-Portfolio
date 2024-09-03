import React from 'react';
import { IoClose } from "react-icons/io5";

const SideMenu = ({onClose}) => {
    return (
        <div className='text-white text-xl font-Roboto'>
          
           <ul  style={{transform:"translateX(-16rem)"}}  className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-fuchsia-950 bg-opacity-60 transition duration-500">
           
         <div className="absolute right-6 top-6" onClick={onClose}>

         <IoClose size={30}/>
         </div>

           <li>
            <a href="#top" onClick={onClose}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={onClose}>About</a>
          </li>
          <li>
            <a href="#education" onClick={onClose}>Education</a>
          </li>
          <li>
            <a href="#skills" onClick={onClose}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={onClose}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={onClose}>Contact</a>
          </li>
            
            
            
            </ul> 
        </div>
    );
};

export default SideMenu;