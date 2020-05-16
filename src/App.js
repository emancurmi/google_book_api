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
            data: [],
            query: "",
            searchkey: "q=",
            search: "flowers+inauthor:keyes",
            filterkey:"&filter=",
            filter: "",
            printtypekey:"&printType=",
            printtype:"",
            isLoading: false,
        };
    }

    componentDidMount() {
        this.handelApiRequest();
    }

    handelSearchUpdate = (search) => {
        this.setState({
            search: search
        });

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
        let q = ""
        if (this.state.search !== "") { q = this.state.searchkey + this.state.search }
        if(this.state.filter !== "") { q += this.state.filterkey + this.state.filter }
        if (this.state.printtype !== "") { q += this.state.printtypekey + this.state.printtype }
        return q
    }
    
    handelApiRequest = () => {


        this.setState({
            query: this.querybuilder
        })
        if (this.state.query !== "") {
            fetch(this.state.API + this.state.query + this.state.API_KEY)
                .then(response => response.json())
                .then(data => this.setState({ data: data }));
        }
    }

    render() {
        return (
            <div className="App">
                <Header AppName="Google Books Search" />
                <SearchForm handelSearchUpdate={this.handelSearchUpdate} handelFilter={this.props.handelFilter} handelPrintType={this.props.handelPrintType} />
                <Book book={this.handelApiRequest}/>
            </div>
        );
    }
}

export default App;
