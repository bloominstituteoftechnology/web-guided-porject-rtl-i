import React from "react";
import { render, screen } from "@testing-library/react"; // to render component in a virtual DOM
import App from "./App"; // we need the component we are testing/rendering


//jest global functions to write our first tests
// - test() // used to run a test
// this test() function is global and created by create-react-app
//test function takes in two arguments, first is a title, second is a call back
//test('title', cbToRunTheTest)
//Jest is our 'test runner'

test('renders App component without errors', () => {
// render the App component
  render(<App />);

  //test will fail if an error is thrown from any function/component inside the test cb
  // === throw new Error('this test failed because we manually threw an error');

  // === breakTheTest(true); //true passes and false fails the test based on our function we created
});

//query the virtual dom for an element and make an assertion about that element
test('App renders the form header', () => {
  //Arrange section - if we need to arrange any kind of data we would put it here.

  //const oneProp = 'hi'
  //render(<App oneProp={oneProp}/>);

  // const container = render(<App />);
  // console.log(container);
  render(<App />);

  //Act section
  //this is where we will query for the header element
  //const header = screen.getByText(/add new animal/i) // the i stands for case insensitive and / is regex string


  //Assert section
  //then we will make an assertion (using Jest global function)
  //expect(header).toBeInTheDocument() //use .not in the middle to break code or when you expect element to not be in document
})












/*function breakTheTest(someValue/*how a typical function works*//*) {
  if (someValue === true) {
    //do nothing
  } else {
  throw new Error('this test will break the test from a function far away');
  }
}
*/