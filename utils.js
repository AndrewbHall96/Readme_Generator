// Data Definition
// toc: true/false
// questions: If you have any questions, please addres ${name} at ${emailAddress}

// 1) What is the behavior of the program (What am I trying to do here)
// 2) What's constant?
// 3) What data am I working with, and how do I represent it?
// 4) Write a function that works with this data

// Takes object from inquirer and adds the automatically generated fields
function createGeneratedContent(prompts) {
    // ![some kind of alt text](https://link.to/img) - Link template
    const shieldLicense = prompts.license.replace(/ /g, "_"); // regex
    const badgeFollowers = `https://img.shields.io/github/followers/${prompts.username}?label=Follow`;
    const badgeLicense = `https://img.shields.io/badge/license-${shieldLicense}-blue`;

    let markdownData = prompts;

    markdownData.toc = `* [Installation](#Installation)\n * [Usage](#Usage)\n`;

    // Badges
    if (markdownData.followers) {
        markdownData.followersBadge = badgeFollowers
    }

    // Generate table of contents?
    if (markdownData.contributing) markdownData.toc += `* [Contributors](#Contributing)\n`;
    if (markdownData.license != "No License") {
        markdownData.licenseBadge = badgeLicense;
    }
    if (markdownData.test) markdownData.toc += `* [Test](#Test)\n`;

    markdownData.questions = `If you have any questions, please address @${markdownData.username} at ${markdownData.email}`

    return markdownData;
}


function generateMarkdown(data) {
    let followersBadgeMarkdown = "", licenseBadgeMarkdown = "",
        contributionMarkdown = "";
        testMarkdown = "";

    if (data.followersBadge) followersBadgeMarkdown = `![followers](${data.followersBadge})\n`;
    if (data.licenseBadge) licenseBadgeMarkdown = `![license](${data.licenseBadge})\n`;
    if (data.contributing) contributionMarkdown = `# Contributing\n${data.contributing}\n`;
    if(data.test) testMarkdown = `# test\n${data.test}\n`;

    let titleDescriptionMarkdown = `# ${data.title}\n`
titleDescriptionMarkdown += `# Description\n ${data.description}\n`

titleDescriptionMarkdown += `# Table Of Contents\n ${data.toc}\n`

titleDescriptionMarkdown += `# Installation\n ${data.installation}\n`

titleDescriptionMarkdown += `# Usage\n ${data.usage}\n`

return followersBadgeMarkdown + licenseBadgeMarkdown 
    + titleDescriptionMarkdown + contributionMarkdown + testMarkdown;
}


module.exports = { createGeneratedContent, generateMarkdown };