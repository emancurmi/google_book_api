import React, { Component } from 'react';

export default class Filter extends Component {
    //props for component
    //print_options
    //book_options
    //

    changeSelection(option) {
    }

    
    render() {
       
        return(
            <div>
                <label htmlFor="print_type">Print Type:</label>
            <select
                id="print_type"
                name="print_type">
                
                </select>

                <label htmlFor="print_type">Print Type:</label>
                <select
                    id="print_type"
                    name="print_type">
                    //onChange={e => this.changeSelection(e.target.value)}>
                    <option value="none">No Filter</option>
                </select>
            </div>
        )
    }
}

       