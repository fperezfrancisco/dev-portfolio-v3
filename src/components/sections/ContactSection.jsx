import { Alert } from "@mui/material";
import React, { useState, useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const [messageDisplay, setMessageDisplay] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [completedMessage, setCompletedMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setMessageDisplay(true);

    const serviceID = "service_cl2r24u";
    const templateID = "template_6da7rqi";
    const publicKey = "B5m78mM5hASikgXT_";

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    setTimeout(() => {
      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then((resp) => {
          console.log("Email sent successfully!", resp);
          alert("Your message was sent succesfully!");
          setName("");
          setEmail("");
          setMessage("");
          setMessageDisplay(false);
        })
        .catch((error) => {
          console.log("error: ", error);
          alert("Something went wrong, please try again later!");
          setMessageDisplay(false);
        });
    }, 4000);

    /*
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((resp) => {
        console.log("Email sent successfully!", resp);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("error: ", error);
      });*/
  };

  return (
    <section
      className="w-full my-20 max-w-[1200px] mx-auto px-4 sm:px-12 py-[120px] flex flex-col gap-12 lg:flex-row-reverse lg:gap-4 lg:justify-between"
      id="contact"
    >
      <div className="flex flex-col items-start gap-8">
        <h2 className="primaryText text-2xl md:text-4xl fjalla-one-regular">
          Contact
        </h2>
        <p className="primaryText">Send me a message so we can connect.</p>
        <ul className="w-full flex flex-col items-start gap-4">
          <li className="flex gap-4 primaryText items-center">
            <FaLinkedin className="accentText size-[32px]" />
            <a href="http://linkedin.com/in/fperezfrancisco" target="_blank">
              linkedin.com/in/fperezfrancisco
            </a>
          </li>
          <li className="flex gap-4 primaryText items-center">
            <FaGithubSquare className="accentText size-[32px]" />
            <a href="https://github.com/fperezfrancisco" target="_blank">
              github.com/fperezfrancisco
            </a>
          </li>
          <li className="flex gap-4 primaryText items-center">
            <FaAt className="accentText size-[32px]" />
            <a href="mailto:fperezfrancisco4@gmail.com">
              fperezfrancisco4@gmail.com
            </a>
          </li>
          <li className="flex gap-4 primaryText items-center">
            <FaLocationDot className="accentText size-[32px]" />
            <p>Santa Clarita, CA, USA</p>
          </li>
        </ul>
      </div>
      <div className="flex w-full lg:max-w-[500px] relative">
        <form
          ref={form}
          className="w-full contactForm"
          action=""
          onSubmit={(e) => sendEmail(e)}
        >
          <ul className="w-full flex flex-col items-start gap-3">
            <li className="flex flex-col w-full relative">
              <label
                htmlFor="name"
                className="absolute top-[18px] left-2 fjalla-one-regular text-[#014f86]"
              >
                Name:
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                className="px-4 pl-14 py-4 w-full text-[#014f86] border-2 border-[#014f86] bg-white rounded-2xl fjalla-one-regular"
                placeholder="John Doe"
                name="name"
              />
            </li>
            <li className="flex flex-col w-full relative">
              <label
                htmlFor="email"
                className="absolute top-[18px] left-2 fjalla-one-regular text-[#014f86]"
              >
                Email:
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="px-4 pl-14 py-4 w-full text-[#014f86] border-2 border-[#014f86] bg-white rounded-2xl fjalla-one-regular"
                placeholder="test@gmail.com"
                name="email"
              />
            </li>
            <li className="flex flex-col w-full relative">
              <label
                htmlFor="message"
                className="absolute top-[18px] left-2 fjalla-one-regular text-[#014f86]"
              >
                Message:
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                rows={6}
                className="px-4 pl-18 py-4 w-full text-[#014f86] border-2 border-[#014f86] bg-white rounded-2xl fjalla-one-regular"
                placeholder="Leave your message here..."
              ></textarea>
            </li>
          </ul>
          {messageDisplay ? (
            <p className="p-4 w-full text-center animate-pulse primaryText font-semibold">
              Your message is being sent...
            </p>
          ) : (
            <button className="my-4 primaryBtn w-full max-w-none py-6">
              Send your messge
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
