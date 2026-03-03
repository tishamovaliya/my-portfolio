import React from "react";

import textutilsImg from "./images/textutils.png";
import expenseImg from "./images/finances.png";
import giftstoreImg from "./images/gift-store.png";

const projectsData = [
  {
    title: "TextUtils App",
    description:
      "A React-based text utility application that performs text transformations such as uppercase/lowercase conversion, word counting, and character analysis.",
    tech: "React, JavaScript, CSS",
    image: textutilsImg,
    demoLink: "https://tishamovaliya.github.io/textutils/",
    githubLink: "https://github.com/tishamovaliya/textutils",
  },
  {
    title: "Finance Management App",
    description:
      "A React CRUD application to manage income and expenses with real-time balance calculation and localStorage data persistence.",
    tech: "React, JavaScript, CSS, React Router",
    image: expenseImg,
    demoLink: "https://tishamovaliya.github.io/finance-management-app/",
    githubLink: "https://github.com/tishamovaliya/finance-management-app",
  },
  {
    title: "Online Gift Store (MERN)",
    description:
      "A full-stack e-commerce application with user authentication, protected routes, cart functionality, and admin dashboard integration.",
    tech: "React, Node.js, Express, MongoDB",
    image: giftstoreImg,
    demoLink: null, // Not deployed
    githubLink: "https://github.com/tishamovaliya", // Replace with actual repo if available
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.tech}</small>

                <div className="project-buttons">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="btn primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.githubLink}
                    className="btn secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
