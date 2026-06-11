'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Instructora', href: '#instructora' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#inicio" className={styles.logo} aria-label="mecapacitoenlinea.cl inicio">
          <span className={styles.logoMark}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="14" cy="14" r="14" fill="#ff286a" fillOpacity="0.15" />
              <path d="M7 10.5L14 7L21 10.5V14C21 17.866 17.866 21 14 21C10.134 21 7 17.866 7 14V10.5Z" stroke="#ff286a" strokeWidth="1.5" fill="none"/>
              <path d="M11 14L13 16L17 12" stroke="#ff286a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoBrand}>mecapacito</span>
            <span className={styles.logoSub}>en línea</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.navLinks} role="navigation" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.navLink}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://cursos.mecapacitoenlinea.cl"
          className={`btn btn-primary ${styles.ctaBtn}`}
          target="_blank"
          rel="noopener noreferrer"
          id="navbar-cta"
        >
          Acceder a Cursos →
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu} role="navigation" aria-label="Menú móvil">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://cursos.mecapacitoenlinea.cl"
            className={`btn btn-primary ${styles.mobileCta}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Acceder a Cursos →
          </a>
        </div>
      )}
    </nav>
  )
}
