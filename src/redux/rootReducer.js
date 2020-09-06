export default (state = {}, { type, payload }) => {
    switch (type) {
        case 'SEARCH_USERS':
            return {
                ...state,
                users: payload.users,
                search: payload.search,
                page: payload.page,
                pageSize: payload.pageSize,
                total: payload.total
            };
        case 'RESET':
            return {
                ...state,
                users: [],
                search: '',
                page: 0,
                pageSize: 5,
                total: 0
            };
        default:
            return state;
    }
}