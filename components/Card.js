import { Box, Image, Text, Link, Tag, TagLabel, TagLeftIcon, Stack, Divider } from '@chakra-ui/react';
import NextLink from 'next/link';
import ReactGA from 'react-ga4';
import { FaReact, FaPython, FaJs, FaSass, FaPepperHot, FaLaravel, FaBootstrap, FaDatabase, FaCode } from 'react-icons/fa';
import { SiChakraui, SiNextdotjs } from 'react-icons/si';
import useMediaQuery from '../components/useMediaQuery'; // Assuming this is the correct path

const Cards = ({ slug, desc, imageURL, tag, title }) => {
  const getTagDetails = (tag) => {
    switch (tag) {
      case 'React':
        return { color: 'blue', icon: FaReact };
      case 'Python':
        return { color: 'orange', icon: FaPython };
      case 'JavaScript':
        return { color: 'yellow', icon: FaJs };
      case 'Sass':
        return { color: 'pink', icon: FaSass };
      case 'Flask':
        return { color: 'green', icon: FaPepperHot };
      case 'Laravel':
        return { color: 'red', icon: FaLaravel };
      case 'Bootstrap':
        return { color: 'purple', icon: FaBootstrap };
      case 'SQL':
        return { color: 'blue', icon: FaDatabase };
      case 'Next.js':
        return { color: 'gray', icon: SiNextdotjs };
      case 'Chakra UI':
        return { color: 'teal', icon: SiChakraui };
      default:
        return { color: 'gray', icon: FaCode };
    }
  };

  const isLargerThan800 = useMediaQuery(800); // Custom hook for responsive design

  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
  };

  return (
       <Box 
      borderRadius="md" 
      overflow="hidden" 
      border="1px" 
      borderColor="gray.200" 
      width={{ base: '100%', md: '350px', lg: '450px' }} // Increased responsive width
      height="auto" // Set height to auto to accommodate dynamic content
      boxShadow="md" // Optional: Add a shadow for visual depth
      margin="2" // Adjust margin for spacing
    >
      <NextLink href={slug} passHref>
        <Link onClick={() => handleClick(`project_${title.replace('@', '-at')}`)}>
          <Box height="250px" width="470px"> {/* Set a fixed height for the image container */}
            <Image 
              src={imageURL} 
              alt={title} 
              width="100%" 
              height="100%" 
              objectFit="cover" // Ensures the image covers the area
              borderRadius="10px" // Round all corners of the image by 10 pixels
            />
          </Box>
          <Box p="4">
            <Text fontWeight="bold" fontSize="xl">{title}</Text>
            <Text mt={2}>{desc}</Text>
            <Stack isInline mt={2}>
              {tag.map((item) => {
                const { color, icon } = getTagDetails(item);
                return (
                  <Tag key={item} colorScheme={color} size={isLargerThan800 ? 'md' : 'sm'}>
                    <TagLeftIcon as={icon} />
                    <TagLabel>{item}</TagLabel>
                  </Tag>
                );
              })}
            </Stack>
            <Divider mt={2} />
          </Box>
        </Link>
      </NextLink>
    </Box>
  );
};



export default Cards;
