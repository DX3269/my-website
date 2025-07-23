import Image from 'next/image';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={styles.educationSection}>
      <h2 className={styles.title}>Education</h2>
      
      <div className={styles.logoContainer}>
        <Image
          src="/logo.png"
          alt="Your Logo"
          width={150}
          height={150}
          className={styles.logo}
        />
      </div>

      <div className={styles.timeline}>
        {/* UPDATED: Removed the map and replaced with a single entry */}
        <div className={styles.entry}>
          <div className={styles.schoolInfo}>
            <h3 className={styles.schoolName}>Panipat Institute of Engineering and Technology</h3>
            <p className={styles.degree}>B.Tech in Computer Science & Engineering with AI and Data Science</p>
          </div>
          <div className={styles.years}>
            <p>2021 - 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}