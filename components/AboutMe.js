import { Box, Grid, Text, Image } from '@chakra-ui/react';
import SlideUpWhenVisible from '../components/SlideUpwhenVisible.js'; // Ensure the path is correct

export default function AboutMe({ aboutMeContent }) {
  return (
    <Box padding={0} px={20} mt={20}>
      <Grid 
        templateColumns={{ base: '1fr', md: '1fr 1fr' }} 
        gap={6}
        alignItems="center"
        paddingBottom={0}
      >
        {/* First column with "About Me" and "Seeking" sections */}
        <Box>
          <SlideUpWhenVisible>
            <div className="typing-container2">
              <span id="header1" className="header1"></span>
              <span className="input-cursor2"></span>
            </div>    
            <Text fontSize="lg" mt={2} >{aboutMeContent.introduction}</Text>
          </SlideUpWhenVisible>

          {/* Adding margin-bottom to the typing container of "About Me" */}
          <SlideUpWhenVisible>
            <Box mt={10}> {/* Adjust this value for space */}
              <div className="typing-container2">
                <span id="header2" className="header2"></span>
                <span className="input-cursor2"></span>
              </div>
              <Text fontSize="lg" mt={2}>{aboutMeContent.seeking}</Text>
            </Box>
          </SlideUpWhenVisible>
        </Box>

        {/* Second column with profile image centered */}
        <SlideUpWhenVisible>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image 
              src="/pic.jpg" 
              alt="Annusha Pervez" 
              boxSize="300px" // Set fixed width and height
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

