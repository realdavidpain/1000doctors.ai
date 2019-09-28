import React, { Component } from 'react'

import './BloodTest.css'

class BloodTest extends Component {

  state = {
  };

  render() {

    return (
      <div id='BloodTest'>
        <h3>BloodTest</h3>
        <table>
          <tbody>
            <tr>
              <th>Test</th>
              <th>Low</th>
              <th>High</th>
              <th>Unit</th>
              <th>Result</th>
            </tr>
            <tr>
              <td>Sodium (Na)</td>
              <td>134</td>
              <td>145</td>
              <td>mmol/L</td>
              <td>128</td>
            </tr>
            <tr>
              <td>Potassium (K)</td>
              <td>3.5</td>
              <td>5.0</td>
              <td>mmol/L</td>
              <td>4.8</td>
            </tr>
            <tr>
              <td>Urea</td>
              <td>15</td>
              <td>40</td>
              <td>mg/dL</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Creatinine - male</td>
              <td>62</td>
              <td>115</td>
              <td>μmol/L</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Creatinine - female</td>
              <td>53</td>
              <td>97</td>
              <td>μmol/L</td>
              <td>65</td>
            </tr>
            <tr>
              <td>Creatinine - male</td>
              <td>0.7</td>
              <td>1.3</td>
              <td>mg/dL</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Creatinine - female</td>
              <td>0.6</td>
              <td>1.2
              </td>
              <td>mg/dL</td>
              <td>1.0</td>
            </tr>
            <tr>
              <td>Glucose (fasting)</td>
              <td>3.9</td>
              <td>5.8</td>
              <td>mmol/L</td>
              <td>4.3</td>
            </tr>
            <tr>
              <td>Glucose (fasting)</td>
              <td>70</td>
              <td>120</td>
              <td>mg/dL</td>
              <td>112</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BloodTest;
