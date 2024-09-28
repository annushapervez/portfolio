// Function to type out text
async function typeSentence(sentence, elementId, speed = 100) {
    const element = document.querySelector(elementId);
    element.innerHTML = ''; // Clear any existing text
    for (let i = 0; i < sentence.length; i++) {
      element.innerHTML += sentence.charAt(i);
      await new Promise(resolve => setTimeout(resolve, speed));
    }
  }
  
  // Function to delete text
  async function deleteSentence(elementId, speed = 50) {
    const element = document.querySelector(elementId);
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
  
  async function typeHeaders() {
    
        await typeSentence("About Me", "#header1");
        
        await typeSentence("What I'm Looking For", "#header2");
        // Pause before typing the next message
        await typeSentence("Projects", "#header3");
    }


  // Call the function when document is ready
  document.addEventListener("DOMContentLoaded", () => {
    typeAndDelete();
    typeHeaders();

  });
  
