'use client'; // Required for using state

import { useState } from 'react'; // Import useState for hover effect
import styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={24} />,
    url: 'https://www.linkedin.com/in/ayushdx',
  },
  {
    name: 'GitHub',
    icon: <FaGithub size={24} />,
    url: 'https://github.com/DX3269',
  },
  {
    name: 'Email',
    icon: <FaEnvelope size={24} />,
    url: 'mailto:ayushthakur3269@gmail.com',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // State to track if the email icon is being hovered over
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        {socialLinks.map((social) => {
          const isMailLink = social.url.startsWith('mailto:');

          // Special logic for the email link to handle the hover effect
          if (isMailLink) {
            return (
              <a
                key={social.name}
                href={social.url}
                className={styles.iconLink}
                aria-label={social.name}
                onMouseEnter={() => setIsEmailHovered(true)}
                onMouseLeave={() => setIsEmailHovered(false)}
              >
                {isEmailHovered ? (
                  <span className={styles.emailText}>ayushthakur3269@gmail.com</span>
                ) : (
                  social.icon
                )}
              </a>
            );
          }

          // Logic for all other links (LinkedIn, GitHub)
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={styles.iconLink}
            >
              {social.icon}
            </a>
          );
        })}
      </div>
      <p className={styles.copyright}>
        © {currentYear} Ayush Thakur. All Rights Reserved.
      </p>
    </footer>
  );
}