import React from 'react';
import { Component } from 'react';

class Action extends Component {
  constructor() {
    super()
    this.state = {
      InputText: ""
    }
  }
  render() {
    return (
      <div>
        <h1> Update</h1>
        <p className="actionname">Client : < input type="text" /></p>
        <p className="actionname2">Transfer ownership to   < select>
          <option value="name">Owner</option>
          <option value="country">country</option>
        </select> /></p>

      </div>
    );
  }
}
export default Action;
