'use client';

import Link from 'next/link';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Navbar.module.css';
import HamburgerMenu from './HamburgerMenu'; // <-- IMPORT a

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggleButton}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default function Navbar() {
  const navItems = ['About', 'Education', 'Experience', 'Projects', 'Resume'];

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href="/">Ayush Thakur</Link>
      </div>

      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item} className={styles.navLink}>
            <Link href={`#${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
      
      {/* UPDATED: Wrapper for the controls */}
      <div className={styles.controls}>
        <ThemeToggleButton />
        <HamburgerMenu navItems={navItems} /> {/* <-- ADDED */}
      </div>
    </nav>
  );
}
