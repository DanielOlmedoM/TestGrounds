// promptExample.js

// Importing the inquirer module using import
import inquirer from 'inquirer';

// Create a function to prompt the user
const promptUser = async () => {
  try {
    // Use inquirer to ask questions
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'list',
        name: 'programmingLanguage',
        message: 'Which programming language do you like the most?',
        choices: ['JavaScript', 'Python', 'Java', 'C#'],
      },
      {
        type: 'confirm',
        name: 'isStudent',
        message: 'Are you a student?',
      },
    ]);

    // Display the user's answers
    console.log('\nAnswers:');
    console.log('Name:', answers.name);
    console.log('Favorite Programming Language:', answers.programmingLanguage);
    console.log('Is a Student:', answers.isStudent);
  } catch (error) {
    // Handle errors during the prompt
    console.error('Error during prompt:', error);
  }
};

// Call the promptUser function
promptUser();

