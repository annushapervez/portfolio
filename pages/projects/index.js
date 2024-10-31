import { useState } from 'react';
import { Stack, Heading, Text, SimpleGrid, Divider, IconButton } from '@chakra-ui/react';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import Cards from '../../components/Card';
import Container from '../../components/Container';
import Head from 'next/head';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Script from 'next/script';
import { GraphQLClient } from 'graphql-request';

// Theme customization for Chakra UI
const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "black",
        color: "white",
        fontFamily: 'Arial, sans-serif', // Set the font to Arial

      },
    },
  },
});

export default function Projects({ projects }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Head>
          <title>Projects</title>
          <meta content="Projects by Annusha Pervez" name="description" />
        </Head>
        
        {/* Stack containing the back arrow and heading */}
        <Stack justifyContent="center" mt={10} spacing={5}>
          
          {/* Back Arrow Button */}
          <Link href="/" passHref>
            <IconButton
              aria-label="Back to Home"
              icon={<FaArrowLeft size={24} />}
              variant="ghost"
              color="white"
              _hover={{ color: 'gray.400' }}
              alignSelf="flex-start"
            />
          </Link>
          
          {/* Heading and description */}
          <Heading color="displayColor" fontSize={{ base: '4xl', md: '4xl' }}>
            Projects
          </Heading>
          <Text fontSize={{ base: '18px', md: '18px' }} color="gray">
          Explore my portfolio of projects that highlight my growth, skills, and the technologies I&apos;ve utilized along the way. 
          </Text>
          <InputGroup maxW="400px">
            <InputRightElement pointerEvents="none">
              <FaSearch />
            </InputRightElement>
            <Input
              placeholder="Search Projects"
              type="text"
              value={query}
              onChange={handleChange}
            />
          </InputGroup>
          <Divider mb={4} borderColor="gray"/>
        </Stack>

        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
          {projects
            .filter((repo) =>
              repo.name && repo.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((repo) => {
              // Extracting languages and combining them with the primary language
              const languages = repo.languages.nodes.map(lang => lang.name); // Extract language names

              // Combine primary language and other languages into tags

              return (
                <Link href={`/projects/${encodeURIComponent(repo.name)}`} passHref key={repo.name}>
                  <Cards
                    desc={repo.description}
                    slug={encodeURIComponent(repo.name)}
                    imageURL={`https://raw.githubusercontent.com/annushapervez/${repo.name}/main/main.png`}
                    tag={languages} // Use the combined tags here
                    title={repo.name
                      .split('-') // Split by dashes
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
                      .join(' ')} 
                  />
                </Link>
              );
            })}
        </SimpleGrid>

      </Container>
      <Script src="/typing.js" />
    </ChakraProvider>
  );
}

// Create GraphQL client to interact with GitHub API
const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});

export async function getStaticProps() {
  const query = `
    query {
      user(login: "annushapervez") {
        repositories(first: 100, orderBy: {field: CREATED_AT, direction: ASC}) {
          nodes {
            name
            description
            url
            createdAt
            updatedAt
            primaryLanguage {
              name
            }
            languages(first: 5) {
              nodes {
                name
              }
            }
            owner {
              login
            }
            isPrivate
          }
        }
      }
    }
  `;

  try {
    // Use client.request to fetch data from GitHub API
    const response = await client.request(query);
    const repositories = response.user.repositories.nodes;

    // Filter to only include repositories owned by the specified user
    const userRepositories = repositories.filter(
      repo => repo.owner.login === "annushapervez" && !repo.isPrivate
    );
    
    return {
      props: {
        projects: userRepositories, // Pass user repositories as projects
      },
      revalidate: 10, // Revalidate the page every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return {
      props: {
        projects: [], // Return an empty array in case of error
      },
      revalidate: 10,
    };
  }
}