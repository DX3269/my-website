'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './HamburgerMenu.module.css';

export default function HamburgerMenu({ navItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scrolling when the menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  // When a link is clicked, close the menu
  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={styles.hamburgerContainer}>
      <button onClick={toggleMenu} className={styles.hamburgerButton} aria-label="Open navigation menu">
        <div className={`${styles.bar} ${isOpen ? styles.bar1Open : ''}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.bar2Open : ''}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.bar3Open : ''}`}></div>
      </button>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.showMenu : ''}`}>
        <nav>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} onClick={handleLinkClick} className={styles.mobileNavLink}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}