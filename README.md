## Standard Frontend Developer Questions

### Question #1 - Warm up & Question #2 - TODO app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Question #3 - Junior Level

function findUniq(arr) {

  let sortArr = arr.sort();
  let num1 = sortArr[0];
  let num2 = sortArr[sortArr.length-1];
  
  if (sortArr[1] === num1) {
    return num2;
  } else {
    return num1;
  }
  
}

console.log(findUniq([ 0, 0, 0.55, 0, 0 ])); // === 0.55

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // === 2

## Question #4 - Junior Level
What are the benefits of using spread syntax and how is it different from rest
syntax?

Ans. The difference between the rest and spread syntax is that while spread copies everything, rest is used when we want to retrieve all remaining elements (or all existing elements) after a destructuring operation.

## Question #5 - Junior Level
1. What is semantic HTML?
Ans. Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a <p> tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are and browsers know how to display them.

2. Why you would like to use semantic tag?
Ans. 1.Clearer code and easier to maintain 2. Help your site be accessible 3. Improve your SEO positioning

## FrontendReactJS Questions
### Question #1 - Junior Level
1. How to apply validation on props in React?

Ans. 
Props are a very important mechanism for passing read-only attributes to React components. These attributes are usually required to be of certain types or forms for them to be used properly in the component.

If a prop is passed to a component in a type or form other than is required, the component may not behave as expected. Hence, a great way of improving React components is props validation.

2. What are Higher-Order Components?
Ans. A higher-order component (HOC) is an advanced technique in React for reusing component logic. ... They are a pattern that emerges from React's compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component.
