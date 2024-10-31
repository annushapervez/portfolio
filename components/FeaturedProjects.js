import {
  Link,
  Stack,
  Text,
  SimpleGrid,
  Box,
} from '@chakra-ui/react'; // Ensure you're importing from Chakra UI
import NextLink from 'next/link';
import Cards from './Card'; // Make sure this is the correct path
import SlideUpWhenVisible from '../components/SlideUpwhenVisible.js'; // Ensure the path is correct
import ReactGA from 'react-ga4';

export default function FeaturedProjects({ projects }) {
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
  };

  return (
    <Stack spacing={8} w="full" px={{ base: 4, md: 20 }} mt={{ base: 10, md: 20 }}>
      <SimpleGrid 
        columns={{ base: 1, sm: 1, md: 2 }} 
        spacing={16} // Adjust spacing for better mobile appearance
      >
        <SlideUpWhenVisible threshold={0.1}>
          <Stack spacing={1}>
          <Stack direction={{ base: 'column'}} alignItems={{ base: 'center', md: 'flex-start' }} justifyContent="space-between"> {/* Center on mobile, left-align on larger screens */}
              <div className="typing-container2">
                <span id="header3" className="header3"></span>
                <span className="input-cursor2"></span>
              </div>              
            </Stack>
            <Text 
            color="textSecondary"  
            fontSize={{ base: 'md', md: 'xl' }} 
            textAlign={{ base: 'center', md: 'left' }} // Center on mobile, left-align on larger screens
          >
            Here&apos;s some of my projects that I have worked on.
          </Text>
          <NextLink href="/projects" passHref>
  <Link
    onClick={() => handleClick('featuredprojects_explore more')}
    textDecoration="none"
    _hover={{ textDecoration: 'none' }}
  >
    <Text
      fontSize={{ base: 'md', md: 'xl' }}
      color="#63b3ed"
      display="inline-block" // Change to inline-block
      p="4px 8px" // Optional: Adjust padding to create some space around the text
      border="1px solid rgba(99, 179, 237, 0.434)" // Keeps border for visibility
      borderRadius="md" // Rounds the corners slightly
      boxShadow="md" // Adds shadow for depth
      _hover={{
        backgroundColor: 'rgba(99, 179, 237, 0.434)',
        color: "white",
        transform: "scale(1.05)", // Slightly increases size on hover
        transition: "all 0.3s ease",
      }}
      mt={4} // Add margin-top for space above the button

    >
      Explore more &rarr;
    </Text>
  </Link>
</NextLink>
          </Stack>
        </SlideUpWhenVisible>
        
        {/* Adjust card display for better mobile experience */}
        <SlideUpWhenVisible>
          <Cards
            slug={projects[0].fields.slug}
            desc={projects[0].fields.description}
            imageURL={projects[0].fields.imageUrl}
            tag={projects[0].fields.tags}
            title={projects[0].fields.title}
          />
        </SlideUpWhenVisible>

        {projects && projects.length > 1 && (
          <SlideUpWhenVisible>
            <Box mt={{ base: 4, md: '-65%' }}> {/* Adjusted margin for mobile */}
              <Cards
                slug={projects[1].fields.slug}
                desc={projects[1].fields.description}
                imageURL={projects[1].fields.imageUrl}
                tag={projects[1].fields.tags}
                title={projects[1].fields.title}
              />
            </Box>
          </SlideUpWhenVisible>
        )}
        
        {projects && projects.length > 2 && (
          <SlideUpWhenVisible threshold={0.8}>
            <Cards
              slug={projects[2].fields.slug}
              desc={projects[2].fields.description}
              imageURL={projects[2].fields.imageUrl}
              tag={projects[2].fields.tags}
              title={projects[2].fields.title}
            />
          </SlideUpWhenVisible>
        )}
      </SimpleGrid>
    </Stack>
  );
}
