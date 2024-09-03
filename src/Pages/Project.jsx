import React from "react";
import project1 from "../assets/project1.png";
import project4 from "../assets/project4.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";


const Project = () => {
  const projects = [
    {
      id: 1,
      title: "ARTVISTA_GALLERY",
      Frontend: "https://github.com/Mathivathanakk/ARTVISTA-FRONTEND",
      Backend: "https://github.com/Mathivathanakk/ARTVISTA-BACKEND",
      website: "https://artvista-gallery-frontend-mathi.vercel.app",
      Description:
        "ArtVista Gallery is a MERN Full Stack Project.It includes features like filter,add artwork to shopping cart,admin can do CRUD operation and view their order details.",
      image: project1,
      skills: [
        "ReactJs",
        "NodeJs",
        "Html",
        "bootstrap",
        "Stripe",
        "Multer",
        "Redux",
        "ContextApi",
        "MongoDB",
        "ExpressJs",
      ],
    },
    {
      id: 2,
      title: "CHAT_APP",
      Frontend: "https://github.com/Mathivathanakk/CHAT-APP-FRONTEND",
      Backend: "https://github.com/Mathivathanakk/CHAT-APP-BACKEND",
      website: "https://chat-app-frontend-mathivathana.vercel.app",
      Description:
        "This Chat app enables you to send and receive messages, images and videos.In this application, we can update our profiles and search the users by name and email.",
      image: project2,
      skills: [
        "ReactJs",
        "NodeJs",
        "Html",
        "TailwindCss",
        "Redux",
        "Socket-io",
        "MongoDB",
        "ExpressJs",
        "Cloudinary"
      ],
    },
    {
      id: 3,
      title: "BLOGGY_BLOG",
      Frontend: "https://github.com/Mathivathanakk/Blog-Frontend",
      Backend: "https://github.com/Mathivathanakk/Blog-Backend",
      website: "https://blog-frontend-mathikannan.vercel.app",
      Description:
        "Admin centric Blog App.It includes features such as perform CRUD operation by admin and view the blog by users.",
      image: project3,
      skills: [
        "ReactJs",
        "NodeJs",
        "Html",
        "TailwindCss",
        "Firebase",
        "Redux",
        "MongoDB",
        "ExpressJs",
      ],
    },
    {
      id: 4,
      title: "GITHUB_PROFILE_FINDER",
      Frontend: "https://github.com/Mathivathanakk/GITHUB-PROFILE-FINDER",
      Backend: "https://github-profile-finder-red-alpha.vercel.app/",
      website: "https://github-profile-finder-red-alpha.vercel.app/",
      Description:
        "Github Profile Finder is based on the Javascript DOM Manipulation with the utilization of the Github API for getting the Users Profile",
      image: project4,
      skills: [
        "Html",
        "css",
        "Bootstrap",
        "Javascript",
        "API intergation",
        "DOM Manipulation",
      ],
    },
  ];

  return (
    <div id="projects" className="bg-fuchsia-200 w-full px-[12%] py-5 scroll">
      <h2 className="text-center text-5xl font-Serif p-3">Projects</h2>
      <div className="grid w-full md:grid-cols-2 grid-cols-1 justify-around gap-10">
        {projects.map((ele, index) => {
          return (
            <div
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
              className="px-4 gap-5 py-4  bg-slate-200"
            >
              <a href={ele.website} target="_blank">
             
                <img src={ele.image} alt="website-image" className="rounded-2xl  hover:shadow-black cursor-pointer  hover:-translate-y-1 duration-500 "  style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }} />
              </a>

              <div className="flex items-center justify-center flex-wrap">
                <h4 className="font-bold font-Nunito text-lg p-2">{ele.title}</h4>
              </div>

              
              <div className="flex flex-wrap gap-1 justify-center ">
                {ele.skills &&
                  ele.skills.map((skills, i) => {
                    return (
                      <div className="border rounded-full bg-gradient-to-r from-[#542b61] to-[#ec8cd7]  text-white font-Serif text-sm mt-1 py-1 px-2 bg-white hover:shadow-black gap-4 cursor-pointer hover:bg-fuchsia-200 hover:-translate-y-1 duration-500">
                        {skills}
                      </div>
                    );
                  })}
              </div>

              <p className="p-2 text-center text-sm font-Nunito font-semibold">{ele.Description}</p>
              <hr />
              <div className="flex flex-wrap gap-2 justify-center p-1">
                <a
                  href={ele.Frontend}
                  target="_blank"
                  className="border rounded-full bg-gradient-to-r from-[#542b61] to-[#ec8cd7]  text-white font-Serif text-md mt-1 py-1 px-2 bg-white hover:shadow-black gap-4 cursor-pointer hover:bg-fuchsia-200 hover:-translate-y-1 duration-500"
                >
                  FrontEnd Code
                </a>
                <a
                  href={ele.Backend}
                  target="_blank"
                  className="border rounded-full bg-gradient-to-r from-[#542b61] to-[#ec8cd7]  text-white font-Serif text-md mt-1 py-1 px-2 bg-white hover:shadow-black gap-4 cursor-pointer hover:bg-fuchsia-200 hover:-translate-y-1 duration-500"
                >
                  BackEnd Code
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
