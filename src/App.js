import React, { Component } from 'react';
import './App.css';
import AddNumber from './components/AddNumber';
import DisplayNumber from './components/DisplayNumber';


class App extends Component{
  state = { number:0}
  render(){
    return(
      <div className="App">
        <h1>Root</h1>
        <AddNumber/>
        <DisplayNumber/>
      </div>
    );
  }  
}
export default App;