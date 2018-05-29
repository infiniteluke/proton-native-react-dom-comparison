import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    things: []
  }
  add = (thing) => {
    this.setState({ things: [
      ...this.state.things,
      { id: `thing${this.state.things.length + 1}`, name: `Thing ${this.state.things.length + 1}` },
    ]})
  }
  remove = () => {  
    this.setState({ things: [] });
  }
  render() { // all Components must have a render method
    return (
      <div>
        <h1>{`${this.state.things.length} things added`}</h1>
        <h2>This works fine:</h2>
        <select>
          {this.state.things.map(thing => (
            <option key={thing.id}>{thing.name}</option>
          ))}
        </select>
        <form>
          {this.state.things.map(thing => (
            <div key={thing.id}>
              <input type="radio" id={thing.id} value={thing.name} />
              <label htmlFor={thing.id}>{thing.name}</label>
            </div>
          ))}
        </form>
        <button onClick={this.add}>Add</button>
        <button onClick={this.remove}>Remove</button>
      </div>
    );
  }
}

export default App;
