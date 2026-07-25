import React from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.increaseCount = this.increaseCount.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleSyntheticClick = this.handleSyntheticClick.bind(this);
  }

  // Method 1 invoked by Increment button - increases the counter
  increaseCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  // Method 2 invoked by Increment button - says hello with a static message
  sayHello() {
    alert('Hello! Member1');
  }

  // Increment button invokes BOTH methods above
  handleIncrement() {
    this.increaseCount();
    this.sayHello();
  }

  // Decrement button - decreases the counter
  handleDecrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  // "Say welcome" button invokes this function, passing "welcome" as an argument
  sayWelcome(message) {
    alert(message);
  }

  // Handles a synthetic click event
  handleSyntheticClick(event) {
    // event here is React's SyntheticEvent, not the raw DOM event
    console.log('Synthetic event type:', event.type);
    alert('I was clicked');
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.count}</div>

        <div>
          <button onClick={this.handleIncrement}>Increment</button>
        </div>
        <div>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
        <div>
          <button onClick={() => this.sayWelcome('welcome')}>Say welcome</button>
        </div>
        <div>
          <button onClick={this.handleSyntheticClick}>Click on me</button>
        </div>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
