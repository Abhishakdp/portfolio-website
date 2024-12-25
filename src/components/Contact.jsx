import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [message, setMessage] = useState("");
  const [submitData, setSubmitData] = useState([]);

  return (
    <div className="flex justify-center">
      <div className="h-[580px] w-[500px] flex flex-col shadow rounded-lg bg-slate-200">
        <h1 className="text-4xl font-bold text-center underline pt-2">
          Contact Us
        </h1>
        <p className="text-center px-20 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi unde
          nostrum ipsam illo esse dolorum?
        </p>
        <div className="flex flex-col px-20 space-y-3 mt-5">
          <label htmlFor="name">Enter Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            className="border border-black rounded-full p-1 px-4"
          />
          <label htmlFor="email">Enter Your Email</label>

          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border border-black rounded-full p-1 px-4"
          />
          <label htmlFor="number">Enter Mobile Number </label>
          <input
            type="number"
            id="number"
            placeholder="Phone Number"
            className="border border-black rounded-full p-1 px-4"
          />
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Send your Queries..."
            className="border border-black rounded-sm px-2"
          />

          <a
            href="/submit"
            className="bg-orange-500 px-3 py-2 rounded-full text-center text-2xl font-bold hover:text-white"
          >
            Submit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
