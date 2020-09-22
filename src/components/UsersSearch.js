import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { SearchContext } from '../context/SearchContext';
import './UsersSearch.css';

export default function UsersSearch() {
    const [{search, setSearch}] = useContext(SearchContext);

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
