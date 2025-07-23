import styles from './Projects.module.css';

const projectData = [
  { name: 'Portfolio Website', description: ['A personal portfolio built using Next.js and React', 'Features a responsive design.', 'Implemented dynamic text effects with multiple components architecture','Technologies used : React, Next.js, CSS'] },
  { name: 'RAG chatbot', description: ['Developed a RAG chatbot using Ollama with frontend using React. The chatbot processes a PDF given by user, than use Mistral AI model which is a 7B parameter model, for outputs', 'Technologies Used : Python, Ollama, React, FastAPI'] },
  { name: 'Crypto Currency Analysis in real time', description: ['Developed a software for analyzing and presenting the KPIs of cryptocurrency exchange in real time with generating report in every given interval of time', 'Technologies Used : Python, MS Excel, SQL'] },
  { name: 'Custom Operating System', description: ['Built a UNIX-style OS with a scheduler, file system, text editor, and calculator', 'Technologies used :  C, C++'] },
];


export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>Projects</h2>
      
      <div className={styles.grid}>
        {projectData.map((project, index) => (
          <div key={index} className={styles.card}>
            {/* UPDATED: Reverted to a simple h3 for the project name */}
            <h3 className={styles.projectName}>{project.name}</h3>
            <ul className={styles.description}>
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
