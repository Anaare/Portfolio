import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";

// Initialize EmailJS with your public key
emailjs.init("lIPVeEyMy3sl9F_RT");

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    // Send email using EmailJS
    emailjs
      .send("service_a0yxjea", "contact_form", {
        from_name: formData.from_name,
        to_name: "Ana Arevadze",
        user_email: formData.user_email,
        message: formData.message,
      })
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        // Reset form
        setFormData({
          from_name: "",
          user_email: "",
          message: "",
        });
        setStatus("Message sent successfully!");
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
        setStatus("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <section className={styles["contact"]} id="contact">
        <form className={styles["contact--form"]} onSubmit={handleSubmit}>
          <label htmlFor="from_name">Name:</label>
          <input
            type="text"
            name="from_name"
            placeholder="Enter your name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />

          <label htmlFor="user_email">Email:</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="4"
            cols="50"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <input
            type="submit"
            value={isLoading ? "Sending..." : "Send"}
            disabled={isLoading}
          />

          {status && <p className={styles.statusMessage}>{status}</p>}
        </form>
      </section>
    </div>
  );
}
