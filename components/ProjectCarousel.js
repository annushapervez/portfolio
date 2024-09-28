import { Stack, Box, Image, Text } from '@chakra-ui/react';
import '../styles/nav.css'; // Ensure the path is correct

const projects = [
  { image: '/empty.jpg', title: 'Project 1' },
  { image: '/empty.jpg', title: 'Project 2' },
  { image: '/empty.jpg', title: 'Project 3' }
  // Add more projects here
];

const ProjectStack = () => {
  return (
    <section id="section2" className="projects-section">
      <div className="typing-container2">
        <span id="header3" className="header3"></span>
        <span className="input-cursor2"></span>
      </div>

      {/* Chakra Stack for project display */}
      <Stack spacing={6} mt={6} direction={['column', 'row']} justify="space-between">
        {projects.map((project, index) => (
          <Box key={index} className="project-card" flex="1" maxW="300px" borderRadius="10px" boxShadow="md" overflow="hidden">
            <Image src={project.image} alt={project.title} className="project-image" />
            <Text className="project-title" fontSize="1.25rem" fontWeight="600" p={2} textAlign="center">{project.title}</Text>
          </Box>
        ))}
      </Stack>
    </section>
  );
};

export default ProjectStack;
