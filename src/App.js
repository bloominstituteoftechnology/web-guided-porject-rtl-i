import React from "react";
import AnimalForm from "./components/AnimalForm";

import "./App.css";

function App() {
  //console.log(something that does not exist) // this would break our test
  return (
    <div className="App">
      <h1>Add New Animal</h1>
      <h1 data-testid='something'>Add New Animal</h1> {/*here we use data-testid='something' as a fail safe for*/} 
      <AnimalForm />
    </div>
  );
}

export default App;
