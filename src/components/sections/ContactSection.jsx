import { useState } from "react";
import { profile } from "../../data/profile";
import { Reveal } from "../ui/Reveal";
import { ArrowIcon, MailIcon, PinIcon } from "../icons/Icons";

/**
 * ContactSection — side-by-side info + validated contact form.
 *
 * NOTE: this is a mock form. In production, wire `onSubmit` to your
 * backend endpoint, a service like Formspree, or a serverless function.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Name is required";
  if (!email.trim()) errors.email = "Email is required";
  else if (!EMAIL_REGEX.test(email)) errors.email = "Enter a valid email address";
  if (!message.trim()) errors.message = "Message is required";
  else if (message.trim().length < 10) errors.message = "Message must be at least 10 characters";
  return errors;
}

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");
    // TODO: replace with actual API call
    await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  };

  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <Reveal>
        <div className="section-label">Contact</div>
      </Reveal>
      <Reveal delay="reveal-d1">
        <h2 id="contact-heading" className="section-heading">
          Get In <span className="ghost">Touch</span>
        </h2>
      </Reveal>
      <Reveal delay="reveal-d2">
        <p className="section-subtitle">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </Reveal>

      <div className="contact-grid">
        <Reveal delay="reveal-d2">
          <div className="contact-info">
            <h3>Let's build something together</h3>
            <p>
              I'm always excited to hear about new projects and opportunities.
              Drop me a message and I'll get back within 24 hours.
            </p>
            <div className="contact-detail">
              <MailIcon />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact-detail">
              <PinIcon /> {profile.location}
            </div>
          </div>
        </Reveal>

        <Reveal delay="reveal-d3">
          <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                className={`form-input ${errors.name ? "has-error" : ""}`}
                placeholder="Your name"
                value={form.name}
                onChange={handleChange("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <div id="name-error" className="form-error" role="alert">
                  {errors.name}
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                className={`form-input ${errors.email ? "has-error" : ""}`}
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <div id="email-error" className="form-error" role="alert">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                className={`form-textarea ${errors.message ? "has-error" : ""}`}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange("message")}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <div id="message-error" className="form-error" role="alert">
                  {errors.message}
                </div>
              )}
            </div>

            <button
              type="submit"
              className={`submit-btn ${status === "sent" ? "is-sent" : ""}`}
              disabled={status === "sending"}
            >
              {status === "idle" && (
                <>
                  Send Message <ArrowIcon />
                </>
              )}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent ✓"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
