# Helpful Resources
* [Make a Readme](https://www.makeareadme.com/)
* [Choose a License](https://choosealicense.com)
* [Readme example](https://upenn.bootcampcontent.com/upenn-bootcamp/upenn-phi-fsf-ft-05-2020-u-c/blob/master/01-HTML-Git-CSS/04-Supplemental/Good-README-Guide/README.md)
* [shields](https://www.shields.io)
* https://developer.github.com/v3/users/#get-a-user

# Intro
**readme_generator** is a terminal application that asks the user questions about the project they've created and generates a well-documented, structured readme for their GitHub account. It will upload this readme.md to their githib repository for them.

# Goals (Features)
## Prompts:
* Title
* Description
* Table of Contents - **Optional**
* Installation
* Usage
* License - **Optional**
* Contributing - **Optional**
* Tests - **Optional**
* Questions - **Optional**k {
        type:"input",
        message:"What are the steps  required to  install your project?",
        name:"instillation"
    },
* Badges (Inserts at top of readme)

### Table of Contents
* Automatically generates based on number of included, optional sections

### Usage Prompt:
* Asks if usage is complicated
    * **Yes**: Open editor
    * **No**: Take input from single line
* Possibly automatically opens editor after x amount of chars typed

### License
* Automatically links to selected license type
* List format

### Tests
* Single line input



# Not Goals

# Behavior


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