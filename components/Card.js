import {
  Center,
  Divider,
  Link,
  ScaleFade,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Image,
} from '@chakra-ui/react';
import ReactGA from 'react-ga4';
import {
  FaBootstrap,
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaJs,
  FaLaravel,
  FaPepperHot,
  FaPython,
  FaReact,
  FaSass,
  FaFileCode, // TypeScript icon
  FaCss3,
  FaCogs,
} from 'react-icons/fa';
import { SiChakraui, SiNextdotjs , SiGo, SiPhp,  SiShell } from 'react-icons/si';
import useMediaQuery from '../components/useMediaQuery';
import NextLink from 'next/link';

export default function Cards({ imageURL, title, slug, desc, tag }) {
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
      case 'TypeScript':
        return { color: 'teal', icon: FaFileCode };
      case 'CSS':
          return { color: 'purple', icon: FaCss3 };
      case 'PHP':
          return { color: 'blue', icon: SiPhp  };
      case 'Go':
          return { color: 'green', icon: SiGo }; // Use your desired color
      case 'C':
            return { color: 'red', icon: FaCogs };
      case 'Assembly':
          return { color: 'orange', icon: FaCogs }; // Color and icon for Assembly
      case 'Shell':
            return { color: 'pink', icon: SiShell };
      case 'Chakra UI':
        return { color: 'teal', icon: SiChakraui };
      default:
        return { color: 'gray', icon: FaCode };
    }
  };

  const isLargerThan800 = useMediaQuery(800);

  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
  };

  return (
    <Stack
      minH="320px"
      maxH="500px"
      bg="secondary"
      border="1px"
      borderColor={{ base: '#333', md: '#111111' }}
      borderRadius="10px"
      overflow="hidden"
    >
      <NextLink href={`/projects/${slug}`} passHref>
        <ScaleFade transition={{ duration: 1 }} in={true}>
          <Center w="auto">
          <Image
  width="100%" // Make the image responsive
  height={{ base: "auto", md: "300px" }} // Let height adjust automatically based on width
  minH={['200px', '250px', '270px']} // Responsive minimum height for different breakpoints
  borderRadius="10px 10px 0px 0px"
  transition="0.3s"
  objectFit="cover" // Maintain aspect ratio while covering the container
  alt={title}
  src={imageURL}
/>
          </Center>
          <Stack px={4} py={2}>
            <Stack alignItems="center" justifyContent="space-between" isInline>
              {/* Apply Arial font here */}
              <Text color="displayColor" fontFamily="Arial, sans-serif" fontSize="2xl">
                {title}
              </Text>
              <Stack alignItems="center" justifyContent="flex-end" isInline spacing={4}>
                <Link color="white" onClick={() => handleClick(`project_${title.replace('@', '-at')}`)}>
                  <FaExternalLinkAlt aria-label="project link" size={20} />
                </Link>
              </Stack>
            </Stack>
            <Stack isInline wrap="wrap" overflow="hidden" maxW="100%">
  {tag.map((item) => {
    const { color, icon } = getTagDetails(item);
    return (
      <Tag key={item} colorScheme={color} size={isLargerThan800 ? 'md' : 'sm'} marginRight={1} marginBottom={1}>
        <TagLeftIcon as={icon} />
        <TagLabel>{item}</TagLabel>
      </Tag>
    );
  })}
</Stack>
            <Divider />
            <Text color="gray" fontFamily="Arial, sans-serif" fontSize={['sm', 'md']}>
              {desc}
            </Text>
          </Stack>
        </ScaleFade>
      </NextLink>
    </Stack>
  );
}
