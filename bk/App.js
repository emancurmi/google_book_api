import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';

import SearchForm from './SearchForm/SearchForm';
import Book from './Book/Book';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            API: "https://www.googleapis.com/books/v1/volumes",
            API_KEY: "&key=AIzaSyAIgIAeT1XBu-KOC6zFMQy1rP574-LciL8",
            books: [],
            query: "",
            searchkey: "?q=",
            search: "armagedon",
            filterkey:"&filter=",
            filter: "",
            printtypekey:"&printType=",
            printtype:"",
            isLoading: false,
        };
    }

    componentDidMount() {

    }

    handelSearchUpdate = (search) => {
        this.setState({
            search: search
        });

        this.handelApiRequest();
    }

    handelFilter = (filter) => {
        this.setState({
            filter: filter
        });
    }

    handelPrintType = (printtype) => {
        this.setState({
            printtype: printtype
        });
    }

    querybuilder() {
        let q = "";
        if (this.state.search !== "") { q = this.state.searchkey + this.state.search; }
        if (this.state.filter !== "") { q += this.state.filterkey + this.state.filter; }
        if (this.state.printtype !== "") { q += this.state.printtypekey + this.state.printtype; }
        if (q !== "") { q = q  + this.state.API_KEY; }
        return q;
    }
    
    handelApiRequest = () => {

        this.setState({
            query: this.querybuilder()
        })

        if (this.state.query !== "") {
            fetch(this.state.API + this.state.query)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        books: data.items
                    });
                })
                .catch(error => {
                    console.log('Error fetching and parsing data', error);
                })

        }
    }
    
    render() {
        return (
            <div className="App">
                <Header AppName="Google Books Search" />
                <SearchForm handelSearchUpdate={this.handelSearchUpdate} handelFilter={this.props.handelFilter} handelPrintType={this.props.handelPrintType} />
                <Book books={this.state.books} />
            </div>
        );
    }
}

export default App;
