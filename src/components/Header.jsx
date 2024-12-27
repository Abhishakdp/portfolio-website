import React, { useState } from "react";
import Contect from "./Contact";

const Header = () => {
  const [brandName, setBrandName] = useState("Abhishek Kumar");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "#home",
      id: 1,
    },
    {
      title: "About",
      link: "#about",
      id: 2,
    },
    {
      title: "Expertise",
      link: "#expertise",
      id: 3,
    },
    {
      title: "Skills",
      link: "#skills",
      id: 4,
    },

    {
      title: "Contact",
      link: "#contact",
      id: 5,
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Resume",
    link: "/hire-me",
  });

  const [isHovered, setHovered] = useState(false);

  return (
    <div className="h-20 border main flex justify-between items-center px-14 bg-gray-100 sticky top-0">
      <div>
        <h1 className="text-2xl font-bold">{brandName}</h1>
      </div>

      <div className="flex space-x-5">
        {menuLinks.map((x, index) => {
          const isContact = x.title == "Contact";

          return (
            <div key={index} className="relative">
              <a
                href={x.link}
                onClick={isContact ? () => setHovered(true) : undefined}
                className="hover:text-sky-400 font-semibold"
              >
                {x.title}
              </a>
              {isHovered && isContact && (
                <div className=" absolute top-[52px] -left-16">
                  <div className="relative">
                    <button
                      className="absolute top-0 text-4xl font-bold right-0 pr-2"
                      onClick={() => setHovered(false)}
                    >
                      &times;
                    </button>
                    <Contect />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div>
        <a
          href={actionButton.link}
          className="px-3 py-2 text-2xl rounded-full hover:text-white bg-sky-300 border border-black shadow"
        >
          {actionButton.title}
        </a>
      </div>
    </div>
  );
};

export default Header;
