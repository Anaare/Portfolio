import NavBar from "./NavBar";
import styles from "./About.module.css";
export default function About() {
  return (
    <div>
      <NavBar />
      <section className={styles["about--me"]} id="about--me">
        <h2>ABOUT ME</h2>
        <p className={styles["intro--text"]}>
          I&#39;m a web developer with a background in finance. My
          detail-oriented mindset and passion for problem-solving have led me to
          transition into web development, where I now build creative and
          functional solutions.
        </p>
        <div className={styles["about--me--container"]}>
          <p>
            With nearly a decade in finance, I&#39;ve honed my analytical
            skills, and I&#39;m now bringing that same precision to web
            development. I&#39;m excited about the challenges of frontend work
            and am constantly improving my skills in responsive design,
            JavaScript, and React. Whether working solo or as part of a team, I
            thrive in creating well-structured, user-friendly websites.
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
              </ul>
            </div>
            <div className={styles["working--progress-skills"]}>
              <h3>Currently Learning</h3>
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
