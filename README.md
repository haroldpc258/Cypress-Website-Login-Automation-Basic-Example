# **Cypress-Website-Login-Automation-Fixtures-Basic-Example**

This repository contains the development of a Cypress project for automating the process of testing a login form on a website. The application interacts with the "username" and "password" input fields, as well as the "Login" button, to validate the login functionality using different sets of credentials stored in a fixture file.

## Features

The application has the following features:

- Interaction with the "username" and "password" input fields.
- Interaction with the "Login" button.
- Automation of the login process.
- Testing the login functionality with valid and invalid credentials.
- Verification of the expected behavior after attempting to log in.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need:

- Node.js and npm
- Cypress
  
### Running the Tests

To run the tests, firstable you need to navigate to the project root and execute the next command in the terminal in order to install all the necessary dependencies:

    npm install
Then you can execute the following command to execute the tests cases:

    npx cypress run
Or execute the next command in order to open de cypress GUI:
        
    npx cypress open

