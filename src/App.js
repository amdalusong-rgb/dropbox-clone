import React from "react";
import Lex from "./Components/Lex";

function App() {
  var myName = "Alexia";

  return (
    <div className="App">
      <h1>Hello, {myName}!</h1>
      <Lex />
    </div>
  );
}

export default App;
