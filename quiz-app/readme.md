# Code Quest - JavaScript Fundamentals Quiz

Code Quest is an interactive JavaScript quiz application built using HTML, CSS, and JavaScript. The quiz tests basic JavaScript knowledge while demonstrating DOM manipulation, event handling, functions, arrays, objects, and conditional logic.

## Features

- Five JavaScript fundamentals questions
- Multiple-choice answers
- Immediate feedback for correct and incorrect answers
- Correct answers highlighted in green
- Incorrect answers highlighted in red
- Automatic score tracking
- Answer buttons disabled after a selection
- Next button navigation
- Final score display
- Play Again option to restart the quiz without refreshing the page

## Technologies Used

- HTML
- CSS
- JavaScript

## How It Works

The quiz questions are stored in a JavaScript array of objects. Each question contains the question text and a collection of possible answers.

Each answer includes a Boolean value that identifies whether the answer is correct.

The application uses JavaScript functions to:

- Display each question and its answers
- Create answer buttons dynamically
- Detect when an answer is selected
- Check whether the selected answer is correct
- Update the user's score
- Display correct and incorrect answer feedback
- Move to the next question
- Display the final score
- Restart the quiz

Event listeners are used to respond to user interactions and update the page through DOM manipulation.

## Project Structure

```text
DOMination/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Running the Project

1. Clone or download the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Select an answer for each question.
5. Click **Next** to continue through the quiz.
6. View your score after completing all five questions.
7. Click **Play Again** to restart the quiz.

## What I Learned

This project helped me practice JavaScript fundamentals including:

- Arrays
- Objects
- Functions
- Loops
- Conditional logic
- DOM manipulation
- Event listeners

It also helped me understand how JavaScript can be used with HTML and CSS to turn a basic webpage into an interactive application.

## Author

Matthew Shin
