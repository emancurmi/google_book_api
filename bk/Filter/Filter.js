import React, { Component } from 'react';

export default class Filter extends Component {
    //&filter=free-ebooks
    //&printType=magazines
    //handelFilter={this.props.handelFilter} handelPrintType={this.props.handelPrintType}

    constructor(props) {
        super(props);

        this.state = {
            book_type: "",
            print_type:""
        };

    }

    handelFilterChange = (e) => {
        this.setState({
            book_type : e.target.value
        });
        console.log(this.state.book_type);
        //this.props.handelFilter(this.state.book_type);
    }

    handelPrintTypeChange = (e) => {
        this.setState({
            print_type : e.target.value
        });

        this.props.handelPrintType(this.state.print_type);
    }


    render() {

        return (

            <div>
                <label htmlFor="book_type">Book Type:</label>
                <select
                    id="book_type"
                    name="book_type"
                    onChange={this.handelFilterChange}>

                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="free-ebooks">Free E-Books</option>
                    <option value="paid-ebooks">Paid E-Books</option>
                    <option value="ebooks">E-Books</option>
                </select>

                <label htmlFor="print_type">Print Type:</label>
                <select
                    id="print_type"
                    name="print_type"
                    onChange={this.handelPrintTypeChange}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
            </div>
        )
    }
}

       