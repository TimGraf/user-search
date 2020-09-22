import React from 'react';
import './App.css';
import SearchUsersScreen from './pages/SearchUsersScreen';
import { SearchContextProvider } from './context/SearchContext';

function App() {
  return (
    <div className="App">
      <SearchContextProvider>
        <SearchUsersScreen></SearchUsersScreen>
      </SearchContextProvider>
    </div>
  );
}

export default App;
