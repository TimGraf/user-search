import GitHubClient from '../client/gitHubClient';

const searchUsersAction = (users, search, page, pageSize, total) => ({
    type: 'SEARCH_USERS',
    payload: {
        users,
        search,
        page,
        pageSize,
        total
    }
});

const resetAction = () => ({
    type: 'RESET',
    payload: {}
})

const searchUsers = (search, page, pageSize) => async dispatch => {
    const data = await GitHubClient.searchUsers(search, page, pageSize);
    dispatch(searchUsersAction(data.items, search, page, pageSize, data.total_count));
};

const reset = () => dispatch => {
    dispatch(resetAction());
};

export default { searchUsers, reset };