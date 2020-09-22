import React from 'react';
import { TextField } from '@material-ui/core';
import './UsersSearch.css';

export default function UsersSearch({search, setSearch}) {
    const onChange = event => {
        const searchString = event.target.value;
        setSearch(searchString);
    };

    return (
        <div className="user-search">
            <TextField 
                className="search" 
                type="text" 
                name="search" 
                placeholder="Search"
                value={search || ''}
                onChange={onChange}
                variant="outlined"
            />
        </div>
    )
}
