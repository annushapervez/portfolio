// Function to type out text
async function typeSentence(sentence, elementId, speed = 100) {
  const element = document.querySelector(elementId);
  if (!element) {
    return; // Exit if the element does not exist
  }
  
  element.innerHTML = ''; // Clear any existing text
  for (let i = 0; i < sentence.length; i++) {
    element.innerHTML += sentence.charAts(i);
    await new Promise(resolve => setTimeout(resolve, speed));
  }
}

// Function to delete text
async function deleteSentence(elementId, speed = 50) {
  const element = document.querySelector(elementId);
  if (!element) {
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
    await typeSentence(currentMessage, "#sentence");
    await new Promise(resolve => setTimeout(resolve, 4000)); // Pause before deleting
    await deleteSentence("#sentence");
    await new Promise(resolve => setTimeout(resolve, 500)); // Pause before next typing

    // Move to the next message in the array
    index = (index + 1) % messages.length;
  }
}

// Expose the typeHeaders function to the window object
window.typeHeaders = async function() {
  const headers = ["About Me", "What I'm Looking For", "Projects", "Keep In Touch!"];
  for (let i = 0; i < headers.length; i++) {
    await typeSentence(headers[i], `#header${i + 1}`);
  }
};

// Call the function when document is ready
document.addEventListener("DOMContentLoaded", () => {
  // Only call typeAndDelete and typeHeaders if the elements exist
  if (document.querySelector("#sentence")) {
    typeAndDelete();
  } else {
    console.warn("Element with ID 'sentence' not found on this page. Skipping typeAndDelete.");
  }

  // Call typeHeaders only if the header elements exist
  const allHeadersExist = [1, 2, 3, 4].every(i => document.querySelector(`#header${i}`));
  if (allHeadersExist) {
    typeHeaders();
  } else {
    console.warn("One or more header elements not found. Skipping typeHeaders.");
  }
});
