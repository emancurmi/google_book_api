import React, { Component } from 'react';

export default class Book extends Component {
    render() {
        const book = this.props.books;

        const { data, isLoading } = this.state;

        const list = (isLoading)
            ? <p>Loading ...</p>
            : <Book books={data} />
       
        return (
            <ul>
                {book.map(book =>
                    <li key={book.id}>
                        <p>{book.volumeInfo.title}</p>
                        <a href={book.selfLink}>{book.selfLink}</a>
                    </li>
                )}
            </ul>
        )
    }
}