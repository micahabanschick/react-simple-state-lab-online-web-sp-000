import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props)
        this.state = {color: this.props.value}
    }

    grey = (event) => {
      event.preventDefault()
        this.setState({color: "#333"});
    }

    render() {
        return (
          <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.grey}></div>
        )
    }

}
