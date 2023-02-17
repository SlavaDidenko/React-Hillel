import React from "react";
import './App.sass';
import Todo from "./components/Todo/Todo";

export class App extends React.Component {


  render() {
    return(
        <>
          <main>
            <Todo></Todo>
          </main>
        </>
    )
  }
}

export default App