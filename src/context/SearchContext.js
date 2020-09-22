import React, { useState, createContext } from "react";

export const SearchContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const SearchContextProvider = props => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(5);

  return (
    <SearchContext.Provider value={[{users, setUsers, search, setSearch, page, setPage, pageSize, setPageSize, total, setTotal}]}>
      {props.children}
    </SearchContext.Provider>
  );
};