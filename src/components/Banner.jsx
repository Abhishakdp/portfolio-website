import React from "react";
import BannerImg1 from "../assets/coder.jpg";
import BackgroundImg from "../assets/Background-banner1.jpg";

const Banner = () => {
  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: "cover",
      }}
      className=" main-container flex items-center scroll-mt-[100px]"
    >
      <div className="flex justify-center ">
        <div className=" w-2/3">
          <h3 className="mt-2 text-3xl font-semibold">Hi, I am</h3>
          <h1 className="mt-2 text-5xl font-semibold">Abhishek Kumar</h1>
          <h2 className="mt-2 text-3xl ">And i am Frontend Developer</h2>
          <p className="mt-2 mb-2 font-semibold">
            I can create dynamic, responsive, and user-friendly websites. Using
            React.js, HTML, CSS, Tailwind CSS and JavaScript. You can click on
            Github icon to explore my projects.
          </p>
          <div className="space-x-6 text-4xl">
            <a
              className="hover:text-sky-800 cursor-pointer  "
              href="https://x.com/Abhishe6q"
              target="_blank"
            >
              <i class="fa-brands fa-square-x-twitter"></i>
            </a>
            <a
              className="hover:text-sky-800 cursor-pointer  "
              href="https://github.com/Abhishakdp"
              target="_blank"
            >
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a
              className="hover:text-sky-800 cursor-pointer  "
              href="https://www.linkedin.com/in/abhi60"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <br />
        </div>
      </div>

      <div className=" w-full flex justify-end">
        <img src={BannerImg1} className=" h-[400px] " />
      </div>
    </div>
  );
};

export default Banner;
