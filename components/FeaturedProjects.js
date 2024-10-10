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
    <Stack spacing={8} w="full">
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16} px={10}>
        <SlideUpWhenVisible threshold={0.1}>
          <Stack spacing={1}>
            <Stack isInline alignItems="center" justifyContent="space-between">
              <div className="typing-container2">
                <span id="header3" className="header3"></span>
                <span className="input-cursor2"></span>
              </div>              
              <NextLink passHref href="/projects">
                <Link
                  onClick={() => handleClick('featuredprojects_explore more')}
                  textDecoration="none" // Remove underline
                  _hover={{ textDecoration: 'none', color: '#63b3ed' }} // Keep no underline on hover
                >
                  <Text
                    _hover={{ color: '#63b3ed' }} // Change this to your desired blue shade
                    color="#63b3ed" // Set the initial color to blue
                    display={{ base: 'block', md: 'none' }}
                    fontSize={{ base: 'sm', md: 'xl' }}
                  >
                    Explore more &rarr;
                  </Text>
                </Link>
              </NextLink>
            </Stack>
            <Text color="textSecondary" fontSize={{ base: 'md', md: 'xl' }}>
              Here&apos;s some of my projects that I have worked on.
            </Text>
            <NextLink href="/projects">
              <Link
                onClick={() => handleClick('featuredprojects_explore more')}
                textDecoration="none" // Remove underline
                _hover={{ textDecoration: 'none', color: '#63b3ed' }} // Keep no underline on hover
              >
                <Text
                  display={{ base: 'none', md: 'block' }}
                  fontSize={{ base: 'md', md: 'xl' }}
                  color="#63b3ed" // Set the initial color to blue
                  _hover={{ color: '#63b3ed' }}
                >
                  Explore more &rarr;
                </Text>
              </Link>
            </NextLink>
          </Stack>
        </SlideUpWhenVisible>
        
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
            <Box mt={{ md: '-65%' }}>
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
