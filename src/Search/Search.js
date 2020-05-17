import React, { Component } from 'react';

export default class Search extends Component {

    state = {
        inputValue: ''
    }


    updateInputValue = (evt) => {
        this.setState({
            inputValue: evt.target.value
        });
        console.log(this.state.inputValue);
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.inputValue}
                    onChange={this.updateInputValue}
                    placeholder="Search"
                />
                <button onClick={() => { this.props.handelquery(this.state.inputValue) }}>Search</button>
            </div>
        )
    }
}