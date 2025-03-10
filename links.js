// Function to generate links from JSON data
function generateLinks(data, containerId) {
  const container = document.getElementById(containerId);
  
  // Clear any existing content
  container.innerHTML = '';
  
  // Create links with commas between them
  data.forEach((link, index) => {
    // Create anchor element
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.className = 'link';
    anchor.target = '_blank';
    anchor.textContent = link.name;
    
    // Add to container
    container.appendChild(anchor);
    
    // Add comma and space after each link except the last one
    if (index < data.length - 1) {
      const comma = document.createTextNode(', ');
      container.appendChild(comma);
    }
  });
}

// Fetch links data from JSON file
async function fetchLinksData() {
  try {
    const response = await fetch('./links.json');
    if (!response.ok) {
      throw new Error('Failed to fetch links data');
    }
    
    const data = await response.json();
    
    // Generate links and configs sections
    generateLinks(data.links, 'links-container');
    generateLinks(data.configs, 'configs-container');
  } catch (error) {
    console.error('Error loading links:', error);
    
    // Fallback data in case the fetch fails
    const fallbackLinks = [
      { name: "github", url: "https://github.com/pravin-sivabalan" },
      { name: "linkedin", url: "https://www.linkedin.com/in/pravinsivabalan/" },
      { name: "goodreads", url: "https://www.goodreads.com/user/show/54049527-pravin-sivabalan" },
      { name: "spotify", url: "https://open.spotify.com/user/psivabalan" }
    ];
    
    const fallbackConfigs = [
      { name: "karabiner", url: "https://pravin-sivabalan.github.io/karabiner.json" }
    ];
    
    generateLinks(fallbackLinks, 'links-container');
    generateLinks(fallbackConfigs, 'configs-container');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', fetchLinksData); 