import React, { useState } from "react";
import "./Projects.css";
import avatar1 from "../../image/Projects/avatar1.png";
import avatar2 from "../../image/Projects/avatar2.png";
import avatar3 from "../../image/Projects/avatar3.png";
import avatar4 from "../../image/Projects/avatar4.png";
import avatar5 from "../../image/Projects/avatar5.png";
import project1 from "../../image/Projects/project1.jpg";
import project2 from "../../image/Projects/project2.jpg";
import project3 from "../../image/Projects/project3.jpg";

function Projsects() {
  let [view, setView] = useState(false);

  const handleToggleView = (e) => {
    e.preventDefault();
    setView(!view);
  };

  let allProjects = [
    {
      title: "New York",
      subtitiel: "Big Road Brewery",
      button: "Read more",
      image: project1,
    },
    {
      title: "New York",
      subtitiel: "Big Road Brewery",
      button: "Read more",
      image: project2,
    },
    {
      title: "New York",
      subtitiel: "Big Road Brewery",
      button: "Read more",
      image: project3,
    },
    {
      title: "New York",
      subtitiel: "Big Road Brewery",
      button: "Read more",
      image: project2,
    },
    {
      title: "New York",
      subtitiel: "Big Road Brewery",
      button: "Read more",
      image: project3,
    },
    {
      title: "New York",
      subtitiel: "Big Road Brewery",
      button: "Read more",
      image: project1,
    },
  ];

  // Разделяем массив на первые 3 и остальные проекты
  const firstThree = allProjects.slice(0, 3);
  const remainingProjects = allProjects.slice(3);

  return (
    <section className="projects">
      <div>
        <div className="bg-[#F7F7F7] pl-[20px] pr-[20px] md:pl-[130px] md:pr-[130px] pb-[100px] pt-[110px] justify-center">
          <div className="mb-[40px] text-start flex flex-col">
            <h2 className="text-[39px] leading-[42px] text-[#1B1A1A] mb-[15px] inline-block">
              Featured projects
            </h2>
            <p className="text-[#645C55] text-[24px] leading-[30px] max-w-[500px]">
              Some of the latest and greatest projects from us here at
              Wishbone+Partners.
            </p>
          </div>

          <div className="project__box flex flex-col gap-[15px] mb-[30px]">
            <div className="flex flex-wrap gap-[15px] justify-center">
              {firstThree.map((item, index) => (
                <div
                  key={index}
                  className="text-start item relative w-[379px] h-[460px]  pl-[40px] pt-[40px] pb-[40px] items-start flex flex-col justify-between overflow-hidden group"
                >
                  <div className="opacity-0  group-hover:opacity-100  transition-all duration-500relative z-20 ">
                    <h4 className="text-[#645C55] uppercase text-[14px]">{item.title}</h4>
                    <h3 className="text-[#403E3B] text-[23px]">{item.subtitiel}</h3>
                  </div>
                  <a className="cursor-pointer project-button opacity-0  group-hover:opacity-100 transition-all duration-500 relative z-20  underline text-[#403E3B] hover:text-[white] " href="">
                    {item.button}
                  </a>
                  <img
                    src={item.image}
                    className="absolute top-0 left-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
                    alt=""
                  />
                </div>
              ))}
            </div>

            <div
              className={`flex flex-wrap gap-[15px] justify-center transition-all duration-700 ease-in-out overflow-hidden ${
                view
                  ? "max-h-[1000px] opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              }`}
            >
              {remainingProjects.map((item, index) => (
                <div
                  key={index + 3}
                  className="text-start item relative w-[379px] h-[460px] c pl-[40px] pt-[40px] pb-[40px] items-start flex flex-col justify-between overflow-hidden group"
                >
                  <div className="opacity-0  group-hover:opacity-100 transition-all duration-500 relative z-20 ">
                    <h4 className="text-[#645C55] uppercase text-[14px]">{item.title}</h4>
                    <h3 className="text-[#403E3B] text-[23px]">{item.subtitiel}</h3>
                  </div>
                  <a className="cursor-pointer project-button opacity-0  group-hover:opacity-100 transition-all duration-500 relative z-20  underline text-[#403E3B]" href="">
                    {item.button}
                  </a>
                  <img
                    src={item.image}
                    className="absolute top-0 left-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105 "
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>

          <a
            href=""
            onClick={handleToggleView}
            className="inline-block hover:underline font-medium pr-[35px]"
          >
            {view ? "Close all projects" : "View all projects"}
          </a>
        </div>

        <div className="pl-[136px] pr-[136px] pt-[110px] flex gap-[30px] text-start">
          <div className="">
            <h3 className="text-[32px] font-bold mb-[10px] ">
              Meet our team
            </h3>
            <p className="text-[#645C55] mb-[30px] w-[358px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <a href="#">See team</a>
          </div>

          <div className="flex flex-wrap gap-[30px] justify-start gap-y-[30px] gap-x-[140px] max-w-[773px] pl-[10px]">
            {[
              { img: avatar1, name: "Stephen Collier", role: "Senior Partner" },
              { img: avatar2, name: "Nolan Peters", role: "Associate" },
              {
                img: avatar3,
                name: "SFerris Wonder",
                role: "Associate Partner",
              },
              { img: avatar4, name: "Aria Stone", role: "Senior Partner" },
              { img: avatar5, name: "Niko Ferry", role: "Partner" },
            ].map((member, idx) => (
              <div key={idx} className="flex items-center gap-[15px]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-[84px] h-[84px] rounded-full object-cover "
                />
                <span className="text-start pl-[10px] pr-[30px] pt-[30px] pb-[30px]">
                  <h4 className="font-semibold text-[#1B1A1A]">
                    {member.name}
                  </h4>
                  <h5 className="text-[#645C55] text-[14px] ">{member.role}</h5>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projsects;
