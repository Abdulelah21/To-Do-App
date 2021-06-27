import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <header>
        <form id='to-do-form'>
        <input type='text' placeholder='Enter text'/>
        <button type='submit'>Add</button>
        </form>
      </header>
    );
  }
}

export default App;
