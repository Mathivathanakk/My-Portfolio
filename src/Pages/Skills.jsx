import React from "react";

const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      skills: [
       
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        }, {
          name: "React Js",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpObpNtJKyVexJ3KCGVXbTzilWCQiGDyXbeQ&s",
        },
        {
          name: "Redux",
          image:
            "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node Js",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKXNo_5uveVad96PokK8lJ7erdu0RB-dgZQ&s",
        },
        {
          name: "Express Js",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS88KSR4lUW2qcf7aoAyhjpi-Prr5rXOiJW_Q&s",
        },
      ],
    },
    {
      title: "DataBase",
      skills: [
        {
          name: "MySQL",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        },
        {
          name: "MongoDB",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "Netlify",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBDkGHrwb7-0sm_oi_sAyJHra0xWLCxL02Q&s",
        },
        {
          name: "Render",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzKQjsVZ6Afm0hJnOixDAkeEBVMPlqjc3LQ&s",
        },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
        {
          name: "Postman",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3MrAtk57wOrbB9JHxTnh9AOLPa5UkcKX6g&s",
        },
      ],
    },
  ];
  return (
    <div>
      <div id="skills" className="bg-slate-200 w-full px-[12%] py-5 scroll">
        <h2 className="text-center text-5xl font-Serif p-3">Skills</h2>
        <div className="grid grid-cols-auto gap-6 my-10">
          {skills.map((ele, index) => {
            return (
              <div
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
                className="rounded-lg px-8 gap-5 py-2 bg-white hover:shadow-black cursor-pointer  hover:-translate-y-1 duration-500 "
              >
                <div className="">
                  <h3 className="text-xl my-4 text-center text-black-700 font-Roboto font-bold ">
                    {ele.title}
                  </h3>
                </div>

                {ele.skills.map((e, i) => {
                  return (
                    <div
                      style={{
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                      }}
                      className="rounded-lg mt-1 py-1 bg-white hover:shadow-black gap-4 cursor-pointer hover:bg-fuchsia-200 hover:-translate-y-1 duration-500 "
                    >
                      <div className="flex items-center justify-center p-1">
                      <img src={e.image} alt="logo-icons" className="w-8 h-8 p-1" />
                      <h3 className="p-1 font-Nunito text-md font-semibold">{e.name}</h3>
                      </div>
                     
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
