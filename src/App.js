import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class ContactList extends Component {
  render() { 
    console.log("props",this.props)
    return ( <h1>{this.props.data}</h1> );
  }
}




class App extends Component {
  render() { 
    return ( <ContactList data="React Blog" array={[1,2,3,4]}/> );
    
  }
}
 
export default App;



