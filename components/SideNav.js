"use client";

import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // For handling navigation to pages

// Define sections for the Home page
const sections = [
  { id: 'AboutMe', title: 'About Me' },
  { id: 'FeaturedProjects', title: 'Featured Projects' },
  { id: 'Resume', title: 'Connect' },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('');
  const router = useRouter();

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

  // Navigate to the Projects page
  const navigateToProjects = () => {
    router.push('/projects');
  };

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
        {/* Home Page Text */}
        <Text
          fontSize="20px" // Larger font size for current page
          p="8px" // Reduced padding
          m="6px 0" // Reduced margin
          width="100%" // Ensure consistent width
          textAlign="center"
          whiteSpace="nowrap" // Prevent text wrapping
          cursor="pointer" // Add cursor for pointer interaction
          onClick={() => router.push('/')} // Handle navigation
          fontWeight={router.pathname === '/' ? 'bold' : 'normal'} // Bold for the active page
          _hover={{ fontWeight: 'bold' }} // Bold on hover
        >
          Home
        </Text>

        <Divider borderColor="white" my={2} />

        {/* Sections for Home */}
        {sections.map((section) => (
          <Text
            key={section.id}
            fontSize="18px"
            p="8px" // Reduced padding
            m="6px 0" // Reduced margin
            width="100%" // Ensure consistent width
            textAlign="center"
            whiteSpace="nowrap" // Prevent text wrapping
            cursor="pointer" // Add cursor for pointer interaction
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })} // Scroll to section on click
            fontWeight={activeSection === section.id ? 'bold' : 'normal'} // Bold for the active section
            _hover={{ fontWeight: 'bold' }} // Bold on hover
            transition="font-weight 0.2s ease" // Smooth font-weight transition
          >
            {section.title}
          </Text>
        ))}

        <Divider borderColor="white" my={2} />

        {/* Projects Page Text */}
        <Text
          fontSize="20px" // Larger font size for current page
          p="8px" // Reduced padding
          m="6px 0" // Reduced margin
          width="100%" // Ensure consistent width
          textAlign="center"
          whiteSpace="nowrap" // Prevent text wrapping
          cursor="pointer" // Add cursor for pointer interaction
          onClick={navigateToProjects} // Trigger navigation to Projects page
          fontWeight={router.pathname === '/projects' ? 'bold' : 'normal'} // Bold for active Projects page
          _hover={{ fontWeight: 'bold' }} // Bold on hover
          transition="font-weight 0.2s ease" // Smooth font-weight transition
        >
          Projects
        </Text>
      </Flex>
    </Box>
  );
}
