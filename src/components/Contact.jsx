import NavBar from "./NavBar";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <section className={styles["contact"]} id="contact">
        <form className={styles["contact--form"]}>
          <label htmlFor="user--name">Name:</label>
          <input type="text" name="user--name" placeholder="Enter your name" />

          <label htmlFor="user--email">Email:</label>
          <input
            type="email"
            name="user--email"
            placeholder="Enter your email"
          />

          <label htmlFor="user--message">Message:</label>
          <textarea
            name="user--message"
            placeholder="Enter your message"
            rows="4"
            cols="50"
          ></textarea>

          <input type="submit" value="Send" />
        </form>
      </section>
    </div>
  );
}
