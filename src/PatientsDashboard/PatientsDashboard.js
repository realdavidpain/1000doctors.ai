import React, { Component } from 'react'
import './PatientsDashboard.css';

class PatientsDashboard extends Component {

  state = {
    mode: 'dropMode'
  };

  handleUpload = (ev) => {
    ev.preventDefault()
    this.setState({
      mode: 'enterBloodMode'
    })
  }

  dropMode = () => {
    return <div id='UploadForm'>
      <h2>upload your dcm file</h2>
      <div className='fileDrop'>
        <p>Drop your files here!</p>
      </div>
      <form id='uploadForm' onSubmit={this.handleUpload}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <button>Upload</button>
        </div>
      </form>
      <div id='Line'>
        <img src={require(`../Assets/line.png`)} alt='Line'/>
      </div>
    </div>
  }

  enterBloodMode = () => {
    return <div id='EnterBloodValues'>
      <h2>Enter your Blood Values</h2>
      <form className="enterBloodForm">
        <label htmlFor="field1">
          <span>Sodium (Na) in mmol/L</span><input type="text" name="field1"/>
        </label>
        <label htmlFor="field2">
          <span>Potassium (K) in mmol/L</span><input type="text" name="field2"/>
        </label>
        <label htmlFor="field3">
          <span>Urea in mmol/L</span><input type="text" name="field3"/>
        </label>
        <label htmlFor="field3">
          <span>Creatinine - male in mmol/L</span><input type="text" name="field3"/>
        </label>
        <label htmlFor="field3">
          <span>Creatinine - female in mmol/L</span><input type="text" name="field3"/>
        </label>
        <label htmlFor="field3">
          <span>Glucose (fasting) in mmol/L</span><input type="text" name="field3"/>
        </label>
      </form>
      <div id='Reward'>
        <p>Reward</p><textarea/>
      </div>
      <div id='enterBloodButton'>
        <button onClick={() => this.setState({mode: 'confirmationMode'})}>submit</button>
      </div>
    </div>
  }

  confirmationMode = () => {
    return <div id='Confirmation'><p>thank you, you will get an email if a doctor adds his opinion!</p></div>
  }

  getEditorContent = () => {
    if (this.state.mode === 'dropMode') {
      return this.dropMode()
    } else if (this.state.mode === 'enterBloodMode') {
      return this.enterBloodMode()
    } else {
      return this.confirmationMode()
    }
  }

  render() {
    return (
      <div id='PatientsDashboard'>
        <div id='Logo'>
          <img src={require(`../Assets/logo.png`)} alt='Logo'/>
        </div>
        {this.getEditorContent()}
      </div>
    );
  }
}

export default PatientsDashboard;
