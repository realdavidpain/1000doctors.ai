import React, { Component } from 'react'
import './BrainLab.css'

class BrainLab extends Component {

  state = {
  };

  inputHandler = () => {}


  render() {
    return (
      <div id='BrainLab'>
        <img src={require(`../../Assets/BrainLab.png`)} alt='BrainLab'/>
        <div id='footBar'>
          <textarea id='docTextarea' defaultValue='enter your comment here' onChange={this.inputHandler()}></textarea>
          <button id='docSubmit'>submit</button>
        </div>
      </div>
    );
  }
}

export default BrainLab;
