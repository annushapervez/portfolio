import { Box, Grid, Text, Image } from '@chakra-ui/react';
import SlideUpWhenVisible from '../components/SlideUpwhenVisible.js'; // Ensure the path is correct

export default function AboutMe({ aboutMeContent }) {
  return (
    <Box padding={0} px={{ base: 4, md: 20 }} mt={{ base: 10, md: 20 }}>
      <Grid 
        templateColumns={{ base: '1fr', md: '1fr 1fr' }} 
        gap={6}
        alignItems="center"
        paddingBottom={0}
      >
        {/* First column with "About Me" and "Seeking" sections */}
        <Box textAlign={{ base: 'center', md: 'left' }}> {/* Center text on mobile */}
          <SlideUpWhenVisible>
            <div className="typing-container2">
              <span id="header1" className="header1"></span>
              <span className="input-cursor2"></span>
            </div>    
            <Text fontSize={{ base: 'md', md: 'lg' }} mt={2}>
              {aboutMeContent.introduction}
            </Text>
          </SlideUpWhenVisible>

          {/* Adding margin-bottom to the typing container of "About Me" */}
          <SlideUpWhenVisible>
            <Box mt={10}> {/* Adjust this value for space */}
              <div className="typing-container2">
                <span id="header2" className="header2"></span>
                <span className="input-cursor2"></span>
              </div>
              <Text fontSize={{ base: 'md', md: 'lg' }} mt={2}>
                {aboutMeContent.seeking}
              </Text>
            </Box>
          </SlideUpWhenVisible>
        </Box>

        {/* Second column with profile image centered */}
        <SlideUpWhenVisible>
          <Box display="flex" justifyContent="center" alignItems="center" mt={{ base: 6, md: 0 }}>
            <Image 
              src="/pic.jpg" 
              alt="Annusha Pervez" 
              boxSize={{ base: '200px', md: '300px' }} // Adjust image size for mobile
              borderRadius="full" // Make it circular
              objectFit="cover" // Ensure proper scaling within the circle
              objectPosition="top center" // Shift the image upward
            />
          </Box>
        </SlideUpWhenVisible>
      </Grid>
    </Box>
  );
}
