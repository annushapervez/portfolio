"use client"; // Add this at the top of your file

import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import SideNav from '../components/SideNav'; // Ensure the path is correct
import "../styles/nav.css"; // Ensure the path is correct
import animationData from '../public/animation.json';
import FeaturedProjects from '../components/FeaturedProjects';
import ContactMe from '../components/ContactMe';

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
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
});

export default function Home() {
  const projects = [
    {
      fields: {
        slug: 'project-1',
        description: 'This Spotify clone enables song uploads, playlist management, and Stripe payment integration all while ensuring efficient data handling and real-time updates',
        imageUrl: '/spotify.png', // Update with actual image path
        tags: ['TypeScript', 'React', 'Tailwind'],
        title: 'Spotify Clone'
      }
    },
    {
    
      fields: {
        slug: 'project-2',
        description: 'A web application that helps users discover volunteering opportunities in New York City based on their personal interests.',
        imageUrl: '/helping.png', // Update with actual image path
        tags: ['React', 'Next.js', 'CSS'],
        title: 'Helping Hands'
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

  return (
    <ChakraProvider theme={theme}>
    <>

      <SideNav />

      <main className="main-content">
        <section id="Home" className="section">
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
              <div className="typing-container">
                <span id="sentence" className="sentence"></span>
                <span className="input-cursor"></span>
              </div>

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

        <section id="AboutMe" className="section">  
        <div className="content-columns">
        <div className="about-me-content">
    <div className="text-content">
    <div className="typing-container2">
    <span id="header1" className="header1"></span>
    <span className="input-cursor2"></span>    
    </div>

  <p>
  I&apos;m a passionate software engineer based in New York City with a unique blend
    of expertise in computer science and psychology. I graduated from the University 
    at Buffalo with a Bachelor of Science in Computer Science and a Bachelor of Arts 
    in Psychology in May 2024. My academic journey has equipped me with a solid 
    foundation in data structures, algorithms, web development, machine learning, and 
    software quality practices.
  </p>
  <p>
    I thrive on tackling complex problems and developing innovative solutions. I enjoy 
    finding creative approaches to challenges, whether it&apos;s optimizing algorithms, 
    designing intuitive user experiences, or implementing efficient systems. Every 
    problem presents a new puzzle, and I am always eager to explore unconventional 
    solutions that push boundaries and deliver meaningful results.
  </p>
    </div>
    <div className="image-content">
      
      {/* Profile picture */}
      <Image src="/pic.jpg" alt="Annusha Pervez" width={300} height={300} />
    </div>
  </div>
  </div>
  <div className="what-im-looking-for-content">
  <div className="typing-container2">
  <span id="header2" className="header2"></span>
  <span className="input-cursor2"></span>    
  </div>


  <p>
    I am actively seeking a software engineering position where I can apply my skills 
    in web development, distributed systems, and software engineering to contribute to 
    innovative projects. I’m excited to collaborate with a dynamic team and work in 
    an environment that fosters growth, creativity, and impactful problem-solving.
  </p>
  </div>

        </section>
        <section id="FeaturedProjects" className="section">
          <FeaturedProjects projects={projects} />

        </section>

        <section id="Resume" className="section3">
        <ContactMe contactMe={ContactMe} />

        </section>

        <Script
  src="/typing.js"
  strategy="afterInteractive" // Load script after the page is interactive
  onLoad={() => {
    if (typeof window !== 'undefined' && typeof window.typeAndDelete === 'function') {
      window.typeAndDelete();
      window.typeHeaders(); // Call the function only if it's defined

    }
  }}
/>
<Script
  src="/termynal.js"
  strategy="afterInteractive"
  data-termynal-container="#termynal"
  onLoad={() => console.log("Termynal loaded")}
/>      </main>
    </>
    </ChakraProvider>

  );

}

