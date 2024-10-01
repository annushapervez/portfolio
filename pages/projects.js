import { useState } from 'react';
import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react';
import Cards from '../components/Card'; // Ensure this path is correct
import Container from '../components/Container'; // Ensure this path is correct
import Head from 'next/head';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { FaSearch } from 'react-icons/fa';
import Script from 'next/script';
import { fetchGitHubData } from '../lib/github'; // Updated import
import "../styles/nav.css"; // Ensure the path is correct



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
        <Stack justifyContent="center" my={{ base: '15vh', md: '16vh' }} spacing={10}>
          <Stack spacing={5}>
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
                repo.name.toLowerCase().includes(query.toLowerCase()),
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
        </Stack>
      </Container>
      <Script
  src="/typing.js"

/>
    </ChakraProvider>
  );
}

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

  // Fetch the repositories from GitHub using the `fetchGitHubData` helper
  const response = await fetchGitHubData(query);
  const repositories = response.user.repositories.nodes;

  return {
    props: {
      projects: repositories, // Pass repositories as projects
    },
    revalidate: 10, // Revalidate the page every 10 seconds
  };
  
}
