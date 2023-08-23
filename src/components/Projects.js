import React from "react";
import { MdArrowOutward } from "react-icons/md";
import project_1 from "../assets/portfolio.png";

const Projects = () => {
  return (
    <div className=" w-full h-full px-20 flex flex-col ">
      <div className=" my-6 text-center text-[#FD4518] text-3xl">
        My Projects
      </div>
      <div className=" w-full grid grid-cols-3 gap-10 px-20 mt-4 mb-24">
        <div className=" relative overflow-hidden w-full h-[350px]  shadow-lg group rounded-[30px] ">
          <img
            className="  w-full h-full  rounded-[30px] object-cover object-center transition duration-300 transform group-hover:scale-105"
            src={project_1}
            alt="project-1"
          />
          <div className="absolute  inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className=" p-4 rounded-lg backdrop-blur-md">
              <h2 className="text-2xl font-semibold">Portfolio Website</h2>
              <p className="text-gray-600 my-1">
              Explore my creative journey through a digital showcase of my projects and passions. From elegant design to functional code – welcome to my portfolio.
              </p>
              <div className=" w-full flex justify-around my-2"><button className=' px-3 py-2 bg-[#FD4518] rounded-3xl'>Code</button> <button className=' rounded-3xl px-3 py-2 bg-[#FD4518]'>Website</button></div>
            </div>
          </div>
        </div>
        <div className=" relative overflow-hidden w-full h-[350px]  shadow-lg group rounded-[30px] ">
          <img
            className="  w-full h-full  rounded-[30px] object-cover object-center transition duration-300 transform group-hover:scale-105"
            src={project_1}
            alt="project-1"
          />
          <div className="absolute  inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className=" p-4 rounded-lg backdrop-blur-md">
              <h2 className="text-2xl font-semibold">Portfolio Website</h2>
              <p className="text-gray-600 my-1">
              Explore my creative journey through a digital showcase of my projects and passions. From elegant design to functional code – welcome to my portfolio.
              </p>
              <div className=" w-full flex justify-around my-2"><button className=' px-3 py-2 bg-[#FD4518] rounded-3xl'>Code</button> <button className=' rounded-3xl px-3 py-2 bg-[#FD4518]'>Website</button></div>
            </div>
          </div>
        </div>
        <div className=" relative overflow-hidden w-full h-[350px]  shadow-lg group rounded-[30px] ">
          <img
            className="  w-full h-full  rounded-[30px] object-cover object-center transition duration-300 transform group-hover:scale-105"
            src={project_1}
            alt="project-1"
          />
          <div className="absolute  inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className=" p-4 rounded-lg backdrop-blur-md">
              <h2 className="text-2xl font-semibold">Portfolio Website</h2>
              <p className="text-gray-600 my-1">
              Explore my creative journey through a digital showcase of my projects and passions. From elegant design to functional code – welcome to my portfolio.
              </p>
              <div className=" w-full flex justify-around my-2"><button className=' px-3 py-2 bg-[#FD4518] rounded-3xl'>Code</button> <button className=' rounded-3xl px-3 py-2 bg-[#FD4518]'>Website</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
