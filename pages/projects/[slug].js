import {
    Box,
    Divider,
    Heading,
    Stack,
    Text,
    Image,
    HStack,
    IconButton,
    Link,
} from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useRouter } from 'next/router';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { FaGithub, FaLink, FaArrowLeft } from 'react-icons/fa';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../../styles/theme.js'; 
import { useEffect, useState } from 'react';
import MDXComponents from '../../components/MDXComponents';
import Container from '../../components/Container';
import ProjectContainer from '../../components/ProjectContainer';

export default function Project({ metadata, source, toc }) {
    const router = useRouter();
    const { slug } = router.query;

    // State for active heading in ToC
    const [activeId, setActiveId] = useState();
    const [views, setViews] = useState('...');

    // Fetch views on component mount or when slug changes
    useEffect(() => {
        if (!slug) {
          console.warn("Slug is undefined!");
          return;  // Skip the API call if slug is undefined
        }
      
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/views/${slug}`)
          .then((res) => res.json())
          .then((json) => setViews(json.views))
      }, [slug])

    // Handle scrolling and set active ToC heading
    useEffect(() => {
        const handleScroll = () => {
            let currentId;
            for (const heading of toc) {
                const element = document.getElementById(heading.title);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if the heading is in the viewport
                    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                        currentId = heading.title;
                    } else if (rect.top < window.innerHeight / 2) {
                        currentId = heading.title;
                    }
                }
            }
            if (!currentId && toc.length > 0) {
                currentId = toc[toc.length - 1].title; // Default to the last heading if none matched
            }
            setActiveId(currentId);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [toc]);

    // Construct the image URL based on the slug
    const imageURL = `https://raw.githubusercontent.com/annushapervez/${slug}/main/main.png`;

    return (
        <ChakraProvider theme={customTheme}>
            <Container>
                <HStack spacing={4} p={4} mx="auto" align="start">
                    {/* Main Content Section */}
                    <Stack flex="1" spacing={4}>
                    <Link href="/projects" passHref>
                            <IconButton
                            aria-label="Back to Projects"
                            icon={<FaArrowLeft size={24} />}
                            variant="ghost"
                            color="white"
                            _hover={{ color: 'gray.400' }}
                            alignSelf="flex-start"
                            />
                        </Link>
                        <Stack
                            border="1px"
                            borderColor={{ base: '#333', md: 'borderColor' }}
                            borderRadius="10px"
                        >
                            <Image
                                src={imageURL}
                                alt={metadata.title}
                                borderRadius="10px"
                                width="100%"
                                height="auto"
                                objectFit="cover"
                            />
                        </Stack>
                        

                        <Stack pt={4}>
                            <Heading as="h1" color="displayColor" fontSize={['4xl', '5xl']}> {/* Increased font size */}
                                {metadata.title}
                            </Heading>
                            <Text fontSize={['md', 'lg']} color="textPrimary"> {/* Increased font size */}
                                {metadata.summary}
                            </Text>

                            <HStack spacing={2} pt={2}>
                                <Text color="textPrimary" fontSize={['sm', 'md']}>
                                    {views} views
                                </Text>
                                {metadata.githubLink && (
                                    <Link href={metadata.githubLink} isExternal>
                                        <HStack>
                                            <FaGithub fontSize="20px" color="#63b3ed"/>
                                            <Text color="textPrimary" fontSize={['sm', 'md']}> {/* Increased font size */}
                                                Github
                                            </Text>
                                        </HStack>
                                    </Link>
                                )}
                                {metadata.deployLink && (
                                    <Link href={metadata.deployLink} isExternal>
                                        <HStack>
                                            <FaLink fontSize="18px" color="#63b3ed"/>
                                            <Text color="textPrimary" fontSize={['sm', 'md']}> {/* Increased font size */}
                                                Live Site
                                            </Text>
                                        </HStack>
                                    </Link>
                                )}
                            </HStack>

                            <Divider my={4} />
                            <HStack alignItems="start" pt="23px" spacing="36px">
                                <Stack w={{ base: '100%', md: '50rem' }}>
                                    <ProjectContainer>
                                        <MDXRemote {...source} components={MDXComponents} />
                                    </ProjectContainer>
                                </Stack>

                                <Stack
                                    pos="sticky"
                                    top="6rem"
                                    display={{ base: 'none', md: 'flex' }}
                                    w="250px"
                                    h="500px"
                                >
                                    <Text color="displayColor" fontSize="xl" fontWeight="semibold">
                                        Table of Contents
                                    </Text>

                                    {toc.map((heading) => (
                                        <Box key={heading.title} pl={`${heading.level * 1}rem`}>
                                            <Text
                                                key={heading.id}
                                                color={
                                                    heading.title === activeId ? 'activeColor' : 'textSecondary'
                                                }
                                                fontSize={['md', 'lg']}
                                                fontWeight={
                                                    heading.title === activeId ? 'semibold' : 'normal'
                                                }
                                            >
                                                <a href={`#${heading.title}`}>{heading.title}</a>
                                            </Text>
                                        </Box>
                                    ))}
                                </Stack>
                            </HStack>

                        </Stack>
                    </Stack>
                </HStack>
            </Container>
        </ChakraProvider>
    );
}

export async function getStaticPaths() {
    const projectsDirectory = path.join(process.cwd(), 'projectinfo');
    const filenames = fs.readdirSync(projectsDirectory);

    const paths = filenames.map((filename) => ({
        params: { slug: filename.replace(/\.md$/, '') },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const projectsDirectory = path.join(process.cwd(), 'projectinfo');
    const filePath = path.join(projectsDirectory, `${params.slug}.md`);

    if (!fs.existsSync(filePath)) {
        return {
            notFound: true,
        };
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: metadata, content } = matter(fileContent);
    const mdxSource = await serialize(content);

    // Extract headings for ToC
    const headings = content.match(/#{2,4} .+/g) || []; // Match headings
    const toc = headings.map((heading) => {
        const level = heading.match(/#/g).length - 2; // Count heading level
        const title = heading.replace(/#{2,4} /, '').trim(); // Clean title
        return { title, level };
    });

    return {
        props: {
            metadata,
            source: mdxSource,
            toc, // Pass the ToC to the component
        },
    };
}
