// Data Definition
// toc: true/false
// questions: If you have any questions, please addres ${name} at ${emailAddress}

// Takes object from inquirer and adds the automatically generated fields
function createGeneratedContent(prompts) {
    let markdownData = prompts;

    markdownData.toc = false;
    let optionalsUsed = 0;

    // Generate table of contents?
    if (markdownData.contributing) optionalsUsed++;
    if (markdownData.license != "No License") optionalsUsed++;
    if (markdownData.test) optionalsUsed++;
    if (optionalsUsed > 1) markdownData.toc = true;

    markdownData.questions = `If you have any questions, please address ${markdownData.name} at ${markdownData.email}`

    return markdownData;
}


function generateMarkdown(data) {
    return `# ${data.title}

# description
${data.description}

# Table Of Contents
${data.tableOfCont}

# Installation
${data.installation}

#Usage
${data.usage}

`}

module.exports = {createGeneratedContent, generateMarkdown};