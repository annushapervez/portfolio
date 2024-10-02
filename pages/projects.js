import { useState } from 'react';
import { Stack, Heading, Text, SimpleGrid, Divider, IconButton } from '@chakra-ui/react';
import { FaArrowLeft, FaSearch } from 'react-icons/fa'; // Import FaArrowLeft
import Link from 'next/link';
import Cards from '../components/Card';
import Container from '../components/Container';
import Head from 'next/head';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Script from 'next/script';
import { GraphQLClient } from 'graphql-request';
import "../styles/nav.css"; // Ensure the path is correct

// Theme customization for Chakra UI
const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "black",
        color: "white",
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
          <title>Annusha Pervez - Repositories</title>
          <meta content="GitHub repositories by Annusha Pervez" name="description" />
        </Head>
        
        {/* Stack containing the back arrow and heading */}
        <Stack justifyContent="center" mt={10} spacing={5}>
          
          {/* Back Arrow Button */}
          <Link href="/#FeaturedProjects" passHref> {/* Link back to the main page */}
          <IconButton
          aria-label="Back to Home"
          icon={<FaArrowLeft size={24} />} // Adjust the size here
          variant="ghost"
          color="white"
          _hover={{ color: 'gray.400' }}
          alignSelf="flex-start"
        />
          </Link>
          
          {/* Heading and description */}
          <Heading color="displayColor" fontSize={{ base: '5xl', md: '5xl' }}>
            Repositories
          </Heading>
          <Text fontSize={{ base: '14px', md: '16px' }}>
            Here are some of my public GitHub repositories.
          </Text>
          <InputGroup maxW="400px">
            <InputRightElement pointerEvents="none">
              <FaSearch />
            </InputRightElement>
            <Input
              placeholder="Search repositories"
              type="text"
              value={query}
              onChange={handleChange}
            />
          </InputGroup>
          <Divider />
        </Stack>

        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
          {projects
            .filter((repo) =>
              repo.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((repo) => (
              <a href={repo.url} target="_blank" rel="noopener noreferrer" key={repo.name}>
                <Cards
                  desc={repo.description}
                  imageURL={`https://raw.githubusercontent.com/annushapervez/${repo.name}/main/main.png`} // Set the image URL dynamically
                  tag={repo.primaryLanguage ? [repo.primaryLanguage.name] : []}
                  title={repo.name}
                />
              </a>
            ))}
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
        repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            name
            description
            url
            createdAt
            updatedAt
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  `;

  try {
    // Use client.request to fetch data from GitHub API
    const response = await client.request(query);
    const repositories = response.user.repositories.nodes;

    return {
      props: {
        projects: repositories, // Pass repositories as projects
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
