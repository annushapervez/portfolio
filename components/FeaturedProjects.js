import {
  Link,
  Stack,
  Text,
  SimpleGrid,
  Box,
  Center, // Import Center from Chakra UI
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Cards from './Card'; 
import SlideUpWhenVisible from '../components/SlideUpwhenVisible.js'; 
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
        spacing={16}
      >
        <SlideUpWhenVisible threshold={0.1}>
          <Stack spacing={1}>
            <Stack direction={{ base: 'column'}} alignItems={{ base: 'center', md: 'flex-start' }} justifyContent="space-between">
              <div className="typing-container2">
                <span id="header3" className="header3"></span>
                <span className="input-cursor2"></span>
              </div>
            </Stack>
            <Text 
              color="textSecondary"  
              fontSize={{ base: 'md', md: 'xl' }} 
              textAlign={{ base: 'center', md: 'left' }} 
            >
              Here&apos;s some of my projects that I have worked on.
            </Text>
            <Center 
  display={{ base: 'flex', md: 'none' }} // Center on mobile only
  mt={4} // Margin top for spacing
> 
  <NextLink href="/projects" passHref>
    <Link
      onClick={() => handleClick('featuredprojects_explore more')}
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
    >
      <Text
        fontSize={{ base: 'md', md: 'xl' }}
        color="#63b3ed"
        display="inline-block"
        p="4px 8px"
        border="1px solid rgba(99, 179, 237, 0.434)"
        borderRadius="md"
        boxShadow="md"
        _hover={{
          backgroundColor: 'rgba(99, 179, 237, 0.434)',
          color: "white",
          transform: "scale(1.05)",
          transition: "all 0.3s ease",
        }}
      >
        Explore more &rarr;
      </Text>
    </Link>
  </NextLink>
</Center>

<Center 
  display={{ base: 'none', md: 'flex' }} // Default alignment for larger screens
  justifyContent="flex-start" // Adjust alignment on larger screens if needed
  mt={4} // Margin top for spacing
> 
  <NextLink href="/projects" passHref>
    <Link
      onClick={() => handleClick('featuredprojects_explore more')}
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
    >
      <Text
        fontSize={{ base: 'md', md: 'xl' }}
        color="#63b3ed"
        display="inline-block"
        p="4px 8px"
        border="1px solid rgba(99, 179, 237, 0.434)"
        borderRadius="md"
        boxShadow="md"
        _hover={{
          backgroundColor: 'rgba(99, 179, 237, 0.434)',
          color: "white",
          transform: "scale(1.05)",
          transition: "all 0.3s ease",
        }}
      >
        Explore more &rarr;
      </Text>
    </Link>
  </NextLink>
</Center>
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
            <Box mt={{ base: 4, md: '-65%' }}>
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
