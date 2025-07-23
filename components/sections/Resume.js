import styles from './Resume.module.css';
import { FiEye, FiDownload } from 'react-icons/fi'; // Using icons for the buttons

export default function Resume() {
  // IMPORTANT: Make sure your resume PDF is in the 'public' folder.
  const resumePath = '/Resume.pdf'; // <--- CHANGE THIS to your actual file name

  return (
    // The id="resume" connects this section to the navbar link
    <section id="resume" className={styles.resumeSection}>
      <h2 className={styles.title}>Resume</h2>
      <p className={styles.subtitle}>
        Feel free to view my resume online or download it for your records.
      </p>
      <div className={styles.buttonContainer}>
        {/* 'View' button opens the PDF in a new tab */}
        <a 
          href={resumePath} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.button} ${styles.primaryButton}`}
        >
          <FiEye />
          <span>View Resume</span>
        </a>
        {/* 'Download' button triggers a direct download */}
        <a 
          href={resumePath} 
          download 
          className={`${styles.button} ${styles.secondaryButton}`}
        >
          <FiDownload />
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  );
}