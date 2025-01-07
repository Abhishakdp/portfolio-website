import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_lk9xz6f";
    const templateId = "template_by2835c";
    const publicKey = "wG4DvepMbM4MuC3G9";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Abhishek Kumar",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
        alert("Form Submitted");
      })
      .catch((error) => {
        console.error("Error Sending email:", error);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="h-[480px] w-[500px] flex flex-col shadow rounded-lg bg-slate-200">
        <h1 className="text-4xl font-bold text-center underline pt-2">
          Contact Us
        </h1>
        <p className="text-center px-20 mt-5">Feel free to contact with me.</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-20 space-y-3 mt-5"
        >
          <label htmlFor="name">Enter Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            value={name}
            className="border border-black rounded-full p-1 px-4"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Enter Your Email</label>

          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            className="border border-black rounded-full p-1 px-4"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Send your Queries..."
            value={message}
            className="border border-black rounded-sm px-2"
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-sky-400 px-3 py-2 rounded-full text-center text-2xl font-bold hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
