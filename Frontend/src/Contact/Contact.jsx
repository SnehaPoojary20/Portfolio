import { useState } from "react";
import "./Contact.css";

const FORMSPREE_URL = "https://formspree.io/f/xnpnlzyk";

export default function Contact() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact</h2>

        <div className="contact-direct">
          <p className="contact-direct-row">
            <span className="contact-label-inline">Email:</span>{" "}
            <a href="mailto:snehapoojary2004@gmail.com">
              snehapoojary2004@gmail.com
            </a>
          </p>
          <p className="contact-direct-row">
            <span className="contact-label-inline">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/snehapoojary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/snehapoojary
            </a>
          </p>
        </div>

        <p className="contact-intro">
          Have a role, project, or just want to say hi? Fill in the form
          below and I'll get back to you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="name" className="contact-label">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="contact-input"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="subject" className="contact-label">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={handleChange}
              className="contact-input"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message" className="contact-label">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              value={form.message}
              onChange={handleChange}
              className="contact-textarea"
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="contact-status contact-status-success">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="contact-status contact-status-error">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
