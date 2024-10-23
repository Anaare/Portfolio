import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import NavBar from "./NavBar";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { useState, useCallback } from "react";
import Contact from "./Contact";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles["main--container"]}>
        <div className={styles["links--container"]}>
          <a href="https://github.com/Anaare" target="_blank" rel="noreferrer">
            <FaGithub className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/ana-arevadze-47b116332/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <FaEnvelope
            className={styles.icon}
            onClick={() => setIsModalOpen(true)}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className={styles["home--container"]}>
          <h2>HEY, I&#39;M ANA</h2>
          <p>
            A frontend focused Web developer building the Frontend of Websites
            and Web applications
          </p>
          <NavLink to="/projects">
            <button>projects</button>
          </NavLink>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles["modal--backdrop"]} onClick={closeModal}>
          <div
            className={styles["modal--content"]}
            onClick={(e) => e.stopPropagation()}
          >
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}
