import NavBar from "./NavBar";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div>
      <NavBar />
      <section className={styles.projects} id="projects">
        <h2>Projects</h2>
        <p className={styles["intro--text"]}>
          {`Here you'll find info about the projects I've worked on in
            details, including the tools I used.`}
        </p>
        <div className={styles.container}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              img={project.img}
              name={project.name}
              description={project.description}
              github={project.github}
              netlify={project.netlify}
              tools={project.tools}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
