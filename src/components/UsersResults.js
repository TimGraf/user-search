import React, { useContext } from 'react'
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import UserRow from './UserRow';
import { SearchContext } from '../context/SearchContext';
import './UsersResults.css';

export default function UsersResults() {
    const [{users, page, setPage, pageSize, setPageSize, total}] = useContext(SearchContext);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        const newPageSize = parseInt(event.target.value);
        setPageSize(newPageSize);
        setPage(0);
    };

    return (
        <div className="user-table-container">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Avatar</TableCell>
                        <TableCell className="user-name-column">Name</TableCell>
                        <TableCell className="user-user-name-column">User Name</TableCell>
                        <TableCell className="user-bio-column">Bio</TableCell>
                        <TableCell># Repos</TableCell>
                        <TableCell># Followers</TableCell>
                        <TableCell># Following</TableCell>
                        <TableCell>GitHub Profile</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, index) => (
                            <UserRow key={index} userUrl={user.url}></UserRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                colSpan={8}
                                count={total || 0}
                                rowsPerPage={pageSize || 5}
                                page={page || 0}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    )
}
