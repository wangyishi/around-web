import React, { Component } from 'react';
import { TopBar } from './TopBar';
import { Register} from "./Register"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <Register/>
      </div>
    );
  }
}

export default App;
