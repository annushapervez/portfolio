"use client"; // Add this line at the top

import Link from 'next/link';
import { useState, useEffect } from 'react';

const sections = [
{ id: 'section0', title: 'Home' },
  { id: 'section1', title: 'About Me' },
  { id: 'section2', title: 'Projects' },
  { id: 'section3', title: 'Resume' },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for better visibility

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.clientHeight;

          if (scrollPosition >= offsetTop && scrollPosition <= offsetBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sidebar">
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
        >
          {section.title}
        </Link>
      ))}
    </div>
  );
}
