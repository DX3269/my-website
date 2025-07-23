import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <p className={styles.bio}>
          Hello! I'm Ayush Thakur, a passionate and dedicated developer with a love for creating elegant and efficient solutions. I have completed my Computer Science Engineering with specialization in AI and Data Science from Panipat Institute of Engineering and Technology. 
        </p>
        <p className={styles.bio}>
            
        </p>
        <ul className={styles.pointsList}>
          <li>I thrive on challenges and enjoy solving complex problems.</li>
          <li>I am a firm believer in continuous learning and am always exploring new technologies.</li>
        </ul>
      </div>
    </section>
  );
}