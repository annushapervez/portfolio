// Function to type out text
async function typeSentence(sentence, elementId, speed = 100) {
  const element = document.querySelector(elementId);
  if (!element) {
    return; // Exit if the element does not exist
  }
  
  element.innerHTML = ''; // Clear any existing text
  for (let i = 0; i < sentence.length; i++) {
    element.innerHTML += sentence.charAt(i);
    await new Promise(resolve => setTimeout(resolve, speed));
  }
}

// Function to delete text
async function deleteSentence(elementId, speed = 50) {
  const element = document.querySelector(elementId);
  if (!element) {
    console.warn(`Element with ID '${elementId}' not found.`);
    return; // Exit if the element does not exist
  }

  const text = element.innerHTML;
  for (let i = text.length; i >= 0; i--) {
    element.innerHTML = text.substring(0, i);
    await new Promise(resolve => setTimeout(resolve, speed));
  }
}

// Function to handle the complete typing-deleting cycle
async function typeAndDelete() {
  const messages = ["Hi There!", "Let's Connect!"];
  let index = 0;

  while (true) {
    const currentMessage = messages[index];
    
    // Clear text before typing to prevent jumps
    const sentenceElement = document.querySelector("#sentence");
    if (sentenceElement) {
      sentenceElement.innerHTML = ''; // Clear text here
    }

    await typeSentence(currentMessage, "#sentence");
    await new Promise(resolve => setTimeout(resolve, 4000)); // Pause before deleting
    await deleteSentence("#sentence");
    await new Promise(resolve => setTimeout(resolve, 500)); // Pause before next typing

    // Move to the next message in the array
    index = (index + 1) % messages.length;
  }
}


// Expose the typeHeaders f unction to the window object
async function typeHeaders() {
  const headers = [
    { id: "#header1", text: "About Me" },
    { id: "#header2", text: "What I'm Looking For" },
    { id: "#header3", text: "Projects" },
    { id: "#header4", text: "Keep In Touch!" }


  ];

  for (const header of headers) {
    const headerElement = document.querySelector(header.id);
    if (headerElement) {
      headerElement.innerHTML = ''; // Clear previous text
    }
    await typeSentence(header.text, header.id);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Pause between headers
  }
}
