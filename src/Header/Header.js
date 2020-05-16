import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appname: this.props.AppName,
            selected: null
        };
    }

    render() {
        return (
            <h1 className="block">{this.state.appname}</h1>
        )
    }
}