// components/HamburgerMenu.js
"use client";

import { Box, Button, Flex, IconButton, Collapse } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const sections = [
  { id: 'Home', title: 'Home' },
  { id: 'AboutMe', title: 'About Me' },
  { id: 'FeaturedProjects', title: 'Projects' },
  { id: 'Resume', title: 'Resume' },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    setIsOpen(false); // Close the menu after selection
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box>
      <IconButton
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        variant="outline"
        colorScheme="teal"
        size="lg"
        position="absolute"
        top={4}
        right={4}
      />

      <Collapse in={isOpen}>
        <Box
          p={4}
          bg="gray.800"
          borderRadius="md"
          boxShadow="md"
          position="absolute"
          top={16}
          right={4}
          zIndex={1}
        >
          <Flex direction="column" alignItems="flex-start">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                colorScheme="whiteAlpha"
                onClick={() => handleNavClick(section.id)} // Use the navigation handler
                width="100%"
                justifyContent="flex-start"
              >
                {section.title}
              </Button>
            ))}
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
}
