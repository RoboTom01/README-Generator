// Function to generate markdown for README

module.exports = 
function generateMarkdown(data) {
  return `# ${data.title}  
  ${data.description}<br /> 
  ${data.license}<br />
  

  ---
  ## Contents

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Contact](#contact)


  ---

  ## Installation:
  ${data.installation}<br />


  ---

  ## Usage
  ${data.usage}<br />
  

  ---

  ## License
  ${data.license}<br />


  ---

  ## Contributing:
  ${data.contributing}<br />


  ---

  ## Tests:
  ${data.test}<br />


  ---

  ## Contact Information:
  * GitHub Username: ${data.userName}
  * Email: ${data.userEmail}  
  `;
}

// module.exports = generateMarkdown();
// module.exports = licenseBadge();
