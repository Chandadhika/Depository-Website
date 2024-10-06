let lastSection = null;

function loadPage(page) {
  const mainContent = document.getElementById('main-content');
  
  if (mainContent) {
    // Add 'pages/' before the page to fetch files from the 'pages' folder: - fetch('pages/' + page + '.html')
    fetch(page + '.html')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Page not found');
        }
        return response.text();
      })
      .then((data) => {
        // Create a new section for the new content
        const newSection = document.createElement('section');
        newSection.classList.add('section');
        newSection.innerHTML = data;

        // If there is already a section, replace it
        if (lastSection) {
          lastSection.replaceWith(newSection);
        } else {
          // Prepend the new content if no previous section exists
          mainContent.prepend(newSection);
        }

        // Update the reference to the most recent section
        lastSection = newSection;
      })
      .catch((error) => {
        // Display an error message if the page is not found
        const errorSection = document.createElement('section');
        errorSection.classList.add('section');
        errorSection.innerHTML = `<p>Error: ${error.message}</p>`;

        // If there is already a section, replace it
        if (lastSection) {
          lastSection.replaceWith(errorSection);
        } else {
          mainContent.prepend(errorSection);
        }

        // Update the reference to the most recent section
        lastSection = errorSection;
      });
  }
}