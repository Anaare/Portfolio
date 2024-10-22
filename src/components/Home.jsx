import NavBar from "./NavBar";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles["main--container"]}>
        <div className={styles["links--container"]}>
          <a href="https://github.com/Anaare" target="_blank">
            <i className={`fab fa-github ${styles.icon}`}></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ana-arevadze-47b116332/"
            target="_blank"
          >
            <i className={`fab fa-linkedin ${styles.icon}`}></i>
          </a>
          <a href="mailto:aarevadze41@gmail.com">
            <i className={`far fa-envelope ${styles.icon}`}></i>
          </a>
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
    </>
  );
}
