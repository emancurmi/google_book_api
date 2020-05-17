import React, { Component } from 'react';

export default class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            isLoading: false,
        };

        console.log("hello from books");
        console.log(this.state.books.length);
    }

    componentDidMount() {

        this.setState({ books: this.props.books });
    }

    createbooks() {
        console.log("create book")

            for (let i = 0; i < this.state.books.length; i++) {
                return (
                    <li>{this.state.books[i].volumeInfo.title}</li>
                )
            }
    }


    render() {
       

        return (
            <div>
                <ul>
                    {this.createbooks}
                </ul>
            </div>
        );
    }
}