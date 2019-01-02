# Culture Amp Front End Coding Test

## Coding Test Instructions

See `./Instructions.md` for instructions for this coding test.

## How to install

Clone this repository with the command `git clone https://github.com/nicholasnbg/ca-front-test.git`

then enter the project directory with

`cd ca-front-test`

next, install all dependencies for the server with

`npm install`

and then, install all dependencies for the client with

`npm run client-install`

## Running the Project

Once all dependencies have been installed, you can start the project using the command

`npm run dev`

This will run the express server on port 5000, and the react app on port 3000.

The app should automatically open up in your default web browser, if it doesn't, you can open it manually by going to http://localhost:3000 in your web browser.

## Run Tests

You can run the test suites by running the command `npm run test` and pressing the a key to run all tests.

## Thoughts and Comments

### React + Redux

I chose to create the interface for my submission using React, along with Redux for state management. Redux might seem a little overkill for this application, but implementing Redux creates a scalable foundation for an application, allowing for clear, concise, and maintainable code that promotes separation of concerns by abstracting out the logic for dealing with receiving data from an api, and dealing with application state into actions and reducers. It also avoids problems such as prop drilling.

I would be interested to see how this application would look if Redux was replaced by the new React Context API and React Hooks, these are two things I am looking to explore further in the near future.

### Styled Components

I chose to use Styled Components for the styling of my application as they are a concept I am very familiar with, and have found myself using more and more with React over other styling options/languages such as SASS. I feel that Styled Components align with the 'componentised' nature of React, and make use of the reactive nature of props and state in react. You can see an example of this where the colour of the average rating text is set in the RatingQuestion component.

### React-collapsible and Chart.js

For the sake of completing my submission within the rough time constraints recommended, I used external libraries to implement the collapsible sections seen for each theme on the Survey page, as well as the circular gauge used to display the response rate throughout the application.

### Testing

I chose to create some basic testing for some of the dashboard components as well as the redux actions and reducer functions. I used the Jest and Enzyme libraries for these.

### Responsiveness

I decided to build and style this application in a desktop first way. Given the nature of the content, I made the assumption that data heavy survey results would most likely be being viewed on a monitor / big screen, as opposed to a phone. If I had more time I would create a better looking / more responsive mobile layout.
