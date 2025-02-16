import React from "react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-4 max-w-[1200px] mx-auto md:my-16" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-3 place-items-center w-full">
          <div className="w-full">
            <div className="text-gray-300 my-5">
              <h3 className="text-5xl font-semibold mb-6">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-8 w-full mx-auto text-lg">
                I'm a Full-Stack Web Developer with a background in Forensic
                Science and experience in Digital Forensic Tools. With a passion
                for building efficient and scalable web applications, I
                specialize in MERN Stack (MongoDB, Express, React, Node.js)
                along with Tailwind CSS & Vite.js.
                <br />
                <br /> Beyond coding, I have 2 years of experience in Graphic
                Design, Digital Marketing, and Blogging, giving me a strong
                foundation in UI/UX and content strategyy. I thrive on solving
                complex problems and continuously learning to stay ahead in the
                tech world. Looking forward to collaborating with your ideas on
                building innovative products!🚀 <br />
                <br />
                Let's connect and create something amazing.
              </p>
            </div>

            <div className="flex mt-12 items-center gap-10">
              <div className="bg-gray-800/40 p-6 rounded-lg text-center w-40">
                <h3 className="md:text-5xl text-3xl font-semibold text-white">
                  5<span>+</span>
                </h3>
                <p className="text-sm md:text-lg">
                  <span>Projects</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-6 rounded-lg text-center w-40">
                <h3 className="md:text-5xl text-3xl font-semibold text-white">
                  2<span>+</span>
                </h3>
                <p className="text-sm md:text-lg">
                  <span>Years of Experience</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
