import React from "react";
import './App.sass';
import Contacts from "./components/Contacts/Contacts";

export class App extends React.Component {


  render() {
    return(
        <>
          <main>
            <Contacts></Contacts>
          </main>
        </>
    )
  }
}

export default App