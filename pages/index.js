"use client"; // Add this at the top of your file
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import SideNav from '../components/SideNav'; // Ensure the path is correct
import "../styles/nav.css"; // Ensure the path is correct]
import animationData from '../public/animation.json';
import FeaturedProjects from '../components/FeaturedProjects';
import ContactMe from '../components/ContactMe';
import Container from '../components/Container'; // Ensure this path is correct
import AboutMe from '../components/AboutMe'; // Adjust the path if necessary
import HamburgerMenu from '../components/HamburgerMenu'; // Ensure the path is correct
import { useBreakpointValue } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChakraProvider, extendTheme,Box} from "@chakra-ui/react";
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });



const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "black",
        color: "white",
      },
    },
  },
  fonts: {
    body: '"Arial", sans-serif',
    heading: '"Arial", sans-serif',
  },
  breakpoints: {
    sm: "30em", // Small screens (mobile)
    md: "48em", // Medium screens (tablet)
    lg: "62em", // Large screens (desktop)
    xl: "80em", // Extra large screens (large desktop)
  },
});


//hello
export default function Home() {
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });


  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === '/') {
        // Force refresh the page
        window.location.reload();
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup event listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]); 
  const projects = [
    {
      fields: {
        slug: "the-safety-net-project",
        description: "A non-profit website dedicated to providing support and safety for children around the world.",
         imageUrl: 'https://raw.githubusercontent.com/annushapervez/the-safety-net-project/main/main.png', // Update with actual image path
        tags: ['TypeScript', 'JavaScript', 'React'],
        title: 'The Safety Net Project'
      }
    },
    {
      fields: {
        slug: 'SyeLabs',
        description: "An editorial site for a tech-education platform built around mentorship, conferences, and home labs. Currently in active development.",
        imageUrl: 'https://raw.githubusercontent.com/annushapervez/SyeLabs/main/main.mov',
        tags: ['React', 'JavaScript', 'CSS'],
        title: 'SyeLabs'
      }
    },
    {

      fields: {
        slug: 'GeoSearch',
description: "A multi-brand store locator with search and filtering by store type and address, built to support leadership in identifying optimal purchase locations.",
        imageUrl: 'https://raw.githubusercontent.com/annushapervez/GeoSearch/main/main.png', // Update with actual image path
        tags: ['JavaScript', 'React', 'Python'],
        title: 'GeoSearch'
      }
    }
  ];

 const aboutMeContent = {
  introduction: "I'm a technologist based in New York City who builds with intention, for the people the work is meant to serve. I hold dual degrees in Computer Science and Psychology from the University at Buffalo (2024), a combination that shapes how I work: psychology taught me to ask what people actually need, and computer science taught me how to build it.",
  problemSolving: "At The Safety Net Project, a nonprofit serving rural communities with education and healthcare resources, I build donor-facing tools like fund-allocation visualizations and region-based maps that make giving tangible. At SyeLabs, a tech-education platform, I design workshops and conference sessions on AI and coding, and built the platform's website end-to-end with React, Vite, and Framer Motion.",
  seeking:  "I'm seeking technical opportunities where I can contribute to work that matters by building products, tools, and platforms that help solve real problems. I'd love to join a team that cares about impact alongside execution, where I can keep growing technically while bringing a thoughtful, user-focused perspective."
};


  return (
    <ChakraProvider theme={theme}>
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Annusha's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"  />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isMobile ? (
          <HamburgerMenu /> // Show Hamburger Menu on mobile
        ) : (
          <SideNav /> // Show SideNav on larger screens
        )}

<Box
       ml={{ base: 0, md: '150px' }} // Set margin for larger screens, no margin for mobile
       p={2} // Padding for main content
       bg="black"
       color="white"
       width={{ base: '100%', md: 'calc(100% - 150px)' }}// Adjust width based on sidebar
          >     <Container >
        <section id="Home" className="section">
        {isMobile ? (
        <div className="typing-container">
                <span id="sentence" className="sentence"></span>
                <span className="input-cursor"></span>
              </div>
        ): null}
          <div className="content-columns">
              {/* iPhone Wrapper */}
              <div className="image-container">
                <Image
                  src="/iphone777.png"
                  alt="iPhone"
                  width={350}
                  height={300}
                  priority
                />
                <div className="bubbles">
                  <a href="https://www.linkedin.com/in/annusha-pervez/" target="_blank" rel="noopener noreferrer" className="bubble bubble1">
                    <Image
                      src="/linkedin2.png"
                      alt="LinkedIn Bubble"
                      width={270}
                      height={26}
                      className="bubble-image"
                    />
                  </a>
                  <a href="https://github.com/annushapervez" target="_blank" rel="noopener noreferrer" className="bubble bubble2">
                    <Image
                      src="/github2.png"
                      alt="GitHub Bubble"
                      width={270}
                      height={26}
                      className="bubble-image"
                    />
                  </a>
                  <a href="mailto:annushapervez7@gmail.com" className="bubble bubble3">
                    <Image
                      src="/email2.png"
                      alt="Email Bubble"
                      width={270}
                      height={26}
                      className="bubble-image"
                    />
                  </a>
                </div>
              </div>
            {/* Terminal Column */}
            <div className="terminal-container">
            {!isMobile ? (
        <div className="typing-container">
                <span id="sentence" className="sentence"></span>
                <span className="input-cursor"></span>
              </div>
        ): null}

            {/* Recruitment Column */}
            <div className="recruitment-container">
              <div className="json-animation">
                <Lottie animationData={animationData} loop autoplay style={{ width: '30px', height: '30px' }} />
              </div>
              <div className="recruitment-status">
                <h2>Recruitment Status</h2>
                <p>Currently open to new opportunities.</p>
              </div>
            </div>
<div id="termynal" data-termynal data-ty-typedelay="40" data-ty-linedelay="700">
                {/* Terminal Content */}

                <span data-ty="input">ls Languages</span>
                <span data-ty>Python, C, Scala, PHP, Go, OCaml, MIPS Assembly, Shell</span>
                <span data-ty></span>

                <span data-ty="input">ls Web Development</span>
                <span data-ty>React, Next.js, TypeScript, JavaScript, HTML, CSS</span>
                <span data-ty></span>

                <span data-ty="input">ls AI</span>
                <span data-ty>Claude (Claude Code, Claude Cowork), TensorFlow</span>
                <span data-ty></span>

                <span data-ty="input">ls Databases</span>
                <span data-ty>MongoDB, MySQL, Supabase, Firebase</span>
                <span data-ty></span>

                <span data-ty="input">ls Tools</span>
                <span data-ty>Docker, GitHub, Git, VS Code, GraphQL, Google Analytics, Trello, Tableau, Microsoft Office suite</span>
                <span data-ty></span>
                <span data-ty></span>
                <span data-ty></span>
              </div>
            </div>
          </div>
        </section>

        <section id="AboutMe" className="section1" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <AboutMe aboutMeContent={aboutMeContent} />
        </section>
        <section id="FeaturedProjects" className="section">
          <FeaturedProjects projects={projects} />

        </section>

        <section id="Resume" className="section">
        <ContactMe contactMe={ContactMe} />

        </section>
        <Script
  src="/typing.js"
  strategy="afterInteractive" // Load script after the page is interactive
  onLoad={() => {
    if (typeof window !== 'undefined' && typeof window.typeAndDelete === 'function') {
      window.typeAndDelete();
      window.typeHeaders();

    }
  }}
/>
        <Script
              src="/termynal.js"
              strategy="afterInteractive"
              data-termynal-container="#termynal"
              onLoad={() => console.log("Termynal loaded")}
            />
</Container >
</Box>

    </>
    </ChakraProvider>

  );

}