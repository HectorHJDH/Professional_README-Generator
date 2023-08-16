// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == '') {
    return '';
  } else if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
  } else if (license == 'Creative Commons') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
  } else if (license == 'BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
  } else if (license == 'Eclipse') {
    return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]';
  } else if (license == 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  } else if (license == 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]';
  } else if (license == 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
  } else if (license == 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]';
  } else if (license == 'Open Data Commons') {
    return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]';
  } else if (license == 'Perl') {
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]';
  } else if (license == 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
  } else if (license == 'WTFPL') {
    return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]';
  } else if (license == 'Zlib') {
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]';
  } else if (license == 'NO LICENSE') {
    return '';
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license link If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == '') {
    return '';
  } else if (license == 'MIT') {
    return '(https://opensource.org/license/mit/)';
  } else if (license == 'Apache') {
    return '(https://opensource.org/license/apache-2-0/)';
  } else if (license == 'Creative Commons') {
    return '(https://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (license == 'BSD') {
    return '(https://opensource.org/license/bsd-3-clause/)';
  } else if (license == 'Eclipse') {
    return '(https://opensource.org/license/epl-1-0/)';
  } else if (license == 'GNU') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license == 'IBM') {
    return '(https://opensource.org/licenses/IPL-1.0)';
  } else if (license == 'ISC') {
    return '(https://opensource.org/license/isc-license-txt/)';
  } else if (license == 'Mozilla') {
    return '(https://opensource.org/license/mpl-2-0/)';
  } else if (license == 'Open Data Commons') {
    return '(https://opensource.org/licenses/ODC-By-1.0)';
  } else if (license == 'Perl') {
    return '(https://opensource.org/license/artistic-2-0/)';
  } else if (license == 'Unlicense') {
    return '(https://unlicense.org/)';
  } else if (license == 'WTFPL') {
    return '(http://www.wtfpl.net/)';
  } else if (license == 'Zlib') {
    return '(https://opensource.org/license/zlib-license-php/)';
  } else if (license == 'NO LICENSE') {
    return '';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function noLicense(data, license) {
  console.log(data);
  if (license !== 'NO LICENSE') {
    return `## License \n${data.license} \n${renderLicenseBadge(data.license)} \n${renderLicenseSection(data.license)}`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}

  ## Description
  
  ${data.Description}
  
  ## Table of Contents
  
  ${data['Table of Contents']}
  
  ## Installation
  
  ${data.Installation}
  
  ## Usage
  
  ${data.Usage}
  
  ${noLicense(data, data.license)}

  ## Contributing
  
  ${data.Contributing}
  
  ## Tests
  
  ${data.Tests}
  
  ## Questions
  
  You can contact to ${`https://github.com/HectorHJDH for resolving: "` + data.Questions + `" or send a email to: hectorjosue78@gmail.com `} or other questions about the project.
`;
}

module.exports = generateMarkdown;
