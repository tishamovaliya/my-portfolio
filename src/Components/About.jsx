import React from "react";

const skillsData = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 85 },
  { name: "Bootstrap", percent: 75 },
  { name: "JavaScript", percent: 75 },
  { name: "React", percent: 75 },
  { name: "SQL", percent: 75 },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a React Frontend Developer currently pursuing my final year of
            Bachelor of Computer Applications (BCA). I specialize in building
            responsive web applications using React, JavaScript, and modern UI
            practices.
          </p>
          <p>
            I have hands-on experience in API integration, state management,
            routing, and creating reusable component-based architectures. I am
            passionate about writing clean code and continuously improving my
            development skills.
          </p>
        </div>

        <div className="about-skills">
          <h2>Technical Skills</h2>

          {skillsData.map((skill) => (
            <div className="skill" key={skill.name}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ "--skill-level": `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
