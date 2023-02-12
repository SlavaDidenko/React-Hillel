import React from "react";
import './App.sass';

export class App extends React.Component {
  constructor() {
    super();
  }
  state = {
    counter : 0,
    surname: '',
  };

   increment = () => {
    this.setState({counter: this.state.counter +1})
  }

  decrement = () => {
    this.setState({counter: this.state.counter - 1})
  }

  null = () => {
    this.setState({counter: 0})
  }

  render() {
    return(
      <div>
          <label>
              <div>Surname</div>
            <input value={this.state.surname}
                   onChange={e => this.setState({surname: e.target.value})}/>
          </label>
          <div>{this.state.surname}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.null}>0</button>
        <div>Counter: {this.state.counter}</div>
      </div>
    )
  }
}

export default App