## CosmoBots Challenge
This project is created for CosmoBots full stack challenge, it uses the GitHub API to search for users and display user information and repositories.

## Tech/framework used

<b>Built with</b>
- [React](https://reactjs.org)

## Features
User search
User details, like Name, email,bio,followers,following and avatar image
User repositories sorted by the highest number of stars

## Code Example
Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Installation
Clone the project

Travel to the project folder

run this commands:
 - npm install
 - npm start

## API Reference

This project uses the Github API, the documentation for it is found in:  https://developer.github.com/v3/

## Tests
Describe and show how to run the tests with code examples.

## How to use

### Search
You can search for the name or handle of the user and it will show 30 results max showing the handles, if the person your searching it's not there please refine your search.

### User Info
The user info that is shown is Name, picture, email, bio, number of followers and numbers of following

### Repositories
The repositories shown is sorted by the highest number of stars to the lowest and has the name of the repositories, how many stars, how many forks and the description.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
