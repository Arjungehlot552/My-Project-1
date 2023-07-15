
    // JavaScript:
    window.addEventListener('DOMContentLoaded', function () {
      var nameElement = document.getElementById('name2');
      var lines = [
        'I am Arjun Gehlot',
        'I am a web developer',
        'Thank you for visiting my website. Here, you will find a showcase of my projects, skills, and experiences',
        'Feel free to explore the various sections of my portfolio and learn more about me.'
      ]; // Add more lines as needed

      var currentLineIndex = 0;
      var currentLine = '';
      var currentLetterIndex = 0;

      function changeLine() {
        if (currentLetterIndex === lines[currentLineIndex].length) {
          currentLetterIndex = 0;
          currentLineIndex = (currentLineIndex + 1) % lines.length;
          currentLine = '';
          nameElement.textContent = '';
          setTimeout(changeLine, 1000); // Delay before starting the next line
        } else {
          currentLine += lines[currentLineIndex][currentLetterIndex];
          nameElement.textContent = currentLine;
          currentLetterIndex++;
          setTimeout(changeLine, 140); // Delay between each letter
        }
      }

      // Start the text animation
      changeLine();
    });

