# Culture Amp Front End Coding Test

## Coding Test Instructions

See `./Instructions.md` for instructions for this coding test.

## How to install

Clone this repository with the command `https://github.com/nicholasnbg/ca-front-test.git`

then enter the project directory with

`cd ca-front-test`

next, install all dependencies for the server with

`npm install`

and then, install all dependencies for the client with

`npm client-install`

## Running the Project

Once all dependencies have been installed, you can start the project using the command

`npm run dev`

This will run the express server on port 5000, and the react app on port 3000.

The app should automatically open up in your default web browser, if it doesn't, you can open it manually by going to http://localhost:3000 in your web browser.

## Thoughts and Comments

### React + Redux

I chose to create the interface for my submission using React, along with Redux for state management. Redux might seem a little overkill for this application, but implementing Redux creates a scalable foundation for an application, allowing for clear, concise, and maintainable code that promotes the programming principle of 'Single Responsibility' by abstracting out the logic for dealing with receiving data from an api, and dealing with application state into actions and reducers. It also avoids problems such as prop drilling.

### Styled Components

I chose to use Styled Components for the styling of my application as they are a concept I am very familiar with, and have found myself using more and more with React over other styling options/languages such as SASS. I feel that Styled Components align with the componentised nature of React, and make use of the reactive nature of props and state in react. You can see an example of this where the colour of the average rating text is set in the RatingQuestion component.

### React-collapsible and Chart.js

For the sake of completing my submission within the rough time constraints recommended, I used external libraries to implement the collapsible sections seen for each theme on the Survey page, as well as the circular gaugue used to display the response rate throughout the application.

### Testing

Testing is an area that was also negelected due to time constraints. I chose to focus on other areas of my application as in my experience so far, front end development is not as test driven as other areas of a code base such as business logic on the back end, and testing in the form of snapshot and unit tests using Jest and Enzyme is done after the initial creation of front end code.

### Responsiveness

I decided to build and style this application in a desktop first way, given the nature of the content, I made the assumption that data heavy survey results would most likely be being viewed on a moniter / big screen, as opposed to a phone. If I had more time I would create a better looking / more responsive mobile layout.
