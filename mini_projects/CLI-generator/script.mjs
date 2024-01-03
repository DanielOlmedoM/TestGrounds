/*## Instructions
* Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.
* An HTML document containing the information collected from the prompts should be constructed and written to the file system. Be sure to add some CSS styling to the document.
* You’ll need the following tools and technologies to accomplish this:
  * `fs` for writing to the file system
  * `inquirer` for collecting user input
  * String template literals for generating a string version of the HTML document before it is written to the file system
## 💡 Hints
It might be a good idea to start building out the HTML skeleton in a real HTML file. Once you're happy with the HTML file's appearance in the browser, you can copy and paste its contents into a string template literal. Then you can write a function to insert the user input into the appropriate places in the HTML string before writing it to the file system.*/

import fs from 'fs';
import inquirer from 'inquirer';

const promptUser = async () => {
    try {
        const answers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?',
                  },
                  {
                    type: 'input',
                    name: 'color',
                    message: 'Color',
                  },
        
        ])

        // Display the user's answers
    console.log('Name:', answers.name);
    var contentToWrite = `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <script src="script.js"></script>
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1 style="color: ${answers.color}">My name is ${answers.name}</h1>
        </header>
        
    </body>
    </html>`;
    

fs.writeFile('output.html', contentToWrite, 'utf8', (err) => {
    if(err) {
        console.error('Error writing file: ', err);
        return;
    }
    console.log('File created.')
})

    } catch (error) {
        console.error("Error during prompt: ", error);
    }
}; 

promptUser();

