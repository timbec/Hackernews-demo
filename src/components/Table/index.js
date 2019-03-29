import React, { Component } from 'react';
import { sortBy } from 'lodash';
import PropTypes from 'prop-types';
import Button from '../Button';
import Sort from '../Sort';

function isSearched(searchTerm) {
    console.log(searchTerm);
    return function (item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase())
    }
}

const Table = ({
    list,
    sortKey,
    onDismiss
}) =>

    <section className="table">
        <div className="table-header">
            <span style={{ width: '40%' }}>
                <Sort
                    sortKey={'TITLE'}
                    onSort={onSort}
                >
                    Title
        </Sort>
            </span>
            <span style={{ width: '30%' }}>
                <Sort
                    sortKey={'AUTHOR'}
                    onSort={onSort}
                >
                    Author
        </Sort>
            </span>
            <span style={{ width: '10%' }}>
                <Sort
                    sortKey={'COMMENTS'}
                    onSort={onSort}
                >
                    Comments
        </Sort>
            </span>
            <span style={{ width: '10%' }}>
                <Sort
                    sortKey={'POINTS'}
                    onSort={onSort}
                >
                    Points
        </Sort>
            </span>
            <span style={{ width: '10%' }}>
                Archive
      </span>
        </div>

        {Sort[sortKey](list).map(item =>
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

Table.propTypes = {
    list: PropTypes.array.isRequired,
    onDismiss: PropTypes.func.isRequired,
}


export default Table; 