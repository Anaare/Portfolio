import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles["header--container"]}>
      <div className={styles["picture--container"]}>
        <NavLink to="/">
          <img src="/images/Ana.jpg" alt="Ana" className={styles.me} />
        </NavLink>
        <h3>Ana Arevadze</h3>
      </div>
      <ul className={styles["sections--container"]}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Projects
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
