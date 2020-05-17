import React, { Component } from 'react';
export default class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tbxSearch: ""
        };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input
                    placeholder="Search"
                    name="tbxSearch"
                    value={this.state.someState}
                    onChange={this.handleInputChange} />

               
                <button onClick={() => { this.props.handelSearchUpdate(this.state.tbxSearch) }}>Search</button>
            </div>
        )
    }
}