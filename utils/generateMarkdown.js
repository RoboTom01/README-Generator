// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


function licenseBadge(value) {
  if (value === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (value === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (value === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (value === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (value === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else {
    return "";
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ${data.description}
    ${data.licenseBadge}
      
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

    ## License
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

module.exports = generateMarkdown;
