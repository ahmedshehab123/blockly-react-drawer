import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Blockly, BlocklyHomeComponent} from "./main/blockly/blockly-component";

class App extends Component {
  render() {
    return (
     <BlocklyHomeComponent/>
    );
  }
}

export default App;
