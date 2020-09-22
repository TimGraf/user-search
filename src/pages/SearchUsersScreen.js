import React, { useState, useEffect, useRef } from 'react';
import UsersSearch from '../components/UsersSearch';
import UsersResults from '../components/UsersResults';
import GitHubClient from '../client/gitHubClient';
import _ from 'lodash';
import './SearchUsersScreen.css';

export default function SearchUsersScreen() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(5);
    const previousSearch = useRef(search);

    const searchUsers = async (search, page, pageSize) => {
        const data = await GitHubClient.searchUsers(search, page, pageSize);
        setUsers(data.items);
        setTotal(data.total_count);
    };

    useEffect(() => {
        const searchFunction = _.debounce(() => {searchUsers(search, page, pageSize)}, 2000, {leading:true, trailing:false});

        if (search.length === 0) {
            setPage(0);
        } else if (search.length > 2) {
            if (previousSearch.current !== search) { 
                previousSearch.current = search;
                setPage(0);
            }
            searchFunction();
        }
    }, [search, page, pageSize]);

    return (
        <div className="wrapper">
            <div className="search">
                <UsersSearch search={search} setSearch={setSearch}/>
            </div>
            <div className="results" >
                <UsersResults users={users} total={total} page={page} pageSize={pageSize} setPage={setPage} setPageSize={setPageSize}/>
            </div>
        </div>
    )
}
