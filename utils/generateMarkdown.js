// TODO: Create a function to generate markdown for README

module.exports = 
function generateMarkdown(data) {
  return `# ${data.title}  
  ${data.description}  
  ${data.license}  
  

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
  ${data.installation}


  ---

  ## Usage
  ${data.usage}
  

  ---

  ## License
  ${data.license}


  ---

  ## Contributing:
  ${data.contributing}


  ---

  ## Tests:
  ${data.test}


  ---

  ## Contact Information:
  * GitHub Username: ${data.userName}
  * Email: ${data.userEmail}  
  `;
}

// module.exports = generateMarkdown();
// module.exports = licenseBadge();
