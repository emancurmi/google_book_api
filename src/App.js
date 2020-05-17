import React, { Component } from 'react';
import Book from './Book/Book';
import Search from './Search/Search';
//https://www.googleapis.com/books/v1/volumes?q=armagedon&key=AIzaSyAIgIAeT1XBu-KOC6zFMQy1rP574-LciL8
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
            api: "https://www.googleapis.com/books/v1/volumes",
            query: "",
            filter: "",
            printtype: "",
            key: "&key=AIzaSyAIgIAeT1XBu-KOC6zFMQy1rP574-LciL8",
            books: [],
        };
    }

    fetchUsers() {
        if (this.state.query !== "") {
            console.log("fetching");
            fetch(this.state.api + this.state.query + this.state.filter + this.state.printtype + this.state.key)
                //fetch("https://www.googleapis.com/books/v1/volumes?q=armagedon&key=AIzaSyAIgIAeT1XBu-KOC6zFMQy1rP574-LciL8")    
                .then(response => response.json())
                .then(data =>
                    this.setState({
                        books: data.items,
                        isLoading: false,
                    }),
                    console.log("finished fetching")
                )
                .catch(error => this.setState({ error, isLoading: false }));
        }
        
    }

    componentDidMount() {
        this.fetchUsers();
    }

    handelquery = (newquery) => {
        this.setState({
            query: '?q='+ newquery
        })
        this.fetchUsers();
        console.log(newquery);
        console.log(this.state.query);
    }

    handelfilter = (newfilter) => {
        this.setState({
            filter: newfilter
        })
    }

    handelprinttype = (newprintype) => {
        this.setState({
            printtype: newprintype
        })
    }   
    
    render() {
        const book = this.state.books
            ? <Book books={this.state.books} />
            : <div className="demonym_app__placeholder">No Books Found</div>;

        return (
            <div className="App">
                <h1>Google Book Search</h1>
                <Search handelquery={this.handelquery}/>
                {book}
            </div>
        );
    }
}

export default App;
