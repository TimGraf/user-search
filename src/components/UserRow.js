import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import GitHubIcon from '@material-ui/icons/GitHub';
import GitHubClient from '../client/gitHubClient';
import './UserRow.css';

export default function UserRow({userUrl}) {
    const [userData, setUserData] = useState();

    useEffect(() => {
        const getUserInfo = async () => {    
            const data = await GitHubClient.getUserInfo(userUrl);
            setUserData(data);
        }

        getUserInfo();
    }, [userUrl]);

    return (
        <TableRow className="user-table-row">
            <TableCell align="center">
                <Avatar alt={userData?.name} src={userData?.avatar_url}></Avatar>
            </TableCell>
            <TableCell>
                {userData?.name}
            </TableCell>
            <TableCell>
                {userData?.login}
            </TableCell>
            <TableCell>
                {userData?.bio}
            </TableCell>
            <TableCell>
                {userData?.public_repos}
            </TableCell>
            <TableCell>
                {userData?.followers}
            </TableCell>
            <TableCell>
                {userData?.following}
            </TableCell>
            <TableCell align="center">
                <Link href={userData?.html_url} target="_blank" rel="noreferrer">
                    <GitHubIcon />
                </Link>
            </TableCell>
        </TableRow>
    )
}
