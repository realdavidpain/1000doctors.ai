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
              <th>Result</th>
            </tr>
            <tr>
              <td>Sodium (Na) in mmol/L</td>
              <td>134</td>
              <td>145</td>
              <td>128</td>
            </tr>
            <tr>
              <td>Potassium (K) in mmol/L</td>
              <td>3.5</td>
              <td>5.0</td>
              <td>4.8</td>
            </tr>
            <tr>
              <td>Urea in mmol/L</td>
              <td>2.5</td>
              <td>6.4</td>
              <td>3.1</td>
            </tr>
            <tr>
              <td>Creatinine - male in mmol/L</td>
              <td>62</td>
              <td>115</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Creatinine - female in mmol/L</td>
              <td>53</td>
              <td>97</td>
              <td>65</td>
            </tr>
            <tr>
              <td>Glucose (fasting) in mmol/L</td>
              <td>3.9</td>
              <td>5.8</td>
              <td>4.3</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BloodTest;
