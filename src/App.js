import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';

import SearchForm from './SearchForm/SearchForm';


const API = "https://www.googleapis.com/books/v1/volumes";
//const DEFAULT_QUERY = "q=flowers+inauthor:keyes";
const API_KEY = "AIzaSyAIgIAeT1XBu-KOC6zFMQy1rP574-LciL8";

class App extends Component {
    

    render() {        
        return (
            <div className="App">
                <Header AppName="Google Books Search" />
                <SearchForm API={API} API_KEY={API_KEY} />
            </div>
        );
    }
}

export default App;
