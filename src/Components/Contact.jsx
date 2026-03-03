import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const phoneNumber = "918469855752"; // No + or spaces
    const text = `Hello, my name is ${name}. Email: ${email}. Message: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>

        <div style={{ marginTop: "2rem" }}>
          <p>Email: tishamovaliya@gmail.com</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/tishamovaliya"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/tishamovaliya
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
