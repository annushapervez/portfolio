"use client"; // Add this at the top of your file

import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import SideNav from '../components/SideNav'; // Ensure the path is correct
import "../styles/nav.css"; // Ensure the path is correct
import "../styles/termynal.css"; // Ensure the path is correct
import animationData from '../public/animation.json';
import animationData1 from '../public/animation2.json';



import Lottie from 'lottie-react'; // Correct import

export default function Home() {

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNav />

      <main className="main-content">
        <section id="section0" className="section">
    
          <div className="image-and-text">
            <div className="image-container">
              <Image
                src="/iphone2.png" // Ensure this path is correct
                alt="iPhone"
                width={350} // Match the width of the image
                height={300} // Match the height of the image
                priority
              />

              <div className="bubbles">
                <a href="https://www.linkedin.com/in/annusha-pervez/" target="_blank" rel="noopener noreferrer" className="bubble bubble1">
                  <Image
                    src="/linkedin2.png" // Ensure this path is correct
                    alt="LinkedIn Bubble"
                    width={261}
                    height={26}
                    className="bubble-image"
                  />
                </a>

                <a href="https://github.com/annushapervez" target="_blank" rel="noopener noreferrer" className="bubble bubble2">
                  <Image
                    src="/github2.png" // Ensure this path is correct
                    alt="GitHub Bubble"
                    width={261}
                    height={26}
                    className="bubble-image"
                  />
                </a>

                <a href="mailto:annushapervez7@gmail.com" className="bubble bubble3">
                  <Image
                    src="/email2.png" // Ensure this path is correct
                    alt="Email Bubble"
                    width={261}
                    height={26}
                    className="bubble-image"
                  />
                </a>
              </div>
            </div>
            
            <div className="typing-container">
              <span id="sentence" className="sentence"></span>
              <span className="input-cursor"></span>    
            </div>
            {/* Recruitment status and blinking light */}
            <div className="recruitment-container">
              {/* JSON animation */}
              <div className="json-animation">
              <Lottie
  animationData={animationData} // Use the imported variable here
  loop
  autoplay
  style={{ width: '30px', height: '30px'}} // Adjust size as needed
/>
              </div>

              {/* Recruitment Status Text */}
              <div className="recruitment-status">
                <h2>Recruitment Status</h2>
                <p>Currently open to new opportunities.</p>
              </div>
            </div>
             {/* Terminal block goes here */}
             <div id="termynal" data-termynal data-ty-typedelay="40" data-ty-linedelay="700">
              {/* Computer Languages */}
              <span data-ty="input">ls Languages</span>
              <span data-ty>Python, C, Scala, PHP, Go, JavaScript, TypeScript, CSS, HTML, OCaml, Mips Assembly</span>
              <span data-ty></span>

              {/* Frameworks */}
              <span data-ty="input">ls Frameworks</span>
              <span data-ty>Flask, TensorFlow, React, Next.js, Unreal Engine 5</span>
              <span data-ty></span>

              {/* Databases */}
              <span data-ty="input">ls Databases</span>
              <span data-ty>MongoDB, SQL</span>
              <span data-ty></span>

              {/* Tools */}
              <span data-ty="input">ls Tools</span>
              <span data-ty>Docker, GitHub, Git</span>
              <span data-ty></span>
        </div>
          </div>
        </section>

        <section id="section1" className="section">  <div className="about-me-content">
    <div className="text-content">
    <h2>About Me</h2>
  <p>
    I'm a passionate software engineer based in New York City with a unique blend
    of expertise in computer science and psychology. I graduated from the University 
    at Buffalo with a Bachelor of Science in Computer Science and a Bachelor of Arts 
    in Psychology in May 2024. My academic journey has equipped me with a solid 
    foundation in data structures, algorithms, web development, machine learning, and 
    software quality practices.
  </p>
  <p>
    I thrive on tackling complex problems and developing innovative solutions. I enjoy 
    finding creative approaches to challenges, whether it's optimizing algorithms, 
    designing intuitive user experiences, or implementing efficient systems. Every 
    problem presents a new puzzle, and I am always eager to explore unconventional 
    solutions that push boundaries and deliver meaningful results.
  </p>
    </div>
    <div className="image-content">
      {/* Lottie animation behind the image */}
      <div className="animation-background">
      <Lottie 
      animationData={animationData1} 
      loop={true} 
      autoplay={true} 
      height={300} 
      width={300} 
      rendererSettings={{
        preserveAspectRatio: 'xMidYMid slice',
      }}
    />
      </div>
      
      {/* Profile picture */}
      <img src="/pic.jpg" alt="Your Name" />
    </div>
  </div>
  <div className="what-im-looking-for-content">
  <h3>What I’m Looking For</h3>
  <p>
    I am actively seeking a software engineering position where I can apply my skills 
    in web development, distributed systems, and software engineering to contribute to 
    innovative projects. I’m excited to collaborate with a dynamic team and work in 
    an environment that fosters growth, creativity, and impactful problem-solving.
  </p>
  </div>
        </section>




        <section id="section2" className="section">
          <h1>Section 2</h1>
          <p>Content for section 2...</p>
        </section>

        <section id="section3" className="section">
          <h1>Section 3</h1>
          <p>Content for section 3...</p>
        </section>

        <Script
  src="/typing.js"
  strategy="afterInteractive" // Load script after the page is interactive
  onLoad={() => {
    if (typeof window !== 'undefined' && typeof window.typeAndDelete === 'function') {
      window.typeAndDelete(); // Call the function only if it's defined
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
  );
}
