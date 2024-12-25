import React from "react";

const Footer = () => {
  return (
    <div className="py-6 bg-slate-100 flex justify-between px-60 border ">
      <div>
        <p>
          @2024 Abhishek Kumar <span>All Rights Reserved</span>{" "}
        </p>
      </div>
      <div className="space-x-6 ">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="/plolicy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/license" className="hover:underline">
          Licensing
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Footer;
