import React from 'react';
import UsersSearchContainer from '../components/UsersSearchContainer';
import { SearchContextProvider } from '../context/SearchContext';
import './SearchUsersScreen.css';

export default function SearchUsersScreen() {
    return (
        <SearchContextProvider>
            <UsersSearchContainer></UsersSearchContainer>
        </SearchContextProvider>
    )
}
