import React, { Component } from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';

export default class SearchForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            query: "",
            isLoading: false,
        };
    }

    componentDidMount() {
        if (this.state.query != "") {
            this.setState({ isLoading: true });
            console.log(API + '?' + this.state.query + '&key=' + API_KEY);
            fetch(API + '?' + this.state.query + '&key=' + API_KEY)
                .then(response => response.json())
                .then(data => this.setState({ data: data.items, isLoading: false }));
        }
    }


    render() {
        return (
            <div>
                <Search />
                <Filter />
            </div>
        )
    }
}