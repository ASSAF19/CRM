import React, { Component } from 'react';

class Popup extends Component{
constructor(props){
    super(props)
    this.state={
        name:props.name.split(" ")[0],
        surname:props.name.split(" ")[1],
        country:props.country
        
     }
}
render() {
    return(
        <div className="modal">
        <a className="close" onClick={this.props.closeModal}>
            &times;
        </a>
        <p className="name">  Name:  < input value={this.state.name} className="i1" type="text" />  </p>
        <p className="surname">  Surname: <input value={this.state.surname} className="i2" type="text" /> </p>
        <p className="country">  Country: <input value={this.state.country} className="i3" type="text" /> </p>

    </div>
    )

}
}

export default Popup;