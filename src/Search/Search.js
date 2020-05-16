import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: "",
        };
    }

    render() {
        return (
            <div>
                <input
                    placeholder="Search"
                />
                <button onClick={this.props.setQuery(this.state.query)}>Search</button>
            </div>
        )
    }
}