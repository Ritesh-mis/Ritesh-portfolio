import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-4xl font-bold">Hi, I'm Ritesh Mishra</h1>
        <p className="text-xl mt-2">Aspiring Software Engineer | BSc Data Science Student</p>
        <p className="mt-4 max-w-xl">
          I build software with passion and precision. I'm currently exploring data analytics, C++, and Python,
          with the dream of becoming a world-class software engineer.
        </p>
        <div className="flex space-x-4 mt-6">
          <a href="https://github.com/Ritesh-mis" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/ritesh-mishra-308581317" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:riteshmishra7552@gmail.com">
            <FaEnvelope size={30} />
          </a>
        </div>
      </section>
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="max-w-3xl">
          I'm Ritesh Mishra, a passionate and curious BSc Data Science student at Thakur College of Science and Commerce.
          With a strong foundation in C++, Python, and databases, I enjoy transforming data into actionable insights and building
          efficient software solutions. I'm driven by a desire to constantly learn, grow, and contribute to meaningful tech projects.
        </p>
      </section>
      <section className="p-10">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside grid grid-cols-2 gap-2 max-w-xl">
          <li>C++</li>
          <li>Python</li>
          <li>SQL</li>
          <li>Pandas</li>
          <li>Git</li>
          <li>SFML</li>
          <li>Excel</li>
          <li>VS Code</li>
        </ul>
      </section>
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-6 max-w-4xl">
          <div>
            <h3 className="text-2xl font-bold">Personal Portfolio Website</h3>
            <p>A responsive portfolio built using React and Tailwind CSS.</p>
            <p className="text-sm text-gray-600">Tech Stack: React, Tailwind CSS</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Data Analysis: COVID-19 Dataset</h3>
            <p>Analyzed global data using Python and visualized trends with Matplotlib.</p>
            <p className="text-sm text-gray-600">Tech Stack: Python, Pandas, Matplotlib</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">C++ Console Game: Space Shooter</h3>
            <p>Built a 2D console game using SFML where the player shoots enemies.</p>
            <p className="text-sm text-gray-600">Tech Stack: C++, SFML</p>
          </div>
        </div>
      </section>
      <section className="p-10">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p>Email: <a className="text-blue-600" href="mailto:riteshmishra7552@gmail.com">riteshmishra7552@gmail.com</a></p>
        <p>GitHub: <a className="text-blue-600" href="https://github.com/Ritesh-mis" target="_blank" rel="noopener noreferrer">github.com/Ritesh-mis</a></p>
        <p>LinkedIn: <a className="text-blue-600" href="https://linkedin.com/in/ritesh-mishra-308581317" target="_blank" rel="noopener noreferrer">linkedin.com/in/ritesh-mishra-308581317</a></p>
      </section>
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Ritesh Mishra. All rights reserved.
      </footer>
    </div>
  );
}