/* eslint-disable react/prop-types */
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./Projects.module.css";

export default function ProjectCard({
  img,
  name,
  description,
  github,
  netlify,
  tools,
}) {
  return (
    <div className={styles.project}>
      <img src={img} />
      <div className={styles["project--info"]}>
        <h4>{name}</h4>
        <p>{description}</p>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href={netlify} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt /> Live Site
        </a>
        {tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </div>
    </div>
  );
}
