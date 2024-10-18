"use client";

import { Box, Flex, Link } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'Home', title: 'Home' },
  { id: 'AboutMe', title: 'About Me' },
  { id: 'FeaturedProjects', title: 'Projects' },
  { id: 'Resume', title: 'Resume' },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Offset for better visibility

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
    <Box
      position="fixed"
      top={0}
      left={0}
      height="100vh"
      width="200px"
      bg="black"
      color="white"
      p={4} // Added padding for spacing
    >
      <Flex direction="column" align="center" justify="center" height="100%">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            fontSize="18px"
            p="10px"
            m="10px 0"
            borderRadius="4px"
            bg={activeSection === section.id ? 'rgba(99, 179, 237, 0.434)' : 'transparent'}
            _hover={{ bg: 'rgba(45, 55, 72, 0.8)' }}
            width="100%"
            textAlign="center"
          >
            {section.title}
          </Link>
        ))}
      </Flex>
    </Box>
  );
}

