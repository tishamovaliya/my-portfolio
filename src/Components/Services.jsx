import React from "react";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: "React Development",
    description:
      "Develop modern single-page applications using React, component-based architecture, and efficient state management.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Web Design",
    description:
      "Create fully responsive websites optimized for desktop, tablet, and mobile devices using modern CSS techniques.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI Implementation",
    description:
      "Transform design concepts into clean, interactive, and user-friendly interfaces with strong attention to detail.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>What I Do</h2>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
