import React, { useState } from "react";
import flower2 from "../assets/img1.jpg";

const About = () => {
  const [data, setData] = useState({
    image: flower2,
    title: "Education and Development",
    desc1: `I did Bachelor of Computer Application form D.A.V Dollage Abohar,Punjab in 2023.`,
    desc2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ipsam repudiandae doloribus neque odio quasi aspernatur
              reprehenderit exercitationem et itaque. Adipisci maxime quos
              necessitatibus et?`,
  });

  return (
    <div id="about" className="h-full w-full mt-5 scroll-mt-[100px]">
      <div className="main-container  ">
        <h1 className="text-5xl text-center font-bold underline">About Me</h1>
      </div>

      <div className="flex items-center mt-8 bg-gray-100">
        <div className="w-full flex justify-center">
          <img
            className="h-[500px] rounded-full"
            src={data.image}
            alt="second Image"
          />
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-2/3 space-y-5">
            <h1 className="text-4xl">{data.title}</h1>
            <p>{data.desc1}</p>
            <p>{data.desc2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
