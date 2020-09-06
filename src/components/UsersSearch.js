import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import _ from 'lodash';
import userActions from '../redux/actions';
import './UsersSearch.css';

export default function UsersSearch() {
    const dispatch = useDispatch();
    const pageSize = useSelector(state => state.pageSize);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const dispatchSearchAction = _.debounce(() => dispatch(userActions.searchUsers(search, 0, pageSize)), 2000, {leading:true, trailing:false});
        const dispatchResetAction = () => dispatch(userActions.reset());

        if (search.length === 0) {
            dispatchResetAction();
        } else if (search.length > 2) {
            dispatchSearchAction();
        }
    }, [search, pageSize, dispatch]);
    
    
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
