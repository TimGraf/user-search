import React, { useContext, useEffect, useRef } from 'react';
import UsersSearch from './UsersSearch';
import UsersResults from './UsersResults';
import GitHubClient from '../client/gitHubClient';
import { SearchContext } from '../context/SearchContext';
import _ from 'lodash';

export default function UsersSearchContainer() {
    const [{setUsers, search, page, setPage, pageSize, setTotal}] = useContext(SearchContext);
    const previousSearch = useRef(search);

    useEffect(() => {
        const searchUsers = async (search, page, pageSize) => {
            const data = await GitHubClient.searchUsers(search, page, pageSize);
            setUsers(data.items);
            setTotal(data.total_count);
        };
        const searchFunction = _.debounce(() => {searchUsers(search, page, pageSize)}, 2000, {leading:true, trailing:false});

        if (search.length === 0) {
            setPage(0);
            setUsers([]);
        } else if (search.length > 2) {
            if (previousSearch.current !== search) { 
                previousSearch.current = search;
                setPage(0);
            }
            searchFunction();
        }
    }, [search, page, pageSize, setUsers, setPage, setTotal]);

    return (
        <div className="wrapper">
            <div className="search">
                <UsersSearch />
            </div>
            <div className="results" >
                <UsersResults />
            </div>
        </div>
    )
}
