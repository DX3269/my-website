import Image from 'next/image';
import styles from './Experience.module.css';

const experienceData = [
  {
    logo: '/comp_logo_1.jpg',
    company: 'Motherson Technology and Services Limited',
    title: 'Data Analysis Internship',
    dates: 'August 2023 - September 2023',
    description: [
      'Completed a one month internship in Data Analysis domain.',
      'Used Ms Excel for Data cleaning and transformation.',
      'Used MySQL server for data analysis',
      'Used PowerPoint and Qlik view for data visualization and reports'
    ],
    technologies: 'MySQL Server, Qlik-view, MS-Excel', 
  },
  {
    logo: '/comp_logo_2.jpg',
    company: 'Kradle Joy OPC limited',
    title: 'Internship',
    dates: 'July 2024 - September 2024',
    description: [
      ' Completed a 45 days internship in machine learning domain.',
      ' Developed Python Scripts for OCR analysis using Easy OCR and OpenCV',
      'Also worked in front end domain using React.',
      'Integrated the generated JSON scripts from OCR analysis to DynamoDB.'
    ],
    technologies: 'Python, Opencv, EasyOCR framework, ffmpeg, React, DynamoDB',
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.experienceContainer}>
        {experienceData.map((exp, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.companyDetails}>
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={50}
                  height={50}
                  className={styles.companyLogo}
                />
                {/* UPDATED: This div now groups the text */}
                <div className={styles.titleGroup}>
                  <h3 className={styles.companyName}>{exp.company}</h3>
                  <p className={styles.jobTitle}>{exp.title}</p>
                </div>
              </div>
              <p className={styles.dates}>{exp.dates}</p>
            </div>
            <ul className={styles.description}>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className={styles.technologies}>
              <strong>Technologies Used :</strong> {exp.technologies}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}