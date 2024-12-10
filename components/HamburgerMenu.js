import React, { useRef } from 'react';
import {
  Flex,
  Box,
  Text,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Divider,
  DrawerBody,
  Stack,
  Icon,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import useMediaQuery from '../components/useMediaQuery';
import { AiOutlineMenu } from 'react-icons/ai';

const sections = [
  { id: 'AboutMe', title: 'About Me' },
  { id: 'FeaturedProjects', title: 'Featured Projects' },
  { id: 'Resume', title: 'Resume' },
];

export default function Navbar({ enableTransition }) {
  const isLargerThan768 = useMediaQuery(768);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  const NavbarDrawer = () => (
    <Drawer
      initialFocusRef={firstField}
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
    >
      <DrawerOverlay />
      <DrawerContent bgColor="black"> {/* Set background color to black */}
        <DrawerCloseButton color="white" />
        <DrawerHeader borderBottomWidth="1px" color="white" mt={4} mb={2}>
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing="16px">
          <NextLink key={'Home'} passHref href={`/`}>
                <Text 
                  fontSize="lg" 
                  fontWeight="bold" 
                  color="white" 
                  onClick={onClose} // Close the drawer on click
                >
                  Home
                </Text>
              </NextLink>
              <Divider borderColor="white" my={0} />

            {sections.map((section) => (
              <NextLink key={section.id} passHref href={`/#${section.id}`}>
                <Text 
                  fontSize="md" 
                  color="white" 
                  onClick={onClose} // Close the drawer on click
                >
                  {section.title}
                </Text>
              </NextLink>
            ))}
                    <Divider borderColor="white" my={0} />
                    <NextLink key={'Projects'} passHref href={`/projects`}>
                <Text 
                  fontSize="lg" 
                  fontWeight="bold" 
                  color="white" 
                  onClick={onClose} // Close the drawer on click
                >
                  Projects
                </Text>
              </NextLink>

          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <Box pos="sticky" zIndex={99}>
      <Slide
        direction="top"
        bg="black"
        transition={
          enableTransition
            ? { enter: { duration: 0.5, delay: 0.01 } }
            : { enter: { duration: 0, delay: 0 } }
        }
        in={true}
        reverse
      >
        <Flex
          as="nav"
          align="center"
          justify="flex-end"
          direction="row"
          w="100%"
          px="22px"
          py="3"
          bg="black"
          borderBottom="0.5px solid #1e2029"
        >
          {!isLargerThan768 && (
            <Icon as={AiOutlineMenu} w={7} h={7} onClick={onOpen} color="white" />
          )}
        </Flex>
      </Slide>
      <NavbarDrawer />
    </Box>
  );
}
