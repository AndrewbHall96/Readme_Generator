# Helpful Resources
* [Make a Readme](https://www.makeareadme.com/)
* [Choose a License](https://choosealicense.com)
* [Readme example](https://upenn.bootcampcontent.com/upenn-bootcamp/upenn-phi-fsf-ft-05-2020-u-c/blob/master/01-HTML-Git-CSS/04-Supplemental/Good-README-Guide/README.md)
* [shields](https://shields.io)
* [GitHub User API](https://developer.github.com/v3/users/#get-a-user)

# Intro
**readme_generator** is a terminal application that asks the user questions about the project they've created and generates a well-documented, structured readme for their GitHub account.

# Goals
* Demonstrate the ability to take user input
* Demonstrate basic knowledge of Node.js
* We can make design decisions about our software

# Not Goals
* super feature-rich, comprehensive readme generator

# Features
## Prompts:
* Title
* Description
* Table of Contents - **Generated Automatically**
* Installation
* Usage
* License - **Optional**
* Contributing - **Optional**
* Tests - **Optional**
* Questions - **Generated Automatically**
* Badges (Inserts at top of readme)

### Table of Contents
* Automatically generates if two or more optional sections are used

### Usage Prompt:
* Asks if usage is complicated
    * **Yes**: Open editor
    * **No**: Take input from single line
* Possibly automatically opens editor after x amount of chars typed

### License
* Automatically links to selected license type
* List format

### Badges
* License is created from license field
* Ask if user wants GitHub Follower badge

### Tests
* Single line input

<!-- // 1) Define Behavior
//    - What happens when a user does this
//    - How about that?
//    - Goals
//    - Not goals
//    - User Stories
//    - Essentially: "What does finished look like?"

// 2) Constants
//    - What will never change during runtime?

// 3) Data Definitions
//    - How do we represent our goals as data?
//    - Ex: player = health: int, name: string, x: int, y: int

// 4) Create functions
//    - Define inputs and outputs
//    - Briefly state the goal of functions
//    - Write stub
//    - Write tests // Note: public facing functions (TDD: https://www.youtube.com/watch?v=EZ05e7EMOLM)
//    - Implement the function -->