# Next To Go

## Description

This is a project that displays the latest 5 racing events.
The project used React and TypeScript.

## Process of thought

- Some constants to define variables like `api endpoint`, `category_id`
- Define types as I am using TypeScript for the code test.
- Need a function or custom hook to fetch the json data from the api endpoint. Note: I used in-component function first then abstracted as a custom hook,so the code is much cleaner.
- Need a sort function to sort the response by the `advertised_start` ascent. Note: found it is not necessary as the next-to-go-ids is in required order, the file should be removed, just leave it here so to prove if the response unordered how I would handle it.
- Need a component to render each race info, including `meating name`, `race number`, `advertised start`, named the component `Card` for this Test
- How to filter out the races that need to be rendered.
- Refetch the racing data intermittently (1min).

## Todo

Used `button` to toggle the race type, maybe `checkbox` is a better choice, so we can display more than one types

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

First time run after cloning, run `npm i` to install necessary dependencies.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
