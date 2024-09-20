"use client"; // Add this at the top of your file

import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import SideNav from '../components/SideNav'; // Ensure the path is correct
import "../styles/nav.css"; // Ensure the path is correct
import "../styles/termynal.css"; // Ensure the path is correct
import animationData from '/Users/annu/portfolio/public/animation.json';


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

        <section id="section1" className="section">
          <h1>Section 1</h1>
          <p>Content for section 1...</p>
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
