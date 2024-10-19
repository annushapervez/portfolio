import { Link, Button, chakra, Stack, Text } from '@chakra-ui/react';
import useMediaQuery from '../components/useMediaQuery';
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import ReactGA from 'react-ga4';
import SlideUpWhenVisible from './SlideUpwhenVisible.js'; // Ensure the path is correct

export default function ContactMe({ contactMe }) {
  const isLargerThan800 = useMediaQuery(800);
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
  };

  const title = contactMe?.[0]?.fields?.title || "Let’s connect—I'm always open to new conversations and opportunities";
  
  return (
    <Stack alignItems="center" justifyContent="center" w="100%" spacing={4} mt={{ base: 10, md: 20 }}>
      <SlideUpWhenVisible>
        <div className="typing-container3">
          <span id="header4" className="header4"></span>
          <span className="input-cursor"></span>    
        </div>
      </SlideUpWhenVisible>

      <SlideUpWhenVisible>
        <Text 
          color="textSecondary" 
          fontSize={{ base: 'lg', md: 'xl' }} // Adjust the font size here
          textAlign="center"
        >
          {title}{' '}
          <chakra.span
            color="button1"
            display={{ base: 'block', md: 'inline' }}
          >
          </chakra.span>
        </Text>
      </SlideUpWhenVisible>

      <SlideUpWhenVisible>
        <Stack isInline spacing={4} mt={4} mb={{ base: 20, md: 40 }}>
          <Link
            href="https://www.linkedin.com/in/annusha-pervez/"
            isExternal
            onClick={() => handleClick('contact_linkedin')}
          >
            <Button
              pos="static"
              bg="black"
              color="white"
              leftIcon={<FaLinkedin fill="#63b3ed" />}
              size={isLargerThan800 ? 'md' : 'sm'}
              _hover={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: 'black' }}
            >
              LinkedIn
            </Button>
          </Link>
          <Link
            href="mailto:annushapervez7@gmail.com"
            isExternal
            onClick={() => handleClick('contact_email')}
          >
            <Button
              pos="static"
              bg="black"
              color="white"
              transition="0.3s"
              leftIcon={<FaEnvelope fill="#63b3ed" />}
              size={isLargerThan800 ? 'md' : 'sm'}
              _hover={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: 'black' }}
            >
              Email
            </Button>
          </Link>
          <Link
            href="/V2resume.pdf" // Link to your PDF file
            isExternal
            onClick={() => handleClick('contact_resume')}
          >
            <Button
              pos="static"
              bg="black"
              color="white"
              leftIcon={<FaFileAlt fill="#63b3ed" />}
              size={isLargerThan800 ? 'md' : 'sm'}
              _hover={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: 'black' }}
            >
              Resume
            </Button>
          </Link>
        </Stack>
      </SlideUpWhenVisible>
    </Stack>
  );
}
