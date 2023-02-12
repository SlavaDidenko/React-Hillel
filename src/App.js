import React from "react";
import './App.sass';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";

export class App extends React.Component {


  render() {
    return(
        <div className="base-wrap">
          <Header></Header>
          <main className="base-main">
              <div className="container ">
                  <div className="row">
                    <Aside></Aside>
                    <div className="main-content">
                        <p className="base-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
              </div>
          </main>
          <Footer></Footer>
        </div>
    )
  }
}

export default App
