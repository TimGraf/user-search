import React from 'react';
import { useSelector } from 'react-redux';
import UsersSearch from '../components/UsersSearch';
import UsersResults from '../components/UsersResults';
import './SearchUsersScreen.css';

export default function SearchUsersScreen() {
    const users = useSelector(state => state.users) || [];

    return (
        <div className="wrapper">
            <div className="search">
                <UsersSearch />
            </div>
            <div className="results" >
                <UsersResults users={users} />
            </div>
        </div>
    )
}
