import React, { Component } from 'react'
import DoctorsDashboard from '../DoctorsDashboard/DoctorsDashboard'
import PatientsDashboard from '../PatientsDashboard/PatientsDashboard'
import './App.css';

class App extends Component {

  state = {
    dashboardMode: false
  };

  changeDashboardMode = (mode)=> {
    this.setState({dashboardMode: mode})
  }

  render() {

    return (
      <div id='App'>
        <section>
  				<div id='AppTabs'>
            <button onClick={() => this.changeDashboardMode(true)}><span>DoctorsDashboard</span></button>
						<button onClick={() => this.changeDashboardMode(false)}><span>PatientsDashboard</span></button>
  				</div>
  			</section>
        {this.state.dashboardMode ? <DoctorsDashboard/> : <PatientsDashboard/>}
      </div>
    );
  }
}

export default App;
