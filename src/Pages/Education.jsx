import React from "react";
import { FaSchool } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";

const Education = () => {
  const education = [
    {
      title: "Diploma in General Nursing ang Midwifery",
      institution: "Vivekanandha School of Nursing for women",
      period: "2020-2024",
      percentage: "Percentage - 79%",
      icon: <MdSchool size={25} />,
    },
    {
      title: "HSC",
      institution: "Jaivabai Municipal Girls Hr Sec School",
      period: "2019-2020",
      percentage: "Percentage - 79.3%",
      icon: <FaSchool size={25} />,
    },

    {
      title: "SSLC",
      institution: "Government High School",
      period: "2017-2018",
      percentage: "Percentage - 92.4%",
      icon: <FaSchool size={25} />,
    },
  ];

  return (
    <div id="education" className="bg-fuchsia-200 w-full px-[12%] py-5  scroll ">
      <h2 className="text-center text-5xl font-Serif p-3">Education</h2>
      <div className="grid grid-cols-auto gap-6 my-10">
        {education.map((ele, index) => {
          return (
            <div
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
              className="rounded-lg px-8 py-8 bg-white hover:shadow-black cursor-pointer hover:bg-slate-200 hover:-translate-y-1 duration-500 "
            >
              <div className="flex items-center gap-3">
                <div>{ele.icon}</div>
                <h3 className="text-lg my-4 text-black-700 font-Nunito font-bold ">
                  {ele.title}
                </h3>
              </div>

              <p className="text-sm text-gray-700 leading-5 font-Nunito ">
                {ele.institution}
              </p>
              <p className="flex items-center gap-2 text-gray-700 text-sm mt-5 font-Nunito font-semibold">
                {ele.period}
              </p>
              <p className="flex items-center gap-2 text-sm mt-5 font-Nunito font-bold">
                {ele.percentage}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
