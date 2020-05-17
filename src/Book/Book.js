import React from 'react';

export default function Books(props) {

    const books = props.books;
    const listBooks = books.map((book) =>
        <div key={book.etag}>
            <h2>{book.volumeInfo.title}</h2>
            <p>Author: {book.volumeInfo.authors}</p>
            <br />
            <p>{book.volumeInfo.description}</p>
        </div>
    );

    return (
        <div>
            {listBooks}
        </div >
    );

}