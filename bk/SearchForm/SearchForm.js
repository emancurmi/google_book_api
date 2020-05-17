import React, { Component } from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';

export default class SearchForm extends Component {

    render() {
        return (
            <div>
                <Search handelSearchUpdate={this.props.handelSearchUpdate} />
                <Filter handelFilter={this.props.handelFilter} handelPrintType={this.props.handelPrintType} />
            </div>
        )
    }
}