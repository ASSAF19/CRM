import React from 'react';
import { Component } from 'react';
import Popup from "./Popup";

class Client extends Component {
    constructor() {
        super()
        this.state = { open: false }
    }

    CheckMail = () => {
        return (this.props.client.emailType !== null ? this.props.client.emailType : "-")
    }
    CheckSold = () => {
        return (this.props.client.sold === true ? <p> &#x2611;</p> : <p> &#9746;</p>)
    }
    openModal = () => {
        this.setState({ open: true })
    }

    closeModal = () => {
        this.setState({ open: false })
    }
    updateclient = (id,name,surname,country) =>{
        let newArr=[...this.props.clients];
    }


    render() {
        return (
            <tr onClick={this.openModal}>

                <td>{this.props.client.name}</td>
                <td>{this.props.client.email}</td>
                <td>{this.props.client.firstContact}</td>
                <td>{this.CheckMail()}</td>
                <td>{this.CheckSold()}</td>
                <td>{this.props.client.owner}</td>
                <td>{this.props.client.country}</td>
                <td>{this.props.client.id}</td>
                {this.state.open ?
                    <Popup openModal={this.openModal} closeModal={this.closeModal} name={this.props.client.name} country={this.props.client.country} />
                    : null}

            </tr>

        );
    }
}
export default Client;
