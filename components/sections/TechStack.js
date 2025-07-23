'use client';

import styles from './TechStack.module.css';
// Importing icons from the library you installed
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase } from 'react-icons/fa';
import { TbBrandCpp, TbLetterC } from 'react-icons/tb';

// An array of your skills with their names and icons
const skills = [
  { name: 'Python', icon: <FaPython size={45} /> },
  { name: 'C', icon: <TbLetterC size={45} /> },
  { name: 'C++', icon: <TbBrandCpp size={45} /> },
  // A special case for two icons in one card
  { name: 'HTML & CSS', icon: <div className={styles.multiIcon}><FaHtml5 size={45} /><FaCss3Alt size={45} /></div> },
  { name: 'JavaScript', icon: <FaJsSquare size={45} /> },
  { name: 'SQL', icon: <FaDatabase size={45} /> },
];

export default function TechStack() {
  return (
    <section className={styles.techStackSection}>
      <h2 className={styles.title}>My Tech Stack</h2>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.card}>
            <div className={styles.iconWrapper}>{skill.icon}</div>
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}