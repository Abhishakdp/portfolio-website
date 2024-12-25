import React, { useState } from "react";
import bgImage from "../assets/Background-banner1.jpg";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwing CSS",
    "Sql",
    "C++",
    "Node.js",
    "UI/UX",
    "Api feching",
    "git",
    "Git Hub",
    "TypeScript",
    "Oops",
    "Dynamic Website",
    "MongoDB",
  ];

  return (
    <>
      <div id="skills" className="main-container mt-10 ">
        <h1 className="text-5xl font-bold underline text-center">Skills</h1>
        <div className="flex my-10">
          <div
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
              overflow: "hidden",
            }}
            className="text-center w-full p-10 space-y-5"
          >
            <h1 className="text-2xl font-bold">I love these technology</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              sed. Nisi illum vitae, neque enim atque illo earum fugit labore.
            </p>
          </div>

          <div className="w-full p-10 flex flex-wrap justify-center">
            {skills.map((e) => {
              return (
                <span className="bg-slate-200 hover:bg-orange-400 px-3 py-2 mx-2 my-1 rounded-full font-semibold ">
                  {e}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
