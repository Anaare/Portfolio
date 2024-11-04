import NavBar from "./NavBar";
import styles from "./About.module.css";

export default function About() {
  return (
    <div>
      <NavBar />
      <section className={styles["about--me"]} id="about--me">
        <h2>About Me</h2>
        <p className={styles["intro--text"]}>
          {`I'm a web developer with a background in finance. My
      detail-oriented mindset and passion for problem-solving have led me to
      transition into web development, where I now build creative and
      functional solutions.`}
        </p>
        <div className={styles["about--me--container"]}>
          <p>
            {` With nearly a decade in finance, I've enhanced my analytical
            skills, and I'm now bringing that same precision to web
            development. I thrive on the challenges of frontend work and am
            continuously improving my skills in responsive design, JavaScript,
            and React. Whether working solo or as part of a team, I aim to
            create well-structured, user-friendly websites.`}
          </p>
          <p>
            {`I actively integrate AI tools to streamline my workflow,
            particularly for enhancing code quality, and
            researching new technologies. This allows me to focus on building
            creative solutions and ensures that I deliver high-quality results
            efficiently.`}
          </p>
          <div className={styles["skills"]}>
            <div className={styles["current--skills"]}>
              <h3>My Skills</h3>
              <ul>
                <li>HTML & CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>React & Redux</li>
                <li>Responsive Design</li>
                <li>REST APIs</li>
                <li>Version Control (Git/GitHub)</li>
                <li>AI-Assisted Development (e.g., ChatGPT)</li>
              </ul>
            </div>
            <div className={styles["expanding--skills"]}>
              <h3>Expanding My Skillset</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
