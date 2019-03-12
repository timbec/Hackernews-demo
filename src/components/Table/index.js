import React, { Component } from 'react';
import Button from '../Button';

function isSearched(searchTerm) {
    console.log(searchTerm);
    return function (item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase())
    }
}

const Table = ({ list, onDismiss }) =>

    <section className="table">
        {list.map(item =>
            <div key={item.objectID}
                className="table-row">

                <h1 style={{ width: '40%' }}>{item.title}</h1>
                <h3 style={{ width: '30%' }}>{item.author}</h3>
                <span style={{ width: '10%' }}>
                    {item.points}
                </span>
                <span style={{ with: '10%' }}>
                    <Button onClick={() => onDismiss(item.objectID)}
                        className="button-inline">
                        Dismiss
                                </Button>
                </span>

            </div>
        )}
    </section>


export default Table; 