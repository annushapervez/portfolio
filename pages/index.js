"use client"; // Add this at the top of your file
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import SideNav from '../components/SideNav'; // Ensure the path is correct
import "../styles/nav.css"; // Ensure the path is correct
import animationData from '../public/animation.json';
import FeaturedProjects from '../components/FeaturedProjects';
import ContactMe from '../components/ContactMe';
import Container from '../components/Container'; // Ensure this path is correct
import AboutMe from '../components/AboutMe'; // Adjust the path if necessary
import HamburgerMenu from '../components/HamburgerMenu'; // Ensure the path is correct
import { useBreakpointValue } from '@chakra-ui/react';
import { useEffect } from 'react';
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
  
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    // This function will be called every time the component mounts
    const loadTypingScript = () => {
      const script = document.createElement('script');
      script.src = '/typing.js';
      script.onload = () => {
        if (typeof window !== 'undefined' && typeof window.typeAndDelete === 'function') {
          window.typeAndDelete();
          window.typeHeaders(); // Call the function only if it's defined
        }
      };
      document.body.appendChild(script);
      // Cleanup function to remove the scripts when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    };

    loadTypingScript();
  }, []); // Empty dependency array ensures it runs on mount
  const projects = [
    {
      fields: {
        slug: 'spotify-clone',
        description: 'This Spotify clone enables song uploads, playlist management, and Stripe payment integration all while ensuring efficient data handling and real-time updates',
        imageUrl: '/spotify.png', // Update with actual image path
        tags: ['TypeScript', 'React', 'Tailwind'],
        title: 'Spotify Clone'
      }
    },
    {
    
      fields: {
        slug: 'HelpingHands',
        description: 'A web application that helps users discover volunteering opportunities in New York City based on their personal interests.',
        imageUrl: '/helping.png', // Update with actual image path
        tags: ['React', 'Next.js', 'CSS'],
        title: 'HelpingHands'
      }
    },
    {
      fields: {
        slug: 'project-3',
        description: 'A web application allows users to track their nutrition and exercise, offering personalized suggestions and fostering connections with friends for motivation.',
        imageUrl: '/theclimb.png', // Update with actual image path
        tags: ['PHP', 'JavaScript', 'HTML', 'CSS'],
        title: 'The Climb'
      }
    }
  ];

  const aboutMeContent = {
    introduction: " I am a passionate software engineer based in New York City with a unique blend of expertise in computer science and psychology. I graduated from the University at Buffalo with a Bachelor of Science in Computer Science and a Bachelor of Arts in Psychology in May 2024. My academic journey has equipped me with a solid foundation in data structures, algorithms, web development, machine learning, and software quality practices.",
    problemSolving: " I thrive on tackling complex problems and developing innovative solutions. I enjoy finding creative approaches to challenges, whether it is optimizing algorithms, designing intuitive user experiences, or implementing efficient systems. Every problem presents a new puzzle, and I am always eager to explore unconventional solutions that push boundaries and deliver meaningful results.",
    seeking: "I am actively seeking a software engineering position where I can apply my skills in web development, distributed systems, and software engineering to contribute to innovative projects. I’m excited to collaborate with a dynamic team and work in an environment that fosters growth, creativity, and impactful problem-solving."
  };


  return (
    <ChakraProvider theme={theme}>
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
              <div className="iphone-wrapper">
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
                <span data-ty>Python, C, Scala, PHP, Go, JavaScript, TypeScript, CSS, HTML, OCaml, Mips Assembly</span>
                <span data-ty></span>

                <span data-ty="input">ls Frameworks</span>
                <span data-ty>Flask, TensorFlow, React, Next.js, Unreal Engine 5</span>
                <span data-ty></span>

                <span data-ty="input">ls Databases</span>
                <span data-ty>MongoDB, SQL</span>
                <span data-ty></span>

                <span data-ty="input">ls Tools</span>
                <span data-ty>Docker, GitHub, Git</span>
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