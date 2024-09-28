import {
  Link,
  Stack,
  Heading,
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
    <Stack spacing={8} w="full">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
        {/* Left Column for Heading and Explore More Link */}
        {/* Right Column for Cards */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="column" justifyContent="space-between" flex="1">
        <Stack spacing={2} height="100%">
          <div className="typing-container2">
            <span id="header3" className="header3"></span>
            <span className="input-cursor2"></span>
          </div>
          {/* Adjust marginTop to align with the second project */}
          <Heading color="displayColor" fontSize={{ base: 'xl', md: '2xl' }} mt={4}>
          Here&apos;s a glimpse into some of my recent projects.
          </Heading>
          <NextLink passHref href="/projects">
            <Link onClick={() => handleClick('featuredprojects_explore more')}>
              <Text 
                _hover={{ color: 'button2' }} 
                color="button1" 
                fontSize={{ base: 'sm', md: 'xl' }}
              >
                Explore more &rarr;
              </Text>
            </Link>
          </NextLink>
        </Stack>
          <Box flex="1" justifyContent="center" mt={70}> {/* Center the card horizontally */}
            <SlideUpWhenVisible>
              {projects && projects.length > 0 && (
                <Cards
                  slug={projects[0].fields.slug}
                  desc={projects[0].fields.description}
                  imageURL={projects[0].fields.imageUrl}
                  tag={projects[0].fields.tags}
                  title={projects[0].fields.title}
                />
              )}
            </SlideUpWhenVisible>
          </Box>
          </Box>

          <Box display="flex" flexDirection="column" justifyContent="space-between" flex="1" >
            {projects && projects.length > 1 && (
              <SlideUpWhenVisible>
                <Box  >
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
              <SlideUpWhenVisible>
                <Box  mt={50}>
                  <Cards
                    slug={projects[2].fields.slug}
                    desc={projects[2].fields.description}
                    imageURL={projects[2].fields.imageUrl}
                    tag={projects[2].fields.tags}
                    title={projects[2].fields.title}
                  />
                </Box>
              </SlideUpWhenVisible>
            )}
          </Box>
        </Box>
      </SimpleGrid>
    </Stack>
  );
}
