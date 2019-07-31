import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const MODES = [
  {
    name: "Mode 1", 
  }, 
  {
    name: "Mode 2",
  },
]

class Sidebar extends Component  {

  createModesMarkup() {
    return MODES.map((mode) => {
      return <button className="mode-selector">
        {mode.name}
      </button>
    })
  }

  render() {
    return (
      <div className="sidebar">
        {this.createModesMarkup()}
      </div>
    );
  }
}

export default Sidebar;
