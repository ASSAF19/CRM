import React from 'react';
import { Component } from 'react';
import Client from './Client';

class Clients extends Component {

  constructor() {
    super()
    this.state = {
      clients: [],
      text: "",
      clientEditID:null
    }
  }
  componentDidMount = () => {
    setTimeout(() => {
      let data = require('../data.json')
      this.setState({ clients: data })
    }, 100)
  }
  updateInputValue = (e) => {
    this.setState({
      text: e.value
    });
    
  }
  render() {
    return (
      <div>
          <input type="text" className="inputStyle" placeholder="text here.." value={this.state.text} onChange={this.updateInputValue}></input>
          <select className="options">
            <option value="name">Name</option>
            <option value="country">Country</option>
            <option value="type">emailType</option>
          </select>    

        <table id="myTable">
          <tr class="headder">
            <td>name</td>
            <td>email</td>
            <td>firstContact</td>
            <td>emailTyp--e</td>
            <td>sold</td>
            <td>owner</td>
            <td>country</td>

          </tr>
          {this.state.clients.map((client) =>
            <Client client={client}  />

          )}
        </table >
      </div>


    );
  }

}

export default Clients;