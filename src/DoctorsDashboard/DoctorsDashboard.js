import React, { Component } from 'react'
import BrainLab from './BrainLab/BrainLab'
import BloodTest from './BloodTest/BloodTest'
import './DoctorsDashboard.css';

class DoctorsDashboard extends Component {

  state = {
    brainLabMode: true
  };

  changebrainLabMode = (mode) => {
    this.setState({brainLabMode: mode})
  }

  render() {

    return (
      <div id='DoctorsDashboard'>
        <div id='headBar'>
          <img src={require(`../Assets/logo.png`)} alt='Logo'/>
  				<div id='tabs'>
            <button onClick={() => this.changebrainLabMode(true)}>BrainLab</button>
  					<button onClick={() => this.changebrainLabMode(false)}>Blood Test</button>
  				</div>
          <div id='reward'>
            <h2>reward 10'000$</h2>
          </div>
          <div id='skipButton'>
            <button>skip</button>
          </div>
        </div>
        {this.state.brainLabMode ? <BrainLab/> : <BloodTest/>}
      </div>
    );
  }
}

export default DoctorsDashboard;
