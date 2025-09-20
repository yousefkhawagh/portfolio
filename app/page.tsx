// app/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Portfolio() {
  return (
    <main className="bg-gray-50 text-gray-900 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">Yousef Ashraf</h1>
          <ul className="flex space-x-6 font-medium">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-50 to-blue-100 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          {/* Centered Profile Photo */}
          <div className="mb-6">
            <Image
              src="/me.jpg" // your photo inside /public/
              alt="Yousef Ashraf"
              width={160}
              height={160}
              className="rounded-full shadow-lg mx-auto"
            />
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-800">
            Hi, I’m <span className="text-blue-600">Yousef</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl">
            A fresh Computer Engineering graduate passionate about <b>DevOps</b>, <b>Cloud</b>, and building scalable solutions.
          </p>
          <a
            href="#contact"
            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-5xl mx-auto px-6">
        <motion.h2 className="text-3xl font-bold mb-6 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          About Me
        </motion.h2>
        <motion.p className="text-lg text-gray-700 leading-relaxed text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          I am a Computer Engineering graduate with strong skills in <b>Git, Docker, Jenkins, Ansible, Terraform, and AWS</b>. I enjoy building automated pipelines, deploying scalable applications, and solving real-world problems with modern cloud-native solutions.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 className="text-3xl font-bold mb-10 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {["Linux", "Git", "Docker", "Jenkins", "Ansible", "Terraform", "AWS", "Kubernetes"].map((skill, index) => (
              <motion.div key={skill} className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
        <motion.h2 className="text-3xl font-bold mb-10 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Automated Deployment Pipeline",
              desc: "CI/CD pipeline with Jenkins, Docker, and Ansible for automated deployment.",
              github: "https://github.com/yousefkhawagh/Automated-Deployment-Pipeline"
            },
            {
              title: "Multi-Tier Application Deployment",
              desc: "Deployed React + ASP.NET Core app on Windows Server using IIS & SQL Server.",
              github: "https://github.com/yousefkhawagh/Deploying-Multi-Tier-Application-"
            }
          ].map((proj, i) => (
            <motion.div key={i} className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }}>
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-gray-600 mt-2">{proj.desc}</p>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:underline"
              >
                <FaGithub size={20} /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 className="text-3xl font-bold mb-10 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Experience
          </motion.h2>
          <div className="space-y-6">
            <motion.div className="p-6 bg-white shadow rounded-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h3 className="font-semibold text-lg">Technical Support Intern</h3>
              <p className="text-gray-600">Provided support and troubleshooting for IT systems (3 months).</p>
            </motion.div>
            <motion.div className="p-6 bg-white shadow rounded-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h3 className="font-semibold text-lg">University Projects</h3>
              <p className="text-gray-600">Worked on cloud-based deployments, DevOps pipelines, and IoT systems as part of academic projects.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Contact Me
        </motion.h2>
        <motion.p className="text-gray-700 mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          Let’s connect! Feel free to reach out for collaborations or opportunities.
        </motion.p>
        <motion.a
          href="mailto:yousef@example.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Email
        </motion.a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center text-gray-400">
        © {new Date().getFullYear()} Yousef Ashraf. All rights reserved.
      </footer>
    </main>
  );
}
