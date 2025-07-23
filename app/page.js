import styles from "./page.module.css";
import LoopingTypewriter from '../components/effects/LoopingTypewriter';
import TechStack from '../components/sections/TechStack';
import About from '../components/sections/About';
import Education from '../components/sections/Education';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Resume from '../components/sections/Resume'; // <-- Import the new component

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <LoopingTypewriter 
          fixedText="I am  "
          words={['Ayush Thakur', 'an Engineer', 'a Developer', 'an Enthusiast']}
        />
      </div>
      <TechStack />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Resume /> {/* <-- Add the new component here */}
    </div>
  );
}
