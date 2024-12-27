import React, { useState } from "react";

const Expertise = () => {
  return (
    <>
      <div id="expertise" className="main-container py-12 scroll-mt-[50px]">
        <h1 className="text-5xl text-center font-bold underline">
          My Expertise
        </h1>
        <div className="services-container flex space-x-5 px-10 mt-12">
          <div className="service1 hover:bg-slate-100 cursor-pointer bg-slate-200 p-5 text-center space-y-4 shadow-lg rounded-xl">
            <i class="fa-solid fa-desktop text-5xl"></i>
            <h1 className="text-4xl">Frontend Dvelopment</h1>
            <p>
              As a passionate Frontend Developer, I can create dynamic,
              responsive, and user-friendly websites. With expertise in HTML,
              CSS, Tailwind CSS, and React, I design and develop visually
              appealing websites that ensure an excellent user experience
            </p>
          </div>
          <div className="service2 hover:bg-slate-100 cursor-pointer bg-slate-200 p-5 text-center space-y-4 shadow-lg rounded-xl">
            <i class="fa-solid fa-server text-5xl"></i>
            <h1 className="text-4xl">Backend Development</h1>
            <p>
              I am currently expanding my skills in building efficient and
              scalable server-side applications. I am actively learning the core
              concepts of backend development using Node.js, Express, and
              MongoDB to create robust, secure, and dynamic systems.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
