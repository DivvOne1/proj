import React, { Component } from 'react';
import products from '../products.json';
class LocalFileRead extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div >
            <ul>
                {products.map((record, i) => <li key={i}>{record.id} - {record.title} {record.description}</li>)}
            </ul>
        </div>
        );
    }
}


export default LocalFileRead;