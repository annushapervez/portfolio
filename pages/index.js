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
import Lottie from 'lottie-react'; // Correct import



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
        slug: 'GeoSearch',
        description: 'A dynamic store locator application that visualizes store locations on an interactive map allowing users to search and filter by store type and address.',
        imageUrl: 'https://raw.githubusercontent.com/annushapervez/GeoSearch/main/main.png', // Update with actual image path
        tags: ['JavaScript', 'React', 'Python'],
        title: 'GeoSearch'
      }
    },
    {
      fields: {
        slug: 'the-climb',
        description: 'A web application allows users to track their nutrition and exercise, offering personalized suggestions and fostering connections with friends for motivation.',
        imageUrl: 'https://raw.githubusercontent.com/annushapervez/the-climb/main/main.png', // Update with actual image path
        tags: ['PHP', 'JavaScript', 'CSS'],
        title: 'The Climb'
      }
    }
  ];

  const aboutMeContent = {
    introduction: " I'm a passionate software engineer based in New York City with a unique blend of expertise in computer science and psychology. I graduated from the University at Buffalo with a Bachelor of Science in Computer Science and a Bachelor of Arts in Psychology in May 2024. My academic journey has equipped me with a solid foundation in data structures, algorithms, web development, machine learning, and software quality practices.",
    problemSolving: " I thrive on tackling complex problems and developing innovative solutions. I enjoy finding creative approaches to challenges, whether it's optimizing algorithms, designing intuitive user experiences, or implementing efficient systems. Every problem presents a new puzzle, and I am always eager to explore unconventional solutions that push boundaries and deliver meaningful results.",
    seeking: "I am actively seeking opportunities in software engineering or product management where I can apply my skills in web development, distributed systems, and user-centered thinking to contribute to innovative, impactful products. I’m excited to collaborate with a dynamic team and work in an environment that fosters growth, creativity, and meaningful problem-solving across both technical and product domains."
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
                  src="/iphone2.png"
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
                      width={261}
                      height={26}
                      className="bubble-image"
                    />
                  </a>
                  <a href="https://github.com/annushapervez" target="_blank" rel="noopener noreferrer" className="bubble bubble2">
                    <Image
                      src="/github2.png"
                      alt="GitHub Bubble"
                      width={261}
                      height={26}
                      className="bubble-image"
                    />
                  </a>
                  <a href="mailto:annushapervez7@gmail.com" className="bubble bubble3">
                    <Image
                      src="/email2.png"
                      alt="Email Bubble"
                      width={261}
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
                <span data-ty>Python, C, Scala, PHP, Go, JavaScript, TypeScript, JSON, CSS, HTML, OCaml, Mips Assembly, Shell</span>
                <span data-ty></span>

                <span data-ty="input">ls Frameworks</span>
                <span data-ty>Flask, TensorFlow, React, Next.js, Node.js, Unreal Engine 5</span>
                <span data-ty></span>

                <span data-ty="input">ls Databases</span>
                <span data-ty>MongoDB, SQL, Supabase, Firebase, MySQL</span>
                <span data-ty></span>

                <span data-ty="input">ls Tools</span>
                <span data-ty>Docker, GitHub, Git, Visual Studio Code, GraphQL, Trello </span>
                <span data-ty></span>
              </div>
            </div>
          </div>
        </section>

        <section id="AboutMe" className="section1">  
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